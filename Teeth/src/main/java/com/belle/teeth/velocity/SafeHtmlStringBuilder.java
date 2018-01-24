package com.belle.teeth.velocity;

import lombok.Data;

@Data
public class SafeHtmlStringBuilder implements SafeHtml {

	StringBuilder html;

	@Override
	public String getSafeHtmlValue() {
		return html.toString();
	}

}