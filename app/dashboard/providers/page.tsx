import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { Provider } from "@/entities";
import ProviderCard from "./_components/ProviderCard";
import Link from "next/link";
import CreateProvider from "./_components/CreateProvider";
import FormCreateProvider from "./_components/FormCreateProvider";

const ProviderPage = async () => {
    const response = await fetch(`${API_URL}/providers`, {
        headers: {
            ...authHeaders()
        },
        next: {
            tags: ["dashboard:providers"]
        }
    });

    console.log("AUTH HEADERS =>", authHeaders());

    if (!response.ok) {
        console.error("Error fetching providers:", response.statusText);
        return <div>Error al cargar proveedores</div>;
    }

    const json = await response.json();
    const providers: Provider[] = Array.isArray(json)
        ? json
        : json.data ?? [];

    return (
        <div className="flex flex-col items-end w-full flex-grow-0 px-10 pt-10 h-[90vh]">
            <CreateProvider>
                <FormCreateProvider />
            </CreateProvider>

            <div className="flex flex-wrap w-full py-20 flex-grow-0 gap-14">
                {providers.map((provider: Provider) => (
                    <Link
                        key={provider.providerId}
                        className="hover:scale-110 transition-transform"
                        href={{
                            pathname: `/dashboard/providers/${provider.providerId}`
                        }}
                    >
                        <ProviderCard provider={provider} />
                    </Link>
                ))}
            </div>
        </div>
    );
};


export default ProviderPage;