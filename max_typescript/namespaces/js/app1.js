"use strict";
var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.1415926;
        function calcCircumference(radius) {
            return radius * 2 * PI;
        }
        Circle.calcCircumference = calcCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    var Rectangle;
    (function (Rectangle) {
        function calcArea(width, length) {
            return width * length;
        }
        Rectangle.calcArea = calcArea;
    })(Rectangle = MyMath.Rectangle || (MyMath.Rectangle = {}));
})(MyMath || (MyMath = {}));
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
var CircleMath = MyMath.Circle;
// namespaces (don't use namespaces, use modules instead)
console.log("circ 4.5 = " + MyMath.Circle.calcCircumference(4.5));
console.log("circ 4.5 = " + CircleMath.calcCircumference(23.5));
console.log("area 4,5 = " + MyMath.Rectangle.calcArea(4, 5));
