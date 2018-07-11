package com.belle.teeth.api.user.controller;

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
import com.belle.teeth.api.common.dto.QRCodeDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.common.service.CommonService;
import com.belle.teeth.api.dentist.dto.QaDto;
import com.belle.teeth.api.dentist.service.MemberService;
import com.belle.teeth.api.dentist.service.NoticeService;
import com.belle.teeth.api.dentist.util.SessionUtil;

@Controller
@RequestMapping(value = "/user")
public class UserController {

	@Autowired
	private MemberService memberService;
	@Autowired
	private NoticeService noticeService;
	@Autowired
	private CommonService commonService;
	
	@RequestMapping(value = "/check", method = RequestMethod.GET)
	public String check(HttpServletRequest request, HttpServletResponse response
			,@RequestParam(value = "memberId") String memberId
			,@RequestParam(value = "step") Integer step, Model model) {
		
		String result = "no"; // 정상적으로 QR코드 인식된경우 : yes
		String alertMessage = "교정장치 단계를 확인해 주세요.";
		
		// 회원 아이디로 회원 정보 가져오기.
		MemberDto memberInfo = memberService.getMemberInfo3(memberId);
		
		Integer memberStep = memberInfo.getMemberLevel();

		if(memberStep > step) {// 입력받은 단계가 회원 테이블에 있는 단계보다 작은경우 false
			
		} else if (memberStep == step) { // 입력받은 단계가 회원테이블의 단계와 같은경우, 업데이트는 하지 않고 로그인만 가능
			result = "yes";
			alertMessage = "비밀번호 입력후, 로그인 하세요.";
		} else if (memberStep+1 == step) { // 입력받은 단계가 회원테이블의 다음 단계일 경우 : true 업데이트 해야함
			result = "yes";
			memberService.updateMemberLevel(step, memberInfo.getMemberNo());
			alertMessage = "비밀번호 입력후, 로그인 하세요.";
		} else if (memberStep+1 < step) { // 입력받은 단계가 회원테이블의 다음단계보다 큰 경우 : false
			
		}
		
		model.addAttribute("userId", memberId);
		model.addAttribute("autoLogin", result);
		model.addAttribute("alertMessage", alertMessage);
		
		return "user/login";
	}
	
	/**
	 * 메인 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String Main(HttpServletRequest request, HttpServletResponse response, Model model) {

		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		// 환자 3D 영상정보
		Long fileSn = memberService.getMemberInfo(sessionInfo.getMemberNo()).getStlFileSn().longValue();
		model.addAttribute("StlInfo", commonService.getImgInfoByFileSn(fileSn));

		// 환자 교정 정보
		MemberDto memberInfo = memberService.getMemberInfo(sessionInfo.getMemberNo());
		QRCodeDto[] qrInfo = commonService.getQrImgList(sessionInfo.getMemberNo());
		
		int memberStep = memberInfo.getMemberLevel();
		int stepSize = qrInfo.length;
		double process = 0.0 ;
		double nonProcess = 100 - process;
		if(stepSize > 0) {
			process = (memberStep* 100) / stepSize ;
			nonProcess = 100 - process;
		}

		model.addAttribute("process", process);
		model.addAttribute("nonProcess", nonProcess);
		
		return "user/main";
	}
	
	/**
	 * 로그인 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String login(HttpServletRequest request, HttpServletResponse response, Model model) {

		return "user/login";
	}
	
	/**
	 * 공지 사항 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/notice", method = RequestMethod.GET)
	public String notice(HttpServletRequest request, HttpServletResponse response, Model model) {
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		model.addAttribute("NoticeList", noticeService.getNoticeList(sessionInfo.getDentist().getDentistNo()));
		return "user/menu/notice";
	}
	
	/**
	 * 공지 사항 상세정보 페이지
	 * @param request
	 * @param response
	 * @param noticeNo
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/notice/details", method = RequestMethod.GET)
	public String noticeDetails(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "noticeNo") Integer noticeNo, Model model) {
		model.addAttribute("Notice",  noticeService.getNoticeDetails(noticeNo));
		return "user/menu/noticeDetails";
	}
	
	/**
	 * 교정 상담 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/qa", method = RequestMethod.GET)
	public String qa(HttpServletRequest request, HttpServletResponse response, Model model) {
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		model.addAttribute("qaList", memberService.getQaList(sessionInfo.getDoctorNo(), sessionInfo.getMemberNo())); // 의사번호 / 회원 번호
		model.addAttribute("memberNo", sessionInfo.getMemberNo());
		model.addAttribute("doctorNo", sessionInfo.getDoctorNo());
		return "user/menu/qa";
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
			, @RequestParam(value="message", required=true) String message) throws Exception {
		
		QaDto qaInfo = new QaDto();
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		qaInfo.setType("SE02");
		qaInfo.setQaDoctorNo(sessionInfo.getDoctorNo());
		qaInfo.setQaMemberNo(sessionInfo.getMemberNo());
		qaInfo.setMessage(message);
		memberService.addQa(qaInfo);

		return "true";
	}
	

	/**
	 * 치과 방문 일정 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/schedual", method = RequestMethod.GET)
	public String schedual(HttpServletRequest request, HttpServletResponse response, Model model) {
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		model.addAttribute("schedualList", memberService.getSchedual(sessionInfo.getMemberNo()));
		return "user/menu/schedual";
	}

}
