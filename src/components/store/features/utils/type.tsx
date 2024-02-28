import { StaticImageData } from "next/image";

export type Product={
    id:number|any,
    title:string,
    image?:string[] |StaticImageData|undefined,
    slug:string,
    price:number,
    category:string,
    description:string,
    size:string[],
    color:string[],
    quantity:number,
    discount?:number|any,
};
export type Cart={
    id:number|any,
    title:string,
    image?:string |StaticImageData|undefined|any,
    slug:string,
    price:number,
    category:string,
    discount?:number|any,
    size:string[],
    quantity:number,
    color:string,
    uuid:number|string|undefined,
};