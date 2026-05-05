"use client";
import React, { useEffect, useState } from "react";
import { DatePicker } from "zaman";
import { Controller, useForm } from "react-hook-form";
import useQuery from "@/hooks/query";
import Image from "next/image";
import calender from "@/images/icons/calendar.svg";
import { DateToIso, flattenObject } from "@/utils/helper";
import location from "@/images/icons/location.svg";
import QueryString from "qs";
import { useRouter } from "next/navigation";
import { useGetTours } from "@/services/queries";

function SearchBox() {
  const [query, setQuery] = useState("");
  const router = useRouter();
  const { getQuery } = useQuery();
  const { data, isPending, refetch } = useGetTours(query);
  const { register, handleSubmit, control, reset } = useForm();

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    if (originId && destinationId) reset({ originId, destinationId });
    console.log({ originId, destinationId });
  }, []);

  const submitHandler = (form) => {
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };

  const fieldBase =
    "flex items-center gap-2 rounded-[14px] border border-transparent bg-white px-4 py-3 transition-all duration-300 ease-out hover:shadow-md hover:-translate-y-0.5 focus-within:border-primary-color focus-within:ring-2 focus-within:ring-primary-color/20";

  const selectBase =
    "w-full min-w-[140px] appearance-none bg-transparent outline-none text-[15px] font-medium text-gray-700 cursor-pointer";

  return (
    <div className="h-[71px] max-lg:h-auto">
      <div className="w-fit h-auto mt-[17px] flex flex-col gap-[28px]">
        <h1 className="text-[28px] text-center font-yekan font-medium max-sm:text-[16px] max-md:text-[18px]">
          <span className="text-primary-color">تورینو </span>
          برگزار کننده بهترین تور های داخلی و خارجی
        </h1>

        <form
          className="flex max-lg:flex-wrap border border-gray-200 rounded-[20px] bg-white shadow-sm max-lg:border-none p-[10px] gap-3 max-lg:items-center max-lg:w-auto"
          onSubmit={handleSubmit(submitHandler)}
        >
          <div className="flex max-lg:flex-wrap max-lg:justify-between w-full relative max-lg:items-center gap-3">
            <div className={`${fieldBase} max-lg:w-[48%] max-lg:border`}>
              <Image src={location} width={20} height={20} alt="location" />
              <select {...register("originId")} className={selectBase}>
                <option value="1">تهران</option>
                <option value="2">سنندج</option>
                <option value="7">مشهد</option>
                <option value="3">مادرید</option>
                <option value="4">اصفهان</option>
                <option value="5">سلیمانیه</option>
                <option value="6">هولر</option>
                <option value="9">ایتالیا</option>
                <option value="8">اوتاوا</option>
                <option value="9">ونکوور</option>
                <option value="10">استانبول</option>
              </select>
            </div>

            <div className={`${fieldBase} max-lg:w-[48%] max-lg:border`}>
              <Image src={location} width={20} height={20} alt="location" />
              <select
                {...register("destinationId")}
                className={selectBase}
              >
                <option value="1">تهران</option>
                <option value="2">سنندج</option>
                <option value="7">مشهد</option>
                <option value="3">مادرید</option>
                <option value="4">اصفهان</option>
                <option value="5">سلیمانیه</option>
                <option value="6">هولر</option>
                <option value="9">ایتالیا</option>
                <option value="8">اوتاوا</option>
                <option value="9">ونکوور</option>
                <option value="10">استانبول</option>
              </select>
            </div>

            <div className={`${fieldBase} relative max-lg:w-full max-lg:border`}>
              <Controller
                control={control}
                name="date"
                render={({ field: { onChange } }) => (
                  <DatePicker
                    position="center"
                    round="x2"
                    accentColor="#28A745"
                    onChange={(e) =>
                      onChange({
                        startDate: DateToIso(e.from),
                        endDate: DateToIso(e.to),
                      })
                    }
                    range
                  />
                )}
              />
              <Image
                className="absolute right-3 top-1/2 -translate-y-1/2"
                src={calender}
                width={20}
                height={20}
                alt="calender"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-[190px] h-[51px] bg-primary-color rounded-[16px] text-white font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98] max-lg:w-full"
          >
            جست و جو
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchBox;
