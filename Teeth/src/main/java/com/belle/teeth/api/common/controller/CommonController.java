package com.belle.teeth.api.common.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.belle.teeth.api.common.component.UtilFile;
import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberImgDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.common.service.CommonService;
import com.belle.teeth.api.dentist.service.MemberService;
import com.belle.teeth.api.dentist.util.SessionUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Controller
public class CommonController {
	
	@Autowired
	private CommonService cService;
	@Autowired
	private MemberService mService;
	
	// 이미지 업로드 테스트
	@RequestMapping(value = "/common/imgUpload", method = RequestMethod.GET)
	public String test(HttpServletRequest request, HttpServletResponse response) {
		return "imgUpload";
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
	 * 회원 가입
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/common/join", method = RequestMethod.GET)
	public String DentistJoin(HttpServletRequest request, HttpServletResponse response, Model model) {
		
		return "common/join";
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

	
	/**
	 * 파일 업로드
	 * @param request
	 * @param response
	 * @param files
	 * @return
	 */
	@RequestMapping(value = "/ajax/common/fileUpload", method = RequestMethod.POST)
	@ResponseBody
	public String fileUpload(MultipartHttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "fileType", required = false, defaultValue = "F01") String fileType
			, @RequestParam(value = "patientNo", required = false, defaultValue = "0") Long patientNo
			, @RequestParam("files") MultipartFile files) {

		// 파일 업로드
		FileDto fileInfo = UtilFile.fileUpload(request, files);
		MemberImgDto imgInfo = new MemberImgDto();
		fileInfo.setFileType(fileType);
		
		fileInfo = cService.addFileInfo(fileInfo);

		if(fileInfo != null) {
			// 파일 타입별 종류
			// F01 : 치과 장치 사용법 관련 이미지
			// F02 : 환자 사진 정보
			if("F01".equals(fileType)) {
				SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
				Integer dentistNo = sessionInfo.getDentist().getDentistNo();
				cService.updateDentistFileKey(fileInfo.getFileKey(), dentistNo);
			} else if("F02".equals(fileType)) {
				imgInfo.setMemberNo(patientNo);
				imgInfo.setFileSn(fileInfo.getFileSn());
				mService.updateMemberImgInfo(imgInfo);
			}
			
			// 파일 업로드 후, DB 저장
			JSONObject result = new JSONObject(fileInfo);
			return result.toString();
		} else {
			response.setStatus(400);
			return "";
		}
	}
	
}
