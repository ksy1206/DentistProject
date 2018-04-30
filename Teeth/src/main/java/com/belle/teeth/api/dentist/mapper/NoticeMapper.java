package com.belle.teeth.api.dentist.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;

import com.belle.teeth.api.dentist.dto.NoticeDto;

@Mapper
public interface NoticeMapper {

	@Insert("INSERT INTO dentist_notice"
			+ "("
			+ "dentist_no"
			+ ", title"
			+ ", content"
			+ ", insert_date"
			+ ", writer_id"
			+ ")"
			+ "VALUES"
			+ "("
			+ "#{dentistNo}"
			+ ", #{title}"
			+ ", #{content}"
			+ ", NOW()"
			+ ", #{writerId}"
			+ ")")
	void insertDentistNotice(NoticeDto data);
}
