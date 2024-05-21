import React, { useState } from "react";
import { ImBehance2 } from "react-icons/im";
import { RxCaretDown } from "react-icons/rx";
import { CgSearch,CgProfile  } from "react-icons/cg";
import { RiDiscountPercentLine, RiCustomerService2Line } from "react-icons/ri";
import { LuShoppingBag } from "react-icons/lu";



function Header() {
  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(true);
  };
  const closeToggle = () => {
    setToggle(false);
  };
  const links = [
    {
      icon : <CgSearch />,
      name : "Search"
    },
    {
      icon : <RiDiscountPercentLine />,
      name : "Offers"
    },
    {
      icon : <RiCustomerService2Line />,
      name : "Help"
    },
    {
      icon : <CgProfile />,
      name : "Sign In"
    },
    {
      icon : <LuShoppingBag />,
      name : "Cart"
    },
  ]
  return (
    <>
      <div
        className="black-overlay h-full w-full fixed duration-500 ease-in z-10"
        onClick={closeToggle}
        style={{
          opacity: toggle ? 1 : 0,
          visibility: toggle ? "visible" : "hidden",
        }}
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
          }}
          className="h-full w-1/4 bg-white absolute duration-700 ease-in z-[11]"
          style={{
            left: toggle ? "0%" : "-100%",
          }}
        ></div>
      </div>
      <header className="p-3 shadow-xl sticky top-0 z-[9] bg-white">
        <div className="max-w-[1200px] mx-auto flex items-center">
          <div className="">
            <ImBehance2 className="text-4xl text-orange-600" />
          </div>
          <div className="pl-9 text-[0.9rem]">
            <span className="border-b-2 border-black font-bold hover:text-orange-600">
              Patna
            </span>{" "}
            Phulwari Sharif 801505{" "}
            <RxCaretDown
              className="inline text-2xl text-orange-600"
              onClick={toggleMenu}
            />
          </div>
          <nav className="hidden md:flex list-none gap-10 ml-auto text-[1rem]">
            {
              links.map(
                (link, index) => {
                  return <li key={index} className="flex items-center gap-2 text-[1rem] curp">
                    {link.icon}
                    {link.name}
                  </li>
                }
              )
            }
            
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
