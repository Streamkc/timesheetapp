package com.etact.timesheetapp.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "employee")
public class EmployeeEntity {
   @Id
   @GeneratedValue(strategy = GenerationType.AUTO)
   private Long employee_id;
   @Column(name = "first_name")
   private String first_name; 
   @Column(name = "last_name")
   private String last_name; 

   public EmployeeEntity(){};

   public EmployeeEntity(
      Long employee_id,
      String first_name,
      String last_name
   ){
      this.setEmployee_id(employee_id);
      this.setFirst_name(first_name);
      this.setLast_name(last_name);
   };

   public Long getEmployee_id() {
       return employee_id;
   }
   public void setEmployee_id(Long employee_id) {
       this.employee_id = employee_id;
   }

   public String getFirst_name() {
       return first_name;
   }
   public void setFirst_name(String first_name) {
       this.first_name = first_name;
   }

   public String getLast_name() {
       return last_name;
   }
   public void setLast_name(String last_name) {
       this.last_name = last_name;
   }

}
