import React, { useState } from "react";

import NavigationTab from "./Navigation/NavigationTab";
import First from "../src/images/first.svg";
import Second from "../src/images/second.svg";
import Third from "../src/images/third.svg";
import Header from "./Header/Header";
import Location from "../src/images/location.svg";
import Intrest from "../src/images/intrest.svg";
import ES1 from "../src/images/ES1.svg";
import ES2 from "../src/images/ES2.svg";
import ES3 from "../src/images/ES3.svg";
import ES4 from "../src/images/ES4.svg";

const App = () => {
  return (
    <div className="h-[100vh]">
      <div className="  h-full w-full ">
        {/* HEADER */}
        <Header />

        <div className=" grid grid-cols-12 h-[90vh] w-full bg-[#FBFCFF] ">
          {/* NAVIGATION */}
          <div className="col-span-1 bg-[#FBFCFF] grid justify-center border-r-[#EDEFF2] border-r-2">
            <div className="pt-10">
              <NavigationTab />
            </div>
          </div>

          {/* BODY */}
          <div className="col-span-11 mt-[23px] mx-[60px] bg-[#FBFCFF] ">
            {/* bg-[#FBFCFF] */}
            <p className="text-[#131313] text-[36px] font-bold">
              {" "}
              Welcome, VDM 👋{" "}
            </p>
            <p className="text-[#1F2105]"> You have no upcoming sessions</p>

            <p className="text-[#131313] text-[22px] font-bold mt-5">
              {" "}
              Meet your Preferred Mentor
            </p>
            <p className="text-[#1F2105]"> Mentors auto-paired with you</p>

            <div className="grid grid-cols-5 mt-3 gap-[60px]">
              <div className="col-span-3 grid grid-cols-3 gap-3">
                <div>
                  <img src={First} alt="first" />
                </div>
                <div>
                  {" "}
                  <img src={Second} alt="second" />{" "}
                  <div className="mt-2">
                    <p className="text-black font-bold text-[20px]"> Arya Malluish</p>
                    <p className="flex gap-2 mt-2 text-sm"> <span> <img src={Location} alt="location"  width={15} height={15} /></span> Alabama </p>
                    <p className="flex gap-2 mt-4 text-sm   " > <span> <img src={Intrest} alt="location" width={15} height={15} className="mt-[3px]"  /></span> Interested in Economics, AI </p>
                    <div className="flex mt-4 gap-5"> <p className="text-[#5D5FEF] h-[35px] w-[145px] text-[13px] font-bold border rounded-full border-[#5D5FEF] grid justify-center content-center"> Connect Now</p> <p className="font-bold text-[#5D5FEF] text-[13px] h-[35px] grid content-center "> Ignore</p></div>
                  </div>
                </div>
                <div>
                  {" "}
                  <img src={Third} alt="third" />{" "}
                  <div className="mt-2">
                    <p className="text-black font-bold text-[20px]"> Cindy Blues</p>
                    <p className="flex gap-2 mt-2 text-sm"> <span> <img src={Location} alt="location"  width={15} height={15} /></span> Calgary </p>
                    <p className="flex gap-2 mt-4 text-sm   " > <span> <img src={Intrest} alt="location" width={15} height={15} className="mt-[3px]"  /></span> Interested in Economics, AI </p>
                    <div className="flex mt-4 gap-5"> <p className="text-[#5D5FEF] h-[35px] w-[145px] text-[13px] font-bold border rounded-full border-[#5D5FEF] grid justify-center content-center"> Connect Now</p> <p className="font-bold text-[#5D5FEF] text-[13px] h-[35px] grid content-center "> Ignore</p></div>
                  </div>
                </div>
              </div>
              <div className="col-span-2  "> 
              <p className="font-bold text-[22px] text-[#131313]"> Recent Activities </p>
              <p className="text-[14px] mb-9"> View list of all system activities since last log in</p>
              
              <div>
                <div className="flex gap-1 border-b mb-4 border-[#DFDFDF] py-4">
                  <img src={ES1} alt="esse-sylvester" />
                  <p className=" h-[35px] pt-1 text-[#1F2105]"> <span className="font-bold text-[16px]  ">  Esse Sylvester </span> just accepted Request</p>
                  <p className="ml-6 text-[#5D5FEF] h-[35px] w-[76px] text-[13px]  border rounded-full border-[#5D5FEF] grid justify-center content-center"> Dismiss</p>
                </div>
                <div className="flex gap-1 border-b mb-4 border-[#DFDFDF] py-4">
                  <img src={ES2} alt="esse-sylvester" />
                  <p className=" h-[35px] pt-1 text-[#1F2105]"> <span className="font-bold text-[16px]  ">  Esse Sylvester </span> just accepted Request</p>
                  <p className="ml-6 text-[#5D5FEF] h-[35px] w-[76px] text-[13px]  border rounded-full border-[#5D5FEF] grid justify-center content-center"> Dismiss</p>
                </div>
                <div className="flex gap-1 border-b mb-4 border-[#DFDFDF] py-4">
                  <img src={ES3} alt="esse-sylvester" />
                  <p className=" h-[35px] pt-1 text-[#1F2105]"> <span className="font-bold text-[16px]  ">  Esse Sylvester </span> just accepted Request</p>
                  <p className="ml-6 text-[#5D5FEF] h-[35px] w-[76px] text-[13px]  border rounded-full border-[#5D5FEF] grid justify-center content-center"> Dismiss</p>
                </div>
                <div className="flex gap-1 border-b mb-4 border-[#DFDFDF] py-4">
                  <img src={ES4} alt="esse-sylvester" />
                  <p className=" h-[35px] pt-1 text-[#1F2105]"> <span className="font-bold text-[16px]  ">  Esse Sylvester </span> just accepted Request</p>
                  <p className="ml-6 text-[#5D5FEF] h-[35px] w-[76px] text-[13px]  border rounded-full border-[#5D5FEF] grid justify-center content-center"> Dismiss</p>
                </div>
              </div>
              
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
