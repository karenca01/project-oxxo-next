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
        <>
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
        </>
    )
    
}