// console.log("test");
// 1. 프로토타입을 이용하여 객체를 작성하는 방법
// function Student(name, score) {
//     this.name = name;
//     this.score = score;
// }

// let std1 = new Student("홍길동", 100);
// let std2 = new Student("손흥민", 90);

// console.log(std1, std2);

// 2. 생성자를 포함한 ECMA6 문법
class Student{
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}

let std1 = new Student("홍길동", 100);
let std2 = new Student("손흥민", 90);

console.log(std1, std2);

// 3. 객체를 배열에 저장한 후 배열의 원소인 객체의 모든 속성을 반복문으로 
//    전부 읽어오기 : for of / for in
let students = [std1, std2];
for (const student of students) {
    for (const key in student) {       
        console.log(student[key]);
    }
}

// 4. property, method 를 포함한 객체 생성해보기
let account =  {
    owner : "홍길동",
    account_no : "1111",
    balance : 10000,
    withdraw : ()=>{
        console.log("출금처리");
    },
    deposit : () => {
        console.log("입금처리");
    },
    inquiry : () => {
        console.log("조회처리");
    }
};

class Account {
    constructor(owner, account_no, balance){
        this.owner = owner;
        this.account_no = account_no;
        this.balance = balance;
    }

    deposit(money) {
        console.log("입금처리");
        this.balance += money;
    }

    inquiry() {
        console.log("조회처리 : " , this.balance);
    }

    withdraw(money) {
        console.log("출금처리");
        if(this.balance >= money) {
            this.balance -= money;
        } else {
            console.log("출금할 수 없습니다.");
        }
    }
}

let acc1 = new Account("홍길동", "1111", 10000);
let acc2 = new Account("손흥민", "2222", 20000);

acc1.deposit(10000);
acc1.inquiry();
acc1.withdraw(20000);
acc1.inquiry();

