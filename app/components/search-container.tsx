import {  getBrandsAndPricesList } from "../lib/actions";
import {BrandsAndPricesList} from "../lib/definitions"
import Search from "./search";

export default async function SearchContainer() {
  const brandsAndPricesList= await getBrandsAndPricesList() as BrandsAndPricesList;

  return <Search brands={brandsAndPricesList.brands} price={brandsAndPricesList.price}/>
};
