package com.etact.timesheetapp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@EnableAutoConfiguration
@ComponentScan(basePackages = "com.etact.timesheetapp")
@EnableJpaRepositories("com.etact.timesheetapp")
@EntityScan("com.etact.timesheetapp")
public class TimesheetappApplication {

	public static void main(String[] args) {
		SpringApplication.run(TimesheetappApplication.class, args);
	}

}
