// let count = 0;
// count += 1;
// //count = '갑자기 분위기 문자열'; // Error
// const message: string = 'hello world';

// const done: boolean = true;

// const numbers: number[] = [1,2,3]; 
// const messages: string[] = ['hello','world'];

// //messages.push(1); // Error

// let mightBeUndefined: string | undefined = undefined;
// let nullableNumber: number|null = null;

// let color: 'red' | 'orange' | 'yellow' = 'red';
// color = 'yellow';
// //color = 'green'; // Error

// console.log(message);

// function sum(x:number, y:number): number {
//     return x + y;
// }

// function sumArray(numbers: number[]): number {
//     return numbers.reduce((acc,current) => acc + current, 0)
// }

// const total = sumArray([1,2,3,4,5]);
// sum(1,2);


// interface Shape {
//     getArea(): number;
// }

// // class Circle implements Shape {
// //     radius: number;

// //     constructor(radius:number){
// //         this.radius = radius;
// //     }

// //     getArea(){
// //         return this.radius * this.radius * Math.PI;
// //     }
// // }

// class Circle implements Shape {
//     // private 부분을 public 로 바꿔도 됨
//     constructor(private radius:number){
//         this.radius = radius;
//     }

//     getArea(){
//         return this.radius * this.radius * Math.PI;
//     }
// }

// class Rectangle implements Shape {
//     width:number;
//     height:number;

//     constructor(width:number,height:number){
//         this.width = width;
//         this.height = height;
//     }

//     getArea(){
//         return this.width = this.height;   
//     }

// }

// const shapes: Shape[] = [new Circle(5), new Rectangle(10,5)];

// shapes.forEach(shape => {
//     console.log(shape.getArea());
// })

interface Person {
    name: string;
    age?: number; // 넣어도 되고 안 넣어도 되고
}

interface Develeoper {
    name:string;
    age?:number;
    skills:string[];
}

const person: Person = {
    name: '김사람',
    age: 20
};

const expert: Develeoper = {
    name: '김개발',
    skills:['javascript','react']
};

const People: Person[] = [person,expert];

type People = Person[]; // Person[] 을 이제 People 이라는 타입으로 사용 가능함
const people : People = [person,expert];

type Color = 'red' | 'orange' | 'yellow';
const color: Color = 'red';
const colors: Color[] = ['red','orange'];

// generics
function merge<A,B>(a:A,b:B): A& B{
    return {
        ...a,
        ...b
    };
}

const merged = merge({foo:1},{bar:1});

interface Items<T> {
    list: T[];
}

const items: Items<string> = {
    list: ['a','b','c']
}