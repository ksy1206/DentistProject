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
		var url = '/ajax/common/fileUpload';
		// 이미지 타입
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

				var acceptFileTypes = 'jpg, jpeg';
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
					var eleItem;
					$.each(data.files, function (index, file) {

					var item = _this.preViewImg(URL.createObjectURL(data.files[0]), file.name);
					eleItem = $(item);
					// <div id="img_prev_div"></div> 미리보기가 표시될 곳에 미리 선언한다.
					$('#img_prev_div').append(eleItem);

					});

					// done, progressAll 이벤트시 처리하기 위해 itemNode에 dom을 캐싱함
					this.itemNode = eleItem;

					// 파일 전송
					data.submit();
				}
			},
			done: function (e, data) {
				// 업로드 완료 후
				console.log(data);
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
		html += '<ul data-role="fileupload-image-preview">';
		html += '	<li><span><img src="' + url + '" /></span></li>';
		html += '	<li>' + fileName;
		html += '		<button type="button" data-role="fileupload-remove-btn"></button>';
		html += '	</li>';
		html += '</ul>';
		return html;
	};

};

var fileUpload = new FileUpload();