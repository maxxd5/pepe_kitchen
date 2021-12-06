let navButton = document.querySelector('.navIcon');
let dropDownMenu = document.querySelector('.navTitle');
let dropDownMenuIcon = document.querySelector('.navIcon');
let menu = document.querySelectorAll('.hub li');
navButton.addEventListener('click', function () {
	dropDownMenu.classList.toggle('active');
	dropDownMenuIcon.classList.toggle('active');
	menu.forEach(function (el) {
		if (!el.classList.contains('noActive'))
			el.classList.toggle('active');
	})
})
var myModal = new bootstrap.Modal(document.getElementById('exampleModal'));
let bootButton = document.querySelectorAll('.boot');
bootButton.forEach(function(el){
	el.addEventListener('click', function(){
		myModal.show();
	})
})
//let all = document.querySelectorAll('.all');
//all.forEach(function(el){
//	el.addEventListener('click', function(){
//		if (dropDownMenu.classList.contains('active'))
//			dropDownMenu.classList.remove('active');
//	})
//})
