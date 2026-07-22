import CarInfo from "@/app/components/car-info";
import RentalForm from "@/app/components/rental-form";
import { getCarById } from "@/app/lib/actions";
import { Car } from "@/app/lib/definitions";
import Image from "next/image";
import { notFound } from "next/navigation";

export default async function Page(props: {
  params: Promise<{ carId: string }>;
}) {
  const params = await props.params;
  const id = params.carId;
  const car = (await getCarById(id)) as Car;

  if (!car) {
    notFound();
  }

  return (
    <div className="grid grid-cols-[640px_1fr] gap-8">
      <div className="flex flex-col gap-8 flex-none">
        <Image
          width={640}
          height={512}
          alt="car photo"
          src={car.img}
          className="rounded-2xl flex-none"
        />
        <RentalForm id={id} />
      </div>
      <CarInfo car={car} />
    </div>
  );
}
