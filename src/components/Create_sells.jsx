// import React from 'react'
// import { MdOutlineSlowMotionVideo } from "react-icons/md";
// import './create_sell.css'


// const Create_sells = () => {
//   return (
//     <div>

// <div className='flex mt-32 justify-start items-start w-[100%]'>

//   <div className=' container  flex max-w-[1216px] mx-auto py-[5rem]  px-8 main-content'>
//      <div className='flex flex-col mt-10 justify-start items-start  w-[42%] '>

//   <h1 className='font-bold text-[3.5rem] text-left tracking-wide leading-tight'>Create and sell custom products</h1>
//    <div className="mt-8 ml-4">
//     <p className="text-left pb-2"> <span className="text-lg text-green-500 tracking-wide pr-2" style={{ fontFamily: "Arial, sans-serif" }}>✔ </span> 100% Free to use </p>
//     <p className="pb-2"><span className="text-lg text-green-500 tracking-wide pr-2" style={{ fontFamily: "Arial, sans-serif" }}>✔ </span> 900+ High-Quality Products </p>
//     <p className="pb-2"> <span className="text-lg text-green-500 tracking-wide pr-2" style={{ fontFamily: "Arial, sans-serif" }}>✔ </span> Largest global print network</p>
//    </div>

//    <div className="  pt-8 flex">
//     <button className="bg-green-500 py-2 px-6 hover:bg-green-600 text-white text-lg rounded ">start for free</button>
   
//     <button className="border flex items-center border-slate-400 py-2 px-6  text-lg rounded ml-4 " > <MdOutlineSlowMotionVideo className="text-2xl " />
//     <span className="hover:text-green-500 ml-2">How it works?</span></button>
//    </div>

//    <p className="py-4 text-green-500 ">Trusted by over 8M sellers around the world</p>

// </div>

// <div className='img flex relative flex-col  pl-[6rem]  max-w-[540px]  ml-auto '>
// <div className='img1 top-10 left-72 '>
//   <img src='/t-shirt.png' className='img_11 w-[70%] rounded-lg h-auto' alt="" />
// </div>

// <div className='absolute top-36 left-72 w-[80%] '> {/* Adjust position to overlap mt-48 ml-44  */}
//   <img src='/boy.avif' className='img_2 w-[60%] h-[19rem] border-2 rounded-lg  ' alt="" />
// </div>
// </div>

// </div>
// </div>



//     </div>
//   )
// }

// export default Create_sells


import React from 'react';
import { MdOutlineSlowMotionVideo } from 'react-icons/md';
import './create_sell.css';

const Create_sells = () => {
  return (
    <div>
      <div className="flex container1 pt-[4rem] justify-start items-start w-[100%]">
        <div className="container flex max-w-[1216px] mx-auto py-[5rem] px-8 main-content">
          <div className=" cont flex  flex-col mt-10 justify-start items-start ">
            <h1 className="font-bold text-[3.5rem] text-left tracking-wide leading-tight">
              Create and sell custom products
            </h1>
            <div className="cont1 mt-8 ml-4">
              <p className="text-left pb-2">
                <span className="text-lg text-green-500 tracking-wide pr-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  ✔
                </span>{' '}
                100% Free to use
              </p>
              <p className="pb-2">
                <span className="text-lg text-green-500 tracking-wide pr-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  ✔
                </span>{' '}
                900+ High-Quality Products
              </p>
              <p className="pb-2">
                <span className="text-lg text-green-500 tracking-wide pr-2" style={{ fontFamily: 'Arial, sans-serif' }}>
                  ✔
                </span>{' '}
                Largest global print network
              </p>
            </div>

            <div className="pt-8 flex">
              <button className="bg-green-500 py-2 px-6 hover:bg-green-600 text-white text-lg rounded">
                Start for free
              </button>

              <button className="border flex items-center border-slate-400 py-2 px-6 text-lg rounded ml-4">
                <MdOutlineSlowMotionVideo className="text-2xl" />
                <span className="hover:text-green-500 ml-2">How it works?</span>
              </button>
            </div>

            <p className=" cont2 py-4 text-green-500">Trusted by over 8M sellers around the world</p>
          </div>

          <div className="img-container flex relative pl-[6rem] max-w-[540px] ml-auto">
            <div className="img-wrapper">
              <img src="/t-shirt.png" className="img_11 w-[70%] rounded-lg h-auto" alt="T-shirt" />
            </div>

            <div className="absolute img-overlay top-36 left-64 ">
              {/* Adjusted position to overlap */}
              <img src="/boy.avif" className="img_2 w-[200%] h-[19rem] border-2 rounded-lg" alt="Boy" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create_sells;
