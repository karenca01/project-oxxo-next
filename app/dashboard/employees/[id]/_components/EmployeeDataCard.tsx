import { Employee } from "@/entities";
import { Image } from "@heroui/react";
import Link from "next/link";

export default function EmpoyeeDataCard({employee}: {employee: Employee}){
    return(
        <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 py-2 m-2">
        <div className="text-xl">
            <h1 className="font-bold">{employee.employeeName + " " + employee.employeeLastname}</h1>
            <h1>Correo: {employee.employeeEmail}</h1>
            <h1>Número de teléfono: {employee.employeePhonenumber}</h1>
            <Link className="underline" href={{pathname:`/dashboard`, query: {store: String(employee.location?.locationId)}}}>
                <h1>Empleado en {employee.location?.locationName}</h1>
            </Link>
        </div>
        <div className="h-full py-20 w-1 bg-zinc-300 mx-6"/>
        <Image src={employee.employeePhoto}
        isZoomed
        className="object-cover"
        classNames={{
            img: "size-60"
        }}/>
    </div>
    )
}