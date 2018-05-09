package com.belle.teeth.api.common.dto;

import java.util.Date;

import lombok.Data;

@Data
public class FileDto {
	private Long	fileSn;
	private String	fileKey;
	private String	fileType;
	private String	filePath;
	private String	fileExt;
	private String	fileName;
	private Date	insertDate;
	private Boolean	deleteYn;
	
}
