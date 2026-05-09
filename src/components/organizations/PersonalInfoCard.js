import Link from "next/link";
import React from "react";
import edit from "@/images/icons/edit2.svg";
import Image from "next/image";
function PersonalInfoCard({ user }) {
  const nationalCode = user?.nationalCode;
  const gender = user?.gender;
  const firstName = user?.firstName;
  const lastName = user?.lastName;
  const birthDate = user?.birthDate;

  if (!user) {
    return (
      <div className="h-[171px] border rounded-[10px] w-full flex items-center justify-center">
        <p className="text-gray-400 text-sm">در حال دریافت اطلاعات...</p>
      </div>
    );
  }

  return (
    <div className="h-[171px] border rounded-[10px] w-full flex flex-col pr-3 pt-3 pl-4 gap-7 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-[16px] font-normal text-black font-yekan">
          اطلاعات شخصی
        </h2>
   
        <Link
          className="flex flex-row-reverse items-center text-complementry-color text-[14px] font-normal"
          href="/profile/edit" 
        >
          ویرایش اطلاعات
  
        </Link>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex gap-9">
          <p className="text-[14px] font-light font-yekan">
            نام و نام خانوادگی
          </p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {`${firstName || "---"} ${lastName || "---"}`}
          </span>
        </div>

        <div className="flex gap-9">
          <p className="text-[14px] font-light font-yekan">کد ملی</p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {nationalCode || "---"}
          </span>
        </div>
      </div>

      <div className="flex justify-between w-full">
        <div className="flex gap-9">
          <p className="text-[14px] font-light font-yekan">جنسیت</p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {gender || "---"}
          </span>
        </div>

        <div className="flex gap-9">
          <p className="text-[14px] font-light font-yekan">تاریخ تولد</p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {birthDate || "---"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default PersonalInfoCard;
