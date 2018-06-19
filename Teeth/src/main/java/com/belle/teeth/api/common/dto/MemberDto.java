package com.belle.teeth.api.common.dto;

import java.util.Date;

import lombok.Data;

@Data
public class MemberDto {
	
	private Integer	memberNo;
	private String	memberType;
	private String	memberName;
	private String	memberGender;
	private Integer	memberAge;
	private String	memberEmail;
	private String	memberId;
	private String	memberPwd;
	private Integer assignNo; // 치과 번호
	private Integer doctorMemberNo; // 회원일 경우, 치과 의사 번호
	private Date	joinDateTime;
	
	// 치과 정보
	private String dentistName;
	private String doctorName;
}
