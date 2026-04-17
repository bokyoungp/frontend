// console.log("test");
// 1. for of (배열)
let arr = [1,2,3];
for (const element of arr) {
    console.log(element);
}

// 2. [배열].forEach(화살표함수)
arr.forEach((e) => {
    console.log(e);
})

arr.forEach((e, index) => {
    console.log(e, index);
})
// 3. 배열의 map, filter
let newArr = arr.map((e)=> e*e);
console.log(newArr);

let evenArr = arr.filter((e)=>{
    return e % 2 == 0;
});
console.log(evenArr);
// 4. 객체의 모든 속성을 반복문으로 전부 읽어오기 : for in
let student = {
    name : "홍길동",
    age : 20,
    score : 100
}
for (const key in student) {   
    const element = student[key];
    console.log(element);
}
