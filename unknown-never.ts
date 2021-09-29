 let userInput : unknown; 
 let username : string ; 

 userInput = 5 ; 
 userInput = 'Junga';
 //if we didn't had the below type check  our function will give us error 
 if(typeof userInput === 'string'){

    username = userInput ; 

 }


 function generateError(message : string, code : number): never {
     throw {message : message , errorCode : code }

 }

 generateError('An error occured', 420 );