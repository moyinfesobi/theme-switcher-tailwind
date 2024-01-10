import React, {useState} from "react";
import NavigationIcon from "../src/images/navigation.svg";
import StarIcon from "../src/images/star.svg";
import MessangerIcon from "../src/images/messanger.svg";
import GraphIcon from "../src/images/graph.svg";
import EarthIcon from "../src/images/world.svg";
import BuildingIcon from "../src/images/building.svg";



const  App = ( ) => {
 
  return (
    <div className="max-h-screen">
        <div className="  h-full w-full ">
          <div className="bg-[#5D5FEF] h-[84px] w-full flex justify-end p-5">
           <div className="mr-10 text-white">
           Header
           </div>
          </div>
          <div className=" grid grid-cols-12 h-[100vh] w-full ">
            <div className="col-span-1 bg-[#FBFCFF] grid justify-center border-r-[#EDEFF2] border-r-2">
             <div className="pt-10"> 
             <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md" ><img width={30} height={30} src={NavigationIcon} alt="navigation" /> </div>
             <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md">  <img width={30} height={30} src={StarIcon} alt="navigation" /> </div>
             <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md"> <img width={30} height={30} src={MessangerIcon} alt="navigation" /> </div>
             <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md">  <img width={30} height={30} src={GraphIcon} alt="navigation" /> </div>
             <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md"> <img width={30} height={30} src={EarthIcon} alt="navigation" /> </div>
             <div className="bg-white rounded-full w-[50px] h-[50px] flex justify-center mb-[20px] drop-shadow-md"> <img width={30} height={30} src={BuildingIcon} alt="navigation" /> </div>
             </div>
            </div>
            <div className="col-span-11 mt-[63px] mx-[60px] bg-[#FBFCFF] "> 
             {/* bg-[#FBFCFF] */}
              <p className="text-[#131313] text-[36px] font-bold"> Welcome, VDM 👋 </p>
              <p className="text-[#1F2105]"> You have no upcoming sessions</p>

              <p className="text-[#131313] text-[22px] font-bold mt-5"> Meet your Preferred Mentor</p>
              <p className="text-[#1F2105]"> Mentors auto-paired with you</p>
            </div>
          </div>
        
        </div>
    </div>
  );
}

export default App;
