import React, { useState } from "react";
import "./Experience.css"

function Experience(props) {
  const [count , setCount] = useState();


  return(
    <>
    <div className="w-full px-10 mt-40 relative">
  <nav className="w-full flex">
    <a href="#" className="btn-shine tracking-widest">Experience</a>
  </nav>
  <div className="mt-10 flex flex-col lg:flex-row md:flex-row xl:flex-row justify-between items-center gap-10">
    <div className="hidden md:flex w-1/2 justify-center">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>  
      </div>
    </div>
    <p className="text-white xl:w-1/2 md:w-1/2 lg:w-1/2 w-full text-sm">
    Temporibus, laborum nesciunt illo libero quasi ipsam fugiat magnam doloremque tempore facilis. Eos quod eveniet laborum, obcaecati soluta deleniti? Aliquid eum nulla quas dolores sit et error nostrum voluptatibus voluptas.
      Harum praesentium unde est porro, recusandae nobis maxime doloremque, in, pariatur minima deserunt sint error id sunt. Mollitia dolorem ducimus soluta. Aperiam libero nam perferendis molestias repudiandae, atque ad enim!
      
    </p>
    
  </div>
</div>

<div className="w-full px-10 mt-10 relative">
  <div className="mt-10 flex flex-col lg:flex-row md:flex-row xl:flex-row  justify-between items-center gap-10">
    <p className="text-white xl:w-1/2 md:w-1/2 lg:w-1/2 w-full text-sm decoration-0">
      Temporibus, laborum nesciunt illo libero quasi ipsam fugiat magnam doloremque tempore facilis. Eos quod eveniet laborum, obcaecati soluta deleniti? Aliquid eum nulla quas dolores sit et error nostrum voluptatibus voluptas.
      Harum praesentium unde est porro, recusandae nobis maxime doloremque, in, pariatur minima deserunt sint error id sunt. Mollitia dolorem ducimus soluta. Aperiam libero nam perferendis molestias repudiandae, atque ad enim!
      
    </p>
    <div className="hidden md:flex w-1/2 justify-center">
      <div className="pyramid-loader">
        <div className="wrapper">
          <span className="side side1"></span>
          <span className="side side2"></span>
          <span className="side side3"></span>
          <span className="side side4"></span>
          <span className="shadow"></span>
        </div>  
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default Experience;