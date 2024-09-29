// import React, { useState } from 'react'
// import './header.css'
// import { FaCaretDown } from "react-icons/fa";
// import { FaBars } from "react-icons/fa";



// const Header = () => {

//    const[open,setOpen] =useState(false)

//    const openHandler = ()=>{
//       setOpen(true)
//    }
//    const closeHandler = ()=>{
//       setOpen(false)
//    }

//   return (
//    <>
//    <div className='flex h-[70px] m-auto items-center py-6 w-[100%] border-1 shadow-lg fixed top-0 z-[100]  bg-white'>

       
//           {/*  logo part */}

//       <div className='flex  w-[100%] justify-between  items-center max-w-[1280px] mx-auto px-[32px]'>

//          <div className='md:hidden'>
//          <FaBars className='' onClick={()=>openHandler()}/>
//          </div>


//         {/* bar parts */}

//       <div className=' w-[13%]'>
//          <img src="/logo-11.jpeg"  className='w-full cursor-pointer' alt="" />
//       </div>


//            {/*  nav bar part */}
      
//      <div className='md:flex hidden items-center gap-3 w-[60%] pl-7  '>
//       <p className='mr-2 cursor-pointer hover:text-green-500'>Catalog</p>
//       <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center '>How it works <span className='pl-1'><FaCaretDown />
//       </span></p>
//       <p className='mr-2 cursor-pointer hover:text-green-500'>Pricing</p>
//       <p className='mr-2 cursor-pointer hover:text-green-500'>Blog</p>
//       <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>Services <span className='pl-1'><FaCaretDown />
//       </span></p>
//       <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>Use-cases <span className='pl-1'><FaCaretDown />
//       </span></p>
//       <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>Need help? <span className='pl-1'><FaCaretDown />
//       </span></p>
//      </div>
//   {/* button part  */}


//      <div className='flex gap-5 '>
// <button className='border-2 py-1 px-5 border-gray-300 rounded hover:text-green-500'>  Log in </button>
// <button className='bg-green-500 py-1 px-5 rounded text-white hover:bg-green-600'> Sign up </button>
//      </div>
    

//    </div>

//    </div>
//   {}

//     {open && (
//       <div className={` md:hidden  flex flex-col items-start min-w-[300px]  gap-5 w-[30%] h-full bottom-0  bg-slate-300 z-[101] transition-transform duration-300 ease-in-out ${open ? 'translate-x-0' : '-translate-x-full'} fixed top-0 `}>
     
//      <div className={`flex justify-center text-center items-center   border-b-2 w-[100%]`}>
//      <h1 className=' font-bold text-2xl py-3' >Menu</h1> 
//      <p className=' absolute right-4 text-1xl cursor-pointer items-end' onClick={()=>closeHandler()} >X</p>
//      </div>
    
//     <div className='flex flex-col items-start px-6 font-bold text-xl gap-10 w-[100%]' >

//       <p className=' cursor-pointer hover:text-green-500'>Catalog</p>
//       <p className=' cursor-pointer hover:text-green-500 flex items-center justify-between w-full'>How it works <span className='pl-1'><FaCaretDown />
//       </span></p>
//       <p className=' cursor-pointer hover:text-green-500'>Pricing</p>
//       <p className=' cursor-pointer hover:text-green-500'>Blog</p>
//       <p className=' cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Services <span className='pl'><FaCaretDown />
//       </span></p>
//       <p className=' cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Use-cases <span className='pl-1'><FaCaretDown />
//       </span></p>
//       <p className=' cursor-pointer hover:text-green-500 flex min-w-full justify-between items-center'>Need help? <span className='pl-1'><FaCaretDown />
//       </span></p>
//      </div>
//      </div>
//     )}

   
//    </>
//   )
// }

// export default Header



import React, { useState } from 'react';
import './header.css';
import { FaCaretDown, FaBars } from "react-icons/fa";

const Header = () => {
  const [open, setOpen] = useState(false);

  const openHandler = () => {
    setOpen(true);
  };

  const closeHandler = () => {
    setOpen(false);
  };

  return (
    <>
      <div className='flex h-[70px] m-auto items-center py-6 w-[100%] border-1 shadow-lg fixed top-0 z-[100] bg-white'>
        {/* Logo part */}
        <div className='flex w-[100%] justify-between items-center max-w-[1280px] mx-auto px-[32px]'>
          <div className='md:hidden'>
            <FaBars className='cursor-pointer' onClick={openHandler} />
          </div>

          {/* Bar parts */}
          <div className='w-[13%]'>
            <img src="/logo-11.jpeg" className='w-full cursor-pointer' alt="Logo" />
          </div>

          {/* Nav bar part */}
          <div className=' md:flex hidden max-w-[980px] items-center gap-3 w-[60%] pl-7'>
            <p className='mr-2 cursor-pointer hover:text-green-500'>Catalog</p>
            <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>How it works <span className='pl-1'><FaCaretDown /></span></p>
            <p className='mr-2 cursor-pointer hover:text-green-500'>Pricing</p>
            <p className='mr-2 cursor-pointer hover:text-green-500'>Blog</p>
            <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>Services <span className='pl-1'><FaCaretDown /></span></p>
            <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>Use-cases <span className='pl-1'><FaCaretDown /></span></p>
            <p className='mr-2 cursor-pointer hover:text-green-500 flex items-center'>Need help? <span className='pl-1'><FaCaretDown /></span></p>
          </div>

          {/* Button part */}
          <div className='flex gap-5'>
            <button className='border-2 py-1 px-5 border-gray-300 rounded hover:text-green-500'>Log in</button>
            <button className='bg-green-500 py-1 px-5 rounded text-white hover:bg-green-600'>Sign up</button>
          </div>
        </div>
      </div>

      {/* Sidebar */}
  
        <div className={`md:hidden container  items-start min-w-[300px]  bg-slate-400 gap-5 w-[30%] h-full  z-[101]  fixed top-0 left-0 transition-transform duration-500 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className='flex justify-center transition-transform duration-500 ease-in-out transform text-center items-center border-b-2 w-full'>
            <h1 className='font-bold text-2xl py-3'>Menu</h1>
            <p className='absolute right-4 text-1xl cursor-pointer' onClick={closeHandler}>X</p>
          </div>

          <div className='flex flex-col pt-8  items-start px-6 font-bold text-xl gap-10 w-full'>
            <p className='cursor-pointer hover:text-green-500'>Catalog</p>
            <p className='cursor-pointer hover:text-green-500 flex items-center justify-between w-full'>How it works <span className='pl-1'><FaCaretDown /></span></p>
            <p className='cursor-pointer hover:text-green-500'>Pricing</p>
            <p className='cursor-pointer hover:text-green-500'>Blog</p>
            <p className='cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Services <span className='pl'><FaCaretDown /></span></p>
            <p className='cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Use-cases <span className='pl-1'><FaCaretDown /></span></p>
            <p className='cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Need help? <span className='pl-1'><FaCaretDown /></span></p>
          </div>
        </div>
    


  {/* <div className={`md:hidden fixed top-0 left-0 z-[101] h-full   bg-slate-400 transition-transform duration-500 ease-in-out transform ${open ? 'translate-x-0' : '-translate-x-full'} `}>
    <div className='flex justify-center text-center items-center border-b-2 w-full'>
      <h1 className='font-bold text-2xl py-3'>Menu</h1>
      <p className='absolute right-4 text-1xl cursor-pointer' onClick={closeHandler}>X</p>
    </div>

    <div className='flex flex-col pt-8 items-start px-6 font-bold text-xl gap-10 w-full'>
      <p className='cursor-pointer hover:text-green-500'>Catalog</p>
      <p className='cursor-pointer hover:text-green-500 flex items-center justify-between w-full'>How it works <span className='pl-1'><FaCaretDown /></span></p>
      <p className='cursor-pointer hover:text-green-500'>Pricing</p>
      <p className='cursor-pointer hover:text-green-500'>Blog</p>
      <p className='cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Services <span className='pl'><FaCaretDown /></span></p>
      <p className='cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Use-cases <span className='pl-1'><FaCaretDown /></span></p>
      <p className='cursor-pointer hover:text-green-500 flex w-full justify-between items-center'>Need help? <span className='pl-1'><FaCaretDown /></span></p>
    </div>
  </div> */}





    </>
  );
};

export default Header;
