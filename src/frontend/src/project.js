import React from "react";
import { useState, useEffect} from "react";
import { Button, Form, Input,  Space, Table, message } from 'antd';
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
            title: "Project Name", 
            dataIndex: "project_name", 
            key: "projec_name"
        },
        {
            title: "Project ID", 
            dataIndex: "project_id", 
            key: "projec_id"
        },
    ];

const ProjectList = ()=>{
    const [list, setList] = useState([]);
    const fetchlist= async ()=>{  
        try{
            const response = await fetch("./projectList");
            const data = await response.json();
            setList(data);
            console.log(data);
        }catch(error){
            setList([]);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchlist();
    },[]);

    return (
        <>
        <Nav />
        <h2
        style={{
            textAlign: "center",
            margin: "20px"
        }}
        >Project List</h2>
        <Table dataSource={list} columns={columns} />
        </>
    )
}

const ProjectAdd = ()=>{   

    const [form] = Form.useForm();
    const onFinish = (values) => {
        try{
            fetch("/projectCreate",
             {
                body:JSON.stringify(values),
                method:"POST",
                headers:{
                    "Content-Type":"application/json",
                }
            })
            .then(
                message.success("Project Added", 3),
                console.log("Project Not Added")
            );
            console.log(values);
            form.resetFields();
        }
        catch(error){
            message.error("Project Not Added",3);
        }
    }

    const onReset = () => {
        form.resetFields();
    }
    return (
        <>
        <Nav />
        <Form
            {...layout} 
            form={form}
            onFinish={onFinish}
            style={{
                maxWidth: 600,
            }}
        >
        <Space>
        <h2
        style={{
            textAlign: "center",
            margin: "20px"
        }}
        >Add Project</h2>
        </Space>
        <Form.Item 
            label="Project Name" 
            name="project_name"
            rules={[{ required: true, 
                    message: 'Please input project name!' }]}
        >
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

const ProjectEdit = ()=>{   
    return (
        <>
        <Nav />
        <h1>Edit Project</h1>
        </>
    )
}

const ProjectAssignments = ()=>{   
    return (
        <>
        <Nav />
        <h1>Project Assignments</h1>
        </>
    )
}

export {ProjectList, ProjectAdd, ProjectEdit, ProjectAssignments};