package com.belle.teeth.api.dentist.mapper;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.belle.teeth.api.common.dto.Dentist;
import com.belle.teeth.api.common.dto.FileDto;
import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.common.dto.MemberImgDto;
import com.belle.teeth.api.dentist.dto.QaDto;
import com.belle.teeth.api.dentist.dto.QaListDto;
import com.belle.teeth.api.dentist.dto.SchedualDto;

@Mapper
public interface MemberMapper {

	// Email 중복 체크
	@Select("SELECT COUNT(*) FROM member WHERE member_email = #{email}")
	public Integer checkEmail(@Param("email") String email);

	// UserId 중복 체크
	@Select("SELECT COUNT(*) FROM member WHERE member_id = #{userId}")
	public Integer checkUserId(@Param("userId") String userId);

	// 회원 비밀번호 찾기 유효성 검사
	@Select("SELECT COUNT(*) FROM member WHERE member_id = #{userId} AND member_age=#{phone} AND member_email=#{email} AND member_type = #{type}")
	public Integer checkFindPwd(@Param("userId") String userId, @Param("phone") String phone, @Param("email") String email, @Param("type") String type);

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
		,@Result(property = "doctorMemberNo", column = "doctor_member_no")
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
		,@Result(property = "memberLevel", column = "member_level")
		,@Result(property = "assignNo", column = "assign_no")
		,@Result(property = "doctorMemberNo", column = "doctor_member_no")
		,@Result(property = "joinDateTime", column = "join_date_time")
		,@Result(property = "stlFileSn", column = "stl_file_sn")
	})
	@Select("SELECT * FROM member WHERE member_no = #{memberNo}")
	public MemberDto memberInfo2(@Param("memberNo") Integer memberNo);
	
	// 회원정보 회원 아이디로
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberType", column = "member_type")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "memberEmail", column = "member_email")
		,@Result(property = "memberId", column = "member_id")
		,@Result(property = "memberPwd", column = "member_pwd")
		,@Result(property = "memberLevel", column = "member_level")
		,@Result(property = "assignNo", column = "assign_no")
		,@Result(property = "doctorMemberNo", column = "doctor_member_no")
		,@Result(property = "joinDateTime", column = "join_date_time")
	})
	@Select("SELECT * FROM member WHERE member_id = #{memberId}")
	public MemberDto memberInfo3(@Param("memberId") String memberId);
	
	// 환자회원 이름만으로 검색해서 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "doctorName", column = "doctor_name")
	})
	@Select("SELECT a.member_no"
			+ ", a.member_name"
			+ ", a.member_age"
			+ ", b.dentist_name"
			+ ", c.member_name as doctor_name "
			+ "FROM member a, dentist b, member c "
			+ "WHERE a.doctor_member_no = c.member_no "
			+ "AND a.assign_no = b.dentist_no "
			+ "AND a.member_name LIKE CONCAT ('%', #{memberName}, '%') "
			+ "AND a.member_type = 'A'")
	public MemberDto[] getMemberOnlyNameList(@Param("memberName") String memberName);
	
	// 의사 번호로 검색해서 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "doctorName", column = "doctor_name")
	})
	@Select("SELECT a.member_no"
			+ ", a.member_name"
			+ ", a.member_age"
			+ ", b.dentist_name"
			+ ", c.member_name as doctor_name "
			+ "FROM member a, dentist b, member c "
			+ "WHERE a.doctor_member_no = c.member_no "
			+ "AND a.assign_no = b.dentist_no "
			+ "AND a.doctor_member_no = #{doctorNo} "
			+ "AND a.member_type = 'A'")
	public MemberDto[] getMemberByDoctorList(@Param("doctorNo") Integer doctorNo);
	
	// 환자회원 이름 & 의사 번호로 검색해서 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "doctorName", column = "doctor_name")
	})
	@Select("SELECT a.member_no"
			+ ", a.member_name"
			+ ", a.member_age"
			+ ", b.dentist_name"
			+ ", c.member_name as doctor_name "
			+ "FROM member a, dentist b, member c "
			+ "WHERE a.doctor_member_no = c.member_no "
			+ "AND a.assign_no = b.dentist_no "
			+ "AND a.member_name LIKE CONCAT ('%', #{memberName}, '%') "
			+ "AND a.doctor_member_no = #{doctorNo} "
			+ "AND a.member_type = 'A'")
	public MemberDto[] getMemberByDoctorByNameList(@Param("memberName") String memberName, @Param("doctorNo") Integer doctorNo);

	// 회원 목록 가져오기
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A'"
			+ "ORDER BY join_date_time DESC LIMIT #{po}, #{ps}")
	public MemberDto[] getMemberList(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("po") Integer po, @Param("ps") Integer ps);
	// 회원 목록 토탈 카운트
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A'")
	public Integer getMemberTotalListCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo);
	
	// 회원 목록 검색 by MemberName
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A' AND member_name LIKE CONCAT ('%', #{sValue}, '%')" 
			+ "ORDER BY join_date_time DESC LIMIT #{po}, #{ps}")
	public MemberDto[] getMemberListByName(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue, @Param("po") Integer po, @Param("ps") Integer ps);
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A' AND member_name LIKE CONCAT ('%', #{sValue}, '%')")
	public Integer getMemberListByNameCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	
	// 회원 목록 검색 by MemberId
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A' AND member_id LIKE CONCAT ('%', #{sValue}, '%')"
			+ " ORDER BY join_date_time DESC LIMIT #{po}, #{ps}")
	public MemberDto[] getMemberListById(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue, @Param("po") Integer po, @Param("ps") Integer ps);
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A' AND member_id LIKE CONCAT ('%', #{sValue}, '%')")
	public Integer getMemberListByIdCount(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue);
	
	// 회원 목록 검색 by MemberEmail
	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberGender", column = "member_gender")
		,@Result(property = "memberEmail", column = "member_email")
	})
	@Select("SELECT * FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A' AND member_email LIKE CONCAT ('%', #{sValue}, '%') "
			+ "ORDER BY join_date_time DESC LIMIT #{po}, #{ps}")
	public MemberDto[] getMemberListByEmail(@Param("assignNo") Integer assignNo, @Param("doctorNo") Integer doctorNo, @Param("sValue") String sValue, @Param("po") Integer po, @Param("ps") Integer ps);
	@Select("SELECT COUNT(*) FROM member WHERE assign_no = #{assignNo} AND doctor_member_no = #{doctorNo} AND member_type = 'A' AND member_email LIKE CONCAT ('%', #{sValue}, '%')")
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
	
	// 회원 Stl 정보 업데이트
	@Update("UPDATE member "
			+ "SET stl_file_sn = #{fileSn} "
			+ "WHERE member_no = #{memberNo}")
	void memberUpdateStlInfo(@Param("fileSn") Long fileSn, @Param("memberNo") Integer memberNo);

	// 회원정보 업데이트 : 교정 단계 업데이트
	@Update("UPDATE member "
			+ "SET member_level = #{step} "
			+ "WHERE member_no = #{memberNo}")
	void updateMemberLevel(@Param("step") Integer step, @Param("memberNo") Integer memberNo);
	
	// 치과 의사 목록
	@Results({
		@Result(property = "dentistNo", column = "assign_no")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberNo", column = "member_no")
	})
	@Select("SELECT a.assign_no"
			+ ", b.dentist_name"
			+ ", a.member_name "
			+ ", a.member_no "
			+ "FROM member a, dentist b "
			+ "WHERE a.assign_no = b.dentist_no "
			+ "AND a.member_type = 'B' "
			+ "ORDER BY a.join_date_time DESC LIMIT #{po}, #{ps}")
	public Dentist[] getDentistList(@Param("po") Integer po, @Param("ps") Integer ps);
	@Select("SELECT COUNT(*) FROM member WHERE member_type = 'B'")
	public Integer getDentistListCount();
	
	// 치과 의사목록 치과로 검색
	@Results({
		@Result(property = "dentistNo", column = "assign_no")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberNo", column = "member_no")
	})
	@Select("SELECT a.assign_no"
			+ ", b.dentist_name"
			+ ", a.member_name "
			+ ", a.member_no "
			+ "FROM member a, dentist b "
			+ "WHERE a.assign_no = b.dentist_no "
			+ "AND a.member_type = 'B' "
			+ "AND b.dentist_name LIKE CONCAT ('%', #{dentistName}, '%')"
			+ "ORDER BY a.join_date_time DESC LIMIT #{po}, #{ps}")
	public Dentist[] getDentistListByDentist(@Param("dentistName") String dentistName, @Param("po") Integer po, @Param("ps") Integer ps);
	@Select("SELECT COUNT(a.member_name) FROM member a, dentist b WHERE a.member_type = 'B' AND b.dentist_name LIKE CONCAT ('%', #{dentistName}, '%')")
	public Integer getDentistListByDentistCount(@Param("dentistName") String dentistName);
	
	// 치과 의사목록 원장으로 검색
	@Results({
		@Result(property = "dentistNo", column = "assign_no")
		,@Result(property = "dentistName", column = "dentist_name")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberNo", column = "member_no")
	})
	@Select("SELECT a.assign_no"
			+ ", b.dentist_name"
			+ ", a.member_name "
			+ ", a.member_no "
			+ "FROM member a, dentist b "
			+ "WHERE a.assign_no = b.dentist_no "
			+ "AND a.member_type = 'B' "
			+ "AND a.member_name LIKE CONCAT ('%', #{doctroName}, '%')"
			+ "ORDER BY a.join_date_time DESC LIMIT #{po}, #{ps}")
	public Dentist[] getDentistListByDoctor(@Param("doctroName") String doctroName, @Param("po") Integer po, @Param("ps") Integer ps);
	@Select("SELECT COUNT(*) FROM member WHERE member_type = 'B' AND member_name LIKE CONCAT ('%', #{doctroName}, '%')")
	public Integer getDentistListByDoctorCount(@Param("doctroName") String doctroName);
	

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
	
	@Update("UPDATE member_img "
			+ "SET delete_yn = 'Y' "
			+ "WHERE member_no = #{memberNo}")
	void deleteMemberImgInfo(MemberImgDto memberInfo);
	
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
	@Select("SELECT a.file_url, a.file_sn, a.file_name FROM upload_file a, member_img b WHERE a.file_sn = b.file_sn AND b.member_no = #{memberNo} AND a.file_type = #{fileType} AND a.delete_yn = 'N'")
	FileDto[] selectMemberImgInfo(@Param("memberNo") Integer memberNo, @Param("fileType") String fileType);

	// 환자 사진정보 fileSn으로 가져오기
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
	@Select("SELECT * FROM upload_file WHERE file_sn=#{fileSn} AND delete_yn = 'N'")
	FileDto getImgInfoByFileSn(@Param("fileSn") Long fileSn);

	/**
	 * 회원 스케쥴 정보 가져오기
	 * @param memberNo
	 * @return
	 */
	@Results({
		@Result(property = "scNo", column = "sc_no")
		,@Result(property = "memberNo", column = "member_no")
		,@Result(property = "info", column = "info")
		,@Result(property = "datetime", column = "datetime")
		,@Result(property = "status", column = "status")
	})
	@Select("SELECT * FROM member_schedual WHERE member_no = #{memberNo}")
	SchedualDto[] selectSchedual(@Param("memberNo") Integer memberNo);

	/**
	 * 회원 스케쥴 추가
	 * @param data
	 */
	@Insert("INSERT INTO member_schedual "
			+ "("
			+ "member_no"
			+ ", info"
			+ ", datetime"
			+ ", status"
			+ ")"
			+ " VALUES "
			+ "("
			+ "#{memberNo}"
			+ ", #{info}"
			+ ", #{datetime}"
			+ ", 'new'"
			+ ")")
	void insertSchedual(SchedualDto data);

	// 스케쥴 수정
	@Update("UPDATE member_schedual "
			+ "SET status = #{status} "
			+ "WHERE sc_no = #{scNo}")
	void updateSchedual(SchedualDto data);
	
	// 스케쥴 삭제
	@Delete("DELETE FROM member_schedual WHERE sc_no = #{scNo}")
	void deleteSchedual(SchedualDto data);

	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "doctorMemberNo", column = "doctor_member_no")
		,@Result(property = "doctorName", column = "doctor_member_name")
	})
	@Select("select a.member_no, a.member_name, a.doctor_member_no, b.member_name as doctor_member_name from member a left join member b on a.doctor_member_no = b.member_no where a.member_no in (select distinct(qa_member_no) from qa) and a.member_type = 'A'")
	QaListDto[] getQaAllList();
}
