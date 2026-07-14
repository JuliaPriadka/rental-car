"use client";

import { useActionState, useState } from "react";
import { rentCar, State } from "../lib/actions";
import clsx from "clsx";
import { AiOutlineExclamationCircle } from "react-icons/ai";

export default function RentalForm({ id }: string) {
  const initialState: State = { message: null, errors: {} };
  const [state, formAction] = useActionState(
    (prevState: any, formData: FormData) => rentCar(id, prevState, formData),
    { success: false, message: '' }
  );
  
  

  return state?.success ? (
    <div className="h-106 rounded-2xl bg-white flex items-center justify-center">
      <p className="font-semibold text-xl">The car is succesfully booked!</p>
    </div>
  ) : (
    <div className="h-106 rounded-2xl bg-white p-4">
      <div className="flex flex-col gap-2 mb-6">
        <h3 className="font-semibold text-xl">Book your car now</h3>
        <p className="text-slate-400 text-base font-medium">
          Stay connected! We are always ready to help you.
        </p>
      </div>
      <form action={formAction} className="flex flex-col gap-6">
        <div className="relative">
          <input
            type="text"
            name="name"
            id="name"
            className={clsx(
              "h-12 p-3 w-full rounded-2xl text-base font-medium placeholder:text-slate-400 truncate",
              state?.errors?.name
                ? "bg-pink-100 pt-3 pr-10 pb-3 pl-3 border border-[#EC383B]"
                : "bg-neutral-100 ",
            )}
            placeholder="Name*"
          />
          {state?.errors?.name && (
            <AiOutlineExclamationCircle className="absolute right-3 top-3 w-6 h-6 text-[#EC383B]" />
          )}
          {state?.errors?.name && (
            <p className="absolute top-0 left-3  -translate-y-1/2 text-[#EC383B] bg-pink-100 px-2 font-normal text-xs rounded-2xl">
              Name*
            </p>
          )}
          {state?.errors?.name &&
            state.errors.name.map((error: string) => (
              <p
                className="absolute left-0 top-12 font-normal text-xs text-[#EC383B]"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
        <div className="relative">
          <input
            type="email"
            name="email"
            id="email"
            className={clsx(
              "h-12 p-3 w-full rounded-2xl text-base font-medium placeholder:text-slate-400 truncate",
              state?.errors?.email
                ? "bg-pink-100 pt-3 pr-10 pb-3 pl-3 border border-[#EC383B]"
                : "bg-neutral-100 ",
            )}
            placeholder="Email*"
          />
          {state?.errors?.email && (
            <AiOutlineExclamationCircle className="absolute right-3 top-3 w-6 h-6 text-[#EC383B]" />
          )}
          {state?.errors?.email && (
            <p className="absolute top-0 left-3  -translate-y-1/2 text-[#EC383B] bg-pink-100 px-2 font-normal text-xs rounded-2xl">
              Email*
            </p>
          )}
          {state?.errors?.email &&
            state.errors.email.map((error: string) => (
              <p
                className="absolute left-0 top-12 font-normal text-xs text-[#EC383B]"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
        <div className="relative">
          <textarea
            name="comment"
            id="comment"
            className={clsx(
              "h-22 p-3 w-full rounded-2xl text-base font-medium placeholder:text-slate-400 resize-none truncate",
              state?.errors?.comment
                ? "bg-pink-100 pt-3 pr-10 pb-3 pl-3 border border-[#EC383B]"
                : "bg-neutral-100 ",
            )}
            placeholder="Comment*"
          />
          {state?.errors?.comment && (
            <AiOutlineExclamationCircle className="absolute right-3 top-3 w-6 h-6 text-[#EC383B]" />
          )}
          {state?.errors?.comment && (
            <p className="absolute top-0 left-3  -translate-y-1/2 text-[#EC383B] bg-pink-100 px-2 font-normal text-xs rounded-2xl">
              Comment*
            </p>
          )}
          {state?.errors?.comment &&
            state.errors.comment.map((error: string) => (
              <p
                className="absolute left-0 top-22 font-normal text-xs text-[#EC383B]"
                key={error}
              >
                {error}
              </p>
            ))}
        </div>
        <button
          type="submit"
          className="bg-sky-500 h-11 text-white rounded-2xl cursor-pointer"
        >
          Send
        </button>
      </form>
    </div>
  );
}
