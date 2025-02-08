package com.etact.timesheetapp.vo;

import org.springframework.stereotype.Component;

@Component
public class timesheetTallyVo {
    
    Long employee_count;
    Long project_count;
    Long assignment_count;

    public Long getAssignment_count() {
        return assignment_count;
    }
    public void setAssignment_count(Long assignment_count) {
        this.assignment_count = assignment_count;
    }

    public Long getEmployee_count() {
        return employee_count;
    }
    public void setEmployee_count(Long employee_count) {
        this.employee_count = employee_count;
    }

    public Long getProject_count() {
        return project_count;
    }
    public void setProject_count(Long project_count) {
        this.project_count = project_count;
    }
}
