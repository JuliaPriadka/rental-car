import {  getBrandsAndPricesList } from "@/app/lib/api";
import {BrandsAndPricesList} from "@/app/lib/definitions"
import Search from "@/app/components/search";

export default async function SearchContainer() {
  const brandsAndPricesList= await getBrandsAndPricesList() as BrandsAndPricesList;

  return <Search brands={brandsAndPricesList.brands} price={brandsAndPricesList.price}/>
};
