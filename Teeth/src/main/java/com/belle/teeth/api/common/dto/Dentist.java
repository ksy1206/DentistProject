package com.belle.teeth.api.common.dto;

import lombok.Data;

@Data
public class Dentist {
	private Integer	dentistNo = 0;
	private String	dentistName = "";
	private String	dentistFileKey = "";
	
	//의사 이름
	private String memberName;
	private Integer memberNo;
}
