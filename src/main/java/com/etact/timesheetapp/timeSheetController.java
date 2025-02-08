package com.etact.timesheetapp;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.stereotype.Controller;

import com.etact.timesheetapp.entity.EmployeeEntity;
import com.etact.timesheetapp.entity.ProjectEntity;

@RestController
public class TimesheetController{
    @Autowired
    private TimesheetService service;
    
    public void setService(TimesheetService service) {
        this.service = service;
    }

    @GetMapping("/error")
    public String error(){
        return "error";
    }
   
	@RequestMapping("/welcome")	
    public String welcome(){
        return "welcome";
    }

	@GetMapping("/projectList")	
    public List<ProjectEntity> projectList(){
        List<ProjectEntity> ret= service.getProjectList();
        return ret;
    }

	@GetMapping("/employeeList")	
    public List<EmployeeEntity> employeeList(){
        List<EmployeeEntity> ret= service.getEmployeeList();
        return ret;
    }

	@GetMapping("/employee/{id}")	
    public ResponseEntity<EmployeeEntity> employeeGet(
        @PathVariable Long id){
        EmployeeEntity ret= service.findEmployee(id);
        return ResponseEntity.ok().body(ret);
    }

    @PostMapping("/employeeCreate")
    public EmployeeEntity addEmployee(EmployeeEntity employee) throws URISyntaxException{
        EmployeeEntity ret= service.addEmployee(employee);
        ResponseEntity.created(new URI("/employeeList/")).body(ret);
        return ret;
    }
}