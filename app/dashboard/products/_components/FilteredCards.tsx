"use client";
import { Product } from "@/entities";
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "@heroui/react";
import Link from "next/link";
import ProductCard from "./ProductCard";

export default function FilteredCards({products}: {products: Product[]}){
    const [filtered, setfiltered] = useState<string>("")
    const [productsList, setProductsList] = useState<Product[]>(products)
    useEffect(() => {
        const filteredProducts = products.filter((product)=>{
            if(product.productName.toLocaleLowerCase().includes(filtered.toLocaleLowerCase())){
                return true;
            }else return false;
        })
        setProductsList(filteredProducts)
    },[filtered])
    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-8 border-r-orange-200 border-r-2 pt-10 px-10">
        <Input onChange={(e)=>{
            setfiltered(e.target.value)
        }}
        label="Nombre del producto"
        />
            {productsList.map((product)=>{
                return(
                    <Link
                    key={product.productId} 
                    href={{pathname: `/dashboard/products/${product.productId}`}}
                    >
                        <ProductCard product={product} />
                    </Link>
                )
            })}
        </div>
    )
    
}