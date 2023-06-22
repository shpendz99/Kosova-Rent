import React, { useEffect, useRef, useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRange } from "react-date-range"; /*  */
import format from "date-fns/format";

function SearchDate() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  // open close
  const [open, setOpen] = useState(false);

  // get the target element to toggle
  const refOne = useRef(null);

  useEffect(() => {
    // set current date on component load
    // setStartDate(format(new Date(), "MM/dd/yyyy"));
    // setEndDate(format(new Date(), "MM/dd/yyyy"));
    // event listeners
    document.addEventListener("keydown", hideOnEscape, true);
    document.addEventListener("click", hideOnClickOutside, true);
  }, []);

  // hide dropdown on ESC press
  const hideOnEscape = (e) => {
    // console.log(e.key)
    if (e.key === "Escape") {
      setOpen(false);
    }
  };

  // Hide on outside click
  const hideOnClickOutside = (e) => {
    if (refOne.current && !refOne.current.contains(e.target)) {
      setOpen(false);
    }
  };

  return (
    <div className="flex-1 items-center cursor-default text-left shadow-none sm:shadow-md focus:outline-none  sm:text-sm">
      <div className="flex-col relative block">
        <input
          type="text"
          id="startDate"
          value={selectionRange.startDate + selectionRange.endDate}
          className="w-full border-none overflow-hidden py-2 pl-3 pr-10 text-sm leading-5 text-gray-900 sm:text-sm sm:leading-6 "
          onClick={() => setOpen((open) => !open)}
        />
        <div ref={refOne}>
          {open && (
            <DateRange
              dateFormat="MM-DD-YYYY"
              ranges={[selectionRange]}
              minDate={new Date()}
              rangeColors={["#F3C974"]}
              onChange={handleSelect}
              className=" absolute z-40  top-[50px] shadow-2xl "
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SearchDate;

