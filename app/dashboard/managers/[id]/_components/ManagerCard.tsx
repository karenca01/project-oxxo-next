import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Manager } from "@/entities";
import Link from "next/link";

export default function ManagerCard({manager}: {manager: Manager}){
    return(
        <Card className="mx-20 py-2 text-center text-center">
            <CardHeader className="text-center">
                <p className="text-4xl"><b>{manager.managerFullName}</b></p>
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-row flex-grow-0 items-center justify-center gap-10">
                <div className="flex flex-col text-lg">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhonenumber}</b></p>
                    <p className={manager.location ? "" : "hidden"}> 
                        Tienda: {" "}
                        <Link
                            href={{
                                pathname: `/dashboard`,
                                query: {
                                    store: manager.location?.locationId
                                }
                            }}
                        >
                            <b className="underline">{manager?.location?.locationName}</b>
                        </Link>
                    </p>
                </div>
                {
                    manager.location ? (
                        <>
                            <p className="w-full">Tienda: <b>{manager.location.locationName}</b></p>
                        </>
                    ) : 
                    (<p className="w-full text-4xl">No tiene tienda</p>)
                }
            </CardBody>
        </Card>
    )
}