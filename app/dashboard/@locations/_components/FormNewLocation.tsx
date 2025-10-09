import { createLocation } from "@/actions/locations/create";
import { form, Input } from "@heroui/react";
import axios from "axios";
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import { Sacramento } from "next/font/google";
import SelectManager from "./SelectManagers";

export default async function FormNewLocation() {
    const token = cookies().get(TOKEN_NAME)?.value;
    const {data} = await axios.get(`${API_URL}/managers`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
    return (
        <form action={createLocation}>
            <Input label="Nombre" name="locationName" />
            <Input label="Dirección" name="locationAddress" />
            <Input label="Latitud" name="locationLat" />
            <Input label="Longitud" name="locationLng" />
            <SelectManager managers={data}/>
            <button>Subir</button>
        </form>
    )
}