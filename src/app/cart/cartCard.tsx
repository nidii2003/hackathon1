"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {FaPlus,FaMinus,FaTrash} from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "@/components/store/hooks";
import { delltem } from "@/components/store/features/cart";
const CartCard=(
)=>{const cartArray=(useAppSelector((state) => state.cart))
    const dispatch=useAppDispatch();
    return<>
    
      {cartArray.length>=1 && cartArray.map((item,i)=>(
          <div key={i} className="flex p-10 py-3">
          {/*imgr*/}
          <Image src={item.image[0]} alt={item.title} width={80} height={80} className=" w-[100px] h-[100px]"/>
          {/*some info*/}
          <div className="flex px-5 justify-between items-center w-full ">
              <div> {item.title}
              <h2 className="text-sm text-myBlackpara leading-none line-clamp-1 font-semibold"></h2>
              <p className="mt-2 text-sm text-myBlackpara leading-none line-clamp-1 font-semibold">
                size:&nbsp; <span>{item.size}</span> 
              </p>
              {/*quntitu*/}
              <div className="flex mt-2 items-center">
                  <Button onClick={()=>dispatch(subCart(item))} className="group hover:bg-myBlackpara bg-myWhite text-myOrange hover:text-myWhite w-fit h-fit rounded-lg text-xs duration-300">
              <FaMinus className=" h-2 w-2 group-hover text-myOrange"/>
                  </Button>
                  <div className="mr-2 ml-2 scroll-m-20 text-sm font-semibold text-myBlackpara trackig-tight">1</div>
                  <Button  onClick={()=>dispatch(addCart(item))} className="group hover:bg-myBlackpara bg-myWhite text-myOrange hover:text-myWhite w-fit h-fit rounded-lg text-xs duration-300">
              <FaPlus className=" h-2 w-2 group-hover text-myOrange"/>
                  </Button>

              </div>
              <div  onClick={()=>dispatch(delltem(item.uuid))} className="  lg:hidden mt-2 flex flex-col items-center gap-2">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackpara"><span>Price:&nbsp;</span>&#36;{item.discount>0 ? (item.price-(item.price*item.discount)/100)*item.quantity:item.price*item.quantity}</h3>
              <FaTrash className=" text-base font-semibold leading-none line-clamp-1 text-myRed cursor-pointer"/>
          </div>
              </div>
              {/*price and delete*/}
          <div onClick={()=>dispatch(delltem(item.uuid))} className=" hidden lg:flex flex-col items-center gap-5">
              <h3 className="text-sm font-semibold leading-none line-clamp-1 text-myBlackpara">
                  <span>Price:&nbsp;</span>&#36;{item.discount>0 ? (item.price-(item.price*item.discount)/100)*item.quantity:item.price*item.quantity}</h3>
              <FaTrash className=" text-base font-semibold leading-none line-clamp-1 text-myRed cursor-pointer"/>
          </div>
          </div>
      <div>
          
      </div>
      </div>
      ))}
    </>
    
};
export default CartCard
