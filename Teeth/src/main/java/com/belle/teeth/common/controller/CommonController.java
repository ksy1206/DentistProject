package com.belle.teeth.common.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class CommonController {

	/**
	 * 기공소 | 의사 로그인 페이지
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/common/login", method = RequestMethod.GET)
	public String CommonLogin(HttpServletRequest request, HttpServletResponse response) {
		log.warn("기업 | 의사 로그인");
		return "common/login";
	}
}
