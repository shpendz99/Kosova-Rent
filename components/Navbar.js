"use client";

import React from "react";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import { useRef } from "react";

function Navbar() {
  const [menu, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);

  const sidebar = {
    open: {
      clipPath: `circle(200% at 91% 0)`,
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2,
        duration: 5,
      },
    },
    closed: {
      clipPath: `circle(15px at 91% 0%)`,
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 40,
        duration: 5,
      },
    },
  };
  return (
    <header>
      <nav className="bg-gray-800 pt-[15px] ">
        <div className="mx-auto max-w-screen-2xl px-8 sm:px-6 lg:px-8">
          <div className=" flex h-16 items-center justify-between">
            <div>
              <h1
                className={"relative z-10 font-bold text-gray-50 text-[30px]"}
              >
                Kosova Rent
              </h1>
            </div>
              <div className=" md:flex text-gray-200 md:gap-x-[15px] lg:gap-x-[25px] text-[14px] lg:text-[16px] items-center">
                {/* Mobile Design */}
                <div className="md:hidden">
                  <button
                    className="relative z-10 inline-flex items-center rounded-lg p-2 hover:bg-gray-100/10 hover:stroke-[#F3C974]  [&:not(:focus-visible)]:focus:outline-none"
                    onClick={toggleOpen}
                  >
                    {menu ? (
                      <XMarkIcon className="h-6 w-6 text-white" />
                    ) : (
                      <Bars3Icon className="h-6 w-6 text-white" />
                    )}
                  </button>

                  <motion.div
                    initial={true}
                    animate={menu ? "open" : "closed"}
                    ref={containerRef}
                    variants={sidebar}
                    className={
                      !menu
                        ? "hidden"
                        : "absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-800 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/60 "
                    }
                    id="headlessui-popover-panel-:rce:"
                    tabindex="-1"
                    data-headlessui-state="open"
                    data-projection-id="93"
                  >
                    <div className="space-y-4">
                      <Link
                        className="block text-base leading-7 tracking-tight text-gray-300"
                        href="/"
                      >
                        Home
                      </Link>
                      <Link
                        className="block text-base leading-7 tracking-tight text-gray-300"
                        href="#vertura"
                        scroll={false}
                      >
                        Vertura me Qera
                      </Link>
                      <Link
                        className="block text-base leading-7 tracking-tight text-gray-300"
                        href="#kontakt"
                        scroll={false}
                      >
                        Kontact
                      </Link>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                      <a
                        className="inline-flex justify-center text-sm outline-2 outline-offset-2 transition-colors text-[#F3C974] hover:border-gray-400 "
                        href="/login"
                      >
                        Hyni
                      </a>
                      <a
                        className="inline-flex justify-center border-[1px] border-[#F3C974] rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-[#F3C974]/0 text-white hover:bg-[#F3C974]/100 hover:text-gray-800"
                        href="/Register"
                      >
                        Regjistrohu
                      </a>
                    </div>
                  </motion.div>
                </div>

                <Link
                  href="/"
                  className="hidden md:block hover:text-[#F3C974]/90 transition duration-150 ease-in-out"
                >
                  Home
                </Link>
                <Link
                  href="#vertura"
                  scroll={false}
                  className="hidden md:block hover:text-[#F3C974]/90 transition duration-150 ease-in-out"
                >
                  Vertura me Qera
                </Link>
                <Link
                  href="#kontakt"
                  scroll={false}
                  className="hidden md:block hover:text-[#F3C974]/90 transition duration-150 ease-in-out"
                >
                  Kontakt
                </Link>
                <div className=" hidden md:flex md:gap-x-[10px] lg:gap-x-[25px] items-center">
                  <Link href="login" className="text-[#F3C974] px-[10px]">
                    Hyni
                  </Link>
                  <Link
                    href="register"
                    className=" border-[1px] rounded-[4px] border-[#F3C974] bg-[#F3C974]/0 px-[15px] py-[10px] hover:bg-[#F3C974]/100 hover:text-gray-800 transition duration-300 ease-in-out"
                  >
                    Regjistrohu
                  </Link>
                </div>
              </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
