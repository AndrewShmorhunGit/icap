import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

export default async function Auth() {
  const user = await currentUser();

  if (user) {
    redirect("/table");
  }

  redirect("/");
}
