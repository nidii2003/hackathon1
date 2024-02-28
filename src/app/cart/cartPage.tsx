"use client";
import { Button } from "@/components/ui/button";
import CartCard from "./cartCard";
import { useAppSelector } from "@/components/store/hooks";

const CartPage=()=>{
    const cartArray=(useAppSelector((state) => state.cart))
    const total=cartArray.reduce((total,array)=>{return(total+((array.price-(array.price*array.discount)/100))*array.quantity)},0)
    return(
        <div className=" grid lg:grid-cols-3 grid-cols-1">
        {/*iyems*/}
        <div className="col-span-2">
            <CartCard/>
        </div>
              {/*summary*/}
        <div className="bg-myWhite p-5 rounded-xl">
        <h2 className="scroll-m-20 text-lg font-semibold tracking-tight uppercase">
            Order Summary
        </h2>
        <div className="divider mt-0 mb-1"></div> 
        {/*product prices*/}
      <div className="text-sm font-medium tracking-tight text-myBlackpara">
        <div className="flex item-center justify-between capitalize">
            <h2> sub total</h2>
            <h2> ${total}</h2>
        </div>
          {/*selivry chrgess*/}
        <div className="flex item-center justify-between capitalize">
            <h2> delivery charges</h2>
            <h2> TBD</h2>
        </div>
   {/*service chrgess*/}
        <div className="flex item-center justify-between capitalize">
            <h2> sales tax</h2>
            <h2> TBD</h2>
        </div>
        <div className="divider mt-0 mb-1"></div> 
         {/*estimate total*/}
         <div className="flex item-center justify-between uppercase font-semibold text-sm tracking-tight text-myBlackpara">
            <h2>estimated total</h2>
            <h2> ${total}</h2>
        </div>
        <div className="divider mt-0 mb-1"></div>
        {/*chckout button*/}
        <div className="flex item-center justify-center w-full">
            <Button className="bg-myOrange hover:bg-myBlackpara duration-100 text-myWhite hover:text-myWhite
            scroll-m-20 text-xs font-semibold tracking-tight hover:shadow-md uppercase rounded-xl">Proceed To Check Out</Button>
        </div>
        <div className="divider mt-0 mb-1"></div>
         {/*note*/}
      <p className="text-xs font-semibold tracking-tight text-myBlackpara w-[97%] text-center italic ">
       {`* Delievery charges and the sales tax wil be calculated in the checkout page`}
      </p>

    </div>
        </div>
        
        </div>
    )
}
export default CartPage