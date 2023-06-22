import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-800 ">
      <div className="flex flex-col text-center">
        <h1 className=" text-gray-100 font-extrabold text-9xl">404</h1>
        <p className="text-base text-gray-400 mt-2">
          Faqja që po kërkoni është aktualisht e padisponueshme 😢{" "}
        </p>
        <div className="mt-6">
          <Link
            href=""
            className="text-gray-200 text-[14px] md:text-[16px] border-[1px] rounded-[4px] border-[#F3C974] bg-[#F3C974]/0 px-[15px] py-[10px] uppercase hover:bg-[#F3C974]/100 hover:text-gray-800 transition duration-300 ease-in-out"
          >
            Kthehu mbrapa
          </Link>
        </div>
      </div>
    </div>
  );
}
