import { Button, Input } from "@heroui/react";
import createEmployee from "@/actions/employees/create";

export default function FormCreateEmployee(){
    return(
        <form action={createEmployee} className="flex flex-col gap-2 p-8 bg-orange-400 h-fit rounded-md m-2">
            <Input isRequired={true} label="Nombre" name="employeeName" placeholder="Carlos"/>
            <Input isRequired={true} label="Apellido" name="employeeLastname" placeholder="Perez"/>
            <Input isRequired={true} label="Correo" name="employeeEmail" placeholder="carlos@email.com"/>
            <Input isRequired={true} label="Número de teléfono" name="employeePhonenumber" placeholder="4429503385"/>
            <Input name="employeePhoto" type="file"/>
            <Button type="submit" color="primary">Registrar</Button>
        </form>
    )
}