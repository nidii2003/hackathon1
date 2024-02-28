import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'
import { FaShoppingCart } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import Link from 'next/link'
const Bestsellingcard = ({ src, alt, title, description, price, category, slug, discount }:
  {
    src: string,
    alt: string,
    title: string,
    description: string,
    price: number,
    category: string,
    slug: string,
    discount: number,
  }) => {
  return (
    <div> <div className="max-w-[350px] h-[40rem] p-4 mx-auto shadow-md rounded-xl relative group">
      <Link href={`/${category}/${slug}`}>
        <div className='block relative h-[20] rounded overflow-hidden'>
          <Image src={src} alt="topss" width={450} height={450} className='rounded-xl ' />
        </div>

        <div className="mt-4">
          {title && (
            <h2 className="scroll-m-20 border-b pb-2 text-lg  text-myOrange font-semibold tracking-tight first:mt-0 line-clamp-1">{title}</h2>)}
          <p className=" mt-0 scroll-m-20 text-sm font-semibold tracking-tight line-clamp-1"> {description}</p>
          <div className='flex gap-3'><p className={`mt-0 scroll-m-20 text-base font-semibold text-myOrange tracking-tight line-clamp-1 ${discount > 0 && "line through decoration-2 decoration-myOrange"}`}>  ${price}</p>
            {discount > 0 && (
              <p className=" mt-0 scroll-m-20 text-base font-semibold text-myOrange tracking-tight line-clamp-1">  ${price - (price * discount) / 100}</p>)}
          </div>
        </div>
      </Link>
      <div><Button className='  mt-3 scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myBlack hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl absolute bottom-2 right-2'>
        <FaShoppingCart className='h-4 w-4 mr-2 group-hover:text-myOrange duration-300' /> ADD TO CART </Button>
        <Button className='  scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myBlack hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl absolute bottom-2 lef-2'>
          <FaHeart className='h-4 w-4 mr-2 group-hover:text-myOrange duration-300'></FaHeart> BUY NOW  </Button>
        {discount>0 &&(
          <div className="scroll-m-20 text-xs text-mywhite bg-myOrange absolute top-0 left-2 w[80px] p-2 text-center uppercase 
          font-semibold tracking-tight rounded-tl-xl rounded-bl-xl myDiscount"> {`${discount}%off`}</div>
          )}        

          </div>
  
    </div></div>

      )
}
      export default Bestsellingcard