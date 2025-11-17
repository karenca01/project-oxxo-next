"use client"

import { User } from "@/entities"
import { Button, Input } from "@heroui/react"
import { useState } from "react"
import { generate } from "generate-password"
import { LuEye } from "react-icons/lu"
import updateUser from "@/actions/users/update"

export default function FormUpdateUser({user}: {user: User}){
    const { userId } = user;
    const [password, setPassword] = useState<string>()
    const [isVisible, setIsVisible] = useState<boolean>(false);
    const updateUserById = updateUser.bind(null, userId)
    return(
        <form action={updateUserById} className="py-10 flex flex-col gap-2">
            <h1 className="text-center text-white font-bold text-xl">Actualizar información</h1>
            <Input 
            defaultValue={user.userEmail} 
            name="userEmail" 
            label="Correo de cuenta"
            />
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
            <Button type="submit" color="primary">Guardar cambios</Button>
        </ form>
    )
}