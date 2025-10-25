import deleteProvider from "@/actions/providers/delete";
import { Button } from "@heroui/react"

export default function DeleteButton({providerId} : {providerId: string}) {
    const deleteProviderById = deleteProvider.bind(null, providerId)

    return(
        <form action={deleteProviderById} className="flex">
            <Button className="w-full" color="danger" type="submit">Estoy seguro</Button>
        </form>
    )
}