import React, { useState } from "react";





function Footer(Props) {
  const [count , setCount] = useState()
  

  return(
    <>
    <footer className="w-full mt-20">
      <h1 className="text-center text-[#C0C0C0] font-bold">Conversation</h1>
      <h1 className="text-xl lg:text-4xl md:text-2xl xl:text-6xl font-semibold text-white text-center leading-tight mt-10">Last talk to <br />Collaboration</h1>

      <div className="flex justify-center items-center gap-5 mt-5">
       <a id="Linkedin" href="#" className="text-black hover:text-white border border-solid border-gray-400 py-2 px-4 font-extrabold bg-[#C0C0C0] duration-500 hover:bg-black rounded-sm text-lg"><i class="fa-brands fa-whatsapp"></i></a>
       <a id="Whatsapp" href="#" className="text-white hover:text-black border border-solid border-gray-400 py-2 px-4 font-extrabold duration-500 hover:bg-[#C0C0C0] rounded-sm text-lg"><i class="fa-brands fa-linkedin-in"></i></a>
      </div>
    </footer>

    <div className="w-full flex justify-between items-center mt-20 flex-wrap">
      <div className="lg:w-1/2 xl:w-1/2 md:w-1/2 w-full mt-5">
      <h1 className="text-white text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores necessitatibus id vero nisi sapiente harum animi sint cupiditate recusandae repellendus. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi, neque?</h1>

      <h1 className="text-gray-500 text-sm mt-10">Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, incidunt!</h1>
      </div>
      <div className="mt-5">
      <a href="#" className="text-gray-400 font-bold hover:text-[#C0C0C0] hover:duration-200 "><h1 className=" font-bold relative group">
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C0C0C0] transition-all duration-500 group-hover:w-full"></span>
        Contact Me
      </h1></a>
      <a href="#" className="text-gray-400 font-bold hover:text-[#C0C0C0] hover:duration-200 "><h1 className=" font-bold relative group">
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C0C0C0] transition-all duration-500 group-hover:w-full"></span>
        About me
      </h1></a>
      <a href="#" className="text-gray-400 font-bold hover:text-[#C0C0C0] hover:duration-200 "><h1 className=" font-bold relative group">
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C0C0C0] transition-all duration-500 group-hover:w-full"></span>
        Home
      </h1></a>
      <a href="#" className="text-gray-400 font-bold hover:text-[#C0C0C0] hover:duration-200 "><h1 className=" font-bold relative group">
        <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#C0C0C0] transition-all duration-500 group-hover:w-full"></span>
        Help
      </h1></a>
      </div>
    </div>
    </>
  )
}


export default Footer;