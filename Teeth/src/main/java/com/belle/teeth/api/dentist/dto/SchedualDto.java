package com.belle.teeth.api.dentist.dto;

import lombok.Data;

@Data
public class SchedualDto {

	private Integer scNo;
	private Integer memberNo;
	private String info;
	private String datetime;
	private String status;

}
