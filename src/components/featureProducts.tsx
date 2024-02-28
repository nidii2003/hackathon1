"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Bestsellingcard from "./bestsellingcard";
import { useAppSelector } from "./store/hooks";
function FeatureProducts() {
    //my data 
    const bestsell=useAppSelector((state)=>state.products);
{/*const bestsell = [
        {
            src: "/image/na.jpg",
            alt: " WHITE TEE-SHIRT",
            title: "White printed tee",
            description: "Best quality tee-shirt for women",
            price: 150,
            category: "tops",
            slug: "White top",
        },
        {
            src: "/image/bb.jpg",
            alt: "BLACK TEe-SHIRT",
            title: "Black printed tee",
            description: "Best quality tee-shirt for women",
            price: 150,
            category: "tops",
            slug: "Black top",
        },
        {
            src: "/image/de.jpg",
            alt: "BLACK PUMPIES",
            title: "Black PUMPIES",
            description: "Best quality top noch SHOES",
            price: 500,
            category: "shoes",
            slug: "Black shoes",
        },  
        {
            src: "/image/ring.jpg",
            alt: " PUMPIES",
            title: "Diamond ring",
            description: "Best quality rings for your loved ones",
            price: 1500,
            category: "accessories",
            slug: "Ring",
        },  
            {
               src: "/image/na.jpg",
               alt: " WHITE TEA-SHIRT",
               title: "White printed tee",
               description: "Best quality tee-shirt for women",
               price: 150,
               category: "tops",
               slug: "White top",
            },
            {
               src: "/image/bb.jpg",
               alt: "BLACK TEE-SHIRT",
               title: "Black Top",
               description: "Best quality top for women",
               price: 150,
               category: "tops",
               slug: "black top",
            },
            {
               src: "/image/shirt.jpg",
               alt: " purple",
               title: "Purple Top",
               description: "Best quality top for women",
               price: 150,
               category: "tops",
               slug: "Purple top",
            },
            {
               src: "/image/bshirt.jpg",
               alt: "BLACK TEA-SHIRT",
               title: "Black Top",
               description: "Best quality top for women",
               price: 150,
               category: "tops",
               slug: "black top",
            },
            {
               src: "/image/h.jpg",
               alt: " WHITE TEA-SHIRT",
               title: "White printed tea",
               description: "Best quality tea-shirt for women",
               price: 150,
               category: "tops",
               slug: "White top",
            },
            {
               src: "/image/bshirt2.jpg",
               alt: "BLACK TEA-SHIRT",
               title: "Black printed tea",
               description: "Best quality tea-shirt for women",
               price: 150,
               category: "tops",
               slug: "black top",
            },
            {
               src: "/image/o.jpg",
               alt: "White top",
               title: "White Printed Tee",
               description: "Best quality tops for women",
               price: 150,
               category: "tops",
               slug: "White Printed Tee",
            },
            {
               src: "/image/gr.jpg",
               alt: "Gray Printed top",
               title: "Gray Printed Tops",
               description: "Best quality tops for women",
               price: 200,
               category: "tops",
               slug: "Gray top",
            },
            {
               src: "/image/bcc.jpg",
               alt: "BLACK TEA-SHIRT",
               title: "Black Top",
               description: "Best quality top for women",
               price: 150,
               category: "tops",
               slug: "black top",
            },
            {
                src: "/image/tea2.jpg",
                alt: "BLACK TEA-SHIRT",
                title: "Black Top",
                description: "Best quality tee for women",
                price: 150,
                category: "tops",
                slug: "black Tee",
             },
             {
                src: "/image/ss.jpg",
                alt: "BLACK PUMPIES",
                title: "Heeles",
                description: "Best quality heels for women",
                price: 500,
                category: "shoes",
                slug: "Red Heels",
            },
    ];*/}
    //carosils setting
    var settings = {
        dots: true,
        arrows:false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                    arrows:false,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
            
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows:false,
                }
            }
        ]
    }
    return (
        <div className="mb-[100px] mt-[100px]" >
            <div className="container px-5 mx-auto">
                <div className="text-center mb-10">
                    <h1 className=" scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl capitalize text-center">
                        Feature Products
                    </h1>
                    <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                    </p>
                    <div className="flex mt-2 justify-center">
                        <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
                    </div>
                </div>
            </div>
            {/*carosinr*/}
            <Slider {...settings}>{
         bestsell.map((item:any,i)=>(
                <Bestsellingcard
                    key={i} src={item.image[0]} alt={item.title} title={item.title} description={item.description} price={item.price} category={item.category} slug={item.slug} discount={item.discount} />
                ))
               }
            </Slider>
        </div>
    );
}
export default FeatureProducts