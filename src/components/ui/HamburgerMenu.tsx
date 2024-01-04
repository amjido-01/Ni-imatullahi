import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import logo from "@/assets/logo.png";
// import { AnimatedLink } from "./AnimatedLink";
import { Links } from "./Links";
import { useNavigate } from "react-router-dom";


export const HamburgerMenu: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen)
  }

  return (
    <header className={`w-full fixed h-[4.375rem] top-[4.5rem] left-0 z-20`}>
      {/* <div className=" w-[95%] md:w-[87%] mx-auto bgg"> */}
        <nav className="w-[95%] px-[2.75rem] h-full md:w-[85%] bgg  flex justify-between items-center mx-auto">
          <div>
            <img
              src={logo}
              className="w-[2rem] h-[1.69044rem] md:w-[2.40088rem] md:h-[2.40088rem] object-cover"
              alt="Logo"
            />
          </div>

          <div className="z-40 border-[1px] border-solid border-[#fff] rounded-[1.5rem] flex items-center justify-center py-[0.125rem ] px-[0.75rem] md:py-[0.25rem] md:px-[1rem] w-[7.25rem] h-[2rem]">
            <div>
              <span className="text-[#fff] text-[0.875rem] md:text-[1.25rem] style font-normal transform duration-500 capitalize leading-[120%] ease-in-out">
                {isOpen ? "close" : "Menu"}
              </span>
            </div>

            <Hamburger
              toggled={isOpen}
              toggle={setOpen}
              color="#fff"
              size={20}
              easing="ease-in"
              rounded
              distance="sm"
            />
          </div>
        </nav>

        <div
          className={`nav-menu h-scree left-0 ${
            isOpen
              ? "active left-0"
              : ""
          }`}
        >
          <ul
          className="flex nav-list border-2 mt-2 absolute bottom-20 md:bottom-10 flex-col justify-end md:p-4 w-[70%] md:w-[60%] ml-[70px] md:ml-[100px] md:mb-[100px"
          >
            <li>
              <Links to='/' imgSrc="/imgs/random/11.jpg" children="Home" handleRoute={(e) => {
                e.preventDefault();
                navigate('/')
                toggleMenu()
              }}/>
              
            </li>
          </ul>
          {/* <AnimatedLink /> */}
        </div>
      {/* </div> */}
    </header>
  );
};
