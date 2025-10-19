"use server";

import { API_URL } from "@/constants";
import { authHeaders } from "@/helpers/authHeaders";
import { revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

export async function createProvider(formData: FormData) {
  const provider: Record<string, any> = {};

  for (const key of formData.keys()) {
    provider[key] = formData.get(key);
  }

  const response = await fetch(`${API_URL}/providers`, {
    method: "POST",
    body: JSON.stringify(provider),
    headers: {
      "Content-Type": "application/json",
      ...authHeaders(),
    },
  });

  if (response.status === 201) {
    revalidateTag("dashboard:providers");
    redirect(`/dashboard/providers`);
  }
}
