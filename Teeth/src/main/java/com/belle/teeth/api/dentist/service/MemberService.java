package com.belle.teeth.api.dentist.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.dentist.mapper.MemberMapper;

public class MemberService {
	@Autowired
	private MemberMapper memberMapper;
	
	/**
	 * 회원 추가
	 * @param memberDto
	 */
	public void memberAdd(MemberDto memberDto) {
		memberMapper.memberAdd(memberDto);
	}

}
