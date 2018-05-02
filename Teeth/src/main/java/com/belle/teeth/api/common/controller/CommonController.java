package com.belle.teeth.api.common.controller;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.belle.teeth.api.common.component.UtilFile;
import com.belle.teeth.api.common.service.CommonService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class CommonController {
	
	@Autowired
	private CommonService cService;
	
	@RequestMapping(value = "/common/imgUpload", method = RequestMethod.GET)
	public String test(HttpServletRequest request, HttpServletResponse response) {
		return "imgUpload";
	}
	
	@RequestMapping(value = "/ajax/common/fileUpload", method = RequestMethod.POST)
	@ResponseBody
	public String fileUpload(MultipartHttpServletRequest request, HttpServletResponse response, @RequestParam("files") MultipartFile files) {

		// 파일 업로드
		String result = UtilFile.fileUpload(request, files);
		
		// 파일 업로드 후, DB 저장
		
		return result;
	}

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

	/**
	 * 로그 아웃 및 세션 삭제
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/common/logout", method = RequestMethod.GET)
	public String CommonLogout(HttpServletRequest request, HttpServletResponse response) {

		HttpSession session = request.getSession(true);
		session.removeAttribute("sessionData");
		session.removeAttribute("memberNo");
		session = request.getSession(true);
		
		return "common/login";
	}

	/**
	 * 회원 로그인 확인 및 세션처리
	 * @param request
	 * @param response
	 * @param userId
	 * @param password
	 * @return
	 */
	@RequestMapping(value = "/ajax/common/login/confirm", method = RequestMethod.POST)
	@ResponseBody
	public String ConfirmLogin(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "userId") String userId
			, @RequestParam(value = "password") String password) {
		log.warn("기업 | 의사 로그인 확인");
		
		JSONObject paramJson = new JSONObject();
		paramJson = cService.loginCheck(userId, password, request);
		
		return paramJson.toString();
	}

}
