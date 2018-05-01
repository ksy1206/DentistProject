package com.belle.teeth.api.dentist.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

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

	@Update("UPDATE dentist_notice "
			+ "SET title = #{title}, content = #{content} "
			+ "WHERE notice_no = #{noticeNo}")
	void updateDentistNotice(NoticeDto data);

	@Results({
		@Result(property = "noticeNo", column = "notice_no")
		, @Result(property = "dentistNo", column = "dentist_no")
		, @Result(property = "title", column = "title")
		, @Result(property = "content", column = "content")
		, @Result(property = "insertDate", column = "insert_date")
		, @Result(property = "writerId", column = "writer_id")
	})
	@Select("SELECT * FROM dentist_notice WHERE dentist_no = #{dentistNo}")
	NoticeDto[] getNoticeList(@Param("dentistNo") Integer dentistNo);

	@Results({
		@Result(property = "noticeNo", column = "notice_no")
		, @Result(property = "dentistNo", column = "dentist_no")
		, @Result(property = "title", column = "title")
		, @Result(property = "content", column = "content")
		, @Result(property = "insertDate", column = "insert_date")
		, @Result(property = "writerId", column = "writer_id")
	})

	@Select("SELECT * FROM dentist_notice WHERE notice_no = #{noticeNo}")
	NoticeDto getNoticeDetails(@Param("noticeNo") Integer noticeNo);
}
