import Image from "next/image";
import { Car } from "../lib/definitions";
import { formatCarType } from "@/app/lib/utils";
import Link from "next/link";

export default function Card({ car }: Car) {
  return (
    <div className="w-69 bg-white p-4 rounded-2xl">
      <Image
        width={244}
        height={268}
        src={car.img}
        alt="car image"
        className=" rounded-2xl mb-4"
      />
      <div className="flex justify-between font-medium text-base mb-2">
        <p className="w-55 h-6 truncate">
          {car.brand} <span className="text-sky-600">{car.model}</span>,{" "}
          {car.year}
        </p>
        <p>${car.rentalPrice}</p>
      </div>
      <div className="h-13 bg-neutral-100 p-2 mb-8 font-normal text-xs rounded-2xl">
        <div className="flex mb-1">
          <p className="pl-1.5 pr-1.5 border-r border-gray-300 ">
            {car.location.city}
          </p>
          <p className="pl-1.5 pr-1.5 border-r border-gray-300 ">
            {car.location.country}
          </p>
          <p className="pl-1.5 pr-1.5 border-r border-gray-300 truncate">
            {car.rentalCompany}
          </p>
        </div>
        <div className="flex">
          <p className="pl-1.5 pr-1.5 border-r border-gray-300 whitespace-nowrap">
            {formatCarType(car.type)}
          </p>
          <p className="pl-1.5 pr-1.5 whitespace-nowrap">{car.mileage} km</p>
        </div>
      </div>
      <Link
        href={`/catalog/${car.id}`}
        target="_blank"
        rel="noopener noreferrer"
        className="h-11 bg-sky-500 w-full text-white font-semibold text-base flex items-center justify-center rounded-xl"
      >
        Read more
      </Link>
    </div>
  );
}
