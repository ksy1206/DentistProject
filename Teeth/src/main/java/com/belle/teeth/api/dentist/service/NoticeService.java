package com.belle.teeth.api.dentist.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.belle.teeth.api.dentist.dto.NoticeDto;
import com.belle.teeth.api.dentist.mapper.NoticeMapper;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Service
public class NoticeService {
	
	@Autowired
	private NoticeMapper nMapper;
	
	/**
	 * 치과별 공지사항 목록 가져오기
	 * @param dentistNo
	 * @return
	 */
	public NoticeDto[] getNoticeList(Integer dentistNo ) {
		return nMapper.getNoticeList(dentistNo);
	}

	/**
	 * 치과 공지사항 상세정보 가져오기
	 * @param noticeNo
	 * @return
	 */
	public NoticeDto getNoticeDetails(Integer noticeNo) {
		return nMapper.getNoticeDetails(noticeNo);
	}

	/**
	 * 병원별 공지사항 등록
	 * @param data
	 * @return
	 */
	public void addNotice(NoticeDto data) {

		// 글 수정
		if(data.getNoticeNo() != 0) {
			nMapper.updateDentistNotice(data);
		} else { // 글수정
			nMapper.insertDentistNotice(data);
		}
	}

}
