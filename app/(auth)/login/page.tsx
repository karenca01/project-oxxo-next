import { Button, Input, Link } from "@heroui/react";

export default function LoginPage(){
    return (
    <div className="bg-orange-500 px-10 py-2 rounded-md">
        <p className="text-2xl my-4 text-white">Iniciar sesión</p>

        <div className="flex flex-col gap-2 my-4 items-center">
            <Input label="Email" type="email" isRequired={true} size="md"/>
            <Input label="Contraseña" type="password" isRequired={true} size="md"/>
        </div>

        <div className="flex flex-col gap-2 items-center">
            <Button color="primary">Iniciar sesión</Button>
            <p className="text-white">¿No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link></p>
        </div>
    </div>
    )
}