package com.belle.teeth.api.dentist.util;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import com.belle.teeth.api.common.dto.SessionDto;


public class SessionUtil {
	
	/**
	 * 로그인한 회원 세션정보 가져오기.
	 * @param request
	 * @return
	 */
	public static SessionDto getSessionCheck(HttpServletRequest request) {
		SessionDto result = null;
		HttpSession session = request.getSession(true);
		result = (SessionDto) session.getAttribute("sessionData");
		return result;
	}

}
