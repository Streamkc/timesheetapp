package com.etact.timesheetapp.entity;


import java.sql.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "assignment")
public class AssignmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long assignment_id;
    @Column(name="assignment_name")
    String assignment_name;
    Long employee_id;
    @Column(name = "project_id")
    Long project_id;
    @Column(name = "start_time")
    Timestamp start_time;
    @Column(name = "end_time")
    Timestamp end_time;
    Long number_of_hours;

    public AssignmentEntity(){}
    
    public AssignmentEntity(
        Long assignment_id,
        Long project_id,
        Long employee_id,
        Timestamp start_time,
        Timestamp end_time

    ){
        this.assignment_id= assignment_id;
        this.project_id= project_id;
        this.employee_id= employee_id;
        this.start_time= start_time;
        this.end_time=end_time;
    }

    public String getAssignment_name() {
        return assignment_name;
    }
    public void setAssignment_name(String assignment_name) {
        this.assignment_name = assignment_name;
    }
    public Long getAssignment_id() {
        return assignment_id;
    }
    public void setAssignment_id(Long assignment_id) {
        this.assignment_id = assignment_id;
    }
    public Long getEmployee_id() {
        return employee_id;
    }
    public void setEmployee_id(Long employee_id) {
        this.employee_id = employee_id;
    }
    public Long getProject_id() {
        return project_id;
    }
    public void setProject_id(Long project_id) {
        this.project_id = project_id;
    }
    public Timestamp getStart_time() {
        return start_time;
    }
    public void setStart_time(Timestamp start_time) {
        this.start_time = start_time;
    }
    public Timestamp getEnd_time() {
        return end_time;
    }
    public void setEnd_time(Timestamp end_time) {
        this.end_time = end_time;
    }
}

