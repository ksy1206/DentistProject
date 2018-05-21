package com.belle.teeth.api.dentist.dto;

import java.util.Date;

import com.belle.teeth.util.DateUtil;

import lombok.Data;

@Data
public class QaDto {

	private Integer qaNo;
	private String type;
	private Integer qaDoctorNo;
	private Integer qaMemberNo;
	private String message;
	private Date insertDate;
	
	public String getInsertDate() {
		return DateUtil.dateFormattedChange(this.insertDate);
	}
}
