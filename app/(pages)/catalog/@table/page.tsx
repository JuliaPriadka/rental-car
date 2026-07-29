import Table from "@/app/components/table";

export default async function TableContainer(
    props: {
  searchParams?: Promise<{
    brand?: string;
    price?: string;
    minMileage?:string;
    maxMileage?:string;
  }>;
}
) {
    const filters = await props.searchParams;

    return <Table filters={filters?? {}}/>
    
};


