"use client";
import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";
import path from "path";
import { Item } from "@radix-ui/react-navigation-menu";
    const SlugComponent =({image}:string|string[]|StaticImageData|any)=>{
    const [path,setpath]=useState("")

    return(
        <div>

            <Image src={ path ? path:image[0]} alt={'Ecommerce'} width={400} height={400}/>
            <div className="flex item-center justify-evenly max-auto mt-2">
               
                {image.map((item:string,i:any) => (  <div  key={i} className="cursor-pointer w-16 h-16">
                <Image src={item} alt={'Ecommerce'}width={60}height={60} onClick={() =>setpath(item)}/>
                </div>))}
    
          
            </div>
            </div>
    
    )
}
export default SlugComponent