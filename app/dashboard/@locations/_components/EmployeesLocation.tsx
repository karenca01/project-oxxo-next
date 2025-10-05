import axios from "axios";
import { Employee } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default async function EmployeesLocation({store}: {store: string | string[] | undefined}){
    if(!store) return null;
    const token = cookies().get(TOKEN_NAME)?.value;
    const { data } = await axios.get<Employee[]>(`${API_URL}/employees/location/${store}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    });
    return data.map((employee) => {
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