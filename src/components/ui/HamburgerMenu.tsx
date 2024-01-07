import React, { useState } from "react";
import { Cross as Hamburger } from "hamburger-react";
import logo from "@/assets/logo.png";
import { Links } from "./Links";
import { useNavigate } from "react-router-dom";
import myimg from '@/assets/myimg.png';
import mycv from '@/assets/mycv.png'


const linksData = [
  {
    id: 0,
    pageUrl: '/',
    imgSrc: '/imgs/random/11.jpg',
    children: 'Home',
    // handleRoute: (e) => {e.preventDefault(), navigate(`${url}`), toggleMenu()}
  },
  {
    id: 1,
    pageUrl: '/works',
    imgSrc: '/imgs/random/11.jpg',
    children: 'Works',
    // handleRoute: (e) => {e.preventDefault(), navigate(`${url}`), toggleMenu()}
  },
  {
    id: 2,
    pageUrl: '/about',
    imgSrc: myimg,
    children: 'About',
    // handleRoute: (e) => {e.preventDefault(), navigate(`${url}`), toggleMenu()}
  },
  {
    id: 3,
    pageUrl: '/graphics',
    imgSrc: '/imgs/random/11.jpg',
    children: 'Graphics',
    // handleRoute: (e) => {e.preventDefault(), navigate(`${url}`), toggleMenu()}
  },
  {
    id: 4,
    pageUrl: '/cv',
    imgSrc: mycv,
    children: 'Cv',
    // handleRoute: (e) => {e.preventDefault(), navigate(`${url}`), toggleMenu()}
  },
]

export const HamburgerMenu: React.FunctionComponent = () => {
  const navigate = useNavigate()
  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen)
  }
  console.log(linksData);
  isOpen ? document.body.style.overflowY = 'hidden' : document.body.style.overflowY = 'visible';

  return (
    <header className={`w-full fixed h-[3rem] md:h-[4.375rem] top-[2rem] md:top-[2.4rem] left-0 z-20`}>
        <nav className="w-[90%] px-[1rem] md:px-[2.75rem] h-full md:w-[85%] bgg flex justify-between items-center mx-auto">
          <div>
            <img
              src={logo}
              className="w-[2rem] h-[1.69044rem] md:w-[2.40088rem] md:h-[2.40088rem] object-cover"
              alt="Logo"
            />
          </div>

          <div className="z-40 border-[1px] border-solid border-[#fff] rounded-[1.5rem] flex items-center justify-center py-[0.125rem ] px-[0.75rem] md:py-[0.25rem] md:px-[1rem] w-[7.25rem] h-[2rem]">
            <div>
              <span onClick={() => setOpen(!isOpen)} className="text-[#fff] text-[0.875rem] cursor-pointer md:text-[1.25rem] style font-normal transform duration-500 capitalize leading-[120%] ease-in-out">
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
          className={`nav-menu h-screen border-2 border-red-500 left-0 px-4 sm:px-8 md:px-0 ${
            isOpen
              ? "active left-0"
              : ""
          }`}
        >
          <div className="flex nav-list border2 mt-2 absolute bottom-20 md:bottom-0 flex-col justify-end md:w-[82%]  md:ml-[100px]">
            <ul className="border-2">
                {linksData.map((item) => (
                <li key={item.id}>
                  <Links handleRoute={(e) => {e.preventDefault(), navigate(item.pageUrl), toggleMenu()}} to={item.pageUrl} imgSrc={item.imgSrc} children={item.children} />
                </li>
              ))}
            </ul>
          </div>
           
         
        </div>
    </header>
  );
};
