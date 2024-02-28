"use client";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import SlugComponent from "@/components/slugComponent";
import { FaHeart, FaShoppingCart, FaPlus, FaMinus } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from '@/components/store/hooks';
import { Item } from "@radix-ui/react-navigation-menu";
import { useState } from "react";
import Slug from "./page";
import cart, { addToCart } from "@/components/store/features/cart";


const SlugPage = ({ params }: { params: { slug: string } }) => {
    const product = useAppSelector((state) => state.products)
    const slug = product.filter((val) => val.slug == params.slug);
    const dispatch=useAppDispatch()
    const [cartItem, setCartItem] = useState({
              id:slug[0].id,
            title: slug[0].title,
            image: slug[0].image,
            slug: slug[0].slug,
            price: slug[0].price,
            category: slug[0].category,
            discount: slug[0].discount,
            color:slug[0].color,
            size: slug[0].size[0],
            quantity: slug[0].quantity,
     } );
    return (

        <div className="container px-5 py-24 mx-auto">
            <div className="lg:w-4/5 mx-auto flex flex-wrap">
                {/*image*/}
                <SlugComponent image={slug[0].image} />
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="  scroll-m-20 text-sm font-semibold tracking-tight mb-1 text-myBlackpara title-font uppercase ">
                        {slug[0].category}
                    </h2>
                    <h1 className=" mt-2 scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackpara">
                        {slug[0].title}

                    </h1>
                    <div className="rating rating-sm">
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                        <input type="radio" name="rating-6" className="mask mask-star-2 bg-myOrange" />
                    </div>

                    <p className=" mt-2 leading-relaxedc">
                        {slug[0].description}
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-gray-100 mb-5">
                        <div className="flex">
                            <span className="mr-3 scroll-m-20 text-base text-myBlackpara font-semibold tracking-tight">Color</span>
                            {slug[0].color.map((item, i) => (<button key={i}
                            onClick={()=>({...cartItem,color:item})}
                            className=" active:border-myBlackpara  focus:border-myBlack border-2 border-gray-300 mr-1 rounded-full w-6 h-6 focus:outline-none"
                                style={{ backgroundColor: item }} />
                            ))}
                        </div>
                        <div className="flex ml-6 items-center">
                            <span className="mr-3  text-myBlackpara scroll-m-20 text-base font-semibold tracking-tight">Size</span>

                            <label className="form-control w-full max-w-xs">

                                <select onChange={(e)=>({...cartItem,size:e.target.value})} className="select select-bordered">
                                    <option disabled selected>SELECT</option>

                                    {slug[0].size.map((item, i) => (<option key={i}>{item}</option>))}
                                </select>

                            </label>
                            <div />

                        </div>
                    </div>
                    <div className="flex items-center">
                       
                        <span className="mr-3  text-myBlackpara scroll-m-20 text-base font-semibold tracking-tight">Quantity</span>
                        <Button onClick={() => setCartItem({ ...cartItem, quantity: --cartItem.quantity })} className='w-fit h-fit mt-2 g-3 scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myWhite hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl '>
                            <FaMinus></FaMinus>LESS </Button>
                        <div className="mr-2 ml-2 scroll-m-20 text-basefont-bold tracking-tight text-myBlackpara">{cartItem.quantity}</div>
                        <Button  onClick={() => setCartItem({ ...cartItem, quantity: ++cartItem.quantity })} className='w-fit h-fit  mt-2 g-4 scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myWhite hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl '>
                            <FaPlus></FaPlus>ADD </Button>
                    </div>
                    <div className="divider"></div>
                    <div className="flex item:center justify-between">


                        <div>
                            <span className={`scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackpara
                            ${cartItem.discount > 0 && "line-through decoration-2 decoration-myOrange"}`}>
                                ${cartItem.price * cartItem.quantity}
                            </span>

                            {cartItem.discount > 0 && (
                                <span className="ml-6 scroll-m-20 text-2xl font-semibold tracking-tight text-myBlackpara">  ${cartItem.price - (cartItem.price * cartItem.discount) / 100 * cartItem.quantity}</span>)}</div>
                    </div>
                    <Button  onClick={()=>dispatch(addToCart(cartItem))} className='ml-5 mt-2 g-3 scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myWhite hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl '><ShoppingCart></ShoppingCart>ADD TO CART </Button>
                    <Button className=' mt-2 w-full scroll-m-20 text-xs font-semibold text-myOrange tracking-tight group bg-myWhite hover:bg-myBlackpara text-myOrange hover:text-myOrange rounded-xl '><FaHeart></FaHeart> BY NOW </Button>

                </div>
            </div>
        </div>
    )
}
export default SlugPage