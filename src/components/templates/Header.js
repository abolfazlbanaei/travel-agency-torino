"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useContext, useState } from "react";
import logo from "@/images/Torino-logo.svg";
import arrow from "@/images/icons/arrow-down.svg";
import person from "@/images/icons/person.svg";
import menu from "@/images/icons/menu.svg";

import Login_Button from "../atoms/Login_Button";
import { loginFormContext } from "@/provider/LoginContextProvider";
import { useRouter } from "next/navigation";
import { useGetUserData } from "@/services/queries";
import ProfileButtonMenu from "../organizations/ProfileButtonMenu";
import { sidebarContext } from "@/provider/SidebarContextProvider";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const { setShowLoginForm } = useContext(loginFormContext);
  const router = useRouter();
  const { data } = useGetUserData();
  const { showSidebar, setShowSidebar } = useContext(sidebarContext);

  return (
    <>
      <header className="w-screen pt-[15px] pb-3 px-[126px] max-sm:px-[31px] max-md:px-[62px] h-[74px] flex justify-between items-center shadow">
        <div className="flex items-center gap-[84px] max-lg:hidden">
          <Image
            src={logo}
            width={146}
            height={44}
            alt="logo"
            onClick={() => router.push("/")}
            className="cursor-pointer"
          />

          <div className="flex gap-[18px]">
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-primary-color hover:font-semibold"
            >
              صفحه اصلی
            </Link>
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-primary-color hover:font-semibold"
            >
              خدمات گردشگری
            </Link>
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-primary-color hover:font-semibold"
            >
              درباره ما
            </Link>
            <Link
              href="/"
              className="text-gray-700 transition-colors duration-300 hover:text-primary-color hover:font-semibold"
            >
              تماس با ما
            </Link>
          </div>
        </div>

        <div
          className="hidden max-lg:inline"
          onClick={() => setShowSidebar(true)}
        >
          <Image src={menu} width={24} height={24} alt="menu" />
        </div>

        {/* بخش ورود و پروفایل */}
        <div className="relative">
          {!data?.data ? (
            <Login_Button className="sm:hidden" onClick={setShowLoginForm} />
          ) : (
            <div
              className="flex flex-row-reverse gap-1 cursor-pointer"
              onClick={() => setShowMenu(!showMenu)}
            >
              <Image src={arrow} width={24} height={24} alt="arrow" />
              <p className="text-primary-color text-lg font-normal font-vazir">
                {data.data.mobile}
              </p>
              <Image src={person} width={24} height={24} alt="person" />
            </div>
          )}
          {showMenu && (
            <ProfileButtonMenu data={data} setShowMenu={setShowMenu} />
          )}
        </div>
      </header>
    </>
  );
}

export default Header;
