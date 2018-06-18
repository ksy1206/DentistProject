package com.belle.teeth.api.dentist.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.MemberImgDto;
import com.belle.teeth.api.dentist.dto.QaDto;

@Mapper
public interface MemberMapper {

	// Email 중복 체크
	@Select("SELECT COUNT(*) FROM member WHERE member_email = #{email}")
	public Integer checkEmail(@Param("email") String email);

	// UserId 중복 체크
	@Select("SELECT COUNT(*) FROM member WHERE member_id = #{userId}")
	public Integer checkUserId(@Param("userId") String userId);

	// 회원 비밀번호 찾기 유효성 검사
	@Select("SELECT COUNT(*) FROM member WHERE member_id = #{userId} AND member_email=#{email} AND member_type = #{type}")
	public Integer checkFindPwd(@Param("userId") String userId, @Param("email") String email, @Param("type") String type);

	// 회원 비밀번호 업데이트
	@Update("UPDATE member "
			+ "SET member_pwd = #{pwd} "
			+ "WHERE member_id = #{userId} AND member_email=#{email} AND member_type = #{type}")
	public void changePwd(@Param("userId") String userId, @Param("email") String email, @Param("type") String type, @Param("pwd") String pwd);
	
	// 회원정보 아이디와 비밀번호로 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberType", column = "member_type")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "memberEmail", column = "member_email")
		,@Result(property = "memberId", column = "member_id")
		,@Result(property = "memberPwd", column = "member_pwd")
		,@Result(property = "assignNo", column = "assign_no")
	})
	@Select("SELECT * FROM member WHERE member_id = #{userId} and member_pwd = #{password}")
	public MemberDto memberInfo(@Param("userId") String userId, @Param("password") String password);

	// 회원정보 회원 번호로
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberType", column = "member_type")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "memberEmail", column = "member_email")
		,@Result(property = "memberId", column = "member_id")
		,@Result(property = "memberPwd", column = "member_pwd")
		,@Result(property = "assignNo", column = "assign_no")
		,@Result(property = "doctorMemberNo", column = "doctor_member_no")
		,@Result(property = "joinDateTime", column = "join_date_time")
	})
	@Select("SELECT * FROM member WHERE member_no = #{memberNo}")
	public MemberDto memberInfo2(@Param("memberNo") Integer memberNo);
	
	// 회원 목록 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} "
			+ "ORDER BY join_date_time DESC LIMIT #{po}, #{ps}")
	public MemberDto[] getMemberList(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("po") Integer po, @Param("ps") Integer ps);
	// 회원 목록 토탈 카운트
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo}")
	public Integer getMemberTotalListCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo);
	
	// 회원 목록 검색 by MemberName
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_name LIKE CONCAT ('%', #{sValue}, '%')" 
			+ "ORDER BY join_date_time DESC")
	public MemberDto[] getMemberListByName(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_name LIKE CONCAT ('%', #{sValue}, '%')")
	public Integer getMemberListByNameCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	
	// 회원 목록 검색 by MemberId
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_id LIKE CONCAT ('%', #{sValue}, '%')"
			+ " ORDER BY join_date_time DESC")
	public MemberDto[] getMemberListById(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_id LIKE CONCAT ('%', #{sValue}, '%')")
	public Integer getMemberListByIdCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	
	// 회원 목록 검색 by MemberEmail
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_email LIKE CONCAT ('%', #{sValue}, '%') "
			+ "ORDER BY join_date_time DESC")
	public MemberDto[] getMemberListByEmail(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_email LIKE CONCAT ('%', #{sValue}, '%')")
	public Integer getMemberListByEmailCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	
	// 회원 정보 등록
	@Insert("INSERT INTO member "
			+ "("
			+ "member_type"
			+ ", member_name"
			+ ", member_gender"
			+ ", member_age"
			+ ", member_email"
			+ ", member_id"
			+ ", member_pwd"
			+ ", assign_no"
			+ ", doctor_member_no"
			+ ", join_date_time"
			+ ")"
			+ " VALUES "
			+ "("
			+ "#{memberType}"
			+ ", #{memberName}"
			+ ", #{memberGender}"
			+ ", #{memberAge}"
			+ ", #{memberEmail}"
			+ ", #{memberId}"
			+ ", #{memberPwd}"
			+ ", #{assignNo}"
			+ ", #{doctorMemberNo}"
			+ ", NOW()"
			+ ")")
	void memberAdd(MemberDto data);
	
	// 회원정보 업데이트
	@Update("UPDATE member "
			+ "SET member_name = #{memberName}"
			+ ", member_gender = #{memberGender}"
			+ ", member_age = #{memberAge}"
			+ ", member_email = #{memberEmail}"
			+ ", member_id = #{memberId}"
			+ ", member_pwd = #{memberPwd} "
			+ "WHERE member_no = #{memberNo}")
	void memberUpdate(MemberDto data);
	
	// 질문 답변 리스트 가져오기
	@Results({
		@Result(property = "qaNo", column = "qa_no")
		, @Result(property = "type", column = "type")
		, @Result(property = "qaDoctorNo", column = "qa_doctor_no")
		, @Result(property = "qaMemberNo", column = "qa_member_no")
		, @Result(property = "message", column = "message")
		, @Result(property = "insertDate", column = "insert_date")
	})
	@Select("SELECT * FROM qa WHERE qa_doctor_no = #{doctorNo} and qa_member_no = #{memberNo} ORDER BY insert_date ASC")
	public QaDto[] getQaList(@Param("doctorNo") Integer doctorNo, @Param("memberNo") Integer memberNo);

	// 질문 답변 등록
	@Insert("INSERT INTO qa "
			+ "("
			+ "type"
			+ ", qa_doctor_no"
			+ ", qa_member_no"
			+ ", message"
			+ ", insert_date"
			+ ") "
			+ "VALUES "
			+ "("
			+ "#{type}"
			+ ", #{qaDoctorNo}"
			+ ", #{qaMemberNo}"
			+ ", #{message}"
			+ ", NOW()"
			+ ")")
	void insertQa(QaDto data);

	/**
	 * 질문 답변 삭제
	 * @param qaNo
	 */
	@Delete("DELETE FROM qa WHERE qa_no = #{qaNo} and qa_doctor_no = #{doctorNo}")
	void deleteQa(@Param("qaNo") Integer qaNo, @Param("doctorNo") Integer doctorNo);


	/**
	 * 환자 사진 관련 정보 등록
	 * @param data
	 */
	@Insert("INSERT INTO member_img "
			+ "("
			+ "member_no"
			+ ", file_sn"
			+ ", delete_yn"
			+ ")"
			+ " VALUES "
			+ "("
			+ "#{memberNo}"
			+ ", #{fileSn}"
			+ ", 'N'"
			+ ")")
	void insertMemberImgInfo(MemberImgDto data);
	
	/**
	 * 환자 사진 리스트 가져오기
	 * @param memberNo
	 * @param fileType
	 * @return
	 */
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
	@Select("SELECT a.file_url, a.file_sn, a.file_name FROM upload_file a, member_img b WHERE a.file_sn = b.file_sn AND b.member_no = #{memberNo} AND a.file_type = #{fileType};")
	FileDto[] selectMemberImgInfo(@Param("memberNo") Integer memberNo, @Param("fileType") String fileType);
}
