'use client';

import { getCarsList } from "@/app/lib/actions";
import {TableProps } from "@/app/lib/definitions";
import Card from "./card";
import { useInfiniteQuery } from '@tanstack/react-query';
import Image from "next/image";

const LIMIT = 12;

export default function Table({filters}: TableProps) {
    const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery({
    queryKey: ['cars', filters], 
    
    queryFn: ({ pageParam = 1 }) => 
      getCarsList({
        page: pageParam,
        perPage: LIMIT,
        ...filters,
      }),
    
    initialPageParam: 1,
    
    getNextPageParam: (lastPage) => {
        if (!lastPage || typeof lastPage.page === 'undefined') {
    return undefined;
  }
      const { page, totalPages } = lastPage;
      
      return page < totalPages ? page + 1 : undefined;
    },
  });

  if (status === 'pending') return <div className="mt-6 text-center">Загрузка данных...</div>;
  if (status === 'error') return <div className="mt-6 text-red-500 text-center">Ошибка при загрузке</div>;

 const cars = data?.pages.flatMap((page) => page?.cars || []) || [];

    return (
        <>
   {cars.length>0?( <div className="grid grid-cols-4 gap-8 overflow-y-auto">
        {cars.map(item=>(
          
            <Card 
            key={item.id}
            car={item}/>
            
            ))}
    </div>):
    (
              <div className="flex flex-col gap-10 items-center">
                <Image height={388} width={413} src="/noCarsFound.png" alt="cars not found image"/>
                <div className="flex flex-col gap-4 w-88 text-center">
                  <h2 className="font-semibold text-2xl">No cars found</h2>
                  <p className="font-medium text-base">We couldn`t find any cars that match your current filters. Try changing your search criteria or reset the filters.</p>
                </div>
                <button
            // onClick={() => fetchNextPage()}
          
            className="w-39 h-11 flex items-center justify-center rounded-2xl border border-solid border-sky-500 shadow-md hover:border-sky-700 disabled:bg-gray-300 transition cursor-pointer"
          >
           Reset filters
          </button>
              </div>
            )}
    {(cars.length >0 && hasNextPage )&& (
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="w-39 h-11 flex items-center justify-center mt-8 rounded-2xl border border-solid border-sky-500 shadow-md hover:border-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            {isFetchingNextPage
              ? 'Loading...'
              : 'Load more'
             }
          </button>
      )}
    </>
    )
};
