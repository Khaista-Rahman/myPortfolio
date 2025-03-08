import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faBars } from "@fortawesome/free-solid-svg-icons";


function Navbar (props){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const clicked = () =>{
    alert("the button was clicked")
  }
  return(
    <>
    {/* for large screen */}
    <div className=" hidden xl:block lg:block">
    <nav className="fixed top-0 z-20 w-full bg-[#C0C0C0] shadow-lg shadow-[#C0C0C0] p-5 flex justify-between items-center">
    <FontAwesomeIcon icon={faCode} className="text-[#101820ff] lg:text-4xl"/>
    <div className="flex gap-10">
      <a href="#" className="font-bold mr-5 hover:text-[#101820ff] hover:duration-300"><h1 className="relative group"><span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#101820ff] transition-all duration-500 group-hover:w-full"></span>Home</h1></a>
      <a href="#" className="font-bold mr-5 hover:text-[#101820ff] hover:duration-300"><h1 className="relative group"><span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#101820ff] transition-all duration-500 group-hover:w-full"></span>Education</h1></a>
      <a href="#" className="font-bold mr-5 hover:text-[#101820ff] hover:duration-300"><h1 className="relative group"><span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#101820ff] transition-all duration-500 group-hover:w-full"></span>Experience</h1></a>
      <a href="#" className="font-bold mr-5 hover:text-[#101820ff] hover:duration-300"><h1 className="relative group"><span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#101820ff] transition-all duration-500 group-hover:w-full"></span>Projects</h1></a>
      </div>
      <button className="relative flex items-center justify-center w-[95.02px] h-[42.66px] font-bold text-[#101820ff]  border border-[#101820ff] border-solid rounded-2xl overflow-hidden group cursor-pointer">
      {/* Default Text */}
      <span className="flex absolute overflow-hidden">
        <span className="transition-transform duration-200 group-hover:translate-y-[1.2em]">F</span>
        <span className="transition-transform duration-300 group-hover:translate-y-[1.2em]">o</span>
        <span className="transition-transform duration-400 group-hover:translate-y-[1.2em]">l</span>
        <span className="transition-transform duration-500 group-hover:translate-y-[1.2em]">l</span>
        <span className="transition-transform duration-600 group-hover:translate-y-[1.2em]">o</span>
        <span className="transition-transform duration-700 group-hover:translate-y-[1.2em]">w</span>
      </span>

      {/* Hover Text */}
      <span className="flex absolute overflow-hidden">
        <span className="transition-transform duration-200 -translate-y-[1.2em] group-hover:translate-y-0">L</span>
        <span className="transition-transform duration-300 -translate-y-[1.2em] group-hover:translate-y-0">i</span>
        <span className="transition-transform duration-400 -translate-y-[1.2em] group-hover:translate-y-0">n</span>
        <span className="transition-transform duration-500 -translate-y-[1.2em] group-hover:translate-y-0">k</span>
        <span className="transition-transform duration-600 -translate-y-[1.2em] group-hover:translate-y-0">e</span>
        <span className="transition-transform duration-700 -translate-y-[1.2em] group-hover:translate-y-0">d</span>
        <span className="transition-transform duration-700 -translate-y-[1.2em] group-hover:translate-y-0">I</span>
        <span className="transition-transform duration-700 -translate-y-[1.2em] group-hover:translate-y-0">n</span>
      </span>
    </button>

    </nav>
    </div>
    {/* for small screen */}
    <div className="xl:hidden lg:hidden">
      <nav className="fixed top-0 z-20 w-full bg-[#C0C0C0] shadow-lg shadow-[#C0C0C0] p-5 px-5 flex justify-between items-center">
      <FontAwesomeIcon icon={faCode} className="text-[#101820ff] text-xl"/>
      <div className="relative">
      {/* Menu Button */}
      <button onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} className="text-[#101820] text-xl" />
      </button>

      {/* Sliding Menu */}
      <div
        className={`absolute top-10 -left-20 w-full  p-5  transition-transform duration-500 ${
          isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        }`}
      >
        <a href="#" className="font-bold block py-2 text-[#C0C0C0] duration-200  hover:text-[#101820]">
          Home
        </a>
        <a onClick={clicked} href="#" className="font-bold block py-2 text-[#C0C0C0] duration-200  hover:text-[#101820]">
          Education
        </a>
        <a href="#" className="font-bold block py-2 text-[#C0C0C0] duration-200  hover:text-[#101820]">
        Experience
        </a>
        <a href="#" className="font-bold block py-2 text-[#C0C0C0] duration-200 hover:text-[#101820]">
        Projects
        </a>
      </div>
    </div>
      </nav>
    </div>
    </>
  )
}

export default Navbar;