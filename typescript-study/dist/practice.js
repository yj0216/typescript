"use strict";
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
function sum(x, y) {
    return x + y;
}
function sumArray(numbers) {
    return numbers.reduce(function (acc, current) { return acc + current; }, 0);
}
var total = sumArray([1, 2, 3, 4, 5]);
sum(1, 2);
var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
}());
var Rectangle = /** @class */ (function () {
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width = this.height;
    };
    return Rectangle;
}());
var shapes = [new Circle(5), new Rectangle(10, 5)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
