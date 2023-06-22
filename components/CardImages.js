"use client";

import { useState } from "react";
import Image from "next/image";
import cars from "../utils/cars";
import CarDetails from "../components/CarDetails";
import Porche from "../public/Porch.jpeg";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";

function CardImages({ car }) {
  const [isOpen, setIsOpen] = useState(false);
  console.log(car);

  return (
    <div className="group border-[1px] flex flex-col p-6 mx-3 my-3 justify-center items-start text-black-100 bg-primary-blue-100 hover:bg-white hover:shadow-md rounded-xl transition duration-300 ease-in-out">
      <div className="w-full flex justify-between items-start space-x-10">
        <h2 className=" text-[22px] leading-[24px] font-bold capitalize ">
          {car.make} {car.model}
        </h2>
      </div>
      <p className="flex mt-6 text-[22px] font-extrabold">
        <span className=" self-start text-[14px] font-semibold">€</span>
        {car.price}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          src={car.img}
          alt="car"
          fill
          className="object-cover rounded-sm"
        />
      </div>

      <div className=" relative flex w-full mt-2">
        <div className="flex group-hover:invisible justify-between w-full text-gray-600 mt-5 ">
          <div className="flex items-center justify-center gap-2">
            <Image
              src="/steering-wheel.svg"
              width={15}
              height={15}
              alt="steering wheel"
            />
            <p className=" text-[14px]">{car.transmission}</p>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Image 
              src="/gas.svg" 
              width={15} 
              height={15} 
              alt="seat" 
            />
            <p className=" text-[14px]">{car.fuel}</p>
          </div>
        </div>
        <div className="hidden group-hover:flex absolute bottom-0 w-full z-10">
          <button
            onClick={() => setIsOpen(true)}
            className=" uppercase w-full inline-block rounded-md border border-[#F3C974] bg-[#F3C974]/0  hover:bg-[#F3C974]/100 transition duration-300 ease-in-out px-12 py-3 text-sm font-medium hover:text-gray-800 focus:outline-none focus:ring active:text-blue-500"
          >
            Shiko makinën
          </button>
        </div>
      </div>
      <CarDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        car={car}
      />
    </div>
  );
}

export default CardImages;
