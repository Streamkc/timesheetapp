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
        <Table dataSource={list} columns={columns} />
        </>
    )
}

const EmployeeAdd = ()=>{   

    const [form] = Form.useForm();
    const onFinish = (values) => {
        fetch("/employeeCreate",
             {
                body:JSON.stringify(values),
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                }
            });
        console.log(values);
    }

    const onReset = () => {
        form.resetFields();
    }

    return (
        <>
        <h3>Add Employee</h3>
        <Form
            {...layout} 
            form={form}
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
        <Form.Item label="First Name" name="first_name">
            <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="last_name">
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
            <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button type="button" onClick={onReset}>reset</Button>
            </Space>
        </Form.Item>
        </Form>
        </>
    )
}

const EmployeeEdit = ()=>{   

    const [form] = Form.useForm();
    const onFinish = (values) => {}
    const onReset = () => {
        form.resetFields();
    }
    return (
        <>
        <h2>Edit Employee</h2>
        <Form
        {...layout} 
        form={form}
        onFinish={onFinish}
        style={{
            maxWidth: 600,
        }}
        >

        <Form.Item label="First Name" name="first_name">
            <Input />
        </Form.Item>
        <Form.Item label="Last Name" name="last_name">
            <Input />
        </Form.Item>
        <Form.Item {...tailLayout} >
            <Space>
            <Button type="primary" htmlType="submit">Submit</Button>
            <Button type="button" onClick={onReset}>reset</Button>
            </Space>
        </Form.Item>

        </Form>
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