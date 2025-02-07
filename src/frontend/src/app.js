import React from 'react';
import {useRef } from 'react';
import Timesheet from './timesheet';

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

        <ol>
        <div> React js for component rendering.
        </div>
        <div> Single CSS file is used for styling
        </div>
        <div> Webpack for bundling js.
        </div>
        <div> public path exposed;
        </div>
        <div> fetch json file from public path;
        </div>
        <div> public path is inconsistent bewteen dev and prod fixed 
        </div>
        <div> TODO:
        </div>
        <div> include redux and ant design? 
        </div>
        <div> 
        </div>
        </ol>
        
    </div>
    );
}

const Content= ()=>{
    return(
    <div id="content">
    <h1>Content</h1>
    <Timesheet />
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
