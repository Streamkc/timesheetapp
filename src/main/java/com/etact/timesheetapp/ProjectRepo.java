package com.etact.timesheetapp;

import java.util.List;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;
import com.etact.timesheetapp.entity.ProjectEntity;

@Repository
public interface ProjectRepo 
extends CrudRepository<ProjectEntity, Long> {
    @SuppressWarnings("null")
    List<ProjectEntity> findAll();
}
