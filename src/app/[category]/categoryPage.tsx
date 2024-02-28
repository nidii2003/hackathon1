"use client";
import Bestsellingcard from '@/components/bestsellingcard';
import { useAppSelector } from '@/components/store/hooks';
    const  CategoryPage =({params}:{params:{category:string}})=>{
        const product=useAppSelector((state)=>state.products)
        const bestsell = product.filter((val)=>val.category==params.category);
        
    return(
        <div>
             <div className="text-center mb-10">
                  <h1 className=" scroll-m-20 text-xl font-extrabold tracking-tight lg:text-3xl capitalize">
                     {params.category}
                  </h1>
                  <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
                  </p>
                  <div className="flex mt-2 justify-center">
                     <div className="w-16 h-1 rounded-full bg-myOrange inline-flex" />
                  </div>
               </div>
         <div className='flex flex-wrap justify-center gap-5'>{
            bestsell.map((item:any, i) => (
               <Bestsellingcard
                  key={i} src={item.image[0]} alt={item.title} title={item.title} description={item.description} price={item.price} category={item.category} slug={item.slug}  discount={item.discount}/>
            ))
         }
         </div>
        </div>

    )
}
export default CategoryPage