package com.etact.timesheetapp;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.etact.timesheetapp.entity.AssignmentEntity;

@Repository
public interface AssignmentRepo 
extends CrudRepository<AssignmentEntity, Long> {
    List<AssignmentEntity> findAll();
}
