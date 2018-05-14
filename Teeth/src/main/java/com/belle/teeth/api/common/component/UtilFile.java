package com.belle.teeth.api.common.component;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;

import com.belle.teeth.api.common.dto.FileDto;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class UtilFile {

	// 프로젝트 내 지정된 경로에 파일을 저장하는 메소드
	// DB에는 업로드된 전체 경로명으로만 지정되기 때문에(업로드한 파일 자체는 경로에 저장됨)
	// fileUpload() 메소드에서 전체 경로를 리턴받아 DB에 경로 그대로 저장
	public static FileDto fileUpload(MultipartHttpServletRequest request, MultipartFile uploadFile) {
		String doc_root = "";
		String fileName = "";
		String realPath = "/upload";

		OutputStream out = null;
		PrintWriter printWriter = null;

		Long fileKey = System.currentTimeMillis();
		
		try {
			fileName = uploadFile.getOriginalFilename();
			byte[] bytes = uploadFile.getBytes();

			HttpSession session = request.getSession();
			doc_root = session.getServletContext().getRealPath(realPath);
			
			File file = new File(doc_root);
			
			if(!file.exists()) {
				file.mkdirs();
			}

			
			// 파일명이 중복으로 존재할 경우
			if (fileName != null && !fileName.equals("")) {
				if (file.exists()) {
					// 파일명 앞에 업로드 시간 초단위로 붙여 파일명 중복을 방지
					fileName = fileKey.toString() + "_" + fileName;
					file = new File(doc_root + File.separator + fileName);
				}
			}

			out = new FileOutputStream(file);
			out.write(bytes);
		} catch (Exception e) {
			e.printStackTrace();
		} finally {
			try {
				if (out != null) {
					out.close();
				}
				if (printWriter != null) {
					printWriter.close();
				}
			} catch (IOException e) {
				e.printStackTrace();
			}
		}
		
		FileDto result = new FileDto();
		
		result.setFileKey(fileKey.toString());
		result.setFilePath(doc_root);
		result.setFileUrl(realPath);
		result.setFileName(fileName);
		result.setFileExt(fileName.substring(fileName.lastIndexOf(".")+1, fileName.length()));

		return result;
	}
}