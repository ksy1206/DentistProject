package com.belle.teeth.api.common.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.belle.teeth.api.common.dto.Dentist;
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
	
	// 치과 정보 가져오기
	@Results({
		@Result(property = "dentistNo", column = "dentist_no")
		,@Result(property = "dentistName", column = "dentist_name")
	})
	@Select("SELECT * FROM dentist WHERE dentist_no = #{assignNo}")
	public Dentist dentistInfo(@Param("assignNo") Integer assignNo);
	
}
