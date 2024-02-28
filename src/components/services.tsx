import React from 'react'
import Image from 'next/image'
const Services = () => {
  return (
    <div><section className=" body-font mb-[100px] mt-[100]">
      <div className="container px-5 mx-auto">
        <div className="text-center mb-10">
          <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
            Our Services
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
          </p>
          <div className="flex mt-2 justify-center">
            <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
          </div>
        </div>
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          <div className="mx-auto group p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full mb-5 flex-shrink-0">
              <Image src="/image/van.jpg" alt="Delievry" width={100} height={100} className="w-20 h-20" />
            </div>
            <div className="flex-grow">
              <h2 className=" group-hover:text-myOrange duration-300 text-myBlack scroll-m-20 text-lg font-bold tracking-tight lg:text-lg mb-3">
                FREE DELIVERY
              </h2>
              <p className="tex-kp line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight first:mt-0">
                Free delivery on order above $1000
              </p>
            </div>
          </div>
          <div className="mx-auto group p-4 md:w-1/3 flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image src="/image/cs.jpg" alt="Delievry" width={100} height={100} className="w-20 h-20" />
            </div>
            <div className="flex-grow">
              <h2 className="group-hover:text-myOrange duration-300 text-myBlack scroll-m-20 text-lg font-bold tracking-tight lg:text-lg mb-3">
                24/7 Customer Services
              </h2>
              <p className="tex-kp line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight first:mt-0">
                For quries and question feel free to contact
              </p>

            </div>
          </div>
          <div className=" mx-auto group p-4 lg:w-1/3 mx-auto flex flex-col text-center items-center">
            <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
              <Image src="/image/cs.jpg" alt="Delievry" width={100} height={100} className="w-20 h-20" />
            </div>
            <div className="flex-grow">
              <h2 className="group-hover:text-myOrange duration-300 text-myBlack scroll-m-20 text-lg font-bold tracking-tight lg:text-lg mb-3">
                Money Back Garuenty
              </h2>
              <p className="tex-kp line-clamp-2 scroll-m-20 text-base font-semibold tracking-tight first:mt-0">
                Get money back garenuty on damage products
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  )
}
export default Services