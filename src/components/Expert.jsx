import React, { useState } from "react";





function Expert(Props) {
  const [count , setCount] = useState()
  

  return(
    <>
    <nav id="cont6Nav" className="w-full mt-28">
      <h2 className="font-bold text-[#C0C0c0] text-center">Hello</h2>
      <h1 className="font-bold text-white text-center lg:text-2xl md:text-xl xl:text-4xl">Available Services that <br /> I can work on</h1>
    </nav>

    <div className="w-full mt-10">
    <div className="mt-10 px-5 w-full flex justify-evenly items-center">
              <div className="w-full flex justify-evenly">
              <button id="cont6btn1" class="relative cursor-pointer overflow-hidden border bg-black border-gray-300 hover:text-black text-white font-bold px-4 py-4 rounded group mt-2  w-full lg:w-[20%] xl:w-[20%] md:w-[20%]">
            <span class="relative z-10 font-bold text-sm">HTML</span>
            <div class="absolute inset-0 bg-[#C0C0C0] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            <button id="cont6btn1" class="relative cursor-pointer overflow-hidden border bg-black border-gray-300 hover:text-black text-white font-bold px-4 py-4 rounded group mt-2  w-full lg:w-[20%] xl:w-[20%] md:w-[20%]">
            <span class="relative z-10 font-bold text-sm">CSS</span>
            <div class="absolute inset-0 bg-[#C0C0C0] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            <button id="cont6btn1" class="relative cursor-pointer overflow-hidden border bg-black border-gray-300 hover:text-black text-white font-bold px-4 py-4 rounded group mt-2  w-full lg:w-[20%] xl:w-[20%] md:w-[20%]">
            <span class="relative z-10 font-bold text-sm">javascript</span>
            <div class="absolute inset-0 bg-[#C0C0C0] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            <button id="cont6btn1" class="relative cursor-pointer overflow-hidden border bg-black border-gray-300 hover:text-black text-white font-bold px-4 py-4 rounded group mt-2  w-full lg:w-[20%] xl:w-[20%] md:w-[20%]">
            <span class="relative z-10 font-bold text-sm">React</span>
            <div class="absolute inset-0 bg-[#C0C0C0] transition-transform duration-500 transform translate-y-full group-hover:translate-y-0"></div>
            </button>
            
                
              </div>
            </div>
      <div className="w-full flex justify-end">
      <p id="cont6lorem" className="lg:w-1/2 md:w-1/2 xl:w-1/2 w-full text-white mt-5 text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae eveniet cupiditate doloremque id, praesentium distinctio nisi voluptate porro delectus odit dignissimos vitae proek. Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, natus!</p>
      </div>
      
    </div>
    
    </>
  )
}

export default Expert;