import React from "react";

const ProjectList = ()=>{
    const list = [];
    return (
        <>
        <h2>Project List</h2>
        <ol>
            {
                list.map((project,id)=>
                <li key={id}>{project.name}</li>
                )
            }            
        </ol>
        </>
    )
}

const ProjectAdd = ()=>{   
    return (
        <>
        <h1>Add Project</h1>
        <form>
            <label>Name</label>
            <input type="text" name="name" />
            <label>Description</label>
            <input type="text" name="description" />
            <label>Start Date</label>
            <input type="date" name="start_date" />
            <label>End Date</label>
            <input type="date" name="end_date" />
            <button type="submit">Submit</button>
        </form> 
        </>
    )
}   

const ProjectEdit = ()=>{   
    return (
        <>
        <h1>Edit Project</h1>
        </>
    )
}

const ProjectAssignments = ()=>{   
    return (
        <>
        <h1>Project Assignments</h1>
        </>
    )
}

export {ProjectList, ProjectAdd, ProjectEdit, ProjectAssignments};