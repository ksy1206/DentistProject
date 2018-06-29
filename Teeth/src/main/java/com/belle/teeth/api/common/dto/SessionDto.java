package com.belle.teeth.api.common.dto;

import lombok.Data;

@Data
public class SessionDto {
	
	private Integer	memberNo;
	private String	memberType;
	private String	memberName;
	private Integer	memberAge;
	private String	memberId;
	private Integer assignNo;

	// 환자일 경우 사용
	private Integer doctorNo;
	// 치과 의사일경우 && 환자일 경우
	private Dentist dentist = new Dentist();

}
