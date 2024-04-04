import React from "react";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaViber } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import '../../../static/css/main.css'
import '../../../static/css/sidebar.css'
import { BiSolidCategory } from "react-icons/bi";
import { FcAbout } from "react-icons/fc";
import { MdContactPage } from "react-icons/md";
import { LuContainer } from "react-icons/lu";
import { MdMedicalInformation } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Sidebar = () => {
  return (

      <div className="height-content z-40 overflow-y-auto sidebar-main bg-anovanavbar max-w-56 p-1 md:p-2">
        <div className="sidebar-main-list-group-1">
            <ul>
                <li><Link href='/' className="flex rounded-lg sidebar-main-justify-center items-center text-anovatext1 text-base gap-2 mb-2 p-2 hover:bg-anova6"><FaHome /><span className="list-menu">Home</span></Link></li>
                <li><Link href='/products' className="flex rounded-lg sidebar-main-justify-center items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><LuContainer /><span className="list-menu">Product</span></Link></li>
                <li><Link href='#' className="flex rounded-lg sidebar-main-justify-center items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><BiSolidCategory /><span className="list-menu">Category</span></Link></li>
                <li><Link href='#' className="flex rounded-lg sidebar-main-justify-center items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><MdMedicalInformation /><span className="list-menu">About</span></Link></li>
                <li><Link href='/profile' className="flex rounded-lg sidebar-main-justify-center items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><MdContactPage /><span className="list-menu">Profile</span></Link></li>
            </ul>
        </div>
    <hr className="px-2 border-anovatext2"/>
        <div className="sidebar-main-list-group-2 list-menu">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Featured</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>All</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Apps</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Games</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Surveys</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>GPT</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Deposits</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Games</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Surveys</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>GPT</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Deposits</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Games</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Surveys</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>GPT</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 hover:bg-anova6"><p>Deposits</p><span className="bg-anovatext2 text-xs md:text-sm rounded-full px-1 text-center">10</span></Link></li>

                  </ul>
        </div>

        <hr className="px-2 border-anovatext2 list-menu"/>

        <div className="sidebar-main-list-group-3 my-3 list-menu">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-xs gap-2 my-1 p-1 hover:bg-anova6"><p>Frequently Asked</p></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-xs gap-2 my-1 p-1 hover:bg-anova6"><p>Terms & Conditions</p></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 text-xs gap-2 my-1 p-1 hover:bg-anova6"><p>Privacy Policy</p></Link></li>
              
                  </ul>
        </div>

        <hr className="px-2 border-anovatext2 list-menu"/>
        <div className="sidebar-main-list-group-2 list-menu">
            <ul>
                <li><Link href='#' className="flex items-center text-anovatext1 text-base gap-2 my-2 p-2 bg-anova6"><Image width={28} height={28} src='/images/Nepal.png'/><p>Nepal</p></Link></li>
                <ul className="flex justify-between my-4">
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-blue-800 rounded-full"><FaFacebook /><span className="text-xs hidden hover:block">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-pink-600 rounded-full"><FaInstagram /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-blue-400 rounded-full"><FaXTwitter /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-purple-800 rounded-full"><FaViber /><span className="text-xs hidden">Product</span></Link></li>
                <li><Link href='#' className="flex items-center text-anovatext1 hover:text-white text-base gap-2 p-2 hover:bg-yellow-600 rounded-full"><MdOutlineEmail /><span className="text-xs hidden">Product</span></Link></li>

                
                  </ul>
                  </ul>
        </div>


        <div className="sidebar-main-list-group-5 mt-2">
            <ul className="relative ">
                <li><Link href='#' className="flex px-2  lg:px-3 inset-x-0 py-2 overflow-hidden bottom-0 flex items-center text-white bg-green-600 rounded-lg text-base gap-2 mb-2 p-2 hover:bg-anova6"><FaUserCircle /><span className="list-menu">Signin</span></Link></li>
                 </ul>
        </div>
      </div>
   
  );
};

export default Sidebar;
