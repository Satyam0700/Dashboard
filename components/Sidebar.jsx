"use client";

import { ArrowBigRight, X } from "lucide-react";
import { routes } from "../constants";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidebar = ({ open }) => {
  const pathname = usePathname()
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-dark-2 text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex justify-center items-center mb-10">
          <h1 className={"text-2xl font-normal mr-4"}>
            weframetech
          </h1>
          <div className="relative w-8 h-8 hidden max-md:flex" onClick={open}>
            <X className="mt-[7px]" color="#7879F1" />
          </div>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              onClick={open}
              href={route.href}
              key={route.href}
              className={`text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-[#6418C3] hover:bg-dark-1 rounded-lg transition",
            ${pathname === route.href ? "text-[#6418C3]" : "text-[#464366]"}`}
            >
              <div className={`flex items-center flex-1  `}>
                <route.icon className={`h-5 w-5 mr-5`} />
                <span className="">{route.label}</span>
              </div>
            </Link>
          ))}
        </div>

      <div className="px-2 md:mt-5 mt-20 2xl:mt-20 relative overflow-hidden py-4 blue-gradient rounded-lg flex flex-col gap-2 w-48">
        <Image src="/dot-2.png" width={22} height={29} />
        <h2 className="text-white font-bold text-xl">Increase your work with kanban</h2>
        <Image src="/arrow.png" width={24} height={11} />
        <div className="absolute top-14 left-28 rounded-full w-52 h-52 light-blue-gradient"/>
      </div>

      </div>

    </div>
  )
}

export default Sidebar