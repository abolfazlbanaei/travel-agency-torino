"use client";
import { sidebarContext } from "@/provider/SidebarContextProvider";
import Image from "next/image";
import React, { useContext, useState } from "react";
import airplane from "@/images/icons/airplane2.svg";
import homeG from "@/images/icons/home3G.svg";
import home from "@/images/icons/home3.svg";

import phone from "@/images/icons/phone.svg";
import sound from "@/images/icons/sound.svg";
import { useRouter } from "next/navigation";

function SidbarMenu() {
  const { showSidebar, setShowSidebar } = useContext(sidebarContext);
  const router = useRouter();
  return (
    <>
      <div
        className={`bg-black/30 fixed ${showSidebar === false && "hidden"} z-20 w-full h-full mt-[-80px]`}
        onClick={() => setShowSidebar(false)}
      ></div>
      <div
        className="h-full w-0 fixed z-[21] top-0 right-0 bg-white overflow-x-hidden duration-75 rounded-xl pt-8"
        style={showSidebar === true ? { width: "209px" } : { width: "0px" }}
      >
        <div className="flex gap-1">
          <Image src={home} width={16} height={16} alt="icon" />
          <a
            className=" cursor-pointer p-2 pl-8 text-[16px] text-black block duration-[30ms] hover:text-primary-color font-yekan font-normal "
            onClick={() => {
              router.push("/");
              setShowSidebar(false);
            }}
          >
            صفحه اصلی
          </a>
        </div>
        <div className="flex gap-1">
          <Image src={airplane} width={16} height={16} alt="icon" />
          <a className=" cursor-pointer p-2 pl-8 text-[16px] text-black block duration-[30ms] hover:text-primary-color font-yekan font-normal ">
            خدمات گردشگری
          </a>
        </div>
        <div className="flex gap-1">
          <Image src={sound} width={16} height={16} alt="icon" />
          <a className=" cursor-pointer p-2 pl-8 text-[16px] text-black block duration-[30ms] hover:text-primary-color font-yekan font-normal ">
            درباره ما
          </a>
        </div>
        <div className="flex gap-1">
          <Image src={phone} width={16} height={16} alt="icon" />
          <a className=" cursor-pointer p-2 pl-8 text-[16px] text-black block duration-[30ms] hover:text-primary-color font-yekan font-normal ">
            تماس با ما
          </a>
        </div>
      </div>
    </>
  );
}

export default SidbarMenu;
