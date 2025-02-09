import React from 'react';
import { Menu } from 'antd';
import { Link  } from 'react-router-dom';

const Nav= ()=>{
    const items=[

        {
            key: "timesheet",
            label: <Link to='/' >Timesheet</Link>,
            children: [
                {
                    key: "reportbyproject",
                    label: <Link to='/projectTally' >
                            Timesheet By Project
                            </Link>,
                },
                {
                    key: "reportbyemployee",
                    label: <Link to='/employeeTally' >
                            Timesheet By Employee
                            </Link>,
                },
            ]
        },
        {
            key: "Employee",
            label: <Link to='/employeeListPage' >
                    Employee
                    </Link>,
            children: [
                {
                    key: "employeeCreate",
                    label: <Link to='/employeeCreatePage' >
                            New Employee
                            </Link>,
                },
            ]
        },
        {
            key: "Project",
            label: <Link to='/projectListPage' >
                    Project
                    </Link>,
            children: [
                {
                    key: "projectAdd",
                    label: <Link to='/projectCreatePage' >
                            New Project
                            </Link>,
                },
            ]
        },
        {
            key: "Assignment",
            label: <Link to='/assignmentListPage' >
                    Assignment
                    </Link>,
            children: [
                {
                    key: "assignmentAdd",
                    label: <Link to='/assignmentCreatePage' >
                            New Assignment
                            </Link>,
                },
            ]
        },
    ];

    return(
        <>
        <Menu 
            mode="horizontal" 
            items={items} 
        />
        </>
    )
}

export default Nav;