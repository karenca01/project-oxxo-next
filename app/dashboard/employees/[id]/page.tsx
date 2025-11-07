import EmployeeCard from "../_components/EmployeeCard";

export default function EmployeePage({params}: {params: {id: string}}){
    return <EmployeeCard employee={employee}/>
}