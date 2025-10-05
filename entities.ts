export interface Location{
    locationId: number;
    locationName: string;
    locationAddress: string;
    locationLatLng: number[];

    manager?: any;
    region?: any;
    employees?: any[];

    // manager: Manager;
    // region: Region;
    // employees: Employee[];
}