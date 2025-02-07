package com.etact.timesheetapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = "com.etact.timesheetapp")
public class TimesheetappApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimesheetappApplication.class, args);
	}

}
