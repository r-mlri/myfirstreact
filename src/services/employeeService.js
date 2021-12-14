import httpCommon from "../commons/http-common";


const getEmployees = () =>{
    //gets the api hi
    return httpCommon.get('employee/employees');
}

const postEmployee = (data) =>{
    return httpCommon.post("employee/employees", data);
}

const putEmployee = (data) =>{
    return httpCommon.put("employee/employees", data);
}

const getEmployee = (employee_id) =>{
    return httpCommon.get(`/employee/employees/${employee_id}`);
}

const deleteEmployee = (employee_id) =>{
    return httpCommon.delete(`/employee/employees/${employee_id}`);
}

export default {getEmployees, postEmployee, putEmployee, getEmployee, deleteEmployee};