package com.belle.teeth.dentist.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/dentist/member")
public class MemberController {
	
	@RequestMapping(value = "/list", method = RequestMethod.GET)
	public String CommonLogin(HttpServletRequest request, HttpServletResponse response) {
		log.warn("환자 리스트 페이지");
		return "dentist/list";
	}
	
	@RequestMapping(value = "/detail", method = RequestMethod.GET)
	public String MemberDetails(HttpServletRequest request, HttpServletResponse response) {
		log.warn("환자 정보 페이지");
		return "dentist/detail";
	}
	
	@RequestMapping(value = "/add", method = RequestMethod.GET)
	public String AddMember(HttpServletRequest request, HttpServletResponse response) {
		log.warn("환자 등록 페이지");
		return "dentist/addMember";
	}
}
