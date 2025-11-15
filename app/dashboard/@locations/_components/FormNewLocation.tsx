import { createLocation } from "@/actions/locations/create";
import { Button, form, Input } from "@heroui/react";
import { API_URL } from "@/constants";
import SelectManager from "./SelectManager";
import { authHeaders } from "@/helpers/authHeaders";
import { Location, Manager } from "@/entities";

export default async function FormNewLocation({searchParams}: {searchParams: {[key: string]: string | string[] | undefined}}) {
    if(searchParams.store) return null;
    const responseManagers = await fetch(`${API_URL}/managers`,{
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dashboard:locations", "dashboard:locations:managers"]
        }
    })
    const managersJson = await responseManagers.json();
    const dataManagers: Manager[] = managersJson.data ?? [];

    const responseLocations = await fetch(`${API_URL}/locations`,{
        headers: {
            ...authHeaders()
        },
        next:{
            tags: ["dashboard:locations"]
        }
    })
    const locationsJson = await responseLocations.json();
    const dataLocations: Location[] = locationsJson.data ?? [];
    
    return (
        <form action={createLocation} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
            <h1 className="text-3xl text-white text-center">Crear tienda</h1>
            <Input required={true} label="Nombre" placeholder="Oxxo Juriquilla" name="locationName" />
            <Input required={true} label="Dirección" placeholder="Av de la Luz S/N" name="locationAddress" />
            <Input required={true} label="Latitud" placeholder="-120" name="locationLat" />
            <Input required={true} label="Longitud" placeholder="20" name="locationLng" />
            <SelectManager managers={dataManagers} locations={dataLocations}/>
            <Button type="submit" color="primary">Subir</Button>
        </form>
    )
}