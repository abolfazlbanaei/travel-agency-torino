import Link from "next/link";
import React from "react";
import edit from "@/images/icons/edit2.svg";
import Image from "next/image";

function BankAccInfoCard({ user }) {
  const userDataForm = user?.data?.form;
  const paymentData = userDataForm?.payment;

  if (!paymentData) {
    return null;
  }

  const { shaba_code, debitCard_code, accountIdentifier } = paymentData;

  return (
    <div className="h-[171px] border rounded-[10px] w-full flex flex-col pr-3 pt-3 pl-4 gap-7 overflow-hidden">
      <div className="flex justify-between">
        <h2 className="text-[16px] font-normal text-black font-yekan">
          اطلاعات حساب بانکی
        </h2>
        <Link
          className="flex flex-row-reverse text-complementry-color text-[14px] font-normal"
          href="/profile/edit" // مسیر ویرایش را چک کنید که درست باشد
        >
          ویرایش اطلاعات
          <Image src={edit} width={16} height={16} alt="icon" />
        </Link>
      </div>
      <div className="flex justify-between w-full relative">
        <div className="flex gap-9 ">
          <p className="text-[14px] font-light font-yekan">شماره شبا</p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {shaba_code || "---"}
          </span>
        </div>
        <div className="flex gap-9">
          <p className="text-[14px] font-light font-yekan">شماره کارت</p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {debitCard_code || "---"}
          </span>
        </div>
      </div>
      <div className="flex justify-between w-full relative">
        <div className="flex gap-9 ">
          <p className="text-[14px] font-light font-yekan">شماره حساب</p>
          <span className="text-[14px] font-bold text-text-color font-vazir">
            {accountIdentifier || "---"}
          </span>
        </div>
        <div className="flex gap-9 w-[250px]"></div>
      </div>
    </div>
  );
}

export default BankAccInfoCard;
