//var currentDate = new Date();
//var inputDate = new Date(2017, 7, 4);
//var dateDif = new Date(currentDate - inputDate);
//years = dateDif.getFullYear() - 1970;
//months = dateDif.getMonth();
//var date = "Всего: ";
//switch (years) {
//    case 1:
//        date += years + " год и ";
//        break;
//    case 2:
//    case 3:
//    case 4:
//        date += years + " года и ";
//        break;
//    default:
//        date += years + " лет и ";
//        break;
//}
//switch (months) {
//    case 1:
//        date += months + " месяц";
//        break;
//    case 2:
//    case 3:
//    case 4:
//        date += months + " месяца";
//        break;
//    default:
//        date += months + " месяцев";
//        break;
//}
//document.getElementById("date").innerHTML = date;

document.querySelector(".content-container").style.height = document.querySelector(".main-container").offsetHeight + "px";

var setVisibility = function (elementName, isVisible) {
    var currentElement = document.querySelector("." + elementName + "-container");
    if (isVisible) {
        currentElement.style.display = "inline";
        setTimeout(function () {
            currentElement.style.opacity = 1;
            currentElement.style.visibility = "visible";
        }, 20);
        document.querySelector(".content-container").style.height = currentElement.offsetHeight + "px";
    } else {
        currentElement.style.display = "none";
        setTimeout(function () {
            currentElement.style.opacity = 0;
            currentElement.style.visibility = "hidden";
        }, 20);
    }
};
var inputs = document.querySelectorAll(".head-right a");
for (i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("click", function () {
        var aCurrentLast = document.querySelector(".a-current");
        aCurrentLast.classList.remove("a-current");
        setVisibility(aCurrentLast.id, false);
        this.classList.add("a-current");
        setVisibility(this.id, true);
        document.body.scrollTop = document.documentElement.scrollTop = 0;
    }, false);
}
var footerCopyright = document.querySelector(".footer-copyright");
footerCopyright.addEventListener("click", function (evt) {
    evt.preventDefault();
    var assessment = parseInt(prompt("Как вам сайт по шкале от 0 до 10?", ""));
    if (assessment >= 0 && assessment <= 10) {
        alert("Благодарю за вашу субъективную оценку: " + assessment + "!");
    }
});

//var xDown, yDown;
//function handleTouchStart(evt) {
//    xDown = evt.touches[0].clientX;
//    yDown = evt.touches[0].clientY;
//}
//;
//function handleTouchMove(evt) {
//    if (!xDown || !yDown) {
//        return;
//    }
//    var xUp = evt.touches[0].clientX;
//    var yUp = evt.touches[0].clientY;
//    var xDiff = xDown - xUp;
//    var yDiff = yDown - yUp;
//    if (Math.abs(xDiff) > Math.abs(yDiff)) {
//        var aCurrentLast = document.querySelector(".a-current");
//        if (xDiff > 0 && aCurrentLast.id !== "contacts") {
//            aCurrentLast.classList.remove("a-current");
//            setVisibility(aCurrentLast.id, false);
//            var newElement;
//            switch (aCurrentLast.id) {
//                case "main":
//                    newElement = document.getElementById("exp");
//                    break;
//                case "exp":
//                    newElement = document.getElementById("about");
//                    break;
//                case "about":
//                    newElement = document.getElementById("contacts");
//                    break;
//            }
//            newElement.classList.add("a-current");
//            setVisibility(newElement.id, true);
//        } else if (xDiff < 0 && aCurrentLast.id !== "main") {
//            setVisibility(aCurrentLast.id, false);
//            aCurrentLast.classList.remove("a-current");
//            var newElement;
//            switch (aCurrentLast.id) {
//                case "contacts":
//                    newElement = document.getElementById("about");
//                    break;
//                case "about":
//                    newElement = document.getElementById("exp");
//                    break;
//                case "exp":
//                    newElement = document.getElementById("main");
//                    break;
//            }
//            newElement.classList.add("a-current");
//            setVisibility(newElement.id, true);
//        }
//    }
//    xDown = null;
//    yDown = null;
//}
//;
//document.addEventListener("touchstart", handleTouchStart, false);
//document.addEventListener("touchmove", handleTouchMove, false);
