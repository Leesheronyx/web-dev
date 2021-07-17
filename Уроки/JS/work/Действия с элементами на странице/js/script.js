'use strict';
const box = document.getElementById('box'),
    btns = document.getElementsByTagName('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart'),
    oneHeart = wrapper.querySelector('.heart');
// hearts = document.querySelectorAll('.heart'),
// oneHeart = document.querySelector('.heart');



//применяем стили
//1)ый
box.style.backgroundColor = "blue";
box.style.width = "500px";

// //2)ой 
box.style.cssText = "background-color: blue; width: 500px";

btns[1].style.borderRadius = "100%";
circles[0].style.backgroundColor = "red";

//с помощью циклов покрасить несколько querySelectrov
// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = "blue";
// }
// //перебор с помощью метода forEach актуально
hearts.forEach(item => {
    item.style.backgroundColor = "blue";
});

const div = document.createElement('div'); //создали элемент div, только на js будет видно
// const text = document.createTextNode('Тут был я');

div.classList.add('black'); // добавили класс black в созданный элемент(нода) div

//современный метод Нам необходимо наш div добавить в конец Body, чтобы он появился на странице. append
//document.body.append(div);
// document.querySelector('.wrapper').append(div); // можно сделать так 
wrapper.append(div); // а можно так, так лучше будет

// вставляет в начало родителя какой-то элемент
wrapper.prepend(div);
hearts[0].before(div); // перед элементом
hearts[0].after(div); // после элемента

//удалить элемент со страницы
circles[0].remove();

// один элемент, заменить другим. сначало мы указываем какой элемент мы хотим заменить. Каким элементом мы хотим заменить
hearts[0].replaceWith(circles[0]);

//Конструкции которые устарели

wrapper.appendChild(div); //тоже самое что и append
wrapper.insertBefore(div, hearts[1]); // вставить вперед. 1й аргумент это тот блок, который мы вставляем, а 2й аргумент перед каким элементом мы вставляем этот див

// удаляем 2ое сердце. 
wrapper.removeChild(hearts[1]); //аналог remove

// поменять местами элементы 1й аргумент на который мы хотим что-то поменять, а 2й аргумент тот элемент, который меняется. Аналог replaceWidth
wrapper.replaceChild(circles[0].hearts[0]);

// Как добавить hTML код  
//1)InnerHtml можно писать тэги
div.innerHTML = "hello world";
div.innerHTML = "<h1>hello world</h1>";

//2) TextContent
div.textContent = "hello world";

// как вставить html код перед элементом на странице.
div.insertAdjacentHTML("beforebegin", "<h1>Hello</h1>");

div.insertAdjacentHTML("afterbegin", "<h1>Hello</h1>"); //вставляет html код в начало нашего элемента. 
div.insertAdjacentHTML("beforeend", "<h1>Hello</h1>"); // вставляет html код в конец нашего элемента
div.insertAdjacentHTML("afterend", "<h1>Hello</h1>"); // html вставляет после элемента