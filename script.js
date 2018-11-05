var currentDate = new Date();
var inputDate = new Date(2017, 7, 4);
var years = currentDate.getFullYear() - inputDate.getFullYear();
var months = currentDate.getMonth() - inputDate.getMonth();
var date = 'Всего: ';
switch (years) {
	case 1:
		date += years + ' год и ';
		break;
	case 2:
	case 3:
	case 4:
		date += years + ' года и ';
		break;
	default:
		date += years + ' лет и ';
		break;
}
switch(months) {
	case 1:
		date += months + ' месяц';
		break;
	case 2:
	case 3:
	case 4:
		date += months + ' месяца';
		break;
	default:
		date += months + ' месяцев';
		break;
	
}
document.getElementById('date').innerHTML = date;

var activateContent = function (contents, activeElement) {
	for (var i = 0; i < contents.length; i++) {
		var currentElement = document.querySelector('.' + contents[i] + '-container');
		if (contents[i] == activeElement) {
			currentElement.style.opacity = 1;
			currentElement.style.visibility = 'visible';
			document.querySelector('.content-container').style.height = currentElement.offsetHeight + 'px';
		} else {
			currentElement.style.opacity = 0;
			currentElement.style.visibility = 'hidden';
		}
	}
};
var contents = ['main', 'exp', 'about', 'contacts'];
var currentElement = window.location.href.split('#')[1];
if (currentElement != null) {
	document.querySelector('.a-current').classList.remove('a-current');
	document.querySelector('a[href="#' + currentElement + '"]').classList.add('a-current');
	activateContent(contents, currentElement);
} else {
	activateContent(contents, contents[0]);
}

var setVisibility = function(elementName, isVisible) {
	var currentElement = document.querySelector('.' + elementName + '-container');
	if (isVisible) {
		currentElement.style.opacity = 1;
		currentElement.style.visibility = 'visible';
		document.querySelector('.content-container').style.height = currentElement.offsetHeight + 'px';
	} else {
		currentElement.style.opacity = 0;
		currentElement.style.visibility = 'hidden';
	}
}
var headRightPath = '.head-container .head-right ';
var inputs = document.querySelectorAll(headRightPath + 'a');
for (i = 0; i < inputs.length; i++) {
	inputs[i].addEventListener('click', function() {
		var aCurrentLast = document.querySelector(headRightPath + '.a-current');
		aCurrentLast.classList.remove('a-current');
		this.classList.add('a-current');
		setVisibility(aCurrentLast.href.split('#')[1], false);
		setVisibility(this.href.split('#')[1], true);
	});
}