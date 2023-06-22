import React from "react";
import Audi from "../public/Audi-front.jpeg";
import Image from "next/image";

function Offer() {
  return (
    <div className="w-full h-96 md:h-[32rem] relative ">
      <Image src={Audi} fill className="object-cover" />
      <div className=" absolute h-full w-full bg-gradient-to-r from-black/100 via-black/80 to-black/40" />
      <div className="absolute flex w-full flex-col-reverse h-full max-sm:py-12 py-24 px-8 md:px-6 lg:px-24 max-sm:justify-end justify-center sm:item">
        <div className="md:gap-10 justify-between" id="grid 1">
          <div className="  grid grid-cols-3 sm:gap-2">
            <div>
              <div className="flex justify-center">
                <span className="text-[#50A0FF] text-[14px] sm:text-[21px] pr-2 font-extrabold">
                  01.
                </span>
                <div className="flex flex-col justify-between">
                  <h6 className=" font-bold text-[14px] sm:text-[21px] text-white">
                    Makina me qira
                  </h6>
                  <div className="pt-4">
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] transition duration-200 ease-in-out">
                      ekonomi
                    </p>
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] transition duration-200 ease-in-out">
                      standarde
                    </p>
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] transition duration-200 ease-in-out">
                      Luksoze
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <span className="text-[#50A0FF] text-[14px] sm:text-[21px] pr-2 font-extrabold">
                  02.
                </span>
                <div className="flex flex-col justify-between">
                  <h6 className=" font-bold text-[14px] sm:text-[21px] text-white">
                    Pagesa të lehta
                  </h6>
                  <div className="pt-4">
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] transition duration-200 ease-in-out">
                      Kartë Krediti
                    </p>
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] transition duration-200 ease-in-out">
                      Paratë e gatshme
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center">
                <span className="text-[#50A0FF] text-[14px] sm:text-[21px] pr-2 font-extrabold">
                  03.
                </span>
                <div className="flex flex-col justify-between">
                  <h6 className=" font-bold text-[14px] sm:text-[21px] text-white">
                    Përfitimet
                  </h6>
                  <div className="pt-4">
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] cursor-pointer transition duration-200 ease-in-out">
                      Kilometrazh i pakufizuar
                    </p>
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] cursor-pointer transition duration-200 ease-in-out">
                      Sigurim i plotë
                    </p>
                    <p className="text-[#cccccc] text-[12px] sm:text-[16px] capitalize hover:text-[#50A0FF] cursor-pointer transition duration-200 ease-in-out">
                      Asistencë 24/7      
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sm:flex-1 ">
          <div className="sm:flex text-start flex-col">
            <h4 className=" font-bold text-[25px] sm:text-[37px] text-[#fdfdfd] uppercase">
              Cfare ne ofrojme
            </h4>
            <p className="text-[12px] sm:text-[16px] mt-[10px] mb-[40px] font-normal text-gray-300 ">
              Kompania jonë ofron një shumëllojshmëri opsionesh të dobishme për
              klientët tanë të rinj dhe të rregullt.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Offer;
