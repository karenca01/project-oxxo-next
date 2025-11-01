import createProduct from "@/actions/products/create";
import { Input, Button } from "@heroui/react";
import { LuDollarSign } from "react-icons/lu";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import SelectProvider from "./_components/SelectProvider";

const ProductsPage = async () => {
    const responseProviders = await fetch(`${API_URL}/providers`,{
        headers:{
            ...authHeaders()
        },
    })
    const providers = await responseProviders.json();

    return(
        <form action={createProduct} className="px-10 justify-center pt-10">
            <div className="flex flex-col p-10 rounded-md gap-6 bg-orange-400">
                <h1 className="text-2xl font-bold text-white">Crear producto</h1>
                <Input label="Nombre" name="productName"/>
                <Input label="Precio" endContent={<LuDollarSign size="20"/>} name="price"/>
                <Input label="Num. de Sellos" name="countSeal"/>
                <SelectProvider providers={providers}/>
                <Button type="submit" color="primary">Guardar</Button>
            </div>
        </form>
    )
}

export default ProductsPage;