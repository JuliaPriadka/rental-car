'use client'

import clsx from "clsx";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

interface SelectProps {
  label: string;
  placeholder: string;
  isOpen: boolean;
  state: string|number;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  chooseState: Dispatch<SetStateAction<string>>;
  data:string[] | number[],

}

export default function Select({
  label,
  placeholder,
  isOpen,
  setIsOpen,
  state,
  chooseState,
  data,
}: SelectProps) {

  const selectRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      
      if (selectRef.current && !selectRef.current.contains(event.target as Node)) {
        setIsOpen(false); 
      }
    }

     document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="flex flex-col gap-2 ">
      <p className="text-slate-400 font-normal text-xs">{label}</p>
      <div className="relative " ref={selectRef}>
      <div className="w-51 h-11 flex items-center justify-between py-3 px-2 bg-white rounded-2xl">
        <p className="font-medium text-base">
          {state !== "" ? state : placeholder}
        </p>
        <MdOutlineKeyboardArrowDown
          className={clsx("w-4 h-4 cursor-pointer transition-transform duration-300 ease-in-out", isOpen && "rotate-180")}
          onClick={()=>setIsOpen(!isOpen)}
        />
        </div>
        {isOpen && (
          <ul className="absolute top-12 left-0 w-51 bg-white rounded-2xl py-3 px-2 h-68 overflow-hidden overflow-y-auto custom-select-scrollbar">
            {data.map((item, index) => (
              <li key={index} className="text-slate-400 hover:text-slate-950 font-medium text-base cursor-pointer" onClick={()=>{
                chooseState(String(item));
                setIsOpen(false)
              }}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
