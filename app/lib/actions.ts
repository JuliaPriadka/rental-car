const url=process.env.DATABASE_URL;

export interface PriceProps{
            min:number,
        max:number
}

export interface BrandsAndPricesList{
    brands:string[],
    price:PriceProps
}

export async function getBrandsAndPricesList (){
    try{
    const res=await fetch(`${url}`);
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