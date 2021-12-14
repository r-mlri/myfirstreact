import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import employeeService from "../services/employeeService";

const AddEmployee = ()=>{
    const [name, setName]=useState("");
    const [location, setLocation]=useState("");
    const [department, setDepartment]=useState("");
    const navigate = useNavigate();
    const {employee_id}= useParams();


    useEffect(()=>{
        if(employee_id){
            employeeService.getEmployee(employee_id)
            .then(
                response => {
                    setName(response.data.name);
                    setLocation(response.data.location);
                    setDepartment(response.data.department);
                })
            .catch(
                () =>{
                    console.log("something went wrong")
            })
        }
        },[]);


    const saveEmployee = (e)=>{
        e.preventDefault();

        const employee = {name, location, department, employee_id};
        if(employee_id){
            //update employee
            employeeService.putEmployee(employee)
            .then(response=>{
                console.log("employee updated!", response.data);
                navigate("/employees")
            })
            .catch(error =>{
                console.log("Something went wrong");
            })

        }
        else{
            //add employee
            employeeService.postEmployee(employee)
            .then(response=>{
                console.log("employee added!", response.data);
                navigate("/employees")
            })
            .catch(error =>{
                console.log("Something went wrong");
            })
        }
    }



    return(
    <div className="container">
        <h3> Add Employee </h3>
    <form>
        <div className="mb-3">
          <label htmlFor="addName" className="form-label">Name</label>
          <input type="text" placeholder="Enter Name of Employee" autoComplete="off"
          value={name}
          className="form-control"
          id="addName"
          onChange={(e)=>setName(e.target.value)}
          />
        </div>
        <div className="mb-3">
            <label htmlFor="addLocation" className="form-label">Location</label>
            <input type="text" placeholder="Enter Location of Employee" className="form-control" autoComplete="off"
             value={location}
             id="addLocation"
              onChange={(e)=>setLocation(e.target.value)}
            />
        </div>
        <div className="mb-3">
            <label htmlFor="addDepartment" className="form-label">Department</label>
            <input type="text" placeholder="Enter Department of Employee" className="form-control"
            autoComplete="off"
             value={department}
             id="addDepartment"
              onChange={(e)=>setDepartment(e.target.value) }
            />
        </div>

        <button type="submit" className="btn btn-primary" onClick={(e)=>saveEmployee(e)}>SAVE</button>
      </form>


      </div>
      );
}


export default AddEmployee;