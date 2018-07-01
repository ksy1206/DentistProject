package com.belle.teeth.api.dentist.dto;

import java.text.SimpleDateFormat;
import java.util.Date;

import lombok.Data;

@Data
public class NoticeDto {

	private Integer noticeNo;
	private Integer dentistNo;
	private String title;
	private String content;
	private Date insertDate;
	private String writerId;
	
	public String getInsertDateToString() {
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
		return sdf.format(this.insertDate);
	}
}
