//alert("JavaScript works!");
var stringToNumber = "40";
var number1 = 5.2356;
var stringSeparate = "a,b,c";
var url = "https://www.fullsail.edu";
var highestValue = [1, 4, 7, 9, 10, 14, 15];
var myPhrase = "Have a nice day!";


//Return String as a Number
var getNumber = function (stringNumber) {
    var result;
    result = parseInt(stringNumber);
    return result;
};

//Replace separator in a string
var getNewString = function (stringToSeparate, separator1, separator2) {
    var toReplace;
    var myNewString;
    toReplace = stringToSeparate.indexOf(separator1);
    myNewString = stringToSeparate.replace(toReplace, separator2);
    return myNewString;
};

//Format a number to use a specific number of decimal places
var getDecimal = function (number1, decimalPlaces) {
    var decimalResult;
    decimalResult = number1.toFixed(decimalPlaces);
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
    for (var i = 0; i <= arrayValue.length; i++) {
        if (arrayValue[i] > number) {
            return arrayValue[i];
        }
    }
};



var getStringUppercase = function (phrase){
    var stringArray;
    var arrayUppercase = [];
    var newString;
    stringArray = phrase.split(" ");
    for (var i = 0; i < stringArray.length; i++) {
        arrayUppercase.push(stringArray[i].charAt(0).toUpperCase() + stringArray[i].substr(1));
        newString = arrayUppercase.join(" ");
    }
    return newString;
};


var myResult = getNumber(stringToNumber);
var myNewString = getNewString = getNewString(stringSeparate, ",", "/");
var decimalPlaces = getDecimal(number1, 2);
var isUrlValid = getUrl(url);
var nextHighestNumber = getNextHighest(highestValue, 12);
var splitUppercaseResult = getStringUppercase(myPhrase);




console.log(myResult);
console.log(myNewString);
console.log(decimalPlaces);
console.log(isUrlValid);
console.log(nextHighestNumber);
console.log(splitUppercaseResult);


