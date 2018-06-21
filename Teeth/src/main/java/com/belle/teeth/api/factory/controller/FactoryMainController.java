package com.belle.teeth.api.factory.controller;

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
import com.belle.teeth.api.common.dto.PagingDto;
import com.belle.teeth.api.dentist.service.MemberService;
import com.belle.teeth.api.factory.zxing.MakeQrCode;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/factory")
public class FactoryMainController {

	
	@Autowired
	private MemberService memberService;
	
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
	 * 의사 목록 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/dentist/list", method = RequestMethod.GET)
	public String FactoryDentistList(HttpServletRequest request, HttpServletResponse response, Model model
			, @RequestParam(value="po", required=false, defaultValue="0") int po
			, @RequestParam(value="ps", required=false, defaultValue="10") int ps
			, @RequestParam(value="sKey", required=false) String sKey
			, @RequestParam(value="sValue", required=false) String sValue) throws Exception {

		model.addAttribute("List", memberService.getDentistList(po, ps, sKey, sValue));
		PagingDto pagingInfo = new PagingDto();
		pagingInfo.setPo(po);
		pagingInfo.setPs(ps);
		pagingInfo.setTotalCount(memberService.getDentistListCount(sKey, sValue));
		pagingInfo.setSKey(sKey);
		pagingInfo.setSValue(sValue);
		model.addAttribute("paging", pagingInfo);
		model.addAttribute("listName", "dentist");
		return "factory/dentist/list";
	}
	
	/**
	 * 환자 목록 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/dentist/member/list", method = RequestMethod.GET)
	public String FactoryDentistMemberList(HttpServletRequest request, HttpServletResponse response, Model model
			, @RequestParam(value="doctorNo", required=false, defaultValue="0") int doctorNo
			, @RequestParam(value="memberName", required=false, defaultValue="") String memberName) throws Exception {

		model.addAttribute("List", memberService.getMemberOnlyName(memberName, doctorNo));
		model.addAttribute("doctorNo", doctorNo);
		model.addAttribute("memberName", memberName);
		return "factory/dentist/memberList";
	}
	
	/**
	 * 환자 메뉴 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/dentist/member/menu", method = RequestMethod.GET)
	public String FactoryDentistMemberMenu(HttpServletRequest request, HttpServletResponse response, Model model
			, @RequestParam(value="memberNo") int memberNo) throws Exception {

		MemberDto memberInfo = memberService.getMemberInfo(memberNo);
		model.addAttribute("memberInfo", memberInfo);
		return "factory/member/menu";
	}
	
	@RequestMapping(value = "/member/sub", method = RequestMethod.GET)
	public String FactoryMemberSub(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="type", required=false, defaultValue="menu") String type
			, @RequestParam(value="memberNo", required=true) Integer memberNo, Model model) throws Exception {

		if ("picture".equals(type)) {
			model.addAttribute("imgList", memberService.getMemberInfo(memberNo, "F02"));
		} else if("qrcode".equals(type)) {
			model.addAttribute("memberInfo", memberService.getMemberInfo(memberNo));
		}
		return "factory/member/sub/"+type;
	}

	/**
	 * QR 코드 생성 함수
	 * @param request
	 * @param response
	 * @param memberNo
	 * @param step
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/qrMake", method = RequestMethod.POST)
	@ResponseBody
	public String FactoryQrMaking(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="memberNo") Integer memberNo
			, @RequestParam(value="step", required=false, defaultValue="10") Integer step, Model model) throws Exception {
		
		MemberDto memberInfo = memberService.getMemberInfo(memberNo);

		for(int i=1; i<=step; i++) {
			String qrName = "step" + i + ".png";
			MakeQrCode.MakeQrCodeFunction(request, memberInfo.getMemberNo(), memberInfo.getMemberId(), qrName);
		}
		return "true";
	}
}
