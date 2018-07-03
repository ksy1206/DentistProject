package com.belle.teeth.api.common.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.belle.teeth.api.common.component.UtilFile;
import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.MemberImgDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.common.service.CommonService;
import com.belle.teeth.api.dentist.service.MemberService;
import com.belle.teeth.api.dentist.util.SessionUtil;

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
	
	// reDirect
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String reDirect(HttpServletRequest request, HttpServletResponse response) {
		return "common/login";
	}

	/**
	 * 기공소 | 의사 로그인 페이지
	 * @param request
	 * @param response
	 * @return
	 */
	@RequestMapping(value = "/common/login", method = RequestMethod.GET)
	public String CommonLogin(HttpServletRequest request, HttpServletResponse response) {
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
	public String CommonJoin(HttpServletRequest request, HttpServletResponse response, Model model) {
		model.addAttribute("dentistList", cService.getDentistList());
		return "common/join";
	}

	/**
	 * 회원 아이디 비번 찾기
	 * @param request
	 * @param response
	 * @param model
	 * @return
	 */
	@RequestMapping(value = "/common/find", method = RequestMethod.GET)
	public String CommonFind(HttpServletRequest request, HttpServletResponse response, Model model) {
		return "common/find";
	}

	/**
	 * 회원 비밀번호 찾기 확인 로직
	 * @param request
	 * @param response
	 * @param userId
	 * @param email
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ajax/common/find/check", method = RequestMethod.POST)
	@ResponseBody
	public String findPwdCheck(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "userId") String userId
			, @RequestParam(value = "email") String email, Model model) throws Exception {
		String result = "false";
		boolean isvaild = mService.checkFindPwd(userId, email, "B");
		if(isvaild) {
			result = "true";
		}
		return result;
	}
	
	/**
	 * 회원 비밀번호 변경
	 * @param request
	 * @param response
	 * @param userId
	 * @param email
	 * @param password
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/ajax/common/modify/password", method = RequestMethod.POST)
	@ResponseBody
	public String modifyPwdCheck(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "userId") String userId
			, @RequestParam(value = "email") String email
			, @RequestParam(value = "password") String password, Model model) throws Exception {
		String result = "false";
		boolean isvaild = mService.modifyPwd(userId, email, password, "B");
		if(isvaild) {
			result = "true";
		}
		return result;
	}
	
	/**
	 * 회원 DB 등록
	 * @param request
	 * @param response
	 * @param memberDto
	 * @return
	 */
	@RequestMapping(value = "/ajax/member/add/{type}/{userType}", method = RequestMethod.POST)
	@ResponseBody
	public String MemberAdd(HttpServletRequest request, HttpServletResponse response
			, @PathVariable String type , @PathVariable String userType , MemberDto memberDto) throws Exception {

		// 일반 회원 등록
		if("general".equals(userType)) {
			if("modify".equals(type)) {
				mService.memberModify(memberDto);
			} else {
				SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
				memberDto.setMemberType("A"); // 일반회원
				memberDto.setAssignNo(sessionInfo.getAssignNo());
				memberDto.setDoctorMemberNo(sessionInfo.getMemberNo());
				mService.memberAdd(memberDto);
			}
		} else {
			// 기타 회원 등록
			mService.memberAdd(memberDto);
		}
		return "true";
	}

	/**
	 * 이메일 중복 체크
	 * @param request
	 * @param response
	 * @param email
	 * @return
	 */
	@RequestMapping(value = "/ajax/common/email/check", method = RequestMethod.GET)
	@ResponseBody
	public String CheckEmail(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "email") String email) {
		boolean isVaild = mService.checkEmail(email);

		if(isVaild) {
			return "Possible";
		} else {
			return "ImPossible";
		}
	}
	
	/**
	 * 회원 아이디 중복 체크
	 * @param request
	 * @param response
	 * @param email
	 * @return
	 */
	@RequestMapping(value = "/ajax/common/userId/check", method = RequestMethod.GET)
	@ResponseBody
	public String CheckUserId(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "userId") String userId) {
		boolean isVaild = mService.checkUserId(userId);

		if(isVaild) {
			return "Possible";
		} else {
			return "ImPossible";
		}
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
			// 파일 타입별 종류 | F01 : 치과 장치 사용법 관련 이미지  F02 : 환자 사진 정보  F03 : 환자 셋업 사진 정보
			if("F01".equals(fileType)) {
				SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
				Integer dentistNo = sessionInfo.getDentist().getDentistNo();
				cService.updateDentistFileKey(fileInfo.getFileKey(), dentistNo);
			} else if("F02".equals(fileType) || "F03".equals(fileType)) {
				imgInfo.setMemberNo(patientNo);
				imgInfo.setFileSn(fileInfo.getFileSn());
				mService.updateMemberImgInfo(imgInfo);
			} else if("Video".equals(fileType)) {
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
	
	/**
	 * 파일 삭제
	 * @param request
	 * @param response
	 * @param fileSn
	 * @return
	 */
	@RequestMapping(value = "/ajax/common/fileDelete", method = RequestMethod.POST)
	@ResponseBody
	public String DeleteFile(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value = "fileSn") Long fileSn) {
		
		cService.deleteFile(fileSn);
		
		return "true";
	}
}
