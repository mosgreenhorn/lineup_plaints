declare const LineUpJS: typeof import('lineupjs'); // declare LineUpJS by importing the typings

window.onload = function () {

    console.log("I am here");

    // generate some data
    const arr = [];
    const cats = ['c1', 'c2', 'c3'];
    for (let i = 0; i < 10000; ++i) {
    arr.push({
        a: Math.random() * 10,
        d: 'Row ' + i,
        cat: cats[Math.floor(Math.random() * 3)],
        cat2: cats[Math.floor(Math.random() * 3)]
    })
    }

    const lineupElement: HTMLElement = document.querySelector<HTMLElement>('#lineup')!;
    const lineup = LineUpJS.asLineUp(lineupElement, arr);
}