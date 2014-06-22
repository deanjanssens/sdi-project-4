//alert("JavaScript works!");
var stringToNumber = "40";
var number1 = 5.2356;
var stringSeparate = "a,b,c";
var url = "http://www.fullsail.edu";

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





var myNewString = getNewString = getNewString(stringSeparate, ",", "/");
var myResult = getNumber(stringToNumber);




console.log(myResult);
console.log(myNewString);
