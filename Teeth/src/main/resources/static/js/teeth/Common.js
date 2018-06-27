function Common() {
	
	var _this = this;
	
	// 파일 삭제
	_this.fileDelete = function(fileSn) {
		var check = confirm("정말 삭제하시겠습니까?");
		
		if(!check) {
			return false;
		}
		
		var params = {
			fileSn : fileSn
		}
		
		var url = '/ajax/common/fileDelete'
		$.ajax({
			url: url,
			type: 'POST',
			data: params,
			success: function(result) {
				alert("삭제가 완료 되었습니다.");
				location.reload();
			},
			error: function(request, status, error) {
				console.log(request);
			}
		});
	}

	// 자동 실행
	_this.init = function() {
		
	}();
};

var common = new Common();