'use server';

import { BrandsAndPricesList, Car, carsData, GetCarsParams } from "./definitions";
import { z } from 'zod';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';

const url=process.env.DATABASE_URL;



export async function getBrandsAndPricesList (){
    try{
    const res=await fetch(`${url}/cars/filters`);
    if(!res.ok){
        throw new Error(`Помилка HTTP: ${res.status}`);
    }
    const data = await res.json() as BrandsAndPricesList;
    console.log(data); 
    return data;
} catch (err){
    console.error("Не вдалося завантажити дані:", err);
}
}

export async function getCarsList ({page = 1,
  perPage = 12,
  brand,
  price,
  minMileage,
  maxMileage,
}: GetCarsParams = {}){
    try{
        const params = new URLSearchParams();
    params.append('page', page.toString());
    params.append('perPage', perPage.toString());
    
    if (brand) params.append('brand', brand);
    if (price) params.append('price', price);
    if (minMileage) params.append('minMileage', minMileage);
    if (maxMileage) params.append('maxMileage', maxMileage);

    const res=await fetch(`${url}/cars?${params.toString()}`);
    if(!res.ok){
        throw new Error(`Помилка HTTP: ${res.status}`);
    }
    const data = await res.json() as carsData;
    console.log(data); 
    return data;
} catch (err){
    console.error("Не вдалося завантажити дані:", err);
    throw err;
}
}

export async function getCarById (id:string){
    try{
    const res=await fetch(`${url}/cars/${id}`);
    if(!res.ok){
        throw new Error(`Помилка HTTP: ${res.status}`);
    }
    const data = await res.json() as Car;
    console.log(data); 
    return data;
} catch (err){
    console.error("Не вдалося завантажити дані:", err);
}
}

const FormSchema=z.object({
    name:z.string("Name should be a string").trim().min(1,"Name is required"),
    email:z.email("Incorrect email").trim(),
    comment:z.string("Comment should be a string").min(5,"Comment is required"),
});

export type State = {
  errors?: {
    name?: string[];
    email?: string[];
    comment?: string[];
  };
  message?: string | null;
};

export async function rentCar (id: string, prevState: State, formData: FormData){
    const validatedFields = FormSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    comment: formData.get('comment'),
  });

if (!validatedFields.success) {
        return {
            success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to rent a car.',
      
    };
  }

  try{
    const res=await fetch(`${url}/cars/${id}/booking-requests`,{
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json;charset=utf-8' 
  },
  body: JSON.stringify(validatedFields.data) 
});
    if(!res.ok){
        throw new Error(`Помилка HTTP: ${res.status}`);
    }

    const data = await res.json();
    console.log(data); 
    return { success: true, message: 'Авто успішно орендовано!' };
} catch (err){
    console.error("Не вдалося забронювати авто:", err);
    return { success: false, message: 'Помилка сервера. Спробуйте пізніше.' };
}

}

