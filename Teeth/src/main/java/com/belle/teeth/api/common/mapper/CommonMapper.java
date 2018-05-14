package com.belle.teeth.api.common.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Options;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.SelectKey;
import org.apache.ibatis.annotations.Update;
import org.springframework.transaction.annotation.Transactional;

import com.belle.teeth.api.common.dto.Dentist;
import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;

@Mapper
public interface CommonMapper {

	// 회원정보 모두 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberType", column = "member_type")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "memberId", column = "member_id")
		,@Result(property = "memberPwd", column = "member_pwd")
		,@Result(property = "assignNo", column = "assign_no")
	})
	@Select("SELECT * FROM member WHERE member_id = #{userId} and member_pwd = #{password}")
	public MemberDto memberInfo(@Param("userId") String userId, @Param("password") String password);
	
	// 치과 정보  -> 장치 사용법 파일 키 업데이트
	@Update("UPDATE dentist "
			+ "SET dentist_file_key = #{fileKey} WHERE dentist_no = #{dentistNo}")
	void updateDentistFileKey(@Param("fileKey") String fileKey, @Param("dentistNo") Integer dentistNo);
	
	// 치과 정보 가져오기
	@Results({
		@Result(property = "dentistNo", column = "dentist_no")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "dentistFileKey", column = "dentist_file_key")
	})
	@Select("SELECT * FROM dentist WHERE dentist_no = #{assignNo}")
	public Dentist dentistInfo(@Param("assignNo") Integer assignNo);
	
	// 파일 정보 등록하기
	@Insert("INSERT INTO upload_file "
			+ "("
			+ "file_type"
			+ ", file_key"
			+ ", file_path"
			+ ", file_url"
			+ ", file_ext"
			+ ", file_name"
			+ ", insert_date"
			+ ", delete_yn"
			+ ") "
			+ "VALUES "
			+ "("
			+ "#{fileType}"
			+ ", #{fileKey}"
			+ ", #{filePath}"
			+ ", #{fileUrl}"
			+ ", #{fileExt}"
			+ ", #{fileName}"
			+ ", NOW()"
			+ ", 'N'"
			+ ")")
	@SelectKey(before = false, keyProperty = "fileSn", keyColumn="file_sn", resultType = Long.class, statement = { "SELECT LAST_INSERT_ID()" })
	@Transactional
	Long insertFileInfo(FileDto fileDto);

	// 파일 정보 가져오기 : Key값으로 검색
	@Results({
		@Result(property = "fileSn", column = "file_sn")
		,@Result(property = "fileKey", column = "file_key")
		,@Result(property = "fileType", column = "file_type")
		,@Result(property = "filePath", column = "file_path")
		,@Result(property = "fileUrl", column = "file_url")
		,@Result(property = "fileExt", column = "file_ext")
		,@Result(property = "fileName", column = "file_name")
		,@Result(property = "insertDate", column = "insert_date")
		,@Result(property = "deleteYn", column = "delete_yn")
	})
	@Select("SELECT * FROM upload_file WHERE file_key = #{fileKey}")
	public FileDto getFileInfoByKey(@Param("fileKey") String fileKey);
}
