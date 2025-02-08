import React  from "react";
import { useState, useEffect} from "react";
import { Button, DatePicker, Form, Input, message, Select, Space, Table, Tag} from 'antd';
import  Nav from 'nav.js'

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
            title: "Assignment ID", 
            dataIndex: "assignment_id",
            key: "assignment_id"
        },
        {
            title: "Employee ID",
            dataIndex: "employee_id",
            key: "employee_id"
        },
        {
            title: "Project ID", 
            dataIndex: "project_id",
            key: "project_id"
        },
        {
            title: "Start Time", 
            dataIndex: "start_time",
            key: "start_time"
        },
        {
            title: "End Time", 
            dataIndex: "end_time",
            key: "end_time"
        },
    ];

const AssignmentList= ()=>{

    const [list, setList] = useState([]);

    const fetchList= async ()=>{  
        try{
            const response = await fetch("./assignmentList");
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
        <Nav />
        <h3>Assignment List</h3>
        <Table dataSource={list} columns={columns} />
        </>
    )
}

const AssignmentAdd= ()=>{   

    const [form] = Form.useForm();
    const [projectList, setProjectList] = useState([]);
    const [employeeList, setEmployeeList] = useState([]);

    const onFinish = (values) => {
        try{
            fetch("/assignmentCreate",
                {
                    body:JSON.stringify(values),
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json",
                    }
                });
            message.success("Assignment Added", 20);
            console.log(values);       
            form.resetFields();
        }catch(error){
            message.error("Assignment Not Added",20);
            console.log(error);
        }
    }

    const onReset = () => {
        form.resetFields();
    }

    const fetchList= async ()=>{
        try{
            const response = await fetch("./employeeList");
            const data = await response.json();
            setEmployeeList(data);
            console.log(data);
            const prj_response = await fetch("./projectList");
            const prj_data = await prj_response.json();
            setProjectList(prj_data);
            console.log(prj_data);
        }catch(error){
            setEmployeeList([]);
            setProjectList([]);
            console.log(error);
        }
    }

    useEffect(()=>{ 
        fetchList();
    },[]);

    return (
        <>
        <Nav />
        <h3>Add Assignment</h3>
        <Form
            {...layout} 
            form={form}
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
        <Form.Item label="Employee ID " name="employee_id">
            <Select>
                {
                    employeeList?.map((emp) => {
                        return (
                            <Select.Option 
                            value={emp.employee_id} 
                            key={emp.employee_id} >
                            {emp.first_name} &nbsp;
                            {emp.last_name}
                            </Select.Option>
                        );
                    })
                }
            </Select>
        </Form.Item>
        <Form.Item label="Project ID" name="project_id">
            <Select>
                {
                    projectList?.map((prj) => {
                        return (
                            <Select.Option 
                            value={prj.project_id} 
                            key={prj.project_id} >
                            {prj.project_name}
                            </Select.Option>
                            );
                        })
                }
            </Select>   
        </Form.Item>
        <Form.Item label="Start Date" name="start_time">
            <DatePicker />
        </Form.Item>
        <Form.Item 
            label="End Date" 
            name="end_time"
            {...{
                labelCol: {
                    span: 8,
                }
            }}
        >
            <Space>
            <DatePicker {...{wrapperCol:{span:8},
                            labelCol: { span: 8, }
                        }}/>
            </Space>
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

export { AssignmentList, AssignmentAdd};