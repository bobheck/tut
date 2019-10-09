(function () {
    'use strict';

    var PI = 3.14;
    function calcCircumference(radius) {
        console.log('calcCircumference');
        return radius * 2 * PI;
    }

    console.log('hello');
    console.log(PI);
    console.log(calcCircumference(4.5));

}());
