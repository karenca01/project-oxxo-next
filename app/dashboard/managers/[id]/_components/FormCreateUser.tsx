"use client"

import { Manager } from "@/entities"
import { Button, Input } from "@heroui/react"
import { useState } from "react"
import { generate } from "generate-password"
import { LuEye } from "react-icons/lu"
import registerManager from "@/actions/users/register-manager"

export default function FormCreateUserManager({manager}:{manager: Manager}){
    const [password, setPassword] = useState<string>()
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const { managerId } = manager;
    const registerManagerById = registerManager.bind(null, managerId)
    return(
        <form action={registerManagerById} className="py-10 flex flex-col gap-2">
            <h1 className="text-center text-white font-bold text-xl">Crear usuario</h1>
            <Input name="userEmail" label="Correo de cuenta"/>
            <div className="flex flex-raw gap-2 justify-center items-center">
                <Input 
                type={`${isVisible ? "text" : "password"}`}
                value={password} 
                name="userPassword" 
                label="Contraseña"
                endContent={
                    <button type="button" onMouseUp={() => setIsVisible(false)} onMouseDown={() => setIsVisible(true)}>
                        <LuEye size="20"/>
                    </button>
                }
                />
                <Button 
                color="danger" 
                className="h-[50px]" 
                onPress={() => {
                    setPassword(generate({
                        length: 10,
                    }))
                }}
                >
                    Generar
                </Button>
            </div>
            <Button type="submit" color="primary">Registrar</Button>
        </ form>
    )
}