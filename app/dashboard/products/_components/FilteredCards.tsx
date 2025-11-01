"use client";
import { Product } from "@/entities";
import { Provider } from "@/entities";
import { useState } from "react";
import { useEffect } from "react";
import { Input } from "@heroui/react";
import Link from "next/link";
import ProductCard from "./ProductCard";
import { Select, SelectItem } from "@heroui/react";

export default function FilteredCards({products, providers}: {products: Product[], providers: Provider[]}){
    const [filtered, setfiltered] = useState<string>("")
    const [provider, setProvider] = useState<string>();
    const [show, setShow] = useState(false);
    const [productsList, setProductsList] = useState<Product[]>(products)
    useEffect(() => {
        const filteredProducts = products.filter((product)=>{
            if(product.productName.toLocaleLowerCase().includes(filtered.toLocaleLowerCase()) && product.provider.providerId === provider){
                return true;
            }else return false;
        })
        setProductsList(filteredProducts)
        setShow(true)
    },[filtered, provider, products])
    return (
        <div className="max-h-[90vh] min-h-[90vh] overflow-y-auto flex flex-col gap-4 border-r-orange-200 border-r-2 pt-10 px-10">
        <Select label="Proveedor" onChange={(e)=>{
            setProvider(e.target.value)
        }}>
            {providers.map((provider)=>(
                <SelectItem key={provider.providerId}>
                    {provider.providerName}
                </SelectItem>
            ))}
        </Select>
        <Input onChange={(e)=>{
            setfiltered(e.target.value)
        }}
        label="Nombre del producto"
        />
            {show && productsList.map((product)=>{
                return(
                    <Link
                    key={product.productId} 
                    href={{pathname: `/dashboard/products/${product.productId}`}}
                    >
                        <ProductCard product={product}/>
                    </Link>
                )
            })}
        </div>
    )
    
}