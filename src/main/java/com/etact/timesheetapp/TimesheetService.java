package com.etact.timesheetapp;

import java.util.List;
import java.sql.Timestamp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etact.timesheetapp.entity.AssignmentEntity;
import com.etact.timesheetapp.entity.EmployeeEntity;
import com.etact.timesheetapp.entity.ProjectEntity;
import com.etact.timesheetapp.vo.timesheetProjectVo;
import com.etact.timesheetapp.vo.timesheetTallyVo;
import com.etact.timesheetapp.EmployeeRepo;
import com.etact.timesheetapp.ProjectRepo;
import com.etact.timesheetapp.AssignmentRepo;

@Service
public class TimesheetService {
	@Autowired
	private EmployeeRepo employeeRepo;
	@Autowired
	private ProjectRepo projectRepo;
    @Autowired
    private AssignmentRepo assignmentRepo;

    public timesheetProjectVo getProjectTallyVo(
        Long project_id){
        timesheetProjectVo ret= new timesheetProjectVo();
        List<AssignmentEntity> list= assignmentRepo
                        .findAllByProject_id(project_id);
        
        ret.setProject_id(project_id);
        ret.setAssignment_count(Long.valueOf(list.size()));
        ret.setProject_name(projectRepo.findById(project_id)
            .orElseThrow(RuntimeException::new).getProject_name());
        ret.setMan_hr_spent(0L);
        list.forEach(assignment->{
            Timestamp start_time= assignment.getStart_time();
            Timestamp end_time= assignment.getEnd_time();
            Long time = (end_time.getTime()-start_time.getTime())/1000/60/60;
            System.out.println(time);
            ret.setMan_hr_spent(
                ret.getMan_hr_spent()+time
            );});
        System.out.println(ret.getMan_hr_spent());
        return ret;
    } 

    public timesheetTallyVo getTimesheetTallyVo(){
        timesheetTallyVo result= new timesheetTallyVo();
        result.setEmployee_count(employeeRepo.count());
        result.setProject_count( projectRepo.count());
        result.setAssignment_count( assignmentRepo.count());
        return result;
    }

    public List<AssignmentEntity> getAssignmentList(){
        return this.assignmentRepo.findAll();
    }

    public List<AssignmentEntity> getAssignmentListWithName(){
        return this.assignmentRepo.findAll();
    }
    public List<AssignmentEntity> findAssignment(Long id){
        List<AssignmentEntity> result= assignmentRepo.findAllByProject_id(id);
        return result;
    }

    public AssignmentEntity addAssignment(AssignmentEntity entry){
        Object result = assignmentRepo.save(entry);
        return (AssignmentEntity)result;
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
