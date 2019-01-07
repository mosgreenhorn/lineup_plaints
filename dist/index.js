"use strict";
window.onload = function () {
    console.log("I am here");
    // generate some data
    var arr = [];
    var cats = ['c1', 'c2', 'c3'];
    for (var i = 0; i < 10000; ++i) {
        arr.push({
            a: Math.random() * 10,
            d: 'Row ' + i,
            cat: cats[Math.floor(Math.random() * 3)],
            cat2: cats[Math.floor(Math.random() * 3)]
        });
    }
    var lineupElement = document.querySelector('#lineup');
    var lineup = LineUpJS.asLineUp(lineupElement, arr);
};
