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
import com.belle.teeth.api.common.dto.PagingDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.dentist.dto.QaDto;
import com.belle.teeth.api.dentist.dto.SchedualDto;
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
	public String MemberList(HttpServletRequest request, HttpServletResponse response, Model model
			, @RequestParam(value="po", required=false, defaultValue="0") int po
			, @RequestParam(value="ps", required=false, defaultValue="10") int ps
			, @RequestParam(value="sKey", required=false) String sKey
			, @RequestParam(value="sValue", required=false) String sValue) {
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		Integer assignNo = sessionInfo.getAssignNo();
		Integer doctorNo = sessionInfo.getMemberNo();
		
		model.addAttribute("memberList", memberService.getMemberList(assignNo, doctorNo, po, ps, sKey, sValue));
		
		PagingDto pagingInfo = new PagingDto();
		pagingInfo.setPo(po);
		pagingInfo.setPs(ps);
		pagingInfo.setTotalCount(memberService.getMemberListTotalCount(assignNo, doctorNo, sKey, sValue));
		pagingInfo.setSKey(sKey);
		pagingInfo.setSValue(sValue);
		model.addAttribute("paging", pagingInfo);
		model.addAttribute("listName", "member");
		
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

		if("info".equals(type)) {
			// 회원 상세 정보
			model.addAttribute("memberInfo", memberInfo);
		} else if ("qa".equals(type)) {
			// 질문 답변 페이지
			SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
			model.addAttribute("qaList", memberService.getQaList(sessionInfo.getMemberNo(), memberNo));
		} else if ("picture".equals(type)) {
			model.addAttribute("imgList", memberService.getMemberInfo(memberNo, "F02"));
		} else if("setUpImg".equals(type)) {
			model.addAttribute("imgList", memberService.getMemberInfo(memberNo, "F03"));
		} else if("schedual".equals(type)) {
			model.addAttribute("schedualList", memberService.getSchedual(memberNo));
		}

		model.addAttribute("type", type);
		model.addAttribute("memberNo", memberNo);
		model.addAttribute("headerInfo", headerInfo);
		return "dentist/member/sub/"+type;
	}
	
	/**
	 * 신규 스케쥴 등록
	 * @param request
	 * @param response
	 * @param info
	 * @param datetime
	 * @param memberNo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ajax/schedual/add", method = RequestMethod.POST)
	@ResponseBody
	public String SchedualAdd(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="info") String info
			, @RequestParam(value="datetime") String datetime
			, @RequestParam(value="memberNo") Integer memberNo) throws Exception {
		
		SchedualDto schedual = new SchedualDto();
		schedual.setDatetime(datetime);
		schedual.setInfo(info);
		schedual.setMemberNo(memberNo);
		memberService.addSchedual(schedual);
		return "";
	}
	
	/**
	 * 스케쥴 수정
	 * @param request
	 * @param response
	 * @param info
	 * @param datetime
	 * @param memberNo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ajax/schedual/modify", method = RequestMethod.POST)
	@ResponseBody
	public String SchedualModify(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="status") String status
			, @RequestParam(value="scNo") Integer scNo) throws Exception {
		
		SchedualDto schedual = new SchedualDto();
		schedual.setScNo(scNo);
		schedual.setStatus(status);
		memberService.modifySchedual(schedual);
		return "";
	}
	
	@RequestMapping(value = "/ajax/schedual/delete", method = RequestMethod.POST)
	@ResponseBody
	public String SchedualDelete(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="scNo") Integer scNo) throws Exception {
		
		SchedualDto schedual = new SchedualDto();
		schedual.setScNo(scNo);
		memberService.deleteSchedual(schedual);
		return "";
	}
	
	
	/**
	 * 질문 답변 등록
	 * @param request
	 * @param response
	 * @param message
	 * @param memberNo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ajax/qa/add", method = RequestMethod.POST)
	@ResponseBody
	public String QaAdd(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="message", required=true) String message
			, @RequestParam(value="memberNo", required=true) Integer memberNo) throws Exception {
		
		QaDto qaInfo = new QaDto();
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		qaInfo.setType("SE01");
		qaInfo.setQaDoctorNo(sessionInfo.getMemberNo());
		qaInfo.setQaMemberNo(memberNo);
		qaInfo.setMessage(message);
		memberService.addQa(qaInfo);

		return "true";
	}

	/**
	 * 질문 답변 삭제
	 * @param request
	 * @param response
	 * @param qaNo
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ajax/qa/delete", method = RequestMethod.POST)
	@ResponseBody
	public String QaDelete(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="doctorNo", required=true) Integer doctorNo
			, @RequestParam(value="qaNo", required=true) Integer qaNo) throws Exception {
		memberService.qaDelete(qaNo, doctorNo);
		return "true";
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
