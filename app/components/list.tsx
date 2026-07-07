import { CiCircleCheck } from "react-icons/ci";

export default function List({data}:string[]) {
    return (
        <ul className="flex flex-col gap-4 text-base font-medium ">
                  {data.map((item, index) => (
                    <li key={index} className="flex gap-2 items-center">
                      <CiCircleCheck className="w-4 h-4" />
                      <p>{item}</p>
                    </li>
                  ))}
                </ul>
    )
    
};
