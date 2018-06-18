function Storage() {
	
	var _this = this;
	
	// 아이디 저장 여부 확인
	_this.checkLocalId = function() {
		var localSaveID = localStorage.getItem("SaveID");
		if(localSaveID != null || localSavdID != "") {
			$('#userId').val(localSaveID);
			$('#password').focus();
		}
	};
	
	// 로컬스토리지 아이디 저장
	_this.saveLocalId = function(userId) {
		localStorage.setItem("SaveID", userId);
	}

	// 자동 실행
	_this.init = function() {
		_this.checkLocalId();
	}();
};

var storage = new Storage();