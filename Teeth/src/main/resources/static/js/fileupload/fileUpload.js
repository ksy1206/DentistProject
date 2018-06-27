function FileUpload() {
	
	var _this = this;

	// 파일 업로드 Form
	//<form action="" method="post" enctype="multipart/form-data">
	//<input data-role="fileupload" data-idx="img" type="file" name="files" style="position:absolute; left:-9999px; top:-9999px; visibility:hidden;">
	//</form>
	
	_this.fileUploadButton = function(type) {
		$input = $('*[data-role=fileupload]').filter('*[data-idx=img]');
		_this.initFileUpload($input, type);
	}

	// 파일업로드 초기화
	_this.initFileUpload = function($input, type) {

		if(type == undefined || type == '' || type == null) {
			alert("파일 업로드 중 에러가 발생하였습니다. 관리자에게 문의 하세요.");
			return false;
		}
		
		// type 종류 -> F01:장치 사용법 이미지
		var url = '/ajax/common/fileUpload?fileType='+type;

		// 타입별 추가 파라미터
		if(type == 'F02' || type == 'F03' || type == 'Video') {
			url += "&patientNo="+app.env.memberNo;
		}
		
		var imageUploadOptions = {
			url: url,
			dataType: 'json',
			autoUpload: false,
			disableImageResize: /Android(?!.*Chrome)|Opera/.test(window.navigator.userAgent),
			previewMaxWidth: 100,
			previewMaxHeight: 100,
			previewCrop: true,
			error: function(e, data){
				alert("이미지 업로드에 실패 하였습니다.");
			},
			add: function(e, data) {

				var acceptFileTypes = 'JPG,JPEG,PNG';
					if(type == 'Video') {
						acceptFileTypes = 'MP4';
					}
					acceptFileTypes = acceptFileTypes.split(',');
				var ext = data.originalFiles[0].name.replace( /%/,"%25").substr(data.originalFiles[0].name.replace( /%/,"%25").lastIndexOf(".")+1).toUpperCase();
				var matchCnt = 0;
				var isValidSize = data.originalFiles[0]['size'] <= 1024 * 1000 * 10;
				var isValidType = true;

				$.each(acceptFileTypes, function(i, v) {
					if (v.toUpperCase() == ext) {
						matchCnt ++;
					}
				});

				isValidType = (matchCnt > 0) ? true : false;
				// 타입 체크
				if (!isValidType) {
					$.each(data.files, function (index, file) {
						alert("업로드 가능 확장자를 확인해 주세요.\n"+file.name+"은(는) 업로드 할 수 없습니다.");
					});
					// 프리뷰 이미지 리사이즈
					$(window).trigger('resize');
					$input.closest('form').remove();
					return false;
				}

				// 용량 체크
				if (!isValidSize) {
					$.each(data.files, function (index, file) {
						alert("파일 용량이 초과 되었습니다.\n"+file.name+"은(는) 업로드 할 수 없습니다.");
					});

					// 프리뷰 이미지 리사이즈
					$(window).trigger('resize');
					$input.closest('form').remove();
					return false;
				}

				// 유효성 통과 후 이미지 노출
				if (isValidType && isValidSize) {
					
					// 미리보기는 F01 타입만
					if(type == 'F01' || type == 'F04') {
						var eleItem;
						$.each(data.files, function (index, file) {
							var item = _this.preViewImg(URL.createObjectURL(data.files[0]), file.name);
							eleItem = $(item);
							// <div id="img_prev_div"></div> 미리보기가 표시될 곳에 미리 선언한다.
							$('#img_prev_div').html(eleItem);
						});
					}

					// done, progressAll 이벤트시 처리하기 위해 itemNode에 dom을 캐싱함
					this.itemNode = eleItem;

					// 파일 전송
					data.submit();
				}
			},
			done: function (e, data) {
				// 업로드 완료 후
				if(type == 'Video') {
					alert("영상 업로드 완료");
				} else {
					alert("이미지 업로드 완료");
				}

				if(type == 'F02' || type == 'F03' || type == 'Video') {
					location.reload();
				}
			}
		};

		$input
			.fileupload(imageUploadOptions)
			.prop('disabled', !$.support.fileInput)
			.parent().addClass($.support.fileInput ? undefined : 'disabled');

		$input.trigger('click');
	};
	
	// 이미지 미리보기 HTML
	_this.preViewImg = function(url, fileName) {
		var html = '';
		html += '<div data-role="fileupload-image-preview">';
		html += '	<span><img src="' + url + '" /></span>';
		html += '	<li>' + fileName;
		html += '		<button type="button" data-role="fileupload-remove-btn"><i class="fa fa-trash-o" aria-hidden="true"></i></button>';
		html += '	</li>';
		html += '</div>';
		return html;
	};

};

var fileUpload = new FileUpload();