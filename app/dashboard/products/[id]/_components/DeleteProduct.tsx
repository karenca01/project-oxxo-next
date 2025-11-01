import { LuTrash } from "react-icons/lu";
import { Button } from "@heroui/react";
import deleteProduct from "@/actions/products/delete";

export default function DeleteProduct({productId}: {productId: string}){
    const deleteProductById = deleteProduct.bind(null, productId);
    return(
        <form action={deleteProductById}>
            <Button color="danger" type="submit">
                <LuTrash size="20"/>
            </Button>
        </form>
    )
}