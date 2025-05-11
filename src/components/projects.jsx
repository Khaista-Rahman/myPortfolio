import React, { useState , useEffect , useRef } from "react";
import './Experience.css';
import './projects.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import watchImage from "../components/images/latest1 .avif"
import groupImage from "../components/images/groupPic.jpg"
import serviceCenter from "../components/images/service-center.jpg"



function Projects(){
  const [count , setCount] = useState();

  const containerRef = useRef(null);
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    const speed = 1; // Adjust speed of scrolling

    const animate = () => {
      setPosition((prev) => {
        const resetPosition = -container.scrollWidth / 2; // Reset when halfway
        return prev <= resetPosition ? 0 : prev - speed;
      });
      requestAnimationFrame(animate);
    };

    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId); // Cleanup on unmount
  }, []);

  return(
    <>
     <div className="relative h-16 bg-[#C0C0C0] w-full overflow-hidden mt-20">
      {/* Moving Headers */}
      <div
        ref={containerRef}
        className="absolute flex space-x-8"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Original Content */}
        {Array.from({ length: 10 }, (_, i) => (
          <h1 key={`original-${i}`} className="text-2xl font-bold ">
            Frontend Developer {i + 1}
          </h1>
        ))}

        {/* Duplicate Content for Infinite Effect */}
        {Array.from({ length: 10 }, (_, i) => (
          <h1 key={`duplicate-${i}`} className="text-2xl font-bold ">
            Frontend Developer {i + 1}
          </h1>
        ))}
      </div>

      
    </div>

    <div className="w-full px-20 relative ">
      <nav className="w-full flex mt-10">
      <a href="#" className="btn-shine tracking-widest">Projects</a>
      </nav>

      <nav  className="px-5 mt-10 w-full flex flex-wrap justify-between items-center">
        <h1 id="flutterCont"  className="font-bold mt-5 text-white lg:text-2xl md:text-xl xl:text-2xl"><span className="text-[#C0C0C0] text-3xl tracking-widest">"Bringing concepts to life<br/> through clean and efficient  Flutter development"</span> <br /> <span className="tracking-widest">FROM - 2022</span></h1>

        <div id="flutterCont2">
          <h1  className="text-gray-200 mt-5 font-extrabold tracking-widest">SEE THE MAGIC <br /> IN  CODE</h1>
          <a href="https://github.com/Khaista-Rahman" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="text-white mt-5  text-4xl hover:text-[#C0C0C0] transition" />
                </a>
        </div>
      </nav>

      <div className="w-full mt-10 flex flex-wrap justify-evenly">
        <div class="book">
            <p className="text-center text-sm font-bold ml-6">Crafted a sleek, responsive website for a luxury watch company, blending timeless design with modern technology. From smooth animations to clean product showcases, this digital storefront mirrors the craftsmanship of fine timepieces—elegant, bold, and built to last.</p>
            <div class="cover">
                <img src={watchImage} alt="image was not downloaded" className="w-full h-full bg-cover bg-center"/>
            </div>
          </div>
          <div class="book">
            <p className="text-center text-sm font-bold ml-6">Designed a modern loan application platform focused on simplicity, trust, and speed. With clear call-to-actions and smooth form flow, users can apply for loans with confidence—because financial freedom should be just a few clicks away.</p>
            <div class="cover">
            <img src={groupImage} alt="image was not downloaded" className="w-full h-full bg-cover bg-center"/>
            </div>
          </div>
          <div class="book">
            <p className="text-center text-sm font-bold ml-6">Crafted a robust and professional website for a construction company, showcasing projects, services, and expertise with bold visuals and solid structure. Just like their buildings—strong, reliable, and made to impress.</p>
            <div class="cover">
            <img src={serviceCenter} alt="image was not downloaded" className="w-full h-full bg-cover bg-center"/>
            </div>
          </div>
      </div>
    </div>

    <div className="relative h-16 bg-[#C0C0C0] -rotate-6 w-full overflow-hidden mt-20">
      {/* Moving Headers */}
      <div
        ref={containerRef}
        className="absolute flex space-x-8"
        style={{ transform: `translateX(${position}px)` }}
      >
        {/* Original Content */}
        {Array.from({ length: 10 }, (_, i) => (
          <h1 key={`original-${i}`} className="text-2xl font-bold ">
            Frontend Developer {i + 1}
          </h1>
        ))}

        {/* Duplicate Content for Infinite Effect */}
        {Array.from({ length: 10 }, (_, i) => (
          <h1 key={`duplicate-${i}`} className="text-2xl font-bold ">
            Frontend Developer {i + 1}
          </h1>
        ))}
      </div>

      
    </div>
    </>
  )


}


export default Projects;