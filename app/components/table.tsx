"use client";

import { getCarsList } from "@/app/lib/api";
import { TableProps } from "@/app/lib/definitions";
import Card from "./card";
import { useInfiniteQuery } from "@tanstack/react-query";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { CarCardSkeleton } from "../lib/skeletons";

const LIMIT = 12;

export default function Table({ filters }: TableProps) {
  const router = useRouter();
  const pathname = usePathname();

  const handleResetFilters = () => {
    router.push(pathname);
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status,isError, refetch,} =
    useInfiniteQuery({
      queryKey: ["cars", filters],

      queryFn: ({ pageParam = 1 }) =>
        getCarsList({
          page: pageParam,
          perPage: LIMIT,
          ...filters,
        }),

      initialPageParam: 1,

      getNextPageParam: (lastPage) => {
        if (!lastPage || typeof lastPage.page === "undefined") {
          return undefined;
        }
        const { page, totalPages } = lastPage;

        return page < totalPages ? page + 1 : undefined;
      },
    });

  const cars = data?.pages.flatMap((page) => page?.cars || []) || [];

  return (
    <>
          {status==="pending" && (
        <div className="animate-pulse grid grid-cols-4 gap-8 grid-rows-3">
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                    <CarCardSkeleton/>
                           
                </div>
      )}
      {isError&&(<div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">Something went wrong</h2>
      <button
        className="mt-4 rounded-md bg-sky-500 px-4 py-2 text-xl text-white hover:bg-sky-700"
        onClick={
         
          () => refetch()
        }
      >
        Try again
      </button>
    </div>)}
      {(!isError&&cars.length > 0) && (
        <div className="grid grid-cols-4 gap-8 overflow-y-auto">
          {cars.map((item) => (
            <Card key={item.id} car={item} />
          ))}
        </div>
      ) } 

      {(!isError&&cars.length===0&&status!=="pending")&&(
        <div className="flex flex-col gap-10 items-center">
          <Image
            height={388}
            width={413}
            src="/noCarsFound.png"
            alt="cars not found image"
          />
          <div className="flex flex-col gap-4 w-88 text-center">
            <h2 className="font-semibold text-2xl">No cars found</h2>
            <p className="font-medium text-base">
              We couldn`t find any cars that match your current filters. Try
              changing your search criteria or reset the filters.
            </p>
          </div>
          <button
            onClick={() => handleResetFilters()}
            className="w-39 h-11 flex items-center justify-center rounded-2xl border border-solid border-sky-500 shadow-md hover:border-sky-700 disabled:bg-gray-300 transition cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
      {(!isError&&cars.length > 0 && hasNextPage) && (
        <button
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage || isFetchingNextPage}
          className="w-39 h-11 flex items-center justify-center mt-8 rounded-2xl border border-solid border-sky-500 shadow-md hover:border-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition ml-auto mr-auto"
        >
          {isFetchingNextPage ? "Loading..." : "Load more"}
        </button>
      )}
    </>
  );
}
