import React from "react";
import Audi from "../../public/Blue.jpeg";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";

export default function page() {
  return (
    <div className="bg-[#fdfdfd] h-screen flex relative max-sm:px-4">
      <div className="flex absolute items-center sm:p-1 max-sm:mt-1 sm:m-3 space-x-1 hover:underline cursor-pointer ">
        <ArrowLeftIcon className="w-4 h-4" />
        <Link href="" className=" text-sm text-gray-500">
          Kthehu mbrapa
        </Link>
      </div>

      <div className="flex w-full max-w-sm m-auto overflow-hidden bg-white rounded-2xl shadow-2xl lg:max-w-4xl">
        <div className="hidden relative bg-cover sm:block sm:w-1/2 sm:overflow-hidden  ">
          <div className="group">
            <Image
              src={Audi}
              fill
              objectFit="cover"
              className="group-hover:scale-105 transition duration-1000 ease-in-out"
            />
            <div className="inset-0 absolute h-full w-full bg-gradient-to-br from-black/[45%] via-black/[35%] to-black/[25%]" />
          </div>
        </div>
        <div className="w-full px-6 py-8 md:px-8 lg:w-1/2">
          <div className="flex justify-center mx-auto">
            <h2 className="text-[25px] font-bold">Kosova Rent</h2>
          </div>

          <div className="mt-4">
            <label
              className="block mb-2 text-sm font-medium text-gray-700 "
              for="LoggingEmailAddress"
            >
              Adresa e emailit
            </label>
            <input
              id="LoggingEmailAddress"
              className="mt-1 w-full rounded-md shadow-sm leading-5 py-2 px-2 border-gray-200 bg-gray-50 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
              type="email"
              placeholder="johndoe@gmail.com"
            />
          </div>

          <div className="mt-4">
            <div className="flex justify-between">
              <label
                className="block mb-2 text-sm font-medium "
                for="loggingPassword"
              >
                Fjalëkalimi
              </label>
              <a href="#" className="text-xs hover:underline">
                Harroj Fjalekalimin?
              </a>
            </div>

            <input
              id="loggingPassword"
              className="mt-1 w-full rounded-md shadow-sm leading-5 py-2 px-2 border-gray-200 bg-gray-50 text-sm text-gray-700 "
              type="password"
              placeholder="password"
            />
          </div>

          <div className="mt-6">
            <button className=" uppercase w-full inline-block rounded-md border border-[#F3C974] bg-[#F3C974]/0  hover:bg-[#F3C974]/100 transition duration-300 ease-in-out px-12 py-3 text-sm font-medium hover:text-gray-800 focus:outline-none focus:ring active:text-blue-500">
              Hyni
            </button>
          </div>

          <div className="flex items-center justify-between mt-4">
            <span className="w-1/5 border-b  md:w-1/4"></span>

            <a
              href="/register"
              className="text-xs text-gray-500 capitalize hover:underline"
            >
              ose regjistrohu
            </a>

            <span className="w-1/5 border-b  md:w-1/4"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
