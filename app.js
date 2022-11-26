/*
const persons = [
    'Md Fahad Uddin', 'Shuvo', 'safayet','sumon','____~~~~~'
]
let index = -1;
let person = persons[++index];

setInterval(() => {
    person = persons[index++]
    console.log(person, person.length);
    if (index === persons.length) {
        index = 0;
    }
}, 1000)
*/
/*
let i,j;

for (i = 1; i <= 5; i++) {
    for(j=1;j<=i;j++){
        console.log(j)
    }
    console.log("\n")
}
*/
/*
const student1 = {
    firstName:'Abuullah',
    lastName:'Al',
    email:'abdullah@gmail.com',
    age:22,
    attend: true,
}
const student2 = {
    firstName:'MD',
    lastName:'Abu',
    email:'abu@gmail.com',
    age:22,
    attend: true,
}
const student3 = {
    firstName:'MD',
    lastName:'Fahad',
    email:'fahad@gmail.com',
    age:22,
    attend: true,
}

const allStudents = [student1,student2,student3]
//console.log(allStudents)


function sendEmail(email) {
    console.log("Sending email...", email)
}

for (let i = 0; i < allStudents.length; i++) {
   // sendEmail(allStudents[i].email)
    console.log("Sending email...",allStudents[i].email)
} */

/*
function client(name) {

    if (name == null) {
        console.log("Please provide your name !")
    }
    else {
        console.log("Hey...", name)
    }
}

client()
client("Md Fahad")

function randomNumber(minNum, maxNum) {
    return Math.floor(Math.random() * minNum + (maxNum - minNum));
}

console.log(randomNumber(5, 10))

*/
var n1=10;

if(n1%2==0)
{
    console.log('Even Number...')
}else{
    console.log('Odd Number...')
}