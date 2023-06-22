import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import CardImages from "../components/CardImages";
import SearchBar from "../components/SearchBar";
import Offer from "../components/Offer";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import cars from "../utils/cars";

export default async function Home() {
  return (
    <div>
      <Navbar />
      <main>
        <Hero />
        <section id="vertura" className="w-full bg-[#fdfdfd] my-20">
          <div className="mx-auto max-w-7xl px-8 md:px-6 lg:px-8">
            <div className="flex flex-col w-auto items-center">
              <h2 className="text-[25px] lg:text-[37px] capitalize font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-700 via-gray-900 to-black ">
                Katalogu i makinavee
              </h2>
              <p className="text-base text-gray-500">
                Le të gjejmë makinën tuaj të ëndrrave
              </p>
              <SearchBar />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 max-w-7xl my-6">
                {cars?.map((car) => (
                  <CardImages car={car} />
                ))}
              </div>
            </div>
          </div>
        </section>
        <section>
          <Offer />
        </section>
        <section id="kontakt">
          <Contact />
        </section>
        <Footer />
      </main>
    </div>
  );
}
