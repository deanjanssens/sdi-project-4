//alert("JavaScript works!");
var stringToNumber = "40";
var number1 = 5.2356;
var stringSeparate = "a,b,c";
var url = "https://www.fullsail.edu";

//Return String as a Number
var getNumber = function (theNumber) {
    var result = parseInt(theNumber);
    return result;
};

//Replace separator in a string
var getNewString = function (stringToSeparate, separator1, separator2) {
    var toReplace = stringToSeparate.indexOf(separator1);
    newString = stringToSeparate.replace(toReplace, separator2);
    return newString;
};

//Format a number to use a specific number of decimal places
var getDecimal = function (number1, decimalPlaces) {
    var decimalResult = number1.toFixed(decimalPlaces);
    return decimalResult;
};

var getUrl = function (myURL) {
    var isURL;
    if (myURL.substring(0, 7) === "http://" || myURL.substring(0, 8) === "https://") {
        isURL = true;
    } else {
        isURL = false;
    }
    return isURL;

};

var myResult = getNumber(stringToNumber);
var myNewString = getNewString = getNewString(stringSeparate, ",", "/");
var decimalPlaces = getDecimal(number1, 2);
var isUrlValid = getUrl(url);


console.log(myResult);
console.log(myNewString);
console.log(decimalPlaces);
console.log(isUrlValid);