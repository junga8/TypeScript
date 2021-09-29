// const person : {name: string ; age: number ; hobbies : string[]; role : [number , string]} = {
//     name : 'Junga',
//     age : 23 ,
//     hobbies : ['Cooking', 'Coding'],
//     role: [2,'Author']
// };

enum Role {ADMIN , READ_ONLY , AUTHOR};

const person  = {
    name : 'Junga',
    age : 23 ,
    hobbies : ['Cooking', 'Coding'],
    role: Role.ADMIN
};

if(person.role === Role.AUTHOR){
    console.log('is autho')
}

//person.role.push('Admin');
//person.role[1] = 10 ; 
console.log(person);