var websites = [
    "www.google.com", "google.com", "https://google.com", "https://www.google.com",
    "www.youtube.com", "youtube.com", "https://youtube.com", "https://www.youtube.com",
    "www.facebook.com", "facebook.com", "https://facebook.com", "https://www.facebook.com",
    "www.github.com", "github.com", "https://github.com", "https://www.github.com",
    "www.msbte.org.in", "msbte.org.in", "https://msbte.org.in", "https://www.msbte.org.in",
    "www.apple.com", "apple.com", "https://apple.com", "https://www.apple.com",
    "www.apple.in", "apple.in", "https://apple.in", "https://www.apple.in",
    "www.samsung.com", "samsung.com", "https://samsung.com", "https://www.samsung.com",
    "www.flipkart.com", "flipkart.com", "https://flipkart.com", "https://www.flipkart.com",
    "www.amazon.com", "amazon.com", "https://amazon.com", "https://www.amazon.com",
    "www.amazon.in", "amazon.in", "https://amazon.in", "https://www.amazon.in",
    "sandipuniversity.edu.in/", "sandipuniversity.edu.in/", "https://sandipuniversity.edu.in/", "https://www.sandipuniversity.edu.in/"
];

var urlFound = 5;
var isLegit = 100;
var isNotLegit = 100;
var dot = ".";

function getResults() {
    var userURL = document.getElementById('getUserURL').value;
    if (userURL == '') {
        alert("Field Empty");
        urlFound = 0;
    } else if (userURL.includes(dot) == 0) {
        alert("Invalid URL");
        urlFound = 0;
    } else {
        urlFound = 1;
    }

    if (urlFound == 1) {
        if (websites.indexOf(userURL) !== -1) {
            isLegit = 1;
        } else {
            isNotLegit = 1;
        }
    }

    if (isLegit == 1) {
        alert("Genuine Website");
        document.getElementById("result").innerHTML = "<b>" + userURL + "</b> is a <i style='color: green'>genuine</i> and trusted website.";
    } else if (isNotLegit == 1) {
        alert("Suspicious Website");
        document.getElementById("result").innerHTML = "<b>" + userURL + "</b> might be a <i style='color: red'>suspicious</i> website.";
    }
}