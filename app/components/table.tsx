import { getCarsList } from "@/app/lib/actions";
import { carsData } from "@/app/lib/definitions";
import Card from "./card";

export default async function Table() {
    const carsList=await getCarsList() as carsData;

    return (
    <div className="grid grid-cols-4 gap-8 overflow-y-auto">
        {carsList.cars.map(item=>(
          
            <Card 
            key={item.id}
            car={item}/>
            
            ))}
    </div>
    )
};
