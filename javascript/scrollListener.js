let myButton = document.getElementById("button-top-of-page");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 20) {
        myButton.style.display = "block";
    } else {
            myButton.style.display = "none";
        }
    }


function goTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}