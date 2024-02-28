import React from "react";
const Contact=()=>{
    return(
        <div className='body-font mb-[100px] mt-[50px]'>
        <div className="container px-5 mx-auto">
           <div className="text-center mb-10">
              <h1 className=" scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl capitalize">
                 Contact Us
              </h1>
              <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              </p>
              <div className="flex mt-2 justify-center">
                 <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
              </div>
           </div>
        </div>
        <section className="text-gray-600 body-font relative">
  <div className="absolute inset-0 bg-gray-300">
    <iframe
      width="100%"
      height="100%"
      frameBorder={0}
      marginHeight={0}
      marginWidth={0}
      title="map"
      scrolling="no"
      src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=%C4%B0zmir+(My%20Business%20Name)&ie=UTF8&t=&z=14&iwloc=B&output=embed"
      style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
    />
  </div>
  <div className="container px-5 py-24 mx-auto flex">
    <div className="lg:w-1/3 md:w-1/2 bg-myWhite rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 className=" scroll-m-20 text-2xl font-semibold tracking-tight mb-1 text-myBlackpara  title-font">
        Feedback
      </h2>
      <p className=" mt-2 scroll-m-20 text-base font-semibold tracking-tight mb-1 text-myBlackpara title-font">
      Give your input,let us know how we can serve you better.Your Opinion Matters: Help Us Improve
      </p>
      <div className="relative mb-4">
        <label htmlFor="message" className=" scroll-m-20 text-base font-semibold tracking-tight mb-1 text-myBlackpara title-font">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          defaultValue={""}
        />
      </div>
      <div className="relative mb-4">
        <label htmlFor="email" className=" mt-3 scroll-m-20 text-base font-semibold tracking-tight mb-1 text-myBlackpara title-font">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        />
      </div>
      <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-myWhite bg-myOrange border-0 py-2 px-6 focus:outline-none hover:bg-myBlackpara rounded">
                  Your Email Here
                </button>
      <p className="text-xs text-myBlackpara mt-3">
      Keep it brief and add an invitation to keep in touch. ...
      </p>
    </div>
  </div>
</section>

     </div>
    )
}
export default Contact