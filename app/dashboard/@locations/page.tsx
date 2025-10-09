import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import { API_URL, TOKEN_NAME } from "@/constants";
import SelectLocation from "./_components/SelectLocation";
import LocationCard from "./_components/LocationCard";
import FormNewLocation from "./_components/FormNewLocation";

const LocationsPage = async ({searchParams}:{
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const userCoookies = cookies()
    const token = userCoookies.get(TOKEN_NAME)?.value
    let {data} =await axios.get<Location[]>(
        `${API_URL}/locations`, 
        {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }
    );

    data = [
        {
            locationId: 0,
            locationName: "Ninguna",
            locationLatLng: [0, 0],
            locationAddress: "No existe",
        },
        ...data
    ]

    return (
    <div className="w-8/12">
        <div className="w-full h-[90vh] flex flex-col items-center bg-red-50">
            <div className="w-1/2 my-10">
                <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
            <div>
                <div className="w-8/12">
                    <LocationCard store={searchParams.store}/>
                </div>
                <FormNewLocation formData={searchParams}/>
            </div>
        </div>
    </div>);
}

export default LocationsPage;