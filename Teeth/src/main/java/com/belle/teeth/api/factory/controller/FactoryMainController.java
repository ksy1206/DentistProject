package com.belle.teeth.api.factory.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.belle.teeth.api.factory.zxing.MakeQrCode;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/factory")
public class FactoryMainController {

	/**
	 * 기공소 메인 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String FactoryMain(HttpServletRequest request, HttpServletResponse response, Model model) {

		return "factory/main";
	}
	
	/**
	 * 치과 목록 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/dentist/list", method = RequestMethod.GET)
	public String FactoryDentistList(HttpServletRequest request, HttpServletResponse response, Model model) {

		return "factory/dentist/list";
	}
	
	@RequestMapping(value = "/qrMake", method = RequestMethod.GET)
	public String FactoryQrMaking(HttpServletRequest request, HttpServletResponse response, Model model) throws Exception {
		
		// 회원번호와 단계를 파라미터로 받는다.
		int step = 10;
		
		for(int i=1; i<=step; i++) {
			String qrName = "step" + i + ".png";
			MakeQrCode.MakeQrCodeFunction(request, 1, qrName);
		}
		return "factory/qrMaking";
	}
}
