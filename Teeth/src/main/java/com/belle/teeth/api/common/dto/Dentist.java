package com.belle.teeth.api.common.dto;

import lombok.Data;

@Data
public class Dentist {
	private Integer	dentistNo = 0; //치과 번호
	private String	dentistName = ""; // 치과 이름
	private String	dentistFileKey = ""; // 치과 이미지
	
	//의사 이름
	private String memberName;
	private Integer memberNo;
}
