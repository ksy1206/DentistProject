package com.belle.teeth.api.factory.zxing;

import java.awt.image.BufferedImage;
import java.io.File;

import javax.imageio.ImageIO;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Component;

import com.belle.teeth.api.common.dto.FileDto;
import com.google.zxing.BarcodeFormat;
import com.google.zxing.common.BitMatrix;
import com.google.zxing.qrcode.QRCodeWriter;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@Component
public class MakeQrCode {

	public static FileDto MakeQrCodeFunction(HttpServletRequest request, Integer memberNo, String userId, String qrName, Integer step) throws Exception {
		// 코드인식시 링크걸 URL주소
		String url = "http://localhost:8000/user/check?memberId="+userId+"&step="+step;
		String codeurl = new String(url.getBytes("UTF-8"), "ISO-8859-1");
		// 큐알코드 바코드 생상값
		int qrcodeColor = 0xFF2e4e96;
		// 큐알코드 배경색상값
		int backgroundColor = 0xFFFFFFFF;

		QRCodeWriter qrCodeWriter = new QRCodeWriter();
		// 3,4번째 parameter값 : width/height값 지정
		BitMatrix bitMatrix = qrCodeWriter.encode(codeurl, BarcodeFormat.QR_CODE, 200, 200);
		//
		MatrixToImageConfig matrixToImageConfig = new MatrixToImageConfig(qrcodeColor, backgroundColor);
		BufferedImage bufferedImage = MatrixToImageWriter.toBufferedImage(bitMatrix, matrixToImageConfig);

		// 파일 경로 생성
		String doc_root = "";
		String QrMakeFilePath = "/upload/qrcode" + File.separator  + memberNo;

		HttpSession session = request.getSession();
		doc_root = session.getServletContext().getRealPath(QrMakeFilePath);

		File file = new File(doc_root);

		if(!file.exists()) {
			file.mkdirs();
		}
		Long fileKey = System.currentTimeMillis();
		// ImageIO를 사용한 바코드 파일쓰기
		ImageIO.write(bufferedImage, "png", new File(doc_root + File.separator + qrName));

		FileDto result = new FileDto();
		result.setFileType("F99");
		result.setFileKey(fileKey.toString());
		result.setFilePath(doc_root);
		result.setFileUrl(QrMakeFilePath);
		result.setFileName(qrName);
		result.setFileExt("png");
		
		return result;
	}

}
