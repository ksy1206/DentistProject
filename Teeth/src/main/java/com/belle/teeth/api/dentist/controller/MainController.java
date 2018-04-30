package com.belle.teeth.api.dentist.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/dentist")
public class MainController {
	
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String DentistMain(HttpServletRequest request, HttpServletResponse response, Model model) {
		
		
		
		
		return "dentist/main";
	}
	
	@RequestMapping(value = "/notice", method = RequestMethod.GET)
	public String NoticeList(HttpServletRequest request, HttpServletResponse response, Model model) {
		return "dentist/notice/list";
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String NoticeAdd(HttpServletRequest request, HttpServletResponse response, Model model) {
		return "dentist/notice/add";
	}
}
