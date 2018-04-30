package com.belle.teeth.api.common.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.belle.teeth.api.common.dto.MemberDto;

@Mapper
public interface CommonMapper {

	@Results({
		@Result(property = "memberNo", column = "member_no")
		,@Result(property = "memberType", column = "member_type")
		,@Result(property = "memberName", column = "member_name")
		,@Result(property = "memberAge", column = "member_age")
		,@Result(property = "memberId", column = "member_id")
		,@Result(property = "memberPwd", column = "member_pwd")
	})
	@Select("SELECT * FROM member where member_id = #{userId} and member_pwd = #{password}")
	public MemberDto memberInfo(@Param("userId") String userId, @Param("password") String password);
}
