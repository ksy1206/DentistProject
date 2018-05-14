package com.belle.teeth.api.dentist.mapper;

import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.belle.teeth.api.common.dto.MemberDto;
import com.belle.teeth.api.dentist.dto.NoticeDto;

@Mapper
public interface MemberMapper {

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
}
