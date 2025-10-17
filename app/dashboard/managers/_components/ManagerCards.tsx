import { Manager } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";
import Link from "next/link";

export default async function ManagerCards(){
    const response = await fetch(`${API_URL}/managers`,{
        method: "GET",
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:managers"]
        }
    });
    const data: Manager[] = await response.json();
    return data.map((manager: Manager) => {
        return (
            <Link href={{pathname : `/dashboard/managers/${manager.managerId}`}}>
                <Card className="mx-10 my-10 bg-white rounded-md shadow-md hover:scale-[110%] hover:bg-blue-50">
                    <CardHeader className="px-2 w-full h-[5vh] flex flex-col items-center justify-center">
                        <p className="w-full">Nombre: <b>{manager.managerFullName}</b></p>
                    </CardHeader>
                    <Divider/>
                    <CardBody className="px-2 w-full h-[8vh] flex flex-col items-center justify-center">
                        <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                        <p className="w-full">Teléfono: <b>{manager.managerPhonenumber}</b></p>
                    </CardBody>
                </Card>
            </Link>
        )
    });
}