package com.belle.teeth.api.dentist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.MemberImgDto;
import com.belle.teeth.api.dentist.dto.QaDto;
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