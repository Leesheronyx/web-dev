'use strict';
//Старые методы
const box = document.getElementById('box');
console.log(box);

// const btns = document.getElementsByTagName('button');
// console.log(btns); - HTMLCollection(массисо подобный элемент)
// console.log(btns);


// const btns = document.getElementsByTagName('button', )[1]; // 1й способ
// console.log(btns);

const btns = document.getElementsByTagName('button', ); // 2й способ
console.log(btns[1]);

// const circles = document.getElementsByClassName('circle');
// console.log(circles); //получим всё равно htmlcollection

// const circles = document.getElementsByClassName('circle');
// console.log(circles); //получим всё равно htmlcollection. Надо как с btns делать


//Новые методы
const hearts = document.querySelectorAll('.heart'); // может использовать метод foreach
console.log(hearts); //nodeList (псевдомассив)

hearts.forEach(item => { //Item это каждый элемент, который будет находится на hearts псевдомассиве
    console.log(item);
});

//Есть похожий метод querySelector - с помощью него мы получим только первый элемент
const oneHeart = document.querySelector('.heart');
console.log(oneHeart);