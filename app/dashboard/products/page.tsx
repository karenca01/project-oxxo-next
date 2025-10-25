import { API_URL } from "@/constants";
import { Product } from "@/entities";
import { authHeaders } from "@/helpers/authHeaders";
import ProductCard from "./_components/ProductCard";
import Link from "next/link";
import FilteredCards from "./_components/FilteredCards";

const ProductsPage = async () => {
    const response = await fetch(`${API_URL}/products`,{
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:products"]
        }
    })
    const products: Product[] = await response.json();
    return(
        <div>
            <FilteredCards products={products}/>
        </div>
    )
}

export default ProductsPage;