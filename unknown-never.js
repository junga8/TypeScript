"use strict";
var userInput;
var username;
userInput = 5;
userInput = 'Junga';
//if we didn't had the below type check  our function will give us error 
if (typeof userInput === 'string') {
    username = userInput;
}
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('An error occured', 420);
