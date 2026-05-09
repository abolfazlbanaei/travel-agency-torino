"use client";
import EditPersonalInfo from "../organizations/EditPersonalInfo";
import EditBankAccInfo from "../organizations/EditBankAccInfo";
import EditUserAccInfo from "../organizations/EditUserAccInfo";
import { useEffect, useState } from "react";
import { useUserProfile } from "@/services/mutations";
import { useRouter } from "next/navigation";
import { useGetUserData } from "@/services/queries";

function EditProfilePage() {
  const [form, setForm] = useState({
    mobile: "09.......",
    email: "",
    firstName: "",
    lastName: "",
    gender: "",
    birthDate: "",
    nationalCode: "",
    payment: {
      shaba_code: "",
      debitCard_code: "",
      accountIdentifier: "",
    },
  });

  const router = useRouter();

  const formHandler = (e) => {
    const { name, value } = e.target;

    setForm((prev) => {
      if (
        ["shaba_code", "debitCard_code", "accountIdentifier"].includes(name)
      ) {
        return {
          ...prev,
          payment: {
            ...prev.payment,
            [name]: value,
          },
        };
      } else {
        return {
          ...prev,
          [name]: value,
        };
      }
    });
  };

  const { data, isLoading, isError } = useGetUserData();

  const { mutate, isPending } = useUserProfile();

  const submitHandler = () => {
    if (isPending) return;

    mutate(
      { form },
      {
        onSuccess: (response) => {
          console.log("Profile updated successfully:", response);

          router.push("/profile");
        },
        onError: (error) => {
          console.error("Profile update failed:", error);

          alert(
            `خطا در به‌روزرسانی پروفایل: ${error.response?.data?.message || error.message || "خطای ناشناخته"}`,
          );
        },
      },
    );
  };

  useEffect(() => {
    if (data?.data) {
      setForm((prev) => ({
        ...prev,
        mobile: data.data.mobile || prev.mobile,
        email: data.data.email || prev.email,
        firstName: data.data.firstName || prev.firstName,
        lastName: data.data.lastName || prev.lastName,
        gender: data.data.gender || prev.gender,
        birthDate: data.data.birthDate || prev.birthDate,
        nationalCode: data.data.nationalCode || prev.nationalCode,

        payment: {
          ...prev.payment,

          shaba_code: data.data.payment?.shaba_code || prev.payment.shaba_code,
          debitCard_code:
            data.data.payment?.debitCard_code || prev.payment.debitCard_code,
          accountIdentifier:
            data.data.payment?.accountIdentifier ||
            prev.payment.accountIdentifier,
        },
      }));
    }
  }, [data]);

  if (isLoading) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        در حال بارگذاری اطلاعات پروفایل...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full h-screen flex items-center justify-center">
        خطا در بارگذاری اطلاعات پروفایل. لطفاً دوباره تلاش کنید.
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col gap-[19px] mb-[154px] p-4">
      <h1 className="text-2xl font-bold text-center my-4">ویرایش پروفایل</h1>

      <EditUserAccInfo
        submitHandler={submitHandler}
        formHandler={formHandler}
        form={form}
      />
      <EditPersonalInfo
        submitHandler={submitHandler}
        formHandler={formHandler}
        form={form}
      />

      <EditBankAccInfo
        submitHandler={submitHandler}
        formHandler={formHandler}
        form={form}
      />

      <button
        onClick={submitHandler}
        disabled={isPending}
        className={`w-full py-3 px-4 rounded-lg text-white font-semibold transition-colors ${
          isPending
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-blue-600 hover:bg-blue-700"
        }`}
      >
        {isPending ? "در حال ذخیره..." : "ذخیره نهایی تغییرات"}
      </button>
    </div>
  );
}

export default EditProfilePage;
