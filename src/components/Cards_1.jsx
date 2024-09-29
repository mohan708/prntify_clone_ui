import React from 'react'
import './create_sell.css'

const Cards_1 = () => {
  return (
    <>
      {/* cards laptop */}

<div className=' card flex max-w-[1216px] mx-auto px-[74px] py-[6rem]'>

<div className='card1 flex-1 flex flex-col items-start mr-[2.375rem]'>
<img src="/img_card.jpg" alt="" className='w-32 h-32 rounded-full' />
<h2 className='font-bold text-2xl pt-6'>Higher Profits</h2>
  <p className='text-start pt-5'>We offer some of the lowest prices in the industry because print providers continuously compete to win your business.</p>
</div>
<div className='flex-1 flex flex-col  items-start  mr-[2.375rem]'>
  <img src="/2.webp" alt="" className='w-32 h-32 rounded-full' />
  <h2 className='text11 font-bold text-2xl pt-6'>Robust Scaling</h2>
  <p className='text-start pt-5'>Easily handle peak holiday seasons, with our wide network of partners and automatic routing functionality.</p>
</div>
<div className='text-11 flex-1 flex flex-col items-start  '>
<img src="/3.jpg" alt="" className='w-32 h-32 rounded-full' />
<h2 className='font-bold text-2xl pt-6'>Best Selection</h2>
  <p className='text-start pt-5'>With 900+ products and top quality brands, you can choose the best products for your business.

</p>
</div>

</div>
    
    </>
  )
}

export default Cards_1