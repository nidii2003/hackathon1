"use client";
import React from 'react'
import { GiHamburger } from 'react-icons/gi'
import Link from "next/link"
import Image from 'next/image'
import { NavigationMenuDemo } from './navlinks'
import { useAppSelector } from './store/hooks';
const Navbar = () => {
const cart=useAppSelector((state)=>state.cart)

  return (
    <div><div className="navbar bg-mywhitee">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-myWhitee rounded-box w-52">
            <li><Link href={"/"}>home</Link></li>
            <li>
              <details>
                <summary>female</summary>
                <ul className="p-2">
                  <li><Link href={"/tops"}>tops</Link></li>
                  <li><Link href={"/pants"}>pants</Link></li>
                  <li><Link href={"/accessories"}>accesories</Link></li>
                  <li><Link href={"/shoes"}>shoes</Link></li>
                </ul>
              </details>
            </li>
            <li><Link href={"/contact"}>contact</Link></li>
            <li><Link href={"/about"}>about</Link></li>
          </ul>
        </div>
        <Image src="/image/nidi.jpg" alt="logo" width={100} height={100} className='ml-16 lg:ml-4' />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
        </ul>
      </div>
      <div className='hidden lg:flex'>
        <NavigationMenuDemo />
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <Link href={"/cart"}>
            <div tabIndex={0} role="button" className="pr-4 cursor-pointer group">
              <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 group-hover:text-myOrange duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                {cart.length>0 &&  <span className="badge badge-sm indicator-item">
              {cart.length}
                </span>}
               
              </div>
            </div>
            <div tabIndex={0} className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow">

            </div>
          </Link>
        </div>
      </div>
    </div></div>
  )
}
export default Navbar