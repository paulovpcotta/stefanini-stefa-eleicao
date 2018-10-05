package com.stefanini.stefaeleicao.controller;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.context.web.SpringBootServletInitializer;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.WebApplicationInitializer;

//Tell Spring to automatically inject any dependencies that are marked in
//our classes with @Autowired
@EnableAutoConfiguration
// Tell Spring that this object represents a Configuration for the
// application
@Configuration
// SpringBootWebLogicLegacyApplication is a SpringBootServletInitializer subclass and override its configure method.
@ComponentScan
public class StefaApplication extends SpringBootServletInitializer implements WebApplicationInitializer {

	// Tell Spring to launch our app!
	public static void main(String[] args) {
		SpringApplication.run(StefaApplication.class, args);
	}

	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) {
		return builder.sources(StefaApplication.class).showBanner(false);
	}
}