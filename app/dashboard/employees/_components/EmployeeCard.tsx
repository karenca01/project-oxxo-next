import { Employee } from "@/entities";
import { Card, CardBody, CardHeader, Divider } from "@heroui/react";

export default function EmployeeCard({employee}: {employee: Employee}){
    return(
        <Card>
            <CardHeader>
                <h1 className="font-bold text-xl">
                    {employee.employeeName + " " + employee.employeeLastname}
                </h1>
            </CardHeader>
            <Divider />
            <CardBody>
                <p>Correo: <b>{employee.employeeEmail}</b></p>
                <p>Número de teléfono: <b>{employee.employeePhonenumber}</b></p>
            </CardBody>
        </Card>
    )
}