package com.belle.teeth.api.common.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.belle.teeth.api.common.dto.Dentist;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.SessionDto;
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
		SessionDto sessionData = new SessionDto();
		
		// 로그인 여부 확인
		if(member != null) {
			
			sessionData.setMemberNo(member.getMemberNo());
			sessionData.setMemberType(member.getMemberType());
			sessionData.setMemberName(member.getMemberName());
			sessionData.setMemberAge(member.getMemberAge());
			sessionData.setMemberId(member.getMemberId());
			sessionData.setAssignNo(member.getAssignNo());
			
			// 회원 타입 체크해서 추가 정보 가져오기
			if(member.getMemberType().equals("B")) { // 의사
				Dentist dInfo = commonMapper.dentistInfo(member.getAssignNo());
				sessionData.getDentist().setDentistNo(dInfo.getDentistNo());
				sessionData.getDentist().setDentistName(dInfo.getDentistName());
				
			} else if(member.getMemberType().equals("C")) { // 기공소
				
			}

			// 새션 생성
			HttpSession session = request.getSession(true);
			session.setAttribute("sessionData", sessionData);
			session.setAttribute("memberNo", member.getMemberNo());

			log.error("@@@@@@@"+sessionData.toString());
			
			result.put("check", true);
			result.put("type", member.getMemberType());
		}
		
		return result;
	}
}
