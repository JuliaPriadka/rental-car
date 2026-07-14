export function SelectSkeleton(){
    return (
        <div className="flex flex-col gap-2 ">
            <p className="h-4 w-14 bg-gray-200"></p>
            <p className="h-11 w-51 bg-gray-200 rounded-2xl"></p>
        </div>
    )
}

export function CarCardSkeleton(){
    return (
        <div className="w-69 bg-white p-4 rounded-2xl">
            <div className="w-61 h-67 bg-gray-200 rounded-2xl mb-4"></div>
            <p className="mb-2 h-5 bg-gray-200"></p>
            <p className="mb-6 h-13 bg-gray-200 rounded-2xl"></p>
            <p className="h-11 rounded-xl bg-gray-200"></p>
        </div>
    )
}