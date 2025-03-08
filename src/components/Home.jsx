import React, { useState , useEffect } from "react";
import khaistaImage from "./images/khaista2.jpg"

function Home(props){
  const texts = ["it's KHAISTA RAHMAN", "FRONTEND DEVELOPER"];
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    const updateText = () => {
      const fullText = texts[index];

      if (!isDeleting) {
        // Add characters smoothly
        setCurrentText((prev) => fullText.slice(0, prev.length + 1));
        if (currentText === fullText) {
          timeout = setTimeout(() => setIsDeleting(true), 1500); // Pause before deleting
        } else {
          timeout = setTimeout(updateText, 120); // Typing speed
        }
      } else {
        // Remove characters smoothly
        setCurrentText((prev) => prev.slice(0, -1));
        if (currentText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % texts.length); // Move to next text
        } else {
          timeout = setTimeout(updateText, 80); // Deleting speed
        }
      }
    };

    timeout = setTimeout(updateText, 100);
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, index, texts]);


  return(
    <>
    <div className="mt-20 px-10 w-full flex justify-center items-center relative ">
      <h1 className="absolute xl:left-60 lg:left-60 left-10 md:top-40  font-bold xl:text-4xl lg:text-4xl md:text-xl text-sm text-white tracking-widest z-10 mt-12">{currentText} <br />
      <p className="text-white xl:font-extrabold lg:font-extrabold md:font-extrabold tracking-widest sm:text-xs mt-40 ">Hello! I'm Khaista Rahman, it's a pleasure to meet you. <br />Welcome to my personal portfolio, where I showcase my journey, skills, <br /> and passion for frontend development. I'm excited to share my work with you!</p>
      </h1>
      <div className="relative">
      <img src={khaistaImage} alt="simple Image" srcset="" className="xl:h-[600px] xl:w-[600px] lg:h-[600px] lg:w-[600px] md:h-[600px] md:w-[600px] rounded-full "/>
      </div>
    </div>
    <div className="w-full lg:px-20 xl:px-20 md:px-20 px-10 ">
    
    </div>
    </>
  )
}

export default Home;