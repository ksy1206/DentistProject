package com.belle.teeth.api.dentist.dto;


import lombok.Data;

@Data
public class QaListDto {

	private Integer	memberNo;
	private String	memberName;
	private Integer doctorMemberNo; // 회원일 경우, 치과 의사 번호
	private String doctorName;
}
