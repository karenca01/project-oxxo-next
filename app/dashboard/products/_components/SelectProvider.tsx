"use client";

import { Select, SelectItem } from "@heroui/react";
import { Provider } from "@/entities";

export default function SelectProvider({providers}: {providers: Provider[]}){
    return(
        <Select name="provider">
            {providers.map((provider) => {
                return(
                    <SelectItem key={provider.providerId}>
                        {provider.providerName}
                    </SelectItem>
                )
            })}
        </Select>
    )
}