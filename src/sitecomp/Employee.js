import { useEffect, useState } from "react";
import employeeService from "../services/employeeService"
import { Link} from "react-router-dom";

const Employee = () =>{
    //Function hooks
    const[employees, setEmployees] = useState([])
    
    //usestate
    //hooks
    useEffect(()=>{
      refreshEmployeeTable();
    }
    )

    const refreshEmployeeTable = () =>{
        employeeService.getEmployees() //promise
        .then(
            response => {
                setEmployees(response.data);
            }    
        )
        .catch(
            () =>{
                console.log("something went wrong")
            }
        )
    }
    
    const deleteEmployee = (employee_id) =>{
        employeeService.deleteEmployee(employee_id)
        .then(
            response=>{
                console.log("Successfully Deleted Employee");
                refreshEmployeeTable();
            }
        )
        .catch(
            response=>{
                console.error("something went wrong");
            }
        )
    }

    return(
        <div className="container">
            <h3>List of Employees</h3>
            <Link className="btn btn-info" to={`/add`}>
                                        ADD EMPLOYEE 
                                    </Link>
            <table className="table table-striped table-hover table-light">
                <thead>
                <tr className="table-info">
                    <td>Name</td>
                    <td>Department</td>
                    <td>Location</td>
                    <td>Action</td>
                </tr>
                </thead>
                <tbody>
                {
                    employees.map(
                        employee  => (
                            <tr key={employee.employee_id}>
                                <td>{employee.name}</td>
                                <td>{employee.department}</td>
                                <td>{employee.location}</td>
                                <td>
                                    <div className="d-grip gap-2 d-md-flex">
                                    <Link className="btn btn-primary" to={`/edit/${employee.employee_id}`}>
                                        UPDATE 
                                    </Link>
                                    <button className="btn btn-danger" onClick={(e)=> deleteEmployee(employee.employee_id)}>
                                        DELETE 
                                    </button>
                                    </div>
                                    </td>
                            </tr>

                        )
                    )
                }
                </tbody>
           </table>
        </div>
    ) 
}

export default Employee;