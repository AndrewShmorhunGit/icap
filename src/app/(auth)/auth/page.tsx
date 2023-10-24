// import { prisma } from "@/utils/db";
import { FunctionalClientComponent } from "@/components/app/FunctionalCLientComponent";
import { TDataResponse, TPerson } from "@/types";
import { httpTabletsGET } from "@/utils/http.server";
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Auth() {
  const user = await currentUser();

  if (user) {
    // const response = await apiAuth();
    const data: TDataResponse = await httpTabletsGET();
    const { results } = data;
    // redirect("/table");
    return <FunctionalClientComponent data={results} />;
  }

  redirect("/");
}
