package com.belle.teeth.api.dentist.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.dentist.service.MemberService;
import com.belle.teeth.api.dentist.util.SessionUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/dentist")
public class MemberController {
	
	@Autowired
	private MemberService memberService;
	
	@RequestMapping(value = "/member/list", method = RequestMethod.GET)
	public String MemberList(HttpServletRequest request, HttpServletResponse response, Model model) {
		log.warn("환자 리스트 페이지");
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		Integer assignNo = sessionInfo.getAssignNo();
		Integer doctorNo = sessionInfo.getMemberNo();
		model.addAttribute("memberList", memberService.getMemberList(assignNo, doctorNo));
		return "dentist/member/list";
	}
	
	/**
	 * 회원 등록 수정 페이지
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/member/add", method = RequestMethod.GET)
	public String MemberAdd(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="type", required=false, defaultValue="add") String type
			, @RequestParam(value="memberNo", required=false, defaultValue="0") Integer memberNo, Model model) throws Exception {
		
		// 수정일 경우, 회원정보 가져온다.
		if("modify".equals(type)) {
			MemberDto memberInfo = memberService.getMemberInfo(memberNo);
			model.addAttribute("memberInfo", memberInfo);
		}
		model.addAttribute("type", type);
		return "dentist/member/add";
	}
	
	/**
	 * 회원 DB 등록
	 * @param request
	 * @param response
	 * @param memberDto
	 * @return
	 */
	@RequestMapping(value = "/ajax/member/add/{type}")
	@ResponseBody
	public String MemberDeAdd(HttpServletRequest request, HttpServletResponse response
			, @PathVariable String type , MemberDto memberDto) throws Exception {
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		
		if("modify".equals(type)) {
			memberService.memberModify(memberDto);
		} else {
			memberDto.setMemberType("A"); // 일반회원
			memberDto.setAssignNo(sessionInfo.getAssignNo());
			memberDto.setDoctorMemberNo(sessionInfo.getMemberNo());
			memberService.memberAdd(memberDto);
		}

		return "true";
	}
	
	/**
	 * 회원 정보 상세 페이지
	 * @param request
	 * @param response
	 * @param type
	 * @param memberNo
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/member/sub/info", method = RequestMethod.GET)
	public String MemberDetails(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="type", required=false, defaultValue="menu") String type
			, @RequestParam(value="memberNo", required=true) Integer memberNo, Model model) {

		log.warn("환자 정보 페이지 type에 따라 분류");
		
		MemberDto memberInfo = memberService.getMemberInfo(memberNo);
		MemberDto headerInfo = new MemberDto();
		
		headerInfo.setMemberName(memberInfo.getMemberName());
		
		model.addAttribute("type", type);
		model.addAttribute("memberNo", memberNo);
		model.addAttribute("headerInfo", headerInfo);

		if("info".equals(type)) {
			model.addAttribute("memberInfo", memberInfo);
		}
		
		return "dentist/member/sub/"+type;
	}
	
	/**
	 * 안쓰는것 같은데..
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/member/detail/qa/details", method = RequestMethod.GET)
	public String MemberDetails(HttpServletRequest request, HttpServletResponse response, Model model) {
		log.warn("환자 정보 페이지 type에 따라 분류");
		
		model.addAttribute("type", "qaDetails");
		return "dentist/detail";
	}
}
