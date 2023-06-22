import React from "react";
import {
  AtSymbolIcon,
  PhoneIcon,
  MapPinIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

function Contact() {
  return (
    <div className="bg-gray-#fdfdfd">
      <div className="mx-auto max-w-[75rem] h-3/5 px-1 md:px-3 lg:px-4 ">
        <div className="flex flex-col md:flex h-3/4 py-20 md:py-30 ">
          <div className="sm:flex mb-10 sm:mb-0 px-12">
            <div className="sm:w-[50%] sm:mr-10">
              <h4 className="text-[25px] lg:text-[37px] capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black">
                Na kontaktoni
              </h4>
              <p className="text-base text-gray-500">
                Mos ngurroni të kontaktoni specialistët tanë për të mësuar më
                shumë rreth makinave dhe çmimeve tona. Ne jemi gjithmonë i
                gatshëm për t iu përgjigjur pyetjeve tuaja.
              </p>
              <div className="w-full py-8 px-5 mt-10 bg-gray-800 rounded-md shadow-md shadow-gray-600/20 space-y-4 hover:shadow-xl transition duration-300 ease-in-out">
                <div className="flex items-center ">
                  <AtSymbolIcon className="w-4 h-4 sm:w-7 sm:h-7 text-[#F3C974] hover:-translate-y-2 transition duration-300 ease-in-out" />
                  <div className="flex flex-col ml-4">
                    <p className=" text-xs font-extralight text-gray-400">
                      Email
                    </p>
                    <h6 className="text-xs sm:text-base font-normal text-gray-200">
                      support@kosovarent.com
                    </h6>
                  </div>
                </div>
                <div className="flex items-center ">
                  <PhoneIcon className="w-4 h-4 sm:w-7 sm:h-7 text-[#F3C974] hover:-translate-y-2 transition duration-300 ease-in-out" />
                  <div className="flex flex-col ml-4">
                    <p className=" text-xs font-extralight text-gray-400">
                      Numri i telefonit
                    </p>
                    <h6 className="text-xs sm:text-base font-normal text-gray-200">
                      +383 45 153 155
                    </h6>
                  </div>
                </div>
                <div className="flex items-center ">
                  <MapPinIcon className="w-4 h-4 sm:w-7 sm:h-7 text-[#F3C974] hover:-translate-y-2 transition duration-300 ease-in-out" />
                  <div className="flex flex-col ml-4">
                    <p className=" text-xs font-extralight text-gray-400">
                      Vendndodhja
                    </p>
                    <h6 className="text-xs  sm:text-base font-normal text-gray-200">
                      58 London Street 10000 Pristina, Kosovo
                    </h6>
                  </div>
                </div>
                <div className="flex items-center ">
                  <SunIcon className="w-4 h-4 sm:w-7 sm:h-7 text-[#F3C974] hover:-translate-y-2 transition duration-300 ease-in-out" />
                  <div className="flex flex-col ml-4">
                    <p className=" text-xs font-extralight text-gray-400">
                      Working Hours
                    </p>
                    <h6 className="text-xs sm:text-base font-normal text-gray-200">
                      7 a.m. - 5 p.m.
                    </h6>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-sm:mt-20 flex-1 h-full  sm:ml-2 border-[1px] bg-white  rounded-md shadow-md ">
              <form action="#" className="my-8 mx-4 grid grid-cols-6 gap-y-6 gap-x-3 ">
                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="FirstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    First Name
                  </label>

                  <input
                    type="text"
                    id="FirstName"
                    name="first_name"
                    placeholder="John"
                    className="mt-1 w-full rounded-md shadow-sm leading-5 py-2 px-2 border-gray-200 bg-gray-50 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label
                    htmlFor="LastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Last Name
                  </label>

                  <input
                    type="text"
                    id="LastName"
                    name="last_name"
                    placeholder="Doe"
                    className="mt-1 w-full rounded-md shadow-sm leading-5 py-2 px-2 border-gray-200 bg-gray-50 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Email
                  </label>

                  <input
                    type="email"
                    id="Email"
                    name="email"
                    placeholder="xxx@gmail.com"
                    className="mt-1 w-full rounded-md shadow-sm leading-5 py-2 px-2 border-gray-200 bg-gray-50 text-sm text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-200"
                  />
                </div>

                <div className="col-span-6">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                  >
                    Message
                  </label>

                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    placeholder="Write message here.."
                    className=" resize-y mt-1 w-full h-28 rounded-md shadow-sm leading-5 py-2 px-2 border-gray-200 bg-gray-50 text-sm text-gray-700 "
                  />
                </div>

                <div className="col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button className="uppercase w-full inline-block rounded-md border border-[#F3C974] bg-[#F3C974]/0  hover:bg-[#F3C974]/100 transition duration-300 ease-in-out px-12 py-3 text-sm font-medium hover:text-gray-800 ">
                    Dërgoni mesazh
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
