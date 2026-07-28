"use server";

import { z } from "zod";

const url = process.env.NEXT_PUBLIC_DATABASE_URL;


const FormSchema = z.object({
  name: z.string("Name should be a string").trim().min(1, "Name is required"),
  email: z.email("Incorrect email").trim(),
  comment: z.string("Comment should be a string").trim().min(5, "Comment is required"),
});

export type State = {
  success?: boolean;
  errors?: {
    name?: string[];
    email?: string[];
    comment?: string[];
  };
  message?: string | null;
  values?: {
    name?: string;
    email?: string;
    comment?: string;
  };
};

export async function rentCar(
  id: string,
  prevState: State,
  formData: FormData,
) {
    const rawValues = {
    name: formData.get("name") as string||"",
    email: formData.get("email") as string||"",
    comment: formData.get("comment") as string||"",
  };

  const validatedFields = FormSchema.safeParse(rawValues);

  if (!validatedFields.success) {
    return {
      success: false,
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing Fields. Failed to rent a car.",
      values: rawValues,
    };
  }

  try {
    const res = await fetch(`${url}/cars/${id}/booking-requests`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(validatedFields.data),
    });
    if (!res.ok) {
      throw new Error(`Помилка HTTP: ${res.status}`);
    }

    const data = await res.json();
    console.log(data);
    return { success: true, message: "Авто успішно орендовано!",values: { name: "", email: "", comment: "" } };
  } catch (err) {
    console.error("Не вдалося забронювати авто:", err);
    return { success: false, message: "Помилка сервера. Спробуйте пізніше." ,values: rawValues,};
  }
}
