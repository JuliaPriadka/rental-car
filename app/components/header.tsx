"use client";

import Image from "next/image";
import NavLink from "@/app/components/nav-link";
import { usePathname } from "next/navigation";
import { manrope } from "@/app/lib/fonts";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className="w-full h-17 flex items-center justify-between px-30 bg-white">
      <Image src="/RentalCar.png" width={101} height={16} alt="logo" />
      <div className="flex items-center justify-center gap-8">
        {pathname === "/" ? (
          <p
            className={`${manrope.className} font-medium text-base text-sky-500`}
          >
            Home
          </p>
        ) : (
          <NavLink pageLink="/">
            Home
          </NavLink>
        )}
        {pathname === "/catalog" ?(          <p
            className={`${manrope.className} font-medium text-base text-sky-500`}
          >
            Catalog
          </p>):(
        <NavLink pageLink="/catalog">
          Catalog
        </NavLink>
        )}
      </div>
    </header>
  );
}
