import { CiLocationOn, CiCircleCheck } from "react-icons/ci";
import { BsCalendar2Week, BsFuelPump } from "react-icons/bs";
import { formatCarType } from "../lib/utils";
import { IoCarSportOutline } from "react-icons/io5";
import { GiRoad } from "react-icons/gi";
import { GoGear } from "react-icons/go";
import { Car } from "../lib/definitions";
import List from "./list";

export default async function CarInfo({ car }: Car) {
  return (
    <div className="h-242 rounded-2xl pt-8 pl-7 pr-7 bg-white overflow-y-auto">
      <div className="flex gap-4 mb-2">
        <h2 className="text-2xl font-semibold">{`${car.brand} ${car.model}, ${car.year}`}</h2>
        <p></p>
      </div>
      <div className="flex gap-1 items-center mb-4">
        <CiLocationOn className="w-4 h-4" />
        <p className="font-medium text-base">{`${car.location.city}, ${car.location.country}`}</p>
      </div>
      <p className="text-blue-600 text-2xl font-semibold mb-8">{`$${car.rentalPrice}`}</p>
      <p className="font-medium text-base mb-17">{car.description}</p>
      <div>
        <div className="mb-6">
          <h3 className="font-semibold text-xl">Rental Conditions: </h3>
          <List data={car.rentalConditions} />
        </div>
        <div className=" pt-6 pb-6 border-t border-b border-solid border-gray-200">
          <h3 className="font-semibold text-xl">Car Specifications: </h3>
          <ul className="flex flex-col gap-4 text-base font-medium">
            <li className="flex gap-2 items-center">
              <BsCalendar2Week className="w-4 h-4" />
              <p>{`Year: ${car.year}`}</p>
            </li>
            <li className="flex gap-2 items-center">
              <IoCarSportOutline className="w-4 h-4" />
              <p>{`Type: ${formatCarType(car.type)}`}</p>
            </li>
            <li className="flex gap-2 items-center">
              <BsFuelPump className="w-4 h-4" />
              <p>{`Fuel Consumption: ${car.fuelConsumption}`}</p>
            </li>
            <li className="flex gap-2 items-center">
              <GoGear className="w-4 h-4" />
              <p>{`Engine: ${car.engine}`}</p>
            </li>
            <li className="flex gap-2 items-center">
              <GiRoad className="w-4 h-4" />
              <p>{`Mileage: ${car.mileage} km`}</p>
            </li>
          </ul>
        </div>
        <div className="mt-6">
          <h3 className="font-semibold text-xl">Features: </h3>
          <List data={car.features} />
        </div>
      </div>
    </div>
  );
}
