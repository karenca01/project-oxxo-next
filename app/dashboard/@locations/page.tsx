import axios from "axios";
import { cookies } from "next/headers";
import { Location } from "@/entities";
import { TOKEN_NAME } from "@/constants";
import SelectLocation from "./_components/SelectLocation";

const LocationsPage = async ({searchParams}:{
    searchParams: { [key: string]: string | string[] | undefined }
}) => {
    const userCoookies = cookies()
    const token = userCoookies.get(TOKEN_NAME)?.value
    const {data} =await axios.get<Location[]>("http://127.0.0.1:4000/locations", 
        {
        headers: {
            Authorization: `Bearer ${token}`
        }}
    )

    return (
    <div className="w-8/12">
        <div className="w-full h-[90vh] flex flex-col items-center bg-red-50">
            <div className="w-1/2 my-10">
                <SelectLocation locations={data} store={searchParams?.store}/>
            </div>
        </div>
    </div>);
}

export default LocationsPage;