import { Fragment, useState } from "react";
import { Combobox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";

const people = [
  { id: 0, name: "All Vehicles" },
  { id: 1, name: "Alfa Romeo" },
  { id: 2, name: "Audi" },
  { id: 3, name: "BMW" },
  { id: 4, name: "Chevrolet" },
  { id: 5, name: "Citroen" },
  { id: 6, name: "Dodge" },
  { id: 7, name: "Ferrari" },
  { id: 8, name: "Fiat" },
  { id: 9, name: "Ford" },
  { id: 10, name: "Infiniti" },
  { id: 11, name: "Jaguar" },
  { id: 12, name: "Jeep" },
  { id: 13, name: "Kia" },
  { id: 14, name: "Land Rover" },
  { id: 15, name: "Mazda" },
  { id: 16, name: "Mercedes-Benz" },
  { id: 17, name: "Mitsubishi" },
  { id: 18, name: "Nissan" },
  { id: 19, name: "Porsche" },
  { id: 20, name: "Toyota" },
  { id: 21, name: "Volkswagen" },
  { id: 22, name: "Volvo" },
];

function SearchManufacturer() {
  const [selected, setSelected] = useState(people[0]);
  const [query, setQuery] = useState("");

  const filteredPeople =
    query === ""
      ? people
      : people.filter((person) =>
          person.name
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        );
  return (
    <Combobox value={selected} onChange={setSelected} className="sm:w-96 h-fit">
      <div className="relative w-full">
        <div className="flex items-center relative  cursor-default overflow-hidden rounded-t-md md:rounded-l-full bg-white text-left shadow-none sm:shadow-md focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-[#F3C974] sm:text-sm">
          <Combobox.Input
            className="block w-full border-none py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 focus:ring-2 sm:text-sm sm:leading-6"
            displayValue={(person) => person.name}
            onChange={(event) => setQuery(event.target.value)}
          />
          <Combobox.Button className="absolute inset-y-0 right-0 flex items-center pr-2">
            <ChevronUpDownIcon
              className="h-5 w-5 text-gray-400"
              aria-hidden="true"
            />
          </Combobox.Button>
        </div>
        <Transition
          as={Fragment}
          leave="transition ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
          afterLeave={() => setQuery("")}
        >
          <Combobox.Options className=" z-10 absolute mt-1 w-full h-[100px] overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
            {filteredPeople.length === 0 && query !== "" ? (
              <div className="relative cursor-default select-none py-2 px-4 text-gray-700">
                Nothing found.
              </div>
            ) : (
              filteredPeople.map((person) => (
                <Combobox.Option
                  key={person.id}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-[#F3C974] text-white" : "text-gray-900"
                    }`
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {person.name}
                      </span>
                      {selected ? (
                        <span
                          className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                            active ? "text-white" : "text-[#F3C974]"
                          }`}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Combobox.Option>
              ))
            )}
          </Combobox.Options>
        </Transition>
      </div>
    </Combobox>
  );
}

export default SearchManufacturer;
