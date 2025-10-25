import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Provider } from "@/entities";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import CreateProvider from "./_components/CreateProvider";
import FormCreateProvider from "./_components/FormCreateProvider";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`,{
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:providers"]
        }
    })
    const providers: Provider[] = await response.json();

    return(
        <div className="flex flex-col items-end w-full flex-grow-0 px-10 pt-10 h-[90vh]">
            <CreateProvider>
                <FormCreateProvider/>
            </CreateProvider>

            <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14">
            {providers.map((provider: Provider) => (
                <Link className="hover:scale-110 transition-transform" href={{pathname:`/dashboard/providers/${provider.providerId}`}}>
                <ProviderCard provider={provider} key={provider.providerId}/>
                </Link>
            ))}
            </div>
        </div>
    )
}

export default ProviderPage;