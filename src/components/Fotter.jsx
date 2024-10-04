import React from 'react'
import { RxInstagramLogo } from "react-icons/rx";
import { FaFacebookF,FaGithub,FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter,FaTiktok,FaSquareYoutube } from "react-icons/fa6";

const Fotter = () => {
  return (
<>
<div>
<div className='max-w-[1216px] pt-16 pb-8  mx-auto px-4' >
<div>
        <div className='flex justify-between items-center'>
            <img src="/public/logo-11.jpeg" className='w-[140px]' alt="" />
            <div className=' flex gap-5 ' >            
             <span className='border p-2 rounded-full bg-green-500' > <RxInstagramLogo className='text-white text-xl' />
             </span>
             <span className='border p-2 rounded-full bg-green-500'><FaFacebookF className='text-white text-xl' />
             </span>
             <span className='border p-2 rounded-full bg-green-500'> <FaLinkedinIn className='text-white text-xl' />
             </span>
             <span className='border p-2 rounded-full bg-green-500'><FaXTwitter className='text-white text-xl'/>
             </span>
             <span className='border p-2 rounded-full bg-green-500'><FaSquareYoutube  className='text-white text-xl'/>
       
             </span>
             <span className='border p-2 rounded-full bg-green-500'> <FaTiktok className='text-white text-xl' />
             </span>
             <span className='border p-2 rounded-full bg-green-500'> <FaGithub className='text-white text-xl' />
             </span>

            </div>

        </div>
        <div className='flex justify-between text-start px-4 py-20'> 

            <div className=''>
              
              <h2 className='font-semibold text-xl pb-4'> Integrations</h2>
              <p className='pb-2 text-slate-500'>Shopify</p>
              <p className='pb-2 text-slate-500'>Etsy</p>
              <p className='pb-2 text-slate-500'>eBay</p>
              <p className='pb-2 text-slate-500'>Amazon</p>
              <p className='pb-2 text-slate-500'>TikTok Shop</p>
              <p className='pb-2 text-slate-500'>PrestaShop</p>
              <p className='pb-2 text-slate-500'>BigCommerce</p>
              <p className='pb-2 text-slate-500'>Wix</p>
              <p className='pb-2 text-slate-500'>WooCommerce</p>
              <p className='pb-2 text-slate-500'>Squarespace</p>
              <p className='pb-2 text-slate-500'>Printify API</p>
            </div>
            <div>
            <h2 className='font-semibold text-xl pb-4'> Discover</h2>
              <p className='pb-2 text-slate-500'>Shopify</p>
              <p className='pb-2 text-slate-500'>Etsy</p>
              <p className='pb-2 text-slate-500'>eBay</p>
              <p className='pb-2 text-slate-500'>Amazon</p>
              <p className='pb-2 text-slate-500'>TikTok Shop</p>
              <p className='pb-2 text-slate-500'>PrestaShop</p>
              <p className='pb-2 text-slate-500'>BigCommerce</p>
              <p className='pb-2 text-slate-500'>Wix</p>
              <p className='pb-2 text-slate-500'>WooCommerce</p>
              <p className='pb-2 text-slate-500'>Squarespace</p>
              <p className='pb-2 text-slate-500'>Printify API</p>
            </div>
            <div>
            <h2 className='font-semibold text-xl pb-4'> Start selling</h2>
              <p className='pb-2 text-slate-500'>Shopify</p>
              <p className='pb-2 text-slate-500'>Etsy</p>
              <p className='pb-2 text-slate-500'>eBay</p>
              <p className='pb-2 text-slate-500'>Amazon</p>
              <p className='pb-2 text-slate-500'>TikTok Shop</p>
              <p className='pb-2 text-slate-500'>PrestaShop</p>
              <p className='pb-2 text-slate-500'>BigCommerce</p>
              <p className='pb-2 text-slate-500'>Wix</p>
              <p className='pb-2 text-slate-500'>WooCommerce</p>
              <p className='pb-2 text-slate-500'>Squarespace</p>
              <p className='pb-2 text-slate-500'>Printify API</p>
            </div>
            <div>
            <h2 className='font-semibold text-xl pb-4'> Printify </h2>
              <p className='pb-2 text-slate-500'>Shopify</p>
              <p className='pb-2 text-slate-500'>Etsy</p>
              <p className='pb-2 text-slate-500'>eBay</p>
              <p className='pb-2 text-slate-500'>Amazon</p>
              <p className='pb-2 text-slate-500'>TikTok Shop</p>
              <p className='pb-2 text-slate-500'>PrestaShop</p>
              <p className='pb-2 text-slate-500'>BigCommerce</p>
              <p className='pb-2 text-slate-500'>Wix</p>
              <p className='pb-2 text-slate-500'>WooCommerce</p>
              <p className='pb-2 text-slate-500'>Squarespace</p>
              <p className='pb-2 text-slate-500'>Printify API</p>
            </div>

        </div>


       

</div>

</div>

<div className='bg-[#F7F7F7] pt-12 pb-8'>
            <div className='flex justify-center items-center gap-4 text-slate-400  text-[14px] pb-4'>
              <p>
              Intellectual Property Policy</p>
              <p>Terms of Service</p>
              <p>Privacy Policy</p>
              <p>Security</p>
            </div>
            <p className='text-[14px]'>© 2024 Printify, Inc. All rights reserved</p>
  
        </div>

</div>

</>
  )
}

export default Fotter