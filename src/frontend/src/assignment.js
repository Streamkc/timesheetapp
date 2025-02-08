import React, { use } from "react";
import { useState, useEffect} from "react";
import { Button, Form, Input, Select, Space, Table, Tag} from 'antd';

    const layout = {
        labelCol: {
        span: 8,
        },
        wrapperCol: {
        span: 16,
        },
    };

    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    const columns = [
        {
            title: "Employee ID",
            dataIndex: "employee_id",
            key: "employee_id"
        },
        {
            title: "First Name", 
            dataIndex: "first_name",
            key: "first_name"
        },
        {
            title: "Last Name",
            dataIndex: "last_name",
            key: "last_name"
        },
    ];
const AssignmentsList= ()=>{

    const [list, setList] = useState([]);

    const fetchList= async ()=>{  
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
        fetchList();
    },[]);

    return (
        <>
        <h3>Assignment List</h3>
        <Table dataSource={list} columns={columns} />
        </>
    )
}

export { EmployeeList };