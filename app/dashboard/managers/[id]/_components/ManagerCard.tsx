import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { Manager } from "@/entities";
import Link from "next/link";
import ModalGeneric from "@/app/dashboard/_components/ModalGeneric";
import FormUpdateUser from "./FormUpdateUser";
import FormCreateUser from "./FormCreateUser";
import { LuPlus } from "react-icons/lu";
import FormCreateUserManager from "./FormCreateUser";

export default function ManagerCard({manager}: {manager: Manager}){
    return(
        <Card className="mx-20 py-2 text-center">
            <CardHeader className="flex flex-col gap-4">
                <p className="text-4xl text-center"><b>{manager.managerFullName}</b></p>
                {
                    manager.user ? (
                        <ModalGeneric icon={<LuPlus size="15"/>}>
                            <FormUpdateUser user={manager.user}/>
                        </ModalGeneric>
                    ) : (
                        <ModalGeneric icon={<LuPlus size="15"/>}>
                            <FormCreateUserManager manager={manager}/>
                        </ModalGeneric>
                    )
                }
            </CardHeader>
            <Divider/>
            <CardBody className="flex flex-row flex-grow-0 items-center justify-center gap-10">
                <div className="flex flex-col text-lg">
                    <p className="w-full">Email: <b>{manager.managerEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{manager.managerPhonenumber}</b></p>
                    <p className="w-full">Salario: <b>${manager.managerSalary}</b></p>
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