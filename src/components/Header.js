import React, { useState } from "react";
import { cart } from "../assets/images/index";
import { logo } from "../assets/images/index";
import { car } from "../assets/images/index";
import "../App.css";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';

export const Header = () => {
  const productData = useSelector((state) => state.productData)
  //console.log(productData)
  const [isActive, setIsActive] = useState(false);

  const showMenu = () => {
    setIsActive((current) => !current);
  };
  return (
    <div className='sticky top-0 z-50 bg-white'>
      <div className="sticky top-0 mobile-nav w-full h-15 py-2 px-4">
        <div className="flex h-full w-full items-center justify-between">
          <div>
            <Link to='/'>
                <img src={logo}  alt='E-Commerce logo'/> 
            </Link>
          </div>
          <div>
            <BiMenuAltRight onClick={showMenu} className="text-3xl" />
          </div>
        </div>
        <div
          className={
            !isActive
              ? "mobile-nav-show flex mt-8 flex-col items-center gap-8"
              : "mobile-nav-hide flex mt-8 flex-col items-center gap-8"
          }
        >
          <div>
            <ul className="flex flex-col items-center gap-8 font-titleFont">
              <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Flash Sale
              </li>
              <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
               Payday Sale
              </li>
              <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
               Live
              </li>
              <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Partner Malls
              </li>
              <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                Notifications
              </li>
            </ul>
            
            <div className='flex flex-col items-center' >
            <Link to='/cart'>
                <div className="relative flex items-center flex-col w-10">
                    <img className="w-10" src={cart} alt="cart" />
                    <span className="text-xs text-center h-5 w-5 flex flex-col justify-center align-center absolute top-0 right-0 bg-yellow-400 rounded-full text-white">
                        {productData.length}
                    </span>
                </div>
            </Link>
            <img
              className="w-10 rounded-full bg-gray-600"
              src={car}
              alt="user"
            />
          </div>
          </div>
          </div>
        </div>

        <div className="sticky top-0 wide-screen-nav w-full h-20 bg-white border-b-[1px] border-b-white px-4">
          <div className="flex items-center justify-between h-full mx-auto max-w-screen-xl">
            <div>
            <Link to='/'>
                <img className='w-9' src={logo}  alt='logo'/>
            </Link>
              
            </div>

            <div className="flex items-center gap-8">
              
                <ul className="flex items-center gap-8 font-titleFont">
                  <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    Home
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    HShop
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    HProducts
                  </li>
                  <li className="text-base text-black font-bold hover:text-orange-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
                    HSomething
                  </li>
                </ul>
                
                <div className="relative">
                <Link to='/cart'>
                  <img className="w-10" src={cart} alt="cart" />
                  <span className="text-xs text-center h-5 w-5 flex flex-col justify-center align-center absolute top-0 right-0 bg-yellow-400 rounded-full text-white">
                    {productData.length}
                  </span>
                </Link>
                </div>
                <img
                  className="w-10 rounded-full bg-gray-600"
                  src={car}
                  alt="user"
                />
              
            </div>
          </div>
        </div>
    </div>
  );
};
