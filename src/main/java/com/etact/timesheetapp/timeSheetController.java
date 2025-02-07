package com.etact.timesheetapp;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class timeSheetController{

	@GetMapping("/")	
	String home(){
		return "index";
	}

    @GetMapping("/error")
    public String error(){
        return "error";
    }
    @GetMapping("/timesheet")
    public String timesheet(){
        return "timesheet";
    }

	@RequestMapping("/welcome")	
    public String welcome(){
        return "welcome";
    }
}