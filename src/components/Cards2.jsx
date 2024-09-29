import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowForward } from "react-icons/io";


const Cards2 = () => {
  return (
   <>

   <div className='bg-[#F7F7F7] '>

    <div className='py-20 max-w-[1216px] relative  mx-auto pt-[100px] pl-[10px] pr-[10px] '>
 
       <div className='flex my-[20px] pt-[100px] pl-[24px] pr-[20px]' >
           
              <div className='absolute top-[100px]  '>
              <img src="/clothes-2.webp" className='w-[450px] bg-[#19C75A] rounded-2xl h-[550px]' alt="" />
              <img src="/tishirt-3.webp"  className='w-[40%] border-2  absolute rounded-2xl -right-20 bottom-10' alt="" />
              </div>
            
              <div className='bg-white flex flex-col rounded-2xl justify-center  text-start gap-8 pt-[7%] pr-[9%] pb-[3.5%] pl-[57%]'>
                <h1 className='font-bold tracking-wide  text-3xl'>Easily add your design to a wide range of products</h1>
                <p className='text-gray-500'> With our free design tools, you can easily add your custom designs to t-shirts, mugs, phone cases, and hundreds of other products</p>
                <p className='flex pb-14 pt-4 items-center text-green-400 gap-2 text-xl'>All products <span><IoMdArrowForward  className='text-3xl'/>

                </span></p>
              </div>           
       </div>   
       </div>


       <div className='flex px-10 flex-1 max-w-[1216px]  pb-16 pt-4 gap-5 text-start mx-auto'>
        <div className='flex-1 '>
            <img src="/img_card.jpg" className='w-32 h-32 rounded-full ml-3 my-4' alt="" />
            <h2 className='pt-3 pb-1 text-xl text-green-500 font-medium' >Create</h2>
            <h1  className='pb-3 text-xl font-semibold'>Custom products</h1>
            <p className='text-slate-500 text-s'> Easily add design to a wide range of products using our free tools</p>
        </div>
        <div className='flex-1'> 
        <img src="/2.webp" className='w-32 h-32 rounded-full ml-3 my-4' alt="" />
            <h2 className='pt-3  pb-1 text-xl text-green-500 font-medium'>Sell</h2>
            <h1  className='pb-3 text-xl font-semibold'>on your terms</h1>
            <p className='text-slate-500 text-s'> Your choose the products , sale price, and where to sell</p>
        
        </div>
        <div className='flex-1'>
        <img src="/3.jpg" className='w-32 h-32 rounded-full ml-3 my-4' alt="" />
            <h2 className='pt-3 pb-1 text-xl text-green-500 font-medium'>WE HANDLE</h2>
            <h1 className='pb-3 text-xl font-semibold'>fulflment</h1>
            <p className='text-slate-500 text-s'>Once an order is placed ,we automatically handle all the printing and delivery logistics</p>
        
        </div>
       </div>
   </div>
   
   </>
  )
}

export default Cards2