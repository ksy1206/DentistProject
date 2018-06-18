package com.belle.teeth.api.dentist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.MemberImgDto;
import com.belle.teeth.api.dentist.dto.QaDto;
import com.belle.teeth.api.dentist.mapper.MemberMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class MemberService {

	@Autowired
	private MemberMapper memberMapper;
	
	/**
	 * 회원 이메일 중복 체크
	 * @param email
	 * @return
	 */
	public boolean checkEmail(String email) {
		Integer count = memberMapper.checkEmail(email);
		if(count == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * 회원 아이디 중복 체크
	 * @param userId
	 * @return
	 */
	public boolean checkUserId(String userId) {
		Integer count = memberMapper.checkUserId(userId);
		if(count == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * 회원 비밀번호 찾기
	 * @param userId
	 * @param email
	 * @return
	 */
	public boolean checkFindPwd(String userId, String email, String type) {
		Integer count = memberMapper.checkFindPwd(userId, email, type);
		if(count == 0) {
			return false;
		} else {
			return true;
		}
	}

	/**
	 * 비밀번호 변경
	 * @param userId
	 * @param email
	 * @param pwd
	 * @return
	 */
	@Transactional
	public boolean modifyPwd(String userId, String email, String pwd, String type) {
		Integer count = memberMapper.checkFindPwd(userId, email, type);
		if(count == 0) {
			return false;
		} else {
			memberMapper.changePwd(userId, email, type, pwd);
			return true;
		}
	}
	
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
	public MemberDto[] getMemberList(Integer assignNo, Integer doctorNo, int po, int ps, String sKey, String sValue) {
		int pageStart = po * ps;
		MemberDto[] list = null;
		// sKey : 검색 조건 (name, email, id)
		if ("name".equals(sKey)) {
			list = memberMapper.getMemberListByName(assignNo, doctorNo, sValue);
		} else if("email".equals(sKey)) {
			list = memberMapper.getMemberListByEmail(assignNo, doctorNo, sValue);
		} else if("id".equals(sKey)) {
			list = memberMapper.getMemberListById(assignNo, doctorNo, sValue);
		} else {
			list = memberMapper.getMemberList(assignNo, doctorNo, pageStart, ps);
		}
		return list;
	}

	/**
	 * 환자 목록 토탈 카운트
	 * @param assignNo
	 * @param doctorNo
	 * @param po
	 * @param ps
	 * @param sKey
	 * @param sValue
	 * @return
	 */
	public Integer getMemberListTotalCount(Integer assignNo, Integer doctorNo, String sKey, String sValue) {
		Integer result = 0;
		if ("name".equals(sKey)) {
			
		} else if("email".equals(sKey)) {
			
		} else if("id".equals(sKey)) {
			
		} else {
			result = memberMapper.getMemberTotalListCount(assignNo, doctorNo);
		}
		return result;
	}
	
	/**
	 * 환자 상세 정보 가져오기
	 * @param memberNo
	 * @return
	 */
	public MemberDto getMemberInfo(Integer memberNo) {
		return memberMapper.memberInfo2(memberNo);
	}
	
	/**
	 * 환자 의사 질문 답변 리스트 가져오기
	 * @param doctorNo
	 * @param memberNo
	 * @return
	 */
	public QaDto[] getQaList(Integer doctorNo, Integer memberNo) {
		return memberMapper.getQaList(doctorNo, memberNo);
	}
	
	/**
	 * 질문 답변 등록
	 * @param qaInfo
	 */
	public void addQa(QaDto qaInfo) {
		memberMapper.insertQa(qaInfo);
	}
	
	/**
	 * 질문 답변 삭제
	 * @param qaInfo
	 */
	public void qaDelete(Integer qaNo, Integer doctorNo) {
		memberMapper.deleteQa(qaNo, doctorNo);
	}
	
	/**
	 * 회원 이미지 등록
	 * @param memberInfo
	 */
	public void updateMemberImgInfo(MemberImgDto memberInfo) {
		memberMapper.insertMemberImgInfo(memberInfo);
	}
	
	/**
	 * 회원 이미지 리스트 가져오기
	 * @param memberNo
	 * @param fileType
	 * @return
	 */
	public FileDto[] getMemberInfo(Integer memberNo, String fileType) {
		return memberMapper.selectMemberImgInfo(memberNo, fileType);
	}
}
