import React from 'react';
import { Routes, Route, Link  } from 'react-router-dom';
import { EmployeeAdd, EmployeeEdit, EmployeeList } from './employee';
import { ProjectAdd, ProjectList } from './project';
import { AssignmentList, AssignmentAdd } from './assignment';
import { Timesheet, ProjectTally, EmployeeTally } from './timesheet';


const Banner= ()=>{
    return(
        <div id="banner">
        <h1>Timesheet</h1>
        </div>
    );
}

const Footer= ()=>{
    const style={ 
        display: "flex",
        flexDirection: "row",
    };
    const colstyle={ 
        flex: 1,
    };

    return(
        <div id="footer" style={style}>

        <div style={colstyle} >
        <ul>
            <li><a href="https://www.google.com" >Google</a></li>
            <li><a href="https://www.facebook.com" >Facebook</a></li>
            <li><a href="https://www.instagram.com" >Instagram</a></li>
        </ul>
        </div>

        <div style={colstyle} >
        <ul>
            <li><a href="https://www.google.com" >Google</a></li>
            <li><a href="https://www.facebook.com" >Facebook</a></li>
            <li><a href="https://www.instagram.com" >Instagram</a></li>
        </ul>
        </div>

        <div style={colstyle} >
        <ul>
            <li><a href="https://www.google.com" >Google</a></li>
            <li><a href="https://www.facebook.com" >Facebook</a></li>
            <li><a href="https://www.instagram.com" >Instagram</a></li>
        </ul>
        </div>

        </div>
    );
}

const Myinfo= ()=>{

    return(
    <div id="myinfo">
        <div> <h3>Info for tech used </h3>
        </div>

    </div>
    );
}

const Content= ()=>{
    return(
    <div id="content">
    <Banner />
    <Timesheet />
    <EmployeeList />
    <EmployeeAdd />
    <EmployeeEdit />
    <ProjectList />
    <ProjectAdd />
    <AssignmentsList />
    <Footer />
    </div>
    );
}

const App= ()=>{
/*
    const onunloadevent= (event)=>{
        event.preventDefault();    
    }
    window.onbeforeunload=onunloadevent;
*/
    return (
        <>
            <Routes>
                <Route path="/" element={<Timesheet />} />
                <Route path="/projectTally" element={<ProjectTally />} />
                <Route path="/employeeTally" element={<EmployeeTally />} />
                <Route path="/employeeListPage" element={<EmployeeList />} />
                <Route path="/employeeCreatePage" element={<EmployeeAdd />} />
                <Route path="/employeeEditPage" element={<EmployeeEdit />} />
                <Route path="/projectListPage" element={<ProjectList />} />
                <Route path="/projectCreatePage" element={<ProjectAdd />} />
                <Route path="/assignmentListPage" element={<AssignmentList />} />
                <Route path="/assignmentCreatePage" element={<AssignmentAdd/>} />
            </Routes>
        </>
    )
}

export default App;
