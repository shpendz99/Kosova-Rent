import React from "react";
import Link from "next/link";
import Image from "next/image";
import BMWOutside from "../public/BMW-outside.jpeg";
import BMWLight from "../public/BMW-light.jpeg";
import BMWInside from "../public/bmw-small.jpeg";

function Hero() {
  return (
    <div className="bg-gray-800">
      <div className="mx-auto  max-w-7xl h-screen px-8 md:px-6 lg:px-8 ">
        <div className=" md:flex h-3/4 justify-between items-center py-20 md:py-0">
          <div className="flex-col text-gray-200 mb-20 md:mb-0 px-12 md:px-16 ">
            <h4 className="text-[10px] md:text-[14px] text-[#F3C974] -mb-1 md:-mb-2 font-bold uppercase">
              Mirë se vini
            </h4>
            <h1 className="text-[37px] md:text-[45px] lg:text-[57px] text-gray-200  uppercase leading-tight">
              Rezervoni një makinë sot
            </h1>
            <p className="text-[14px] md:text-[16px] mt-[20px] mb-[40px] font-normal text-gray-400">
              Rezervoni një makinë sot dhe eksploroni bukurinë e Kosovës me
              shërbimin tonë të makinave me qira pa probleme. Zbuloni lirinë e
              rrugës së hapur ndërsa nisni udhëtime të paharrueshme nëpër
              peizazhe mahnitëse.{" "}
            </p>
            <Link
              href="vetura"
              className="text-gray-200 text-[14px] md:text-[16px] border-[1px] rounded-[4px] border-[#F3C974] bg-[#F3C974]/0 px-[15px] py-[10px] uppercase hover:bg-[#F3C974]/100 hover:text-gray-800 transition duration-300 ease-in-out"
            >
              Gjeni një makinë
            </Link>
          </div>
          <div className="flex w-full pb-40 md:pb-0 lg:w-1/2 h-4/5 items-center justify-center">
            <div className="w-[50%] h-full mx-2 mt-2">
              <div className="w-full h-full relative ">
                <Image
                  src={BMWOutside}
                  objectFit="cover"
                  layout="fill"
                  alt="BMW Verture"
                  className="rounded-tr-[40px] rounded-bl-[40px] md:rounded-tr-full md:rounded-bl-full transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-gray-900/60"
                />
              </div>
            </div>
            <div className="flex-col w-[50%] h-full">
              <div className="h-1/2 relative my-2 ">
                <Image
                  src={BMWLight}
                  fill
                  objectFit="cover"
                  alt="Picture of the author"
                  className="rounded-tl-[35px] rounded-tr-xl rounded-br-[35px] md:rounded-tl-[75px] md:rounded-tr-3xl md:rounded-br-[75px] transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-gray-900/60"
                />
              </div>
              <div className="h-1/2 relative">
                <Image
                  src={BMWInside}
                  fill
                  objectFit="cover"
                  className="rounded-tr-[35px] rounded-br-xl rounded-bl-[35px] md:rounded-tr-[75px] md:rounded-br-3xl md:rounded-bl-[75px] transition duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg shadow-gray-900/60"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
