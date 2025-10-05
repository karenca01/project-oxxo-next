export interface Location{
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    // manager: Manager;
    // region: Region;
    employees: Employee[];
    manager?: any;
    region?: any;
}

export interface Employee{
    employeeId: string;
    employeeName: string;
    employeeLastname: string;
    employeePhonenumber: string;
    employeeEmail: string;
    employeePhoto?: string;
    location?: Location
    user?: any;

    // user: User;
}