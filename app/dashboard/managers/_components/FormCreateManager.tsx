import { Button, Input } from "@heroui/react";
import SelectStore from "../[id]/_components/SelectStore";
import { Location } from "@/entities";
import createManager from "@/actions/managers/create";

export default function FormCreateManager({stores}: {stores: Location}){
    return(
        <form action={createManager} className="flex flex-col gap-4">
            <h1 className="text-3xl text-white text-center font-bold">Crear nuevo manager</h1>
            <Input label="Nombre completo" name="managerFullName"/>
            <Input label="Correo electronico" name="managerEmail"/>
            <Input label="Salario" name="managerSalary"/>
            <Input label="Número de teléfono" name="managerPhonenumber"/>
            <SelectStore stores={stores}/>
            <Button type="submit" color="primary">Guardar</Button>
        </form>
    )
}