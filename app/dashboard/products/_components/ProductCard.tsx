import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { Product } from "@/entities";
import Link from "next/link";

export default function ProductCard({product} : {product: Product}){
    return(
        <Card className="max-w-[350px] hover:scale-110 transition-transform mb-5">
            <CardHeader>{product.productName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Num de sellos: <b>{product.countSeal}</b></p>
                <p>Precio: <b>${product.price}</b></p>
                <p>Proveedor: <Link className="font-bold underline" href={`/dashboard/providers/${product.provider.providerId}`}> <b>{product.provider?.providerName}</b> </Link></p>

            </CardBody>
        </Card>
    )
}