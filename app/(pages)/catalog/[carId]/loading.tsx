export default function Loading() {
  return (
    <div className="grid grid-cols-[640px_1fr] gap-8 animate-pulse">
      <div className="flex flex-col gap-8 flex-none">
        <div className="w-160 h-128 bg-gray-200 rounded-2xl flex-none"></div>
        <div className="h-106 rounded-2xl bg-white p-4">
          <div className="flex flex-col gap-2 mb-6">
            <p className="h-8 w-43 bg-gray-200"></p>
            <p className="h-5 w-full bg-gray-200"></p>
          </div>
          <div className="flex flex-col gap-6">
            <div className="h-12 w-full rounded-2xl bg-gray-200"></div>
            <div className="h-12 w-full rounded-2xl bg-gray-200"></div>
            <div className="h-12 w-full rounded-2xl bg-gray-200"></div>
          </div>
        </div>
      </div>
      <div className="h-242 rounded-2xl bg-white overflow-y-auto pt-8 pl-7 pr-7">
        <div className="h-8 w-full bg-gray-200 mb-2"></div>
        <div className="h-5 w-full bg-gray-200 mb-4"></div>
        <div className="h-8 w-full bg-gray-200 mb-8"></div>
        <div className="h-10 w-full bg-gray-200 mb-17"></div>
        <div className="mb-6">
          <p className="h-8 bg-gray-200 mb-5"></p>
          <div className="flex flex-col gap-4 ">
            <p className="h-5 bg-gray-200"></p>
            <p className="h-5 bg-gray-200"></p>
            <p className="h-5 bg-gray-200"></p>
          </div>
        </div>
        <div className=" pt-6 pb-6 border-t border-b border-solid border-gray-200">
          <p className="h-8 bg-gray-200 mb-5"></p>
          <div className="flex flex-col gap-4 ">
            <p className="h-5 bg-gray-200"></p>
            <p className="h-5 bg-gray-200"></p>
            <p className="h-5 bg-gray-200"></p>
          </div>
        </div>
        <div className="mt-6">
          <p className="h-8 bg-gray-200 mb-5"></p>
          <div className="flex flex-col gap-4 ">
            <p className="h-5 bg-gray-200"></p>
            <p className="h-5 bg-gray-200"></p>
            <p className="h-5 bg-gray-200"></p>
          </div>
        </div>
      </div>
    </div>
  );
}
