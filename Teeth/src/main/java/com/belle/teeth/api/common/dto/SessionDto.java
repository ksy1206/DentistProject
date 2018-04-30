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

	// 치과 의사일경우
	private Dentist dentist = new Dentist();

}
