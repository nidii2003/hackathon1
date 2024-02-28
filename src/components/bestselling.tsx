"use client";
import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import Bestsellingcard from './bestsellingcard'
import { useAppSelector } from './store/hooks'
const Bestselling=()=>{
   const product=useAppSelector((state)=>state.products)
   const bestsell = product.slice(0,3);
          {/*src:"/image/na.jpg",
      alt: " WHITE TEA-SHIRT",
      title:"White printed tea",
      description:"Best quality tea-shirt for women",
      price:150,
      category:"tops",
      slug:"White top",
   },
   {
      src:"/image/bb.jpg",
      alt: "BLACK TEA-SHIRT",
      title:"Black printed tea",
      description:"Best quality tea-shirt for women",
      price:150,
      category:"tops",
      slug:"Black top",
   },
   {
      src:"/image/de.jpg",
      alt: "BLACK PUMPIES",
      title:"Black PUMPIES",
      description:"Best quality top noch SHOES",
      price:500,
      category:"shoes",
      slug:"Black shoes",
   },
   ];const bestsell*/ }
return(
    <div className='body-font mb-[100px] mt-[100px]'>
         <div className="container px-5 mx-auto">
            <div className="text-center mb-10">
               <h1 className=" scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
                  Best Selling Product
               </h1>
               <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
               </p>
               <div className="flex mt-2 justify-center">
                  <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
               </div>
               </div>
               </div>
               {/*best sellling product*/}
               <div className='flex flex-wrap justify-center gap-5'>{
                  bestsell.map((item:any,i)=>(
                     <Bestsellingcard 
                        key={i} src={item.image[0]} alt={item.title} title={item.title} description={item.description} price={item.price} category={item.category} slug={item.slug} discount={item.discount}/>
                  ))
               }
                    </div>
    </div>
)
}
export default Bestselling