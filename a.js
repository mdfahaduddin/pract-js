/*const arr = [1, 2, 3, null, false, 4, 5, '', 'test', 6, 7]

let count = 0;

for (let i = 0; i < arr.length; i++) {

    for (let j = i; j < arr.length - 1; j++) {
        if (!arr[j] || typeof arr[j] !== 'number') {
            arr[j] = arr[j + 1]
            arr[j + 1] = undefined
            count++
        }

    }

}

console.log(count)
*/
/*
const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 }
]

const index = arr.findIndex(function (v){
    return v.id === 4
})

arr[index].value = 400;
console.log(arr)

*/
/*
const arr = [
    { id: 1, value: 10 },
    { id: 2, value: 20 },
    { id: 3, value: 30 },
    { id: 4, value: 40 },
    { id: 5, value: 50 }
]

const obj = arr.find(function (v){
    return v.id === 4;
})

obj.value = 500;
console.log(arr)
console.log(obj)
*/

//delete 
/*
const students =
    [
        {
            name: 'MD Fahad Uddin',
            id: 2110317006
        },
        {
            name: 'A',
            id: 2110318006
        },
        {
            name: 'B',
            id: 2110319006
        },
        {
            name: 'C',
            id: 2110320006
        },
        {
            name: 'D',
            id: 2110317006
        },
        {
            name: 'E',
            id: 2110321006
        },
        {
            name: 'F',
            id: 2110322006
        },
        {
            name: 'G',
            id: 2110323006
        }
    ]


const index = students.findIndex((item) => item.id === 2110323006)

//splice
const totalstudent = students.splice(index, 1);

console.log(students)

//filter

const newst = students.filter((item) => item.id !== 2110322006)

console.log(students)
console.log(newst)


*/
//object
const pc = {
    brand:'walton',
    price:39000,
    color:'black',
    processor:'Ryzen 5',
    os:'w10 pro',
    pcopen() {
        console.log('Working...')
    },
    pcoff() {
        console.log('Not working...')
    }
}


pc.pcopen()
console.log(pc)

//another way object create

const testObj = new Object()

testObj.name = 'obj1'
testObj.time = new Date()

console.log(testObj)