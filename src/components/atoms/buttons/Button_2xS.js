"use client";

import React from "react";
import { useRouter } from "next/navigation";

function Button_2xS({ text, tourId }) {
  const router = useRouter();

  const routeHandler = () => {
    router.push(`/tours/${tourId}`);
  };

  return (
    <button
      className={`
        w-16 
        h-[25px]  
        bg-primary-color  
        rounded-[4px]     
        text-white        
        font-yekan        
        text-sm           
        font-normal       
        flex items-center justify-center 
        transition-all    
        duration-200      
        ease-in-out       
        hover:bg-primary-color-dark 
        hover:shadow-md   
        active:scale-95   
      `}
      onClick={routeHandler}
    >
      {text}
    </button>
  );
}

export default Button_2xS;
