package com.belle.teeth.api.common.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.belle.teeth.api.common.dto.Dentist;
import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.QRCodeDto;
import com.belle.teeth.api.common.dto.SessionDto;
import com.belle.teeth.api.common.mapper.CommonMapper;
import com.belle.teeth.api.dentist.mapper.MemberMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class CommonService {
	
	@Autowired
	private MemberMapper memberMapper;
	@Autowired
	private CommonMapper commonMapper;

	// 로그인 및 회원 확인
	public JSONObject loginCheck(String userId, String password, HttpServletRequest request) {
		
		JSONObject result = new JSONObject();
		result.put("check", false);
		
		MemberDto member = memberMapper.memberInfo(userId, password);
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
				sessionData.getDentist().setDentistFileKey(dInfo.getDentistFileKey());
				
			} else if(member.getMemberType().equals("C")) { // 기공소
				
			}

			// 새션 생성
			HttpSession session = request.getSession(true);
			session.setAttribute("sessionData", sessionData);
			session.setAttribute("memberNo", member.getMemberNo());
			
			result.put("check", true);
			result.put("type", member.getMemberType());
		}
		
		return result;
	}
	
	/**
	 * 치과 정보 가져오기
	 */
	public Dentist getDentistInfo(Integer dentistNo) {
		return commonMapper.dentistInfo(dentistNo);
	}
	
	/**
	 * 치과 리스트 가져오기
	 * @return
	 */
	public Dentist[] getDentistList() {
		return commonMapper.dentistList();
	}
	
	/**
	 * 치과 이름 중복 확인
	 * @param name
	 * @return
	 */
	public boolean checkDentistName(String name) {
		int count = commonMapper.checkDenitstName(name);
		if(count == 0) {
			return true;
		} else {
			return false;
		}
	}
	
	/**
	 * 치과 등록
	 * @param name
	 */
	public void saveDentistName(String name) {
		commonMapper.addDentist(name);
	}

	/**
	 * 치과 정보 ( 장치사용법 ) Img 등록
	 */
	public void updateDentistFileKey(String fileKey, Integer dentistNo) {
		commonMapper.updateDentistFileKey(fileKey, dentistNo);
	}
	
	/**
	 *  파일 저장
	 * @param fileDto
	 */
	public FileDto addFileInfo(FileDto fileDto) {
		Long checkSn = commonMapper.insertFileInfo(fileDto);
		if(checkSn == 1) {
			return fileDto;
		} else {
			return null;
		}
	}
	
	/**
	 * 파일 키 값으로 파일 정보 가져오기
	 * @param fileKey
	 * @return
	 */
	public FileDto getFileFileKey(String fileKey) {
		return commonMapper.getFileInfoByKey(fileKey);
	}
	
	/**
	 * QR코드 정보 등록
	 * @param fileSn
	 * @param memberNo
	 * @param step
	 */
	public void saveQrInfo(Long fileSn, Integer memberNo, Integer step) {
		commonMapper.addQrInfo(fileSn, memberNo, step);
	}
	
	/**
	 * QR코드 정보 삭제
	 * @param memberNo
	 */
	@Transactional
	public void deleteQRInfo(Integer memberNo) {
		QRCodeDto[] qrCodeList = null;
		commonMapper.deleteQrInfo(memberNo);
		qrCodeList = commonMapper.getQRInfoList(memberNo);
		if(qrCodeList != null && qrCodeList.length > 0) {
			for(int i=0; i<qrCodeList.length; i++) {
				commonMapper.deleteFile(qrCodeList[i].getFileSn());
			}
		}
	}
	
	/**
	 * QR코드 이미지 정보
	 * @param memberNo
	 * @return
	 */
	public QRCodeDto[] getQrImgList(Integer memberNo) {
		return commonMapper.getQRInfoListNoDelete(memberNo);
	}
}
