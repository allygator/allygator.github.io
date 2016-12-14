// document.cookie = "nightmode=false expires=Thu, 18 Dec 2013 12:00:00 UTC";
// console.log(document.cookie);

$(document).ready(function ( ) {
	if(getCookie("nightmode")=="true") {
        nightModeF();
    }
});

function setCookie(cname,cvalue,exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires;
};

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};

$('#checkbox').on("click", function(evt) {
    nightModeF();
    nightModeCookieToggle();
    evt.stopImmediatePropagation();
});

function nightModeF() {
    $("nav").toggleClass("day night");
    $("#resume").toggleClass("day night");
    $("#projects").toggleClass("day night");
    $("#about").toggleClass("day night");
    $("#footer").toggleClass("day night");
};

function nightModeCookieToggle() {
    if(getCookie("nightmode")=="false") {
        setCookie("nightmode","true",1);
    } else {
        setCookie("nightmode","false",1);
    }
};
