"use client";

import { useEffect, useMemo, useState } from "react";
import Select from "./select";
import { BrandsAndPricesList } from "@/app/lib/definitions";
import PriceInput from "./price-input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Search({ brands, price }: BrandsAndPricesList) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [chosenBrand, setChosenBrand] = useState("");
  const [chosenPrice, setChosenPrice] = useState("");
  const [mileageFrom, setMileageFrom] = useState("");
  const [mileageTo, setMileageTo] = useState("");
  const [brandPopupIsOpen, setBrandPopupIsOpen] = useState(false);
  const [pricePopupIsOpen, setPricePopupIsOpen] = useState(false);

  useEffect(() => {
    setChosenBrand(searchParams.get('brand') || '');
    setChosenPrice(searchParams.get('price') || '');
    setMileageFrom(searchParams.get('minMileage') || '');
    setMileageTo(searchParams.get('maxMileage') || '');
  }, [searchParams]);

  const handleSearchClick = () => {
    const params = new URLSearchParams(searchParams);
    if (chosenBrand !== "") {
      params.set("brand", chosenBrand);
    }
    if (chosenPrice !== "") {
      params.set("price", chosenPrice);
    }
    if (mileageFrom !== "") {
      params.set("minMileage", mileageFrom);
    }
    if (mileageTo !== "") {
      params.set("maxMileage", mileageTo);
    }
     router.push(`${pathname}?${params.toString()}`);
  };

  const handleClearSearchClick = () => {
    const params = new URLSearchParams(searchParams);
    setChosenBrand("");
    setChosenPrice("");
    setMileageFrom("");
    setMileageTo("");
    params.delete("brand");
    params.delete("price");
    params.delete("minMileage");
    params.delete("maxMileage");
    router.push(pathname);
  };

  const priceValues = useMemo(() => {
    const { min, max } = price;
    const result: number[] = [];

    for (let i = min; i <= max; i += 10) {
      result.push(i);
    }

    return result;
  }, [price]);

  return (
    <div className="flex gap-4 justify-center items-end mb-11">
      <Select
        placeholder="Choose a brand"
        label="Car brand"
        isOpen={brandPopupIsOpen}
        setIsOpen={setBrandPopupIsOpen}
        state={chosenBrand}
        chooseState={setChosenBrand}
        data={brands}
      />
      <Select
        placeholder="Choose a price"
        label="Price/ 1 hour"
        isOpen={pricePopupIsOpen}
        setIsOpen={setPricePopupIsOpen}
        state={chosenPrice}
        chooseState={setChosenPrice}
        data={priceValues}
      />
      <div className="flex justify-center">
        <PriceInput
          inputName="from"
          state={mileageFrom}
          setState={setMileageFrom}
          placeholder="From"
        />
        <PriceInput
          inputName="to"
          state={mileageTo}
          setState={setMileageTo}
          placeholder="To"
        />
      </div>
      <div className="relative">
        <button
          type="button"
          className="w-39 h-11 text-center text-white font-semibold text-base bg-sky-500 rounded-2xl  hover:bg-sky-700 cursor-pointer"
          onClick={handleSearchClick}
        >
          Search
        </button>
        <button
          type="button"
          className="absolute top-9 left-1/2 -translate-x-1/2 translate-y-1/2 whitespace-nowrap text-slate-400 font-medium text-base cursor-pointer"
          onClick={handleClearSearchClick}
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
