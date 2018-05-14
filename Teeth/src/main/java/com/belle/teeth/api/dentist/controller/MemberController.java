package com.belle.teeth.api.dentist.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.dentist.mapper.MemberMapper;
import com.belle.teeth.api.dentist.util.SessionUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/dentist")
public class MemberController {
	
	@Autowired
	private MemberMapper memberMapper;
	
	@RequestMapping(value = "/member/list", method = RequestMethod.GET)
	public String MemberList(HttpServletRequest request, HttpServletResponse response) {
		log.warn("환자 리스트 페이지");
		return "dentist/member/list";
	}
	
	@RequestMapping(value = "/member/add", method = RequestMethod.GET)
	public String MemberAdd(HttpServletRequest request, HttpServletResponse response) {
		log.warn("환자 리스트 페이지");
		return "dentist/member/add";
	}
	
	@RequestMapping(value = "/ajax/member/add")
	@ResponseBody
	public String MemberDeAdd(HttpServletRequest request, HttpServletResponse response, MemberDto memberDto) {
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		
		memberDto.setMemberType("A"); // 일반회원
		memberDto.setAssignNo(sessionInfo.getAssignNo());
		memberDto.setDoctorMemberNo(sessionInfo.getMemberNo());
		memberMapper.memberAdd(memberDto);
		
		return "true";
	}
	
	@RequestMapping(value = "/member/sub/info", method = RequestMethod.GET)
	public String MemberDetails(HttpServletRequest request, HttpServletResponse response,
			@RequestParam(value="type", required=false, defaultValue="info") String type, Model model) {
		log.warn("환자 정보 페이지 type에 따라 분류");
		
		model.addAttribute("type", type);
		return "dentist/member/sub/info";
	}
	
	@RequestMapping(value = "/member/detail/qa/details", method = RequestMethod.GET)
	public String MemberDetails(HttpServletRequest request, HttpServletResponse response, Model model) {
		log.warn("환자 정보 페이지 type에 따라 분류");
		
		model.addAttribute("type", "qaDetails");
		return "dentist/detail";
	}
}
