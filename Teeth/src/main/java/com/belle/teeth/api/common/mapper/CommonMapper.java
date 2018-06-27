package com.belle.teeth.api.common.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
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
import com.belle.teeth.api.common.dto.QRCodeDto;

@Mapper
public interface CommonMapper {

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
	@Select("SELECT * FROM dentist")
	public Dentist[] dentistList();
	
	// 치과 이름 중복 카운트
	@Select("SELECT COUNT(*) FROM dentist WHERE dentist_name = #{name}")
	public Integer checkDenitstName(@Param("name") String name);

	// 치과 정보 가져오기
	@Results({
		@Result(property = "dentistNo", column = "dentist_no")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "dentistFileKey", column = "dentist_file_key")
	})
	@Select("SELECT * FROM dentist WHERE dentist_no = #{assignNo}")
	public Dentist dentistInfo(@Param("assignNo") Integer assignNo);
	
	// 치과 등록
	@Insert("INSERT INTO dentist (dentist_name, dentist_file_key) VALUES (#{name}, '0')")
	public void addDentist(@Param("name") String name);
	
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

	// 파일 삭제
	@Update("UPDATE upload_file SET delete_yn = 'Y' WHERE file_sn = #{fileSn}")
	public void deleteFile(@Param("fileSn") Long fileSn);
	
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
	
	// 파일 정보 리스트 가져오기 : FileType
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
	@Select("SELECT * FROM upload_file WHERE file_type = #{fileType} AND delete_yn = 'N'")
	public FileDto[] getFileListByFileType(@Param("fileType") String fileType);
	
	// QR코드 정보 등록
	@Insert("INSERT INTO member_qrcode "
			+ "("
			+ "member_no "
			+ ", file_sn "
			+ ", step"
			+ ") "
			+ "VALUES "
			+ "("
			+ "#{memberNo} "
			+ ", #{fileSn} "
			+ ", #{step}"
			+ ")")
	public void addQrInfo(@Param("fileSn") Long fileSn, @Param("memberNo") Integer memberNo, @Param("step") Integer step);

	// QR코드 삭제
	@Update("UPDATE member_qrcode SET delete_yn = 'Y' WHERE member_no = #{memberNo}")
	public void deleteQrInfo(@Param("memberNo") Integer memberNo);
	
	// QR코드 정보 회원 정보로 불러오기
	@Results({
		@Result(property = "qrNo", column = "qr_no")
		,@Result(property = "step", column = "step")
		,@Result(property = "memberNo", column = "member_no")
		,@Result(property = "fileSn", column = "file_sn")
		,@Result(property = "deleteYn", column = "delete_yn")
	})
	@Select("SELECT * FROM member_qrcode WHERE member_no = #{memberNo}")
	public QRCodeDto[] getQRInfoList(@Param("memberNo") Integer memberNo);

	// 삭제되지 않은 QR코드 정보 및 이미지 정보 불러오기
	@Results({
		@Result(property = "qrNo", column = "qr_no")
		,@Result(property = "step", column = "step")
		,@Result(property = "memberNo", column = "member_no")
		,@Result(property = "fileSn", column = "file_sn")
		,@Result(property = "deleteYn", column = "delete_yn")
		,@Result(property = "fileUrl", column = "file_url")
		,@Result(property = "fileName", column = "file_name")
	})
	@Select("SELECT a.qr_no, a.step, a.member_no, a.file_sn, b.file_url, b.file_name FROM member_qrcode a, upload_file b WHERE a.file_sn = b.file_sn AND a.member_no = #{memberNo} AND a.delete_yn = 'N'")
	public QRCodeDto[] getQRInfoListNoDelete(@Param("memberNo") Integer memberNo);
	
}
