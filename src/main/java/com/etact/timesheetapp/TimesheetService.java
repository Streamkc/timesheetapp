package com.etact.timesheetapp;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.etact.timesheetapp.entity.EmployeeEntity;

@Service
public class TimesheetService {
	@Autowired
	private EmployeeRepo employeeRepo;

    public List<EmployeeEntity> getEmployeeList(){
        return employeeRepo.findAll();
    }

    public EmployeeEntity addEmployee(EmployeeEntity employee){
        EmployeeEntity result= employeeRepo.save(employee);
        return result;
    }
    
    public EmployeeEntity findEmployee(Long id){
        EmployeeEntity result= employeeRepo.findById(id)
            .orElseThrow(RuntimeException::new);
        return result;
    }
}
