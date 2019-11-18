/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />

import CircleMath = MyMath.Circle;

// namespaces (don't use namespaces, use modules instead)
console.log(`circ 4.5 = ${MyMath.Circle.calcCircumference(4.5)}`);
console.log(`circ 4.5 = ${CircleMath.calcCircumference(23.5)}`);
console.log(`area 4,5 = ${MyMath.Rectangle.calcArea(4,5)}`);