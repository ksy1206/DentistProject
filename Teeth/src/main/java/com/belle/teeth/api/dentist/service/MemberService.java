package com.belle.teeth.api.dentist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.dentist.mapper.MemberMapper;

@Service
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
	
	/**
	 * 회원 정보 수정
	 * @param memberDto
	 */
	public void memberModify(MemberDto memberDto) {
		memberMapper.memberUpdate(memberDto);
	}

	/**
	 * 환자 목록 가져오기
	 * @return
	 */
	public MemberDto[] getMemberList(Integer assignNo, Integer doctorNo) {
		return memberMapper.getMemberList(assignNo, doctorNo);
	}
	
	/**
	 * 환자 상세 정보 가져오기
	 * @param memberNo
	 * @return
	 */
	public MemberDto getMemberInfo(Integer memberNo) {
		return memberMapper.memberInfo2(memberNo);
	}
}
