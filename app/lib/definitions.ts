export interface PriceProps {
  min: number;
  max: number;
}

export interface BrandsAndPricesList {
  brands: string[];
  price: PriceProps;
}

export interface Car {
  id: string;
  year: number;
  brand: string;
  model: string;
  type: string;
  img: string;
  description: string;
  fuelConsumption: number;
  engine: string;
  rentalPrice: string;
  rentalCompany: string;
  rentalConditions: string[];
  mileage: number;
  stockNumber: number;
  features: string[];
  location: {
    country: string;
    city: string;
    address: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface carsData{
    cars:Car[],
    totalCars: number,
  totalPages: number,
   page: number,
  perPage: number,
}

export interface GetCarsParams {
  page?: number;
  perPage?: number;
  brand?: string;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
}

export interface TableProps {
  filters: {
    brand?: string;
    price?: string;
    minMileage?: string;
    maxMileage?: string;
  };
}
