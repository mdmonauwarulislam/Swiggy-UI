import React, { useState, useEffect } from "react";
import Card from "./Card"
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
function TopResturant() {
  const [slidex, setSlidex] = useState(0);
  const [resturant, setResturant] = useState([]);
  const fetchTopResturant = async () => {
    const response = await fetch("http://localhost:5000/top-restaurant-chains/");
    const data = await response.json();
    setResturant(data);
  };

  useEffect(() => {
    fetchTopResturant();
  }, []);

  const nextSlide = () => {
    if (resturant.length - 8 === slidex) return false;
    setSlidex(slidex + 3);
  };
  const prevSlide = () => {
    if (slidex === 0) return false;
    setSlidex(slidex - 3);
  };
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between my-4 items-center">
        <div className="text-[25px] font-bold">
          Top resturant chains in Patna
        </div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-1"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-1"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div  className="flex gap-6 overflow-hidden" >
        <div></div>
        { 
            resturant.map(
                (resturant, index) => {
                    return  <Card {...resturant} key={index} 
                    />
                }

            )
        }
      </div>
      <hr className="my-5 border-[1]" />
    </div>
  );
}

export default TopResturant;
