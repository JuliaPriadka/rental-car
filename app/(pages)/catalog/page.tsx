import SearchContainer from "@/app/components/search-container";
import Table from "@/app/components/table";



export default async function Page(props: {
  searchParams?: Promise<{
    brand?: string;
    price?: string;
    minMileage?:string;
    maxMileage?:string;
  }>;
}) {
  
  
    return (
      <>
        <SearchContainer/>
        <Table/>
        </>
    )
};
