import React from 'react'
import { Button } from './ui/button'
import { AiFillShopping } from "react-icons/ai";
const Hero =()=>{
    return(
        <div className='mb-[100px]'><div className="hero min-h-[80vh] custom-img bg-fixed bg-center bg-norepeat" style={{backgroundImage: 'url'}}>
        <div className="hero-overlay bg-opacity-30"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-myWhite">FUTUREISTIC <span className="text-myOrange">CLOTHES</span> </h1>
            <p className="mb-5 scroll-m-20 text-xl font-semibold tracking-tight text-myWhite">Upgrade your wardrobe with sleek and stylish Appearals and Topa and Noatch shoes.</p>
            <Button className='outline outline-offset-2 outline-1 text-myWhite group hover:rounded-3xl duration-300 hover:outline-myOrange'>
      < AiFillShopping className="mr-2 h-6 w-6 group-hover:text-myOrange group-hover:animate-bounce "/> <span className='text-myWhite '>Shop Now</span>
    </Button>
          </div>
        </div>
      </div></div>
    )
}
export default Hero