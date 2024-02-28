import Hero from "@/components/hero";
import Services from "@/components/services";
import Promotion from "@/components/promotion";
import Categories from "@/components/categories";
import Bestselling from "@/components/bestselling";
import FeatureProduct from "@/components/featureProducts";
import FeatureProducts from "@/components/featureProducts";

export default function Home() {
  return (
      <div className="h-[80]">
        <Hero/>
        <FeatureProducts/>
        <Services/>
      <Promotion/>
      <Categories/>
      <Bestselling/>
         </div>
      )
  }