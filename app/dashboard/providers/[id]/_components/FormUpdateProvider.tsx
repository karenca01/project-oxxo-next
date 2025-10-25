import { Provider } from "@/entities";
import { Button, Input } from "@heroui/react";
import updateProvider from "@/actions/providers/update";
import DeleteProvider from "./DeleteProvider";
import DeleteButton from "./DeleteButton";

export default function FormUpdateProvider({provider}: {provider: Provider}) {
    const { providerId } = provider;
    const updateProviderWithId = updateProvider.bind(null, providerId);
    return (
    <form action={updateProviderWithId} className="flex gap-4 flex-grow-0 bg-orange-200 rounded-md  px-10 py-10 ml-20 items-center justify-center">
        <Input className="max-w-[250px]" defaultValue={provider.providerName}  label="Nombre" placeholder="Coca-Cola" name="providerName"/>
        <Input className="max-w-[250px]" defaultValue={provider.providerEmail} label="Correo electrónico" placeholder="cocacola@email.com" name="providerEmail"/>
        <Input className="max-w-[250px]" defaultValue={provider.providerPhoneNumber} label="Número de teléfono" placeholder="4421774592" name="providerPhoneNumber"/>
        <Button type="submit" color="primary">Actualizar</Button>
        <DeleteProvider>
          <h1 className="text-white text-2xl text-center">¿Estás serguro de eliminar al proveedor <b>{provider.providerName}</b>?</h1>
          <DeleteButton providerId={providerId}/>
        </DeleteProvider>
    </form>
  );
}
