'use client'

import clsx from "clsx";
import { Dispatch, SetStateAction } from "react";

interface PriceInputProps extends React.InputHTMLAttributes<HTMLInputElement>{
    inputName:string,
    state:string,
    setState:Dispatch<SetStateAction<string>>,
}

export default function PriceInput({inputName,state,setState,...rest}:PriceInputProps) {
    return (
        <div className="flex flex-col gap-2">
            <label htmlFor="inputName" className="text-slate-400 font-normal text-xs">Сar mileage / km</label>
            <input {...rest} type="number" step="1" name="inputName" id="inputName" className={clsx("w-40 h-11 bg-white font-medium text-base text-slate-950 py-3 px-2 outline-none placeholder:text-slate-950",inputName==="from" ? "rounded-l-2xl border-r border-neutral-100":"rounded-r-2xl border-l border-neutral-100")} value={state} 
            onChange={(e)=>setState(e.target.value)}/>
        </div>
    )
};
