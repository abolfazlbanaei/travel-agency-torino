"use client";
import useQuery from "@/hooks/query";
import Link from "next/link";
import React from "react";

function PaymentPage() {
  const { getQuery } = useQuery();
  const status = getQuery("status");

  const isSuccess = status === "success";

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-green-50 px-4">
      <div
        className={`w-full max-w-md rounded-[28px] border shadow-2xl px-8 py-10 text-center transition-all duration-300 ${
          isSuccess
            ? "border-green-200 bg-white"
            : "border-red-200 bg-white"
        }`}
      >
        <div
          className={`mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full text-3xl shadow-lg ${
            isSuccess
              ? "bg-green-100 text-green-600"
              : "bg-red-100 text-red-600"
          }`}
        >
          {isSuccess ? "✓" : "!"}
        </div>

        <h1
          className={`text-2xl font-bold mb-3 ${
            isSuccess ? "text-green-700" : "text-red-600"
          }`}
        >
          {isSuccess ? "پرداخت موفق بود" : "پرداخت ناموفق بود"}
        </h1>

        <p className="text-gray-600 leading-8 mb-8 text-sm sm:text-base">
          {isSuccess
            ? "پرداخت شما با موفقیت انجام شد و سفارش شما ثبت گردید."
            : "متأسفانه پرداخت شما انجام نشد. لطفاً دوباره تلاش کنید یا با پشتیبانی تماس بگیرید."}
        </p>

        {isSuccess ? (
          <Link
            href="/profile/tours"
            className="inline-flex items-center justify-center w-full rounded-[16px] bg-green-600 px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
          >
            برو به پروفایل
          </Link>
        ) : (
          <Link
            href="/"
            className="inline-flex items-center justify-center w-full rounded-[16px] bg-red-500 px-5 py-3 text-white font-medium transition-all duration-300 hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5 active:scale-[0.98]"
          >
            بازگشت به صفحه اصلی
          </Link>
        )}
      </div>
    </div>
  );
}

export default PaymentPage;
