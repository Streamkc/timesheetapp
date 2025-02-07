import React, { use } from "react";
import { useState, useEffect} from "react";

const EmployeeList = ()=>{

    const [list, setList] = useState([]);

    const fetchEmployees = async ()=>{  
        try{
            const response = await fetch("./employeeList");
            const data = await response.json();
            setList(data);
            console.log(data);
        }catch(error){
            setList([]);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchEmployees();
    },[]);

    return (
        <>
        <h2>Employee List</h2>
        <ol>
            {
                list?.map((employee)=>
                <li key={employee.employee_id} >
                    <p>
                    {employee.last_name}
                    </p>
                    <p>
                    {employee.first_name}
                    </p>
                </li>
                )
            }
        </ol>
        </>
    )
}

const EmployeeAdd = ()=>{   

    const emptyForm = {
        firstName: "",
        lastName: "",
    }

    const data= new FormData();
    data.append("first_name", "John");
    data.append("last_name", "Doe");

    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        fetch("/employeeCreate", {body:data,method:"POST"});
        console.log(data);
    };

    return (
        <>
        <h1>Add Employee</h1>
        <form onSubmit={handleSubmit}>

        <label>Enter your name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <input type="submit" />
        </form>
        </>
    )
}

const EmployeeEdit = ()=>{   
    return (
        <>
        <h2>Edit Employee</h2>
        </>
    )
}

const EmployeeAssignments = ()=>{   
    return (
        <>
        <h1>Employee Assignments</h1>
        </>
    )
}

export {EmployeeList, EmployeeAdd, EmployeeEdit, EmployeeAssignments};