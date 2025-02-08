package com.etact.timesheetapp.vo;

import org.springframework.stereotype.Component;

@Component
public class timesheetProjectVo {

    Long project_id;
    String project_name;
    Long assignment_count;
    Long man_hr_spent;


    public Long getAssignment_count() {
        return assignment_count;
    }
    public void setAssignment_count(Long assignment_count) {
        this.assignment_count = assignment_count;
    }
    public Long getMan_hr_spent() {
        return man_hr_spent;
    }
    public void setMan_hr_spent(Long man_hr_spent) {
        this.man_hr_spent = man_hr_spent;
    }
    public Long getProject_id() {
        return project_id;
    }
    public void setProject_id(Long project_id) {
        this.project_id = project_id;
    }
    public String getProject_name() {
        return project_name;
    }
    public void setProject_name(String project_name) {
        this.project_name = project_name;
    }

}
