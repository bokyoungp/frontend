const jsObj = {
    name : "David",
    age : 20
}

const json = {
    "name" : "David",
    "age" : 20
}
console.log(typeof(jsObj))

let str = JSON.stringify(jsObj);
console.log(typeof(str))

let obj = JSON.parse(str);
console.log(typeof(obj))
obj.age;
obj.name;
