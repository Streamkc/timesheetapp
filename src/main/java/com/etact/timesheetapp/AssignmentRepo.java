package com.etact.timesheetapp;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.etact.timesheetapp.entity.AssignmentEntity;

@Repository
public interface AssignmentRepo 
extends CrudRepository<AssignmentEntity, Long> {
    @SuppressWarnings("null")
    List<AssignmentEntity> findAll();
    @Query("SELECT a FROM AssignmentEntity a WHERE a.project_id = ?1")
    List<AssignmentEntity> findAllByProject_id(Long id);
    @Query("SELECT a FROM AssignmentEntity a WHERE a.employee_id= ?1")
    List<AssignmentEntity> findAllByEmployee_id(Long id);
    /* 
     * 
    @Query("SELECT a FROM AssignmentEntity a, EmployeementEntity b, ProjectEntity c WHERE a.employee_id= b.employee_id AND a.project_id= c.project_id")
    List<AssignmentEntity> findAllWithName();
    */
}
