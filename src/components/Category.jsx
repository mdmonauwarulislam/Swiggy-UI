import React, { useState, useEffect } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

function Category() {
  const [slidex, setSlidex] = useState(0);
  const [categories, setCategories] = useState([]);
  const fetchCategory = async () => {
    const response = await fetch("http://localhost:5000/categories/");
    const data = await response.json();
    setCategories(data);
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const nextSlide = () => {
    if (categories.length - 8 === slidex) return false;
    setSlidex(slidex + 3);
  }
  const prevSlide = () => {
    if (slidex === 0) return false;
    setSlidex(slidex - 3);
  }
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="flex justify-between my-4 items-center">
        <div className="text-[25px] font-bold">What's on your mind?</div>
        <div className="flex">
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-1 cursor-pointer"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </div>
          <div
            className="flex justify-center items-center w-[30px] h-[30px] bg-[#e2e2e7] rounded-full mx-1 cursor-pointer"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden">
        {categories.map((category, index) => {
          return (
            <div
              style={{
                transform: `translateX(-${slidex * 100}%)`
              }}
              key={index}
              className="w-[150px] shrink-0 duration-500"
            >
              <img
                src={"http://localhost:5000/images/" + category.image}
                alt=""
              />
            </div>
          );
        })}
      </div>
      <hr className="my-5 border-[1px]" />

    </div>
  );
}

export default Category;
