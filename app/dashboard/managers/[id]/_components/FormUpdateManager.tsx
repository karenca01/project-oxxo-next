import { Manager} from "@/entities"
import { Input } from "@heroui/react"
import updateManager from "@/actions/managers/update"
import { Button } from "@heroui/react"
import { API_URL } from "@/constants"
import { authHeaders } from "@/helpers/authHeaders"
import SelectStore from "./SelectStore"

export default async function FormUpdateManager({manager}: {manager: Manager}){
    const updateManagerWithId = updateManager.bind(null, manager.managerId)
    const responseStores = await fetch(`${API_URL}/locations`, {
        headers:{
            ...authHeaders()
        }
    })
    const stores = await responseStores.json()
    return(
        <form action = {updateManagerWithId} className="bg-orange-400 rounded-md">
            <h1> Actualizar Manager </h1>
            <Input
            defaultValue={manager.managerFullName}
            placeholder="Marco Aurelio"
            name="managerFullName"
            />
            <Input
            defaultValue={manager.managerEmail}
            placeholder="manager@email.com"
            name="managerEmail"
            />
            <Input
            defaultValue={String(manager.managerSalary)}
            placeholder="1200"
            name="managerSalary"
            />
            <Input
            defaultValue={manager.managerPhonenumber}
            placeholder="4421774592"
            name="managerPhonenumber"
            />
            <SelectStore stores={stores} defaultStore={manager?.location?.locationId}/>
            <Button color="primary" type="submit">
                Actualizar
            </Button>
        </form>
    )
}