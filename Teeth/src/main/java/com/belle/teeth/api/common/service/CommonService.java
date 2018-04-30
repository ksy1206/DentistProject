package com.belle.teeth.api.common.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.mapper.CommonMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CommonService {
	
	@Autowired
	private CommonMapper commonMapper;

	// 로그인 및 회원 확인
	public JSONObject loginCheck(String userId, String password, HttpServletRequest request) {
		
		JSONObject result = new JSONObject();
		result.put("check", false);
		
		MemberDto member = commonMapper.memberInfo(userId, password);
		
		// 로그인 여부 확인
		if(member != null) {
			// 새션 생성
			HttpSession session = request.getSession(true);
			session.setAttribute("sessionData", member);
			session.setAttribute("memberNo", member.getMemberNo());

			result.put("check", true);
			result.put("type", member.getMemberType());
		}
		
		return result;
	}
}
