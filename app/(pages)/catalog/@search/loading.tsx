import { SelectSkeleton } from "@/app/lib/skeletons";


export default function Loading() {
    return (
        <div className="animate-pulse">
        <div className="flex gap-4 justify-center items-end mb-11">
            <SelectSkeleton/>
            <SelectSkeleton/>
            <div className="flex flex-col gap-2" >
                <p className="h-4 w-23 bg-gray-200"></p>
                <p className="h-11 w-80 bg-gray-200 rounded-2xl"></p>
            </div>
            <div className="relative">
                <p className="w-39 h-11  bg-gray-200 rounded-2xl"></p>
                <p className="absolute top-12 left-0 bg-gray-200 w-39 h-5 rounded-xl"></p>
            </div>
        </div>
        </div>
    )
};
