import React from 'react'
const Promotion = () => {
  return (
      <div>
        <div className="container px-5 mx-auto">
          <div className="text-center mb-10">
            <h1 className="scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl">
              Our Promotions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            </p>
            <div className="flex mt-2 justify-center">
              <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
            </div>
            </div>
            </div>
            <div className='grid grid-cols1 lg:grid-cols-2 gap-6'>
            <div className="hero min-h-[25rem] promo-1 rounded-xl" style={{backgroundImage: 'url'}}>
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-myWhite scroll-m-20 text-3xl font-bold">GET UPTO <span className='text-myOrange'>60%</span> OOF</h1>
      <p className="mb-5 mt-2 scroll-m-20 text myWhite font-medium tracking-tight text-myWhite">For sale get upto 60% off on the season varient.</p>
    </div>
  </div>
  </div>
            <div>
           <div><div > 
      <div className="hero min-h-[25rem] promo-2 rounded-xl" style={{backgroundImage: 'url'}}>
  <div className="hero-overlay bg-opacity-60 rounded-xl"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-4xl text-myWhite scroll-m-20 text-3xl font-bold">GET UPTO <span className='text-myOrange'>30%</span> OOF</h1>
      <p className="mb-5 mt-2 scroll-m-20 text myWhite font-medium tracking-tight text-myWhite">For sale get upto 30% off on new jewllery arrival.</p>
    </div>
  </div>
</div>
            </div>
    </div>
  </div> 
</div>
           
  </div> 
  )
   }
export default Promotion