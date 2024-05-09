import { useEffect, useRef } from 'react';
import { useMediaQuery } from 'react-responsive'; 
import { motion } from "framer-motion";
import LocomotiveScroll from 'locomotive-scroll'; 



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
        <h1 className={`font-goliBold text-2xl font-semibold uppercase text-white md:text-7xl ${isMobile && 'text-center'}`}>
          Let's eat! Search for your favorite bites.
        </h1>
        <div className={`${isMobile ? 'mt-6' : 'mt-12'} w-full max-w-[80vw] md:max-w-[60vw] ml-auto mr-auto font-goliMedium`}>
          <SearchBar placeHolder='Search by City' onSubmit={handleSearchSubmit} mobile={isMobile} searchQuery={''}/>
        </div>
      </div>

      <div  data-scroll data-scroll-section data-scroll-speed='.01' className="w-full rounded-tl-3xl rounded-tr-3xl bg-white mt-[120vw] md:mt-[16vw]">
        <div className="w-full text border-b-2 border-zinc-300 flex overflow-hidden whitespace-nowrap font-varien">
          <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="text-[15vw] leading-none uppercase font-semibold p-38">Welcome to Bite Station</motion.h1>
          <motion.h1 initial={{ x: "0" }} animate={{ x: "-100%" }} transition={{ ease: "linear", repeat: Infinity, duration: 5 }} className="text-[15vw] leading-none uppercase font-semibold pr-38">Welcome to Bite Station </motion.h1>
        </div>
      </div>

      <div className="w-full p-20 bg-black rounded-3xl text-white">
        <h1 className="font-goliBold uppercase text-[5vw] font-semibold text-center leading-[4vw] md:text-[4vw]">
          More than just food, it's a Bite Station community.
        </h1>
      </div>
    </div>

      <div  data-scroll  data-scroll-speed='-0.1' className="w-full p-20 bg-white rounded-3xl  text-black">
        <h1 className="font-goliBold text-[5vw] uppercase font-semibold text-center leading-[4vw] md:text-[4vw]">
          Find Restaurants which serve best food nearby you.
        </h1>
        {!isMobile && ( 
          <div className="w-full mt-10 object-fit scroll-smooth " ref={containerRef}>
            <div className="w-full">
             
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default HomePage;
