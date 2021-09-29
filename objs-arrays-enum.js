"use strict";
// const person : {name: string ; age: number ; hobbies : string[]; role : [number , string]} = {
//     name : 'Junga',
//     age : 23 ,
//     hobbies : ['Cooking', 'Coding'],
//     role: [2,'Author']
// };
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
;
var person = {
    name: 'Junga',
    age: 23,
    hobbies: ['Cooking', 'Coding'],
    role: Role.ADMIN
};
if (person.role === Role.AUTHOR) {
    console.log('is autho');
}
//person.role.push('Admin');
//person.role[1] = 10 ; 
console.log(person);
