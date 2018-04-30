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
	 * 병원별 공지사항 등록
	 * @param data
	 * @return
	 */
	public void addNotice(NoticeDto data) {
		nMapper.insertDentistNotice(data);
	}

}
