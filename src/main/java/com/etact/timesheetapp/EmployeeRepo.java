package com.etact.timesheetapp;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.etact.timesheetapp.entity.EmployeeEntity;

@Repository
public interface EmployeeRepo extends CrudRepository<EmployeeEntity, Long> {
    List<EmployeeEntity> findAll();
}
