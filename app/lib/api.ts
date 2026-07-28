import {
  BrandsAndPricesList,
  Car,
  carsData,
  GetCarsParams,
} from "./definitions";

const url = process.env.NEXT_PUBLIC_DATABASE_URL;

export async function getBrandsAndPricesList() : Promise<BrandsAndPricesList>{
  try {
    const res = await fetch(`${url}/cars/filters`);
    if (!res.ok) {
      throw new Error(`Помилка HTTP: ${res.status}`);
    }
    const data = (await res.json()) as BrandsAndPricesList;
     return data;
  } catch (err) {
    throw new Error("Не вдалося завантажити дані:", err);
  }
}

export async function getCarsList({
  page = 1,
  perPage = 12,
  brand,
  price,
  minMileage,
  maxMileage,
}: GetCarsParams = {}): Promise<carsData> {
  try {
    const params = new URLSearchParams();
    params.append("page", page.toString());
    params.append("perPage", perPage.toString());

    if (brand) params.append("brand", brand);
    if (price) params.append("price", price);
    if (minMileage) params.append("minMileage", minMileage);
    if (maxMileage) params.append("maxMileage", maxMileage);

    const res = await fetch(`${url}/cars?${params.toString()}`);
    if (!res.ok) {
      throw new Error(`Помилка HTTP: ${res.status}`);
    }
    const data = (await res.json()) as carsData;
       return data;
  } catch (err) {
    throw new Error("Не вдалося завантажити дані:", err);
   
  }
}

export async function getCarById(id: string): Promise<Car | null> {
  try {
    const res = await fetch(`${url}/cars/${id}`);
    if (res.status === 404) {
      return null;
    }
    if (!res.ok) {
      throw new Error(`Помилка HTTP: ${res.status}`);
    }
    const data = (await res.json()) as Car;
     return data;
  } catch (err) {
    throw new Error("Не вдалося завантажити дані:", err);
  }
}