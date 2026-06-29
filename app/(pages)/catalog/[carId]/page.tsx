import CarInfo from "@/app/components/car-info";
import { getCarById } from "@/app/lib/actions";
import Image from "next/image";

export default async function Page(props: { params: Promise<{ carId: string }> }) {
  const params = await props.params;
  const id = params.carId;
   const car = await getCarById(id)

    return (
        <div className="flex gap-8">
<div className="w-160 flex flex-col gap-8">
    <Image width={640} height={512} alt="car photo" src={car.img} className="rounded-2xl"/>
</div>
<CarInfo car={car}/>
        </div>
    )
};
