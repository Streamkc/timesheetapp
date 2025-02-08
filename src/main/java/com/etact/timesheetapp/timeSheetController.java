package com.etact.timesheetapp;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

import com.etact.timesheetapp.entity.AssignmentEntity;
import com.etact.timesheetapp.entity.EmployeeEntity;
import com.etact.timesheetapp.entity.ProjectEntity;
import com.etact.timesheetapp.vo.timesheetProjectVo;
import com.etact.timesheetapp.vo.timesheetTallyVo;

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

	@GetMapping("/timesheetTally")	
    public timesheetTallyVo getTimesheetTally(){
        timesheetTallyVo ret= service.getTimesheetTallyVo();
        return ret;
    }

	@GetMapping("/timesheetProjectTally")	
    public List<timesheetProjectVo> getTimesheetProjectTally(){
        ArrayList<timesheetProjectVo> ret= new ArrayList<timesheetProjectVo>(); 
        service.getProjectList().forEach(project->{
            timesheetProjectVo projectVo= service
                                .getProjectTallyVo(project.getProject_id());
            ret.add(projectVo);
        });
        return ret;
    }

	@GetMapping("/assignmentList")	
    public List<AssignmentEntity> assignmentList(){
        List<AssignmentEntity> ret= service.getAssignmentList();
        return ret;
    }

    @PostMapping("/assignmentCreate")
    public AssignmentEntity asssignmentCreate(
        @RequestBody
        AssignmentEntity entry) {
        AssignmentEntity ret= service.addAssignment(entry);
        return ret;
    }

	@GetMapping("/projectList")	
    public List<ProjectEntity> projectList(){
        List<ProjectEntity> ret= service.getProjectList();
        return ret;
    }

    @PostMapping("/projectCreate")
    public ProjectEntity projectCreate(
        @RequestBody
        ProjectEntity entry) {
        ProjectEntity ret= service.addProject(entry);
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
    public EmployeeEntity addEmployee(
        @RequestBody
        EmployeeEntity employee) {
        EmployeeEntity ret= service.addEmployee(employee);
        return ret;
    }
}