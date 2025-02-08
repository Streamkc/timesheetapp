import React from "react";
import {Table} from 'antd';
import { useState, useEffect} from "react";
import Nav from "./nav";
import 'app.css';

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

const ProjectTally= ()=>{  
    const columns = [
        {
            title: "Project ID",
            dataIndex: "project_id",
            key: "project_id"
        },
        {
            title: "Project Name",
            dataIndex: "project_name",
            key: "project_name"
        },
        {
            title: "Assignment Total Count",
            dataIndex: "assignment_count",
            key: "assignment_count"
        },
        {
            title: "Project Man Hours", 
            dataIndex: "man_hr_spent",
            key: "man_hr_spent"
        },
    ];
    const [prjlist, setPrjlist] = useState([]);
    const fetchProjectTally= async ()=>{  
        try{
            const response = await fetch("./timesheetProjectTally");
            const data = await response.json();
            setPrjlist(data);
            console.log(data);
        }catch(error){
            setPrjlist([]);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchProjectTally();
    },[])

    return (
        <>
        <Nav />
        <Table dataSource={prjlist} columns={columns} />
        </>
    )
}


const TallyTable= ()=>{

const columns = [
    {
        title: "Employee Total Count",
        dataIndex: "employee_count",
        key: "employee_count"
    },
    {
        title: "Assignment Total Count", 
        dataIndex: "assignment_count",
        key: "assignment_count"
    },
    {
        title: "Project Total Count", 
        dataIndex: "project_count",
        key: "project_count"
    },
];
    const [list, setList] = useState([]);
    const fetchList= async ()=>{  
        try{
            const response = await fetch("./timesheetTally");
            const data = await response.json();
            setList([data]);
            console.log(data);
        }catch(error){
            setList([]);
            console.log(error);
        }
    }

    useEffect(()=>{
        fetchList();
    },[])

    return (
        <>
        <Table dataSource={list} columns={columns} />
        </>
    )
}

const Timesheet= ()=>{

    return (
        <>
        <Nav />
        <h3>Timesheet</h3>
        <TallyTable />
        <ProjectTally />
        </>
    )
}

export {
    Timesheet,
    TallyTable,
    ProjectTally
};