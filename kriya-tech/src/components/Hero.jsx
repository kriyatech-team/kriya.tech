import React from "react";
import Typed from 'react-typed';


const Hero = () => {
  return(
  <div>
    <div className="max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
      <p className="text-emerald-600 font-bold p-2">GROW WITH KRIYATECH</p>
      <h1 className="md:text-7xl sm:text-6xl text-4xl font-bold md:py-6">Grow with us.</h1>
      <div className="md:text-5xl sm:text-4xl text-xl font-bold">
        <Typed strings={["Super, Good, Useful KRIYATECH"]} typeSpeed={120} backSpeed={140} loop />
      </div>
      <button className="bg-stone-500 w-[200px] rounded-md font-md my-6 mx-auto py-3 font-bold text-white hover:bg-emerald-500 hover:text-black uppercase">Get Started</button>   

    </div> 

  </div>
  );
};

export default Hero;
