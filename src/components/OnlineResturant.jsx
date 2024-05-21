import React, { useState, useEffect, useRef } from "react";
import { AiOutlineSwap } from "react-icons/ai";
import { PiCaretDownBold } from "react-icons/pi";


import Card from "./Card";

function OnlineResturant() {
  const [resturant, setResturant] = useState([]);
  const fetchOnlineResturant = async () => {
    const response = await fetch(
      "http://localhost:5000/top-restaurant-chains/"
    );
    const data = await response.json();
    setResturant(data);
  };

  useEffect(() => {
    fetchOnlineResturant();
  }, []);

  const headerRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const headerTop = headerRef.current.getBoundingClientRect().top;
        setIsAtTop(headerTop <= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto" ref={headerRef}>
      <div className="flex justify-between my-4 items-center">
        <div className="text-[25px] font-bold">
          Restaurants with online food delivery in Patna
        </div>
      </div>
      <div
        className={
          isAtTop ? "fixed top-0 z-[999999] w-full bg-white left-0" : ""
        }
      >
        <div className="max-w-[1200px] mx-auto md:flex my-4 gap-3 hidden">
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            Filter <AiOutlineSwap className="text-xl inline" />
          </div>
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            Sort <PiCaretDownBold className="text-xl inline" />
          </div>
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            Fast Delivery
          </div>
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            New On Swiggy
          </div>
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            Rating 4.0+
          </div>
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            Pure Veg
          </div>
          <div className="px-3 py-2 rounded-full border bg-slate-100  gap-2 cursor-pointer">
            Offers
          </div>
        </div>
      </div>
      <div className="md:grid grid-cols-4 gap-6 overflow-hidden">
        {resturant.map((resturant, index) => {
          return <Card {...resturant} key={index} />;
        })}
      </div>
    </div>
  );
}

export default OnlineResturant;
