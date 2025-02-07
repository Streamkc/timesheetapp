import React from 'react';
import {useRef } from 'react';
import Timesheet from './timesheet';
import { EmployeeAdd, EmployeeAssignments, EmployeeList } from './employee';
import { ProjectAdd, ProjectList } from './project';

const Nav= ()=>{
    const buildpageRef= useRef(null);
    const partslistpageRef= useRef(null);
    const myinfopageRef= useRef(null);
    const showpage=()=>{
        console.log("showpage");
    }

    return(
    <div className="nav"> 
        <ol>
            <li>
            <a ref={buildpageRef} href="#mybuid" onClick={()=>showpage("mybuild")}>
            My Build
            </a> 
            </li>
            <li>  
            <a ref={partslistpageRef} href="#partslist" onClick={()=>showpage("partslist")}>
            Parts
            </a> 
            </li>
            <li> 
            <a ref={myinfopageRef} href="#myinfo" onClick={()=>showpage("myinfo")}>My Info</a> 
            </li>
        </ol>
    </div>
    );
}

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
    <h1>Content</h1>
    <Timesheet />
    <EmployeeList />
    <EmployeeAdd />
    <ProjectList />
    <ProjectAdd />
    </div>
    );
}

const App= ()=>{

    const onunloadevent= (event)=>{
        event.preventDefault();    
    }
    window.onbeforeunload=onunloadevent;

    return (
        <div id="container">
            <Banner />
            <Nav/>
            <Content />
            <Myinfo />
            <Footer />
        </div>
    )
}

export default App;
