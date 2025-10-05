import axios from "axios";
import { Location } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { cookies } from "next/headers";
import { TOKEN_NAME, API_URL } from "@/constants";
import Link from "next/link";

export default async function LocationCard({store}: {store: string | string[] | undefined}){
    if(!store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Location>(`${API_URL}/locations/${store}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    <Card className="mx-10 my-10 bg-white rounded-md shadow-md">
        <CardHeader>
            <b className="w-full">{data.locationName}</b>
        </CardHeader>
        <Divider/>
        <CardBody>
            <p className="w-full">
                Manager: 
                <Link href={{pathname: `/dashboard/managers`}}>
                <b>{data.manager?.managerFullName}</b></Link></p>
        </CardBody>
    </Card>
}