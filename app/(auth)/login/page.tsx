"use client";
import { API_URL } from "@/constants";
import { Button, Input, Link, Spinner } from "@heroui/react";
import { useState } from "react";
import  { useRouter } from "next/navigation";

export default function LoginPage(){
    const [submitting, setSubmitting] = useState(false)
    const router = useRouter()
    const handleSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        e.preventDefault()
        const formData = new FormData(e.target)
        let authData: any = {}
        authData.userEmail = formData.get("userEmail")
        authData.userPassword = formData.get("userPassword")
        try{
            const response = await fetch(`${API_URL}/auth/login`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(authData),
                credentials: "include",
            })
            if(response.status === 201) router.push(`/dashboard`)
            setSubmitting(false);
        }catch (e) {
            setSubmitting(false);
        }
        return;
    }
    return (
    <form className="bg-orange-500 px-10 py-2 rounded-md" onSubmit={handleSubmit}>
        <p className="text-2xl my-4 text-white">Iniciar sesión</p>

        <div className="flex flex-col gap-2 my-4 items-center">
            <Input label="Email" name="userEmail" type="email" isRequired={true} size="md"/>
            <Input label="Contraseña" name="userPassword" type="password" isRequired={true} size="md"/>
        </div>

        <div className="flex flex-col gap-2 items-center">
            <Button 
            color="primary" 
            type="submit" 
            disabled={submitting}>
                {submitting? <Spinner size='md'/> : "Iniciar sesión"}
            </Button>
            <p className="text-white">¿No tienes cuenta? <Link href="/signup" className="text-red-600 underline">Registrate</Link></p>
        </div>
    </form>
    )
}