let container = document.createElement('div');
let xhr = new XMLHttpRequest();
xhr.open('GET', '../page_elements/cap.html', true);
xhr.onload = function() {
container.innerHTML = xhr.responseText;
let target = document.getElementById('header');

 target.appendChild(container);
};
xhr.send();
// первая стена
window.addEventListener("scroll", function() {
 let topMenu = document.querySelector(".one-com");
 topMenu.classList.toggle("scrolled", window.scrollY > 0);
});
// вторая стена
let container2 = document.createElement('div');
let request2 = new XMLHttpRequest();
request2.open('GET', './../page_elements/side_piece.html', true);
request2.onload = function() {
 let target2 = document.getElementById('side_piece');

 container2.innerHTML = request2.responseText;
 target2.appendChild(container2);
};
request2.send();
// CТЕНА
let container3 = document.createElement('div');
let request3 = new XMLHttpRequest();
request3.open('GET', './../page_elements/side_piece_menu.html', true);
request3.onload = function() {
 let target2 = document.getElementById('side_piece2');

 container3.innerHTML = request3.responseText;
 target2.appendChild(container3);
};
request3.send();
// CТЕНА
let container4 = document.createElement('div');
let request4 = new XMLHttpRequest();
request4.open('GET', './../page_elements/cap_menu.html', true);
request4.onload = function() {
 let target2 = document.getElementById('header2');

 container4.innerHTML = request4.responseText;
 target2.appendChild(container4);
};
request4.send();