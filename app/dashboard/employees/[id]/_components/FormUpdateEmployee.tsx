import { Button, Input } from "@heroui/react";
import { Employee } from "@/entities";
import updateEmployee from "@/actions/employees/update";
import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import SelectLocation from "./SelectLocation";

export default async function FormUpdateEmployee({employee}: {employee: Employee}){
    const { employeeId } = employee;
    const updateEmployeeById = updateEmployee.bind(null, employeeId);

    const responseLocations = await fetch(`${API_URL}/locations`,{
            headers: {
                ...authHeaders()
            }
        })
    const locations = await responseLocations.json()

    return(
        <form action={updateEmployeeById} className="flex flex-col gap-2 p-8 bg-orange-400 h-fit rounded-md m-2">
            <Input label="Nombre" name="employeeName" defaultValue={employee.employeeName}/>
            <Input label="Apellido" name="employeeLastname" defaultValue={employee.employeeLastname}/>
            <Input label="Correo" name="employeeEmail" defaultValue={employee.employeeEmail}/>
            <Input label="Número de teléfono" name="employeePhonenumber" defaultValue={employee.employeePhonenumber}/>
            <SelectLocation stores={locations}/>
            <Input name="employeePhoto" type="file" defaultValue={employee.employeePhoto}/>
            <Button type="submit" color="primary">Actualizar</Button>
        </form>
    )
}