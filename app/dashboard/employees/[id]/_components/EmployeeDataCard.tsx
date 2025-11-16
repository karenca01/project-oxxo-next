import { Employee } from "@/entities";
import { Image } from "@heroui/react";
import Link from "next/link";
import DeleteEmployee from "./DeleteEmployee";
import CreateUser from "./CreateUser";
import FormCreateUserEmployee from "./FormCreateUser";
import { LuUser } from "react-icons/lu";

export default function EmpoyeeDataCard({employee}: {employee: Employee}){
    return(
        <div className="flex flex-row items-center gap-2 bg-white rounded-md flex-grow-0 h-fit px-4 py-2 m-2">
        <div className="text-xl flex flex-col h-full justify-between">
            <div className="h-full py-10">
                <h1 className="font-bold">{employee.employeeName + " " + employee.employeeLastname}</h1>
                <h1>Correo: {employee.employeeEmail}</h1>
                <h1>Número de teléfono: {employee.employeePhonenumber}</h1>
                {employee.location ? (
                    <Link className="underline" href={{pathname:`/dashboard`, query: {store: String(employee.location?.locationId)}}}>
                        <h1>Empleado en {employee.location?.locationName}</h1>
                    </Link>
                ) : (
                    <h1>Sin tienda asignada</h1>
                )}
            </div>
            <div>
                <DeleteEmployee employeeId={employee.employeeId}/>
            </div>
        </div>
        <div className="h-full py-20 w-1 bg-zinc-300 mx-6"/>
        <CreateUser icon={<LuUser size="20"/>} photo={employee?.employeePhoto}>
            {
                employee && (
                    <FormCreateUserEmployee employee={employee}/>
                )
            }
        </CreateUser>
    </div>
    )
}