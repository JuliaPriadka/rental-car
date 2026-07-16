'use client';

import { getCarsList } from "@/app/lib/actions";
import {TableProps } from "@/app/lib/definitions";
import Card from "./card";
import { useInfiniteQuery } from '@tanstack/react-query';

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
    <div className="grid grid-cols-4 gap-8 overflow-y-auto">
        {cars.map(item=>(
          
            <Card 
            key={item.id}
            car={item}/>
            
            ))}
    </div>
    {(cars.length >0 && hasNextPage )&& (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage || isFetchingNextPage}
            className="w-39 h-11 flex items-center justify-center rounded-2xl border border-solid border-sky-500 shadow-md hover:border-sky-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition"
          >
            {isFetchingNextPage
              ? 'Loading...'
              : 'Load more'
             }
          </button>
        </div>
      )}
    </>
    )
};
