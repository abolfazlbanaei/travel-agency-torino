// import Image from "next/image";
// import React from "react";
// import Button_2xS from "../atoms/buttons/Button_2xS";

// function TourCard({ data }) {
//   const { id, origin, title, price, startDate, endDate, image } = data;

//   console.log(image);
//   return (
//     <div className="">
//       <img
//         src={data.image}
//         // width={278.44}
//         // height={159}
//         className="w-[278.44px] h-[159px]"
//         alt={title}
//       />
//       <div className="flex flex-col p-2 border gap-1 ">
//         <p className="text-[22px] font-yekan font-normal">{title}</p>
//         <p className="text-text-color/70 font-yekan font-normal opacity-65 text-[15px]">
//           هتل 3 ستاره
//         </p>
//       </div>
//       <div className="flex justify-between p-2 border rounded-b-[10px]">
//         <Button_2xS text={"رزرو"} tourId={id} />
//         <span className="font-vazir font-normal text-[12px]">
//           <span className="text-complementry-color text-[16px]"> {price} </span>
//           تومان
//         </span>
//       </div>
//     </div>
//   );
// }

// export default TourCard;

import Image from "next/image";
import React from "react";
import Button_2xS from "../atoms/buttons/Button_2xS";

function TourCard({ data }) {
  const { id, origin, title, price, startDate, endDate, image } = data;

  // console.log(image); // بهتر است لاگ‌ها را در کد نهایی حذف کنید

  return (
    // کارت اصلی: اضافه شدن گوشه‌های گرد، سایه ملایم و transition برای هاور
    <div className="
      bg-white 
      rounded-[10px] 
      shadow-md 
      overflow-hidden 
      transition-all 
      duration-300 
      ease-in-out 
      hover:shadow-xl 
      hover:-translate-y-1 
      w-[278.44px] 
      flex flex-col 
      border border-gray-200
    ">
   
      <img
        src={data.image}
        alt={title}
       
        className="w-full h-[159px] object-cover rounded-t-[10px]" 
      />
      
     
      <div className="flex flex-col p-3 gap-1.5"> {/* padding کمی بیشتر و gap بیشتر */}
        <p className="text-[20px] font-yekan font-normal text-gray-800">{title}</p> {/* فونت کمی کوچکتر برای عنوان اصلی */}
        <p className="text-gray-500 font-yekan font-normal text-[14px]"> {/* رنگ و اندازه کمی متفاوت */}
          هتل 3 ستاره
        </p>
      </div>
      
      
      <div className="flex justify-between items-center p-3 mt-auto border-t border-gray-200 bg-gray-50"> 
        
    
        <Button_2xS text={"رزرو"} tourId={id} />
        
      
        <span className="font-vazir font-normal text-sm"> 
          <span className="text-complementry-color text-[17px] font-bold"> 
             {price} 
          </span>
          تومان
        </span>
      </div>
    </div>
  );
}

export default TourCard;
