package com.belle.teeth.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

import com.belle.teeth.interceptor.DentistInterceptor;

@Component
@Configuration
public class InterceptorConfiguration {

	@Bean
	public WebMvcConfigurerAdapter webMvcConfigurerAdapter() {
		return new WebMvcConfigurerAdapter() {
			@Override
			public void addInterceptors(InterceptorRegistry registry) {
				
				registry.addInterceptor(new DentistInterceptor())
					.addPathPatterns("/dentist/**")
					.excludePathPatterns("/dentist/ajax/**");
			}
		};
	}
	
}
