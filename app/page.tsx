import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
  
      <div
       
        className="h-[calc(100vh-68px)] w-full relative overflow-hidden flex justify-center items-end"
      >
        <Image src="/CarPicture.jpg" alt="car picture" fill/>
      <div className="flex flex-col text-white items-center absolute bottom-15">
<h1 className="font-bold text-6xl mb-4">Find your perfect rental car</h1>
<p className="font-semibold text-2xl mb-10">Reliable and budget-friendly rentals for any journey</p>
<Link href="/catalog" className="w-69 h-11 text-white font-semibold text-base bg-sky-500 rounded-2xl flex items-center justify-center hover:bg-sky-700">View Catalog</Link>
</div>      
      </div>
 
  );
}
