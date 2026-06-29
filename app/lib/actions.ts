import { BrandsAndPricesList, Car } from "./definitions";

const url=process.env.DATABASE_URL;



export async function getBrandsAndPricesList (){
    try{
    const res=await fetch(`${url}/cars/filters`);
    if(!res.ok){
        throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const data = await res.json() as BrandsAndPricesList;
    console.log(data); 
    return data;
} catch (err){
    console.error("Не удалось загрузить данные:", err);
}
}

export async function getCarsList (){
    try{
    const res=await fetch(`${url}/cars`);
    if(!res.ok){
        throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const data = await res.json() as Car[];
    console.log(data); 
    return data;
} catch (err){
    console.error("Не удалось загрузить данные:", err);
}
}

export async function getCarById (id:string){
    try{
    const res=await fetch(`${url}/cars/${id}`);
    if(!res.ok){
        throw new Error(`Ошибка HTTP: ${res.status}`);
    }
    const data = await res.json() as Car;
    console.log(data); 
    return data;
} catch (err){
    console.error("Не удалось загрузить данные:", err);
}
}