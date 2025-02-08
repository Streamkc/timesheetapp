package com.etact.timesheetapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etact.timesheetapp.entity.AssignmentEntity;
import com.etact.timesheetapp.entity.EmployeeEntity;
import com.etact.timesheetapp.entity.ProjectEntity;

@Service
public class TimesheetService {
	@Autowired
	private EmployeeRepo employeeRepo;
	@Autowired
	private ProjectRepo projectRepo;
    @Autowired
    private AssignmentRepo assignmentRepo;


    public List<AssignmentEntity> getAssignmentList(){
        return this.assignmentRepo.findAll();
    }

    public List<ProjectEntity> getProjectList(){
        return this.projectRepo.findAll();
    }

    public ProjectEntity findProject(Long id){
        ProjectEntity result= projectRepo.findById(id)
            .orElseThrow(RuntimeException::new);
        return result;
    }

    public ProjectEntity addProject(ProjectEntity entry){
        ProjectEntity result= projectRepo.save(entry);
        return result;
    }

    public List<EmployeeEntity> getEmployeeList(){
        return employeeRepo.findAll();
    }

    public EmployeeEntity addEmployee(EmployeeEntity employee){
        EmployeeEntity result= employeeRepo.save(employee);
        return result;
    }
    
    public EmployeeEntity findEmployee(Long id){
        EmployeeEntity result= employeeRepo.findById(id)
            .orElseThrow(RuntimeException::new);
        return result;
    }
}
