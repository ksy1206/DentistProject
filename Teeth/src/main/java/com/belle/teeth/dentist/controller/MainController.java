package com.belle.teeth.dentist.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/dentist")
public class MainController {
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String CommonLogin(HttpServletRequest request, HttpServletResponse response) {
		log.warn("치과 메인 페이지");
		return "dentist/main";
	}
}
