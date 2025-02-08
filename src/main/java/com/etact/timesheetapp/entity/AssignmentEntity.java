package com.etact.timesheetapp.entity;

import java.security.Timestamp;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class AssignmentEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    Long assignment_id;
    @Column(name = "employee_id")
    Long employee_id;
    @Column(name = "project_id")
    Long project_id;
    Long number_of_hours;
    Timestamp start_time;
    Timestamp end_time;
}

