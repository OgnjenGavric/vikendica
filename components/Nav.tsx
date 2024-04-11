/** @format */
"use client";

import Image from "next/image";
import { useState } from "react";

import Link from "next/link";

import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import { useAutoAnimate } from "@formkit/auto-animate/react";


export default function Nav() {
  const [animationParent] = useAutoAnimate();
  const [isSideMenuOpen, setSideMenue] = useState(false);
  function openSideMenu() {
    setSideMenue(true);
  }
  function closeSideMenu() {
    setSideMenue(false);
  }

  return (
    <div className="mx-auto flex  w-full max-w-7xl justify-between px-4 py-5 text-sm">
      {/* left side  */}
      <section ref={animationParent} className="flex items-center gap-10">
        {/* logo */}
        <div className='flex justify-center items-center'>
          <Image src="/logo-ml.svg" alt="logo M&L" width={40} height={40} /><span className='bold-32 text-green-70 lg:bold-40'><em className='text-green-30'>M&L</em><small>vikendica</small></span>
        </div>
        {isSideMenuOpen && <MobileNav closeSideMenu={closeSideMenu} />}
        <div className="hidden md:flex items-center gap-4 transition-all">
          <ul className="hidden h-full gap-12 lg:flex">
            <li>
              <Link href="/" className="relative uppercase group px-2 py-3 flexCenter cursor-pointer pb-1.5 transition-all bold-18 text-green-70 lg:bold-20 hover:underline hover:text-green-30">
                Početna
              </Link>
            </li>
            <li>
              <Link href="/#galerija" className="relative uppercase group px-2 py-3 flexCenter cursor-pointer pb-1.5 transition-all bold-18 text-green-70 lg:bold-20 hover:underline hover:text-green-30">
                Galerija
              </Link> 
            </li>
            <li>
              <Link href="/#kontakt" className="relative uppercase group px-2 py-3 flexCenter cursor-pointer pb-1.5 transition-all bold-18 text-green-70 lg:bold-20 hover:underline hover:text-green-30">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>
      </section>

      {/* right side data */}
      <section className=" hidden md:flex   items-center gap-8 ">
        <button className="h-fit rounded-xl border-2 border-gray-900 px-4 py-2 text-gray-900 transition-all hover:text-gray-500 hover:border-gray-500">
          Register
        </button>
      </section>

      <FiMenu
        onClick={openSideMenu}
        className="cursor-pointer text-4xl md:hidden"
      />
    </div>
  );
}

function MobileNav({ closeSideMenu }: { closeSideMenu: () => void }) {
  return (
    <div className="z-50 fixed left-0 top-0 flex h-full min-h-screen w-full justify-end bg-black/60 md:hidden">
      <div className="z-50 h-full w-[65%] bg-white px-4 py-4">
        <section className="flex justify-end">
          <AiOutlineClose
            onClick={closeSideMenu}
            className="cursor-pointer text-4xl "
          />
        </section>
        <div className=" flex flex-col text-base  gap-2 transition-all">
          <ul className="h-full gap-12 lg:flex">
            <li>
              <Link 
                href="/" 
                onClick={closeSideMenu}
                className="relative uppercase group px-2 py-3 flexCenter cursor-pointer pb-1.5 transition-all bold-18 text-green-70 lg:bold-20 hover:underline hover:text-green-30">
                Početna
              </Link>
            </li>
            <li>
              <Link 
                href="/#galerija" 
                onClick={closeSideMenu}
                className="relative uppercase group px-2 py-3 flexCenter cursor-pointer pb-1.5 transition-all bold-18 text-green-70 lg:bold-20 hover:underline hover:text-green-30">
                Galerija
              </Link> 
            </li>
            <li>
              <Link 
                href="/#kontakt" 
                onClick={closeSideMenu}
                className="relative uppercase group px-2 py-3 flexCenter cursor-pointer pb-1.5 transition-all bold-18 text-green-70 lg:bold-20 hover:underline hover:text-green-30">
                Kontakt
              </Link>
            </li>
          </ul>
        </div>

        <section className="  flex  flex-col   gap-8  mt-4 items-center">
          <button className="w-full  max-w-[200px]  rounded-xl border-2 border-neutral-400 px-4 py-2 text-neutral-400 transition-all hover:border-black hover:text-black/90">
            Register
          </button>
        </section>
      </div>
    </div>
  );
}

