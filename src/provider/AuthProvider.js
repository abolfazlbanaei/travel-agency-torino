"use client";
import { useGetUserData } from "@/services/queries";
import { useRouter } from "next/navigation";
import { useContext, useEffect } from "react";
import { loginFormContext } from "./LoginContextProvider";
import { toast } from "react-toastify";

function AuthProvider({ children, page }) {
  const router = useRouter();
  const { isPending, data } = useGetUserData();
  const { setShowLoginForm } = useContext(loginFormContext);
  useEffect(() => {
    if (!isPending && !data?.data && page === "checkout") {
      router.back();
      toast.success("وارد اکانت خود شوید");
    } else if (!isPending && !data?.data) router.push("/");
  }, [isPending]);

  if (isPending)
    return (
      <div className="flex items-center justify-center min-h-[40vh]">
        <div className="gradient-text">در حال بارگذاری...</div>

        <style jsx>{`
          .gradient-text {
            font-size: 1.8rem;
            font-weight: bold;
            background: linear-gradient(90deg, #3b82f6, #a855f7, #22d3ee);
            background-size: 300%;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: moveGradient 2s linear infinite;
          }
          @keyframes moveGradient {
            0% {
              background-position: 0%;
            }
            100% {
              background-position: 300%;
            }
          }
        `}</style>
      </div>
    );

  return children;
}

export default AuthProvider;
