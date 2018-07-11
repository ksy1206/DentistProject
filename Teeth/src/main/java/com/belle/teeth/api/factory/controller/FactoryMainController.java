package com.belle.teeth.api.factory.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.PagingDto;
import com.belle.teeth.api.common.service.CommonService;
import com.belle.teeth.api.dentist.service.MemberService;
import com.belle.teeth.api.factory.zxing.MakeQrCode;

@Controller
@RequestMapping(value = "/factory")
public class FactoryMainController {

	
	@Autowired
	private MemberService memberService;
	@Autowired
	private CommonService cService;
	
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
	
	/**
	 * 회원 서브 메뉴
	 * @param request
	 * @param response
	 * @param type
	 * @param memberNo
	 * @param model
	 * @return
	 * @throws Exception
	 */
	@RequestMapping(value = "/member/sub", method = RequestMethod.GET)
	public String FactoryMemberSub(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="type", required=false, defaultValue="menu") String type
			, @RequestParam(value="memberNo", required=true) Integer memberNo, Model model) throws Exception {

		if ("picture".equals(type)) {
			model.addAttribute("imgList", memberService.getMemberInfo(memberNo, "F02"));
		} else if("qrcode".equals(type)) {
			model.addAttribute("qrList", cService.getQrImgList(memberNo));
			model.addAttribute("memberInfo", memberService.getMemberInfo(memberNo));
		} else if("setUpImg".equals(type)) {
			model.addAttribute("imgList", memberService.getMemberInfo(memberNo, "F03"));
		} else if("3Dvideo".equals(type)) {
			Long fileSn = memberService.getMemberInfo(memberNo).getStlFileSn().longValue();
			model.addAttribute("StlInfo", cService.getImgInfoByFileSn(fileSn));
		}
		model.addAttribute("memberNo", memberNo);
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
	@RequestMapping(value = "/ajax/qrMake", method = RequestMethod.POST)
	@ResponseBody
	@Transactional
	public String FactoryQrMaking(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="memberNo") Integer memberNo
			, @RequestParam(value="step", required=false, defaultValue="10") Integer step, Model model) throws Exception {
		
		MemberDto memberInfo = memberService.getMemberInfo(memberNo);

		// QR코드 만들기전 기존 데이터 있으면 삭제.
		cService.deleteQRInfo(memberNo);
		
		for(int i=1; i<=step; i++) {
			String qrName = "step" + i + ".png";
			FileDto fileInfo =  MakeQrCode.MakeQrCodeFunction(request, memberInfo.getMemberNo(), memberInfo.getMemberId(), qrName, i);
			fileInfo = cService.addFileInfo(fileInfo);
			cService.saveQrInfo(fileInfo.getFileSn(), memberNo, i);
		}
		return "true";
	}
	
	
	// 장치 사용법
	@RequestMapping(value = "/careful/attention", method = RequestMethod.GET)
	public String cafeful(HttpServletRequest request, HttpServletResponse response, Model model) {
		model.addAttribute("imgList", cService.getFileFileType("F04"));
		return "factory/careful/attention";
	}

	// 장치 사용법 등록 페이지
	@RequestMapping(value = "/careful/attention/add", method = RequestMethod.GET)
	public String cafefulAdd(HttpServletRequest request, HttpServletResponse response, Model model) {
		return "factory/careful/attentionAdd";
	}
	
	// 치과 등록페이지 이동
	@RequestMapping(value = "/dentist/add", method = RequestMethod.GET)
	public String addDentist(HttpServletRequest request, HttpServletResponse response, Model model) {
		model.addAttribute("dentistList", cService.getDentistList());
		return "factory/addDentist";
	}
	
	// 치과 이름 중복 확인
	@RequestMapping(value = "/ajax/check/dentist/name", method = RequestMethod.GET)
	@ResponseBody
	public String CheckDentistName(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="dentistName") String dentistName, Model model) throws Exception {
		boolean isVaild = cService.checkDentistName(dentistName);
		String result = "possible";
		if(!isVaild) {
			result = "imPossible";
		}
		return result;
	}
	
	// 치과 등록
	@RequestMapping(value = "/ajax/save/dentist/name", method = RequestMethod.POST)
	@ResponseBody
	public String SaveDentistName(HttpServletRequest request, HttpServletResponse response
			, @RequestParam(value="dentistName") String dentistName, Model model) throws Exception {
		cService.saveDentistName(dentistName);
		return "true";
	}
}
