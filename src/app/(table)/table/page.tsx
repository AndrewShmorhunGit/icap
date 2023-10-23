import { PageContainer } from "@/components/containers/PageContainer";
import { Table } from "@/components/table/Table";
import { TDataResponse } from "@/types";
import { httpTabletsGET } from "@/utils/http.server";

export default async function TablePage() {
  const data: TDataResponse = await httpTabletsGET();
  const { results } = data;

  return (
    <PageContainer>
      <Table persons={results} />
    </PageContainer>
  );
}
