package com.belle.teeth.interceptor;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.web.servlet.HandlerInterceptor;
import org.springframework.web.servlet.ModelAndView;

import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.dentist.util.SessionUtil;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class FactoryInterceptor implements HandlerInterceptor {

	@Override
	public boolean preHandle(HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
		// TODO Auto-generated method stub
		// Session Check
		HttpSession session = request.getSession(true);
		SessionDto sessionInfo = SessionUtil.getSessionCheck(request);
		Integer memberNo = (Integer) session.getAttribute("memberNo");

		// 나중에 로그인 안할경우 Error처리
		if(memberNo == null) {
			response.sendRedirect("/common/login");
			return false;
		} else {
			if("C".equals(sessionInfo.getMemberType())) {
				
			} else {
				// 로그인 세션이 의사가 아닌경우 return false
				response.sendRedirect("/common/login");
				return false;
			}
		}
		return true;
	}

	@Override
	public void postHandle(HttpServletRequest request, HttpServletResponse response, Object handler, ModelAndView modelAndView) throws Exception {
		// TODO Auto-generated method stub
		modelAndView.addObject("SessionData", SessionUtil.getSessionCheck(request));

	}

	@Override
	public void afterCompletion(HttpServletRequest request, HttpServletResponse response, Object handler, Exception ex) throws Exception {
		// TODO Auto-generated method stub
		
	}

}
