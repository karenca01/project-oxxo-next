export interface Location{
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];
    // manager: Manager;
    // region: Region;
    employees?: Employee[];
    manager?: Manager;
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

export interface Manager{
    managerId: string;
    managerFullName: string;
    managerSalary: number;
    managerEmail: string;
    managerPhonenumber: string;
    location: Location;
    user?: any;
}

export interface Provider{
    providerId: string;
    providerName: string;
    providerEmail: string;
    providerPhoneNumber: string;
    products?: Product[];
    // products: Product[];
}

export interface Product{
    productId: string;
    productName: string;
    price: number;
    countSeal: number;
    provider: Provider
}