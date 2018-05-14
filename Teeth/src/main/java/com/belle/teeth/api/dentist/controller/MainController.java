package com.belle.teeth.api.dentist.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.belle.teeth.api.common.dto.Dentist;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.common.service.CommonService;
import com.belle.teeth.api.dentist.dto.NoticeDto;
import com.belle.teeth.api.dentist.service.NoticeService;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
@RequestMapping(value = "/dentist")
public class MainController {
	
	@Autowired
	private NoticeService nService;
	@Autowired
	private CommonService cService;

	/**
	 * 치과 메인 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/main", method = RequestMethod.GET)
	public String DentistMain(HttpServletRequest request, HttpServletResponse response, Model model) {

		return "dentist/main";
	}

	/**
	 * 치과 공지 리스트 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/notice/list", method = RequestMethod.GET)
	public String NoticeList(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "dentistNo") Integer dentistNo, Model model) {
		model.addAttribute("NoticeList", nService.getNoticeList(dentistNo));
		return "dentist/notice/list";
	}

	/**
	 * 치과 공지 상세 및 수정
	 * @param request
	 * @param response
	 * @param noticeNo
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/notice/details", method = RequestMethod.GET)
	public String NoticeDetails(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "noticeNo") Integer noticeNo, Model model) {
		model.addAttribute("Notice", nService.getNoticeDetails(noticeNo));
		model.addAttribute("type", "modify");
		return "dentist/notice/add";
	}

	/**
	 * 치과 공지 등록 페이지
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/notice/add", method = RequestMethod.GET)
	public String NoticeAdd(HttpServletRequest request, HttpServletResponse response, Model model) {
		return "dentist/notice/add";
	}

	/**
	 * 공지사항 DB등록
	 * @param request
	 * @param response
	 * @param dentistNo
	 * @param title
	 * @param content
	 * @param writerId
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/ajax/notice/add", method = RequestMethod.POST)
	@ResponseBody
	public String NoticeDbAdd(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "type", required=false, defaultValue="add") String type
			, @RequestParam(value = "noticeNo", required=false, defaultValue="0") Integer noticeNo
			, @RequestParam(value = "dentistNo") Integer dentistNo
			, @RequestParam(value = "title") String title
			, @RequestParam(value = "content") String content
			, @RequestParam(value = "writerId") String writerId, Model model) {

		NoticeDto data = new NoticeDto();

		data.setNoticeNo(noticeNo);
		data.setDentistNo(dentistNo);
		data.setTitle(title);
		data.setContent(content);
		data.setWriterId(writerId);

		// 공지사항 등록
		nService.addNotice(data);
		return "true";
	}

	// 장치 사용법
	@RequestMapping(value = "/device/instructions", method = RequestMethod.GET)
	public String DeviceInstructions(HttpServletRequest request, HttpServletResponse response, Model model) {
		HttpSession session = request.getSession(true);
		SessionDto sessionInfo = (SessionDto) session.getAttribute("sessionData");
		Integer dentistNo = sessionInfo.getDentist().getDentistNo();
		Dentist dentistInfo = cService.getDentistInfo(dentistNo);
		model.addAttribute("fileInfo", cService.getFileFileKey(dentistInfo.getDentistFileKey()));
		return "dentist/device/instructions";
	}

	// 장치 사용법 등록 페이지
	@RequestMapping(value = "/device/instructions/add", method = RequestMethod.GET)
	public String DeviceInstructionsAdd(HttpServletRequest request, HttpServletResponse response, Model model) {
		return "dentist/device/instructionsAdd";
	}
	
	
}
