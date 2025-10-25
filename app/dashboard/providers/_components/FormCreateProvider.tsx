import { createProvider } from "@/actions/providers/create";
import { Button, Input } from "@heroui/react";

export default function FormCreateProvider() {
  return (
    <form action={createProvider} className="bg-orange-400 py-2 px-4 flex flex-col gap-6 w-full rounded-lg">
      <h1 className="text-3xl text-white text-center">Registrar proveedor</h1>
      <Input isRequired label="Nombre" placeholder="Coca-Cola" name="providerName"/>
      <Input isRequired label="Correo electrónico" placeholder="cocacola@email.com" name="providerEmail"/>
      <Input isRequired label="Número de teléfono" placeholder="4421774592" name="providerPhoneNumber"/>
      <Button type="submit" color="primary">Registrar</Button>
    </form>
  );
}
