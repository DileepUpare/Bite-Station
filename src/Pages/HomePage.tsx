import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import { motion } from "framer-motion";
import { ParallaxScroll } from "@/components/ui/parallax-scroll";
import LocomotiveScroll from 'locomotive-scroll'; 

import Image1 from "../Assets/images/Parallax-images/pexels-barfisch-pix-115740.webp";
import Image2 from "../Assets/images/Parallax-images/pexels-chaitaastic-7353380.webp";
import Image3 from "../Assets/images/Parallax-images/pexels-chinarianphotographer-9198596.webp";
import Image4 from "../Assets/images/Parallax-images/pexels-dhiraj-jain-207743066-12737656.webp";
import Image5 from "../Assets/images/Parallax-images/pexels-marvin-ozz-1297854-2474658.webp";
import Image6 from "../Assets/images/Parallax-images/pexels-olenkabohovyk-3819969.webp";
import Image7 from "../Assets/images/Parallax-images/pexels-pixabay-60616.webp";
import Image8 from "../Assets/images/Parallax-images/pexels-prabal-9609842.webp";
import Image9 from "../Assets/images/Parallax-images/pexels-sahil-captures-424973882-17461398.webp";
import Image10 from "../Assets/images/Parallax-images/pexels-saveurssecretes-5476229.webp";
import Image11 from "../Assets/images/Parallax-images/pexels-saveurssecretes-5560763.webp";
import Image12 from "../Assets/images/Parallax-images/pexels-saveurssecretes-7625056.webp";
import Image13 from "../Assets/images/Parallax-images/pexels-shantanu-pal-938952-2679501.webp";
import Image14 from "../Assets/images/Parallax-images/pexels-valeriya-1199957.webp";
import Image15 from "../Assets/images/Parallax-images/pexels-valeriya-580612.webp";
import Image16 from "../Assets/images/Parallax-images/pexels-vince-2147491.webp";
import Image17 from "../Assets/images/Parallax-images/pexels-vincent-ma-janssen-2302809.webp";

import SearchBar, { SearchForm } from '@/components/SearchBar';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) =>{
     navigate({
       pathname: `/search/${searchFormValues.searchQuery}`,
     })
  }
  const containerRef = useRef<HTMLDivElement>(null!); 
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' }); 

  useEffect(() => {
    if (!isMobile && containerRef.current) { 
      const locomotiveScroll = new LocomotiveScroll({
        el: containerRef.current.querySelector('[data-scroll-container]') as HTMLElement, 
        smooth: true,
      });
      return () => {
        locomotiveScroll.destroy();
      };
    }
  }, [isMobile]);

  return (
    <>
    <div className="flex flex-col items-center justify-center gap-12 overflow-hidden">
      <div className={`text-center flex-row ${isMobile && 'flex-col'} mt-[11vw]`}>
        <h1 className={`text-2xl font-['Phonk Regular DEMO'] font-semibold uppercase text-white md:text-6xl ${isMobile && 'text-center'}`}>
          Let's eat! Search for your favorite bites.
        </h1>
        <div className={`${isMobile ? 'mt-6' : 'mt-12'} w-full max-w-[80vw] md:max-w-[60vw] ml-auto mr-auto`}>
          <SearchBar placeHolder='Search by City' onSubmit={handleSearchSubmit} mobile={isMobile} searchQuery={''}/>
        </div>
      </div>

      <div  data-scroll data-scroll-section data-scroll-speed='.01' className="w-full rounded-tl-3xl rounded-tr-3xl bg-white mt-[120vw] md:mt-[14vw]">
        <div className="w-full text border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap">
          <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="text-[15vw] leading-none font-['Phonk Regular DEMO'] uppercase font-semibold pr-38">Welcome to Bite Station</motion.h1>
          <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="text-[15vw] leading-none font-['Phonk Regular DEMO'] uppercase font-semibold pr-38">Welcome to Bite Station </motion.h1>
        </div>
      </div>

      <div className="w-full p-20 bg-black rounded-3xl text-white">
        <h1 className="font-['Phonk Regular DEMO'] text-[5vw] uppercase font-semibold text-center leading-[4vw] md:text-[4vw]">
          More than just food, it's a Bite Station community.
        </h1>
      </div>
    </div>

      <div  data-scroll  data-scroll-speed='-0.1' className="w-full p-20 bg-white rounded-3xl  text-black">
        <h1 className="font-['Phonk Regular DEMO'] text-[5vw] uppercase font-semibold text-center leading-[4vw] md:text-[4vw]">
          Find Restaurants which serve best food nearby you.
        </h1>
        {!isMobile && ( 
          <div className="w-full mt-10 object-fit scroll-smooth " ref={containerRef}>
            <div className="w-full">
              <ParallaxScroll 
                images={[Image1, Image2, Image3, Image4, Image5,
                  Image6, Image7, Image8, Image9, Image10, Image11, 
                  Image12, Image13, Image14, Image15, Image16, Image17]}
              />
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
