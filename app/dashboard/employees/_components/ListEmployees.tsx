"use client";

import { Employee, Location } from "@/entities";
import EmployeeCard from "./EmployeeCard";
import EmployePhotoCard from "./EmployeePhotoCard";
import { useState } from "react";
import { Select } from "@heroui/react";
import { SelectItem } from "@heroui/react";

export default function ListEmployees({employees, locations}: {employees: Employee[], locations: Location[]}){
    const [filter, setFilter] = useState<string>("")
    return(
        <div>
            {
            locations && (
                <Select
                defaultSelectedKeys={[]}
                label="Tienda"
                className="w-60 pr-5 py-5"
                onChange={(e)=>{
                    setFilter(e.target.value)
                }}
                >
                    {locations.map((location)=>{
                        return(
                            <SelectItem key={location.locationId}>
                                {location.locationName}
                            </SelectItem>
                        )
                    })}
                </Select>
            )
            }
            <div className="flex flex-wrap gap-2">
                {employees
                .filter((employee: Employee) => {
                    if(filter === "") return true;
                    return String(employee.location?.locationId) === filter
                })
                .map((employee: Employee) => {
                    if(employee.employeePhoto !== null){
                        return <EmployePhotoCard key={employee.employeeId} employee={employee} />
                    }else{
                        return <EmployeeCard key={employee.employeeId} employee={employee} />
                    }
                })}
            </div>
        </div>
    )
}