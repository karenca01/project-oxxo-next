import { Input, Button } from "@heroui/react";
import { Product } from "@/entities";
import updateProduct from "@/actions/products/update";
import SelectProvider from "../../_components/SelectProvider";
import { Provider } from "@/entities";
import { LuCheck } from "react-icons/lu";

export default function UpdateProduct({product, providers}: {product: Product, providers: Provider[]}) {
    const { productId } = product;
    const updateProductById = updateProduct.bind(null, productId);
    return(
        <form action={updateProductById} className="flex flex-col gap-4 p-10 items-center">
            <Input name="productName" label="Nombre" defaultValue={product.productName}/>
            <Input name="countSeal" label="Num. de sellos" defaultValue={String(product.countSeal)}/>
            <Input name="price" label="Precio" defaultValue={String(product.price)}/>
            <SelectProvider providers={providers} defaultProvider={product.provider.providerId}/>
            <Button type="submit" color="primary" className="w-10"><LuCheck size="20"/></Button>
        </form>
    )
}