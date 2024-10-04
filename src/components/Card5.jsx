import React from 'react'

const Card5 = () => {
  return (
   
    <div className=' py-14  max-w-[1261px] mx-auto px-24  relative'>



        <div className='py-2  rounded-2xl bg-customColor'>
                <div className=' text-start pl-[8%] py-[5%] pr-[57%] text-white' >
                 <h2 className='text-4xl font-semibold'> Make Money, Risk-Free</h2>
                 <p className='py-4'> You pay for fulfillment only when you make a sale</p>
                 <div className='bg-customCol w-[100%] py-8 px-6 my-4 rounded-xl'>
                     <div className='flex justify-between pb-8'>
                        <h3>You sell a t-shirt</h3>
                        <span>$ 30</span>
                     </div>
                     <div className='flex justify-between pb-8'>
                        <h3>You pay for its production</h3>
                        <span>$ 12</span>
                     </div>
               
                     <hr className='py-3' />
                     <div className='flex justify-between items-center'>
                        <h2 className='text-xl text-green-500 font-semibold'>Your profit</h2>
                        <span>$ 18</span>
                     </div>
                 </div>

                 
                    <button className='bg-green-500 py-1 rounded px-4 my-6'>Start selling</button>                
                 <p className='text-slate-300 text-[14px]'>
                 100% Free to use · 900+ Products · Largest print network</p>
                </div>
                <img src="/water.avif" className='absolute top-0 right-24 w-[500px] h-[639px] rounded-xl'  alt="" />
        </div>
    </div>


  )
}

export default Card5