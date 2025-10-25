import { Card, CardHeader, CardBody, Divider } from "@heroui/react";
import { Product } from "@/entities";

export default function ProductCard({product} : {product: Product}){
    return(
        <Card className="max-w-[350px]">
            <CardHeader>{product.productName}</CardHeader>
            <Divider/>
            <CardBody>
                <p>Precio: <b>${product.price}</b></p>
            </CardBody>
        </Card>
    )
}