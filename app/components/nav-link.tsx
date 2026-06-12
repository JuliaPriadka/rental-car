import Link from "next/link";
import React from "react";

export interface navLinkProps {
children:React.ReactNode,
pageLink:string,
} 

export default function NavLink({children,pageLink}:navLinkProps) {
    return (
<Link href={pageLink} className="text-slate-950 font-medium text-base hover:text-sky-700 outline-none">{children}</Link>
    )
};
