package com.belle.teeth.util;

import java.text.SimpleDateFormat;
import java.util.Date;

public class DateUtil {

	/**
	 * 날짜 데이트 포멧 변환
	 * 
	 * @param dbDate
	 * @return
	 */
	public static String dateFormattedChange(Date dbDate) {
		String changeFormatDate = null;
		if (dbDate != null) {
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss");
			changeFormatDate = sdf.format(dbDate);
		}
		return changeFormatDate;
	}
}
