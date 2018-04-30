package com.belle.teeth.api.dentist.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.belle.teeth.api.common.dto.MemberDto;

public class SessionUtil {
	
	/**
	 * 로그인한 회원 세션정보 가져오기.
	 * @param request
	 * @return
	 */
	public static MemberDto getSessionCheck(HttpServletRequest request) {
		MemberDto result = null;
		HttpSession session = request.getSession(true);
		result = (MemberDto) session.getAttribute("sessionData");
		return result;
	}

}
