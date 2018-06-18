package com.belle.teeth.api.common.dto;
import lombok.Data;

@Data
public class PagingDto {
	private Integer totalCount; // 리스트 총 갯수
	private Integer po; // 페이지 번호
	private Integer ps; // 1페이지에 표시되는 리스트 갯수
	private Integer pageSet = 5; // 페이지할때 최대 보여주는 페이지 갯수
	
	private String sKey;
	private String sValue;
}
