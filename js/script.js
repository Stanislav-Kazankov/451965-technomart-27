var cartAddBtnList = document.querySelectorAll(".cart-add-btn");
var cartButton =  document.querySelector(".cart-button");
var cartOkModal = document.querySelector(".cart-ok-modal");
var closeBtnList = document.querySelectorAll(".close-btn");

for (var i = 0; i < cartAddBtnList.length; i++) {
	cartAddBtnList[i].addEventListener("click", function(evt) {
		if (!cartButton.classList.contains("active")) {
			cartButton.classList.add("active");
		}
		if (!cartOkModal.classList.contains("show")) {
			cartOkModal.classList.add("show");
		}
		var placeOrderBtn = cartOkModal.querySelector(".place-order-btn");
		placeOrderBtn.focus();
	})
}

var bookmsAddBtnList = document.querySelectorAll(".bookmarks-add-btn");
var bookmarksBtn =  document.querySelector(".bookmarks-btn");

for (var i = 0; i < bookmsAddBtnList.length; i++) {
	bookmsAddBtnList[i].addEventListener("click", function(evt) {
		if (!bookmarksBtn.classList.contains("active")) {
			bookmarksBtn.classList.add("active");
		}
	})
}

var goOnShoppBtn = cartOkModal.querySelector(".go-on-shopp-btn");

goOnShoppBtn.addEventListener("click", function(evt) {
	if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains("show")) {
		this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.remove("show");
	}
})

var mapA = document.querySelector(".map-a");
var mapModal = document.querySelector(".map-modal");

if (mapA != null) {
	mapA.addEventListener("click", function(evt) {
		evt.preventDefault();
		mapModal.classList.add("show");
		var closeBtn = mapModal.querySelector(".close-btn");
		closeBtn.focus();
	})
}

var writeUsBtn = document.querySelector(".write-us-btn");
var writeUsModal = document.querySelector(".write-us-modal");

if (writeUsBtn != null) {
	writeUsBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (writeUsModal.classList.contains("close-animation")) {
			writeUsModal.classList.remove("close-animation");
		}
		writeUsModal.classList.add("show");		
		writeUsModal.classList.add("show-animation");
		var fullNameField = writeUsModal.querySelector(".full-name-field");
		fullNameField.focus();
	})
	var writeUsForm = writeUsModal.querySelector(".write-us-form");
	var fullNameField = writeUsModal.querySelector(".full-name-field");
	var eMailField = writeUsModal.querySelector(".e-mail-field");
	var sendButton = writeUsModal.querySelector(".send-button");
	writeUsForm.addEventListener("submit", function (evt) {		
		if (!fullNameField.value || !eMailField.value || fullNameField.value === "" || eMailField.value === "") {
			evt.preventDefault();
			writeUsModal.classList.remove("err-animation");
			writeUsModal.offsetWidth = writeUsModal.offsetWidth;
			writeUsModal.classList.add("err-animation");
		}
	})
	var closeBtn = writeUsModal.querySelector(".close-btn");
	closeBtn.addEventListener("click", function(evt) {
		evt.preventDefault();
		if (writeUsModal.classList.contains("show-animation")) {
			writeUsModal.classList.remove("show-animation");
		}
		writeUsModal.classList.add("close-animation");
		writeUsModal.classList.remove("show");	
	})
}

var modalList = document.querySelectorAll(".cart-ok-modal, .map-modal, .write-us-modal");

for (var i = 0; i < modalList.length; i++) {
	var closeBtn = modalList[i].querySelector(".close-btn");
	closeBtn.addEventListener("click", function(evt) {
		if (this.parentNode.parentNode.classList.contains("show")) {
			this.parentNode.parentNode.classList.remove("show");
		}
		if (this.parentNode.parentNode.parentNode.classList.contains("show")) {
			this.parentNode.parentNode.parentNode.classList.remove("show");
		}
		if (this.parentNode.parentNode.parentNode.parentNode.classList.contains("show-animation")) {
			this.parentNode.parentNode.parentNode.parentNode.classList.remove("show-animation");		
		}		
		if (this.parentNode.parentNode.parentNode.parentNode.classList.contains("err-animation")) {
			this.parentNode.parentNode.parentNode.parentNode.classList.remove("err-animation");
		}
	})
}

window.addEventListener("keydown", function(evt) {
	if (evt.keyCode === 27) {
		for (var i = 0; i < modalList.length; i++) {
			if (modalList[i].classList.contains("show")) {
				evt.preventDefault();
				modalList[i].classList.remove("show");
			}
			if (modalList[i].classList.contains("show-animation")) {
				modalList[i].classList.remove("show-animation");
			}			
			if (modalList[i].classList.contains("err-animation")) {
				modalList[i].classList.remove("err-animation");
			}	
		}
	}
})