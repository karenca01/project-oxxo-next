import { Employee } from "@/entities";
import { API_URL } from "@/constants";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";
import { authHeaders } from "@/helpers/authHeaders";

export default async function EmployeesLocation({store}: {store: string | string[] | undefined}){
    if(!store) return "No hay empleados";
    const response = await fetch(`${API_URL}/employees/location/${store}`,{
        method: "GET",
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:locations:employees"]
        }
    });
    const data: Employee[] = await response.json();
    return data.map((employee: Employee) => {
        const fullName = employee.employeeName + " " + employee.employeeLastname;
        return (
            <Card className="mx-10 my-10 bg-white rounded-md shadow-md">
                <CardHeader className="px-2 w-full h-[5vh] flex flex-col items-center justify-center">
                    <p className="w-full">Nombre: <b>{fullName}</b></p>
                </CardHeader>
                <Divider/>
                <CardBody className="px-2 w-full h-[8vh] flex flex-col items-center justify-center">
                    <p className="w-full">Email: <b>{employee.employeeEmail}</b></p>
                    <p className="w-full">Teléfono: <b>{employee.employeePhonenumber}</b></p>
                </CardBody>
            </Card>
        )
    });
}