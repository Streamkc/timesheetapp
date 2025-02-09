package com.etact.timesheetapp.vo;

import org.springframework.stereotype.Component;

@Component
public class timesheetEmployeeVo {
    private Long employee_id;
    private String employee_name;
    private Long assignment_count;
    private Long man_hr_spent;

    public Long getMan_hr_spent() {
        return man_hr_spent;
    }
    public void setMan_hr_spent(Long man_hr_spent) {
        this.man_hr_spent = man_hr_spent;
    }
    public Long getEmployee_id() {
        return employee_id;
    }
    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }
    public String getEmployee_name() {
        return employee_name;
    }
    public void setEmployee_name(String employee_name) {
        this.employee_name = employee_name;
    }
    public Long getAssignment_count() {
        return assignment_count;
    }
    public void setAssignment_count(Long assignment_count) {
        this.assignment_count = assignment_count;
    }
}
