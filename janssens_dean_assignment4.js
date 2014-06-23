//alert("JavaScript works!");
var stringToNumber = "40";
var number1 = 5.2356;
var stringSeparate = "a,b,c";
var url = "https://www.fullsail.edu";
var highestValue = [1, 4, 7, 9, 10, 14, 15];

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

//Is the string a URL?
var getUrl = function (myURL) {
    var isaURL;
    if (myURL.substring(0, 7) === "http://" || myURL.substring(0, 8) === "https://") {
        isaURL = true;
    } else {
        isaURL = false;
    }
    return isaURL;

};

//Find smallest value in an array that is greater than a given number
var getNextHighest = function (arrayValue, number) {
    arrayValue.sort();
    for (var i = 0; i < arrayValue.length; i++) {
        if (arrayValue[i] > number) {
            return arrayValue[i];
        }
    }
};




var myResult = getNumber(stringToNumber);
var myNewString = getNewString = getNewString(stringSeparate, ",", "/");
var decimalPlaces = getDecimal(number1, 2);
var isUrlValid = getUrl(url);
var nextHighestNumber = getNextHighest(highestValue, 12);



console.log(myResult);
console.log(myNewString);
console.log(decimalPlaces);
console.log(isUrlValid);
console.log(nextHighestNumber);