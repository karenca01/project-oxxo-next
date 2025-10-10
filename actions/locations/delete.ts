"use server"
import { API_URL, TOKEN_NAME } from "@/constants";
import { cookies } from "next/headers";
import axios from "axios";

export default async function deleteLocation(formData: FormData){
    const locarionId = formData.get("deleteValue")
    if(!locarionId) return;
    const token = cookies().get(TOKEN_NAME)?.value;
    axios.delete(`${API_URL}/locations/${locarionId}`,{
        headers: {
            Authorization: `Bearer ${token}`
        }
    })
}