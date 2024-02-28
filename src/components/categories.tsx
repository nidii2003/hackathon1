import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Categories = () => {
   return (
      <div className=' body-font mb-[100px] mt-[100px]'>
         <div className="container px-5 mx-auto">
            <div className="text-center mb-10">
               <h1 className=" scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
                  Our Categories
               </h1>
               <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
               </p>
               <div className="flex mt-2 justify-center">
                  <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
               </div>
            </div>
         </div>
         {/*categories strt from here*/}
         <div className='grid grid-cols-1 md:grid-cols2 lg:grid-cols-4 gap-4'> 
         {/*categorie 1*/}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/tops"}>
               <Image src="/image/h.jpg" alt="topss" width={300} height={300} className='rounded-xl duration-500 group-hover:scale-125 ' />
               
               <div className=' hidden lg:block absolute -bottom-24  group-hover:bottom-6 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>TOPS</h1>
               </div>
               <div className='block lg:hidden absolute bottom-6 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>TOPS</h1>
               </div>
            </Link>
         </div>
         {/*category2*/}
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/pants"}>
               <Image src="/image/red.jpg" alt="topss" width={350} height={350} className='rounded-xl duration-500 group-hover:scale-125 ' />
               <div className=' hidden lg:block absolute -bottom-24  group-hover:bottom-6 duration-500  scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>PANTS</h1>
               </div>
               <div className=' block lg:hidden absolute bottom-6 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>PANTS</h1>
               </div>
            </Link>
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/accessories"}>
               <Image src="/image/ni.jpg" alt="topss" width={300} height={300} className='rounded-xl duration-500 group-hover:scale-125 ' />
               <div className='hidden lg:block absolute -bottom-24  group-hover:bottom-6 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>ACCESSORIES</h1>
               </div>
               <div className='block lg:hidden absolute bottom-6 duration-500 scrol-l-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>ACCESSORIES</h1>
               </div>
            </Link>-
         </div>
         <div className='mb-7 lg:mb-0 overflow-hidden z-10 mx-auto group relative'>
            <Link href={"/shoes"}>
               <Image src="/image/ss.jpg" alt="topss" width={300} height={300} className='rounded-xl duration-500 group-hover:scale-125 ' />
               <div className='hidden lg:block absolute -bottom-24  group-hover:bottom-6 duration-500 scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>SHOES</h1>
               </div>
               <div className='block lg:hidden absolute:bottom-6 duration-500  scroll-m-20 text-3xl font-extrabold tracking-tight bg-myWhite/70  text-myOrange w-f'>
                  <h1 className='left-3'>SHOES</h1>
               </div>
            </Link>
         </div>
         </div>
         <div />
         <div />
         <div />
         <div />
      </div>
   )
}
export default Categories