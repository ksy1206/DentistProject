package com.belle.teeth.api.common.dto;

import lombok.Data;

@Data
public class QRCodeDto {
	private Long	qrNo;
	private Integer step;
	private Long	memberNo;
	private Long	fileSn;
	private Boolean	deleteYn;
	
	// 이미지 정보
	private String fileUrl;
	private String fileName;
	
}
