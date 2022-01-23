var facebook = document.getElementById("facebook");
facebook.onmouseover = mouseOver;
facebook.onmouseout = mouseOut;

function mouseOver() {
    facebook.src = "./images/facebook1.png";
}

function mouseOut() {
    facebook.src = "./images/facebook.png";
}

var twitter = document.getElementById("twitter");
twitter.onmouseover = tmouseOver;
twitter.onmouseout = tmouseOut;

function tmouseOver() {
    twitter.src = "./images/twitter1.png";
}

function tmouseOut() {
    twitter.src = "./images/twitter.png";
}

var instagram = document.getElementById("instagram");
instagram.onmouseover = commonFucktion(instagram);
instagram.onmouseout = imouseOut;

function imouseOver() {
    instagram.src = "./images/instagram1.png";
}

function imouseOut() {
    instagram.src = "./images/instagram.png";
}

function commonFucktion(text) {
    text.src = `./images/${text}1.png`
    console.log(text.src);
}