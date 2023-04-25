function requestHTML(url, targetId) {
  const container = document.createElement('div');
  const xhr = new XMLHttpRequest();

  xhr.open('GET', url, true);
  xhr.onload = function() {
    container.innerHTML = xhr.responseText;
    const target = document.getElementById(targetId);
    
    target?.appendChild(container);
  };

  xhr.send();
}

// Пример использования функции
const requests = [
  fetch('./../page_elements/cap.html').then(res => res.text()),
  fetch('./../page_elements/side_piece_C-sharp.html').then(res => res.text()),
  fetch('./../page_elements/side_piece_menu.html').then(res => res.text()),
  fetch('./../page_elements/cap_menu.html').then(res => res.text())
];

Promise.all(requests)
    .then(([cap, sidePiece, sidePieceMenu, capMenu]) => {
      const header = document.getElementById('header');
      const sidePieceEl = document.getElementById('side_piece');
      const sidePieceMenuEl = document.getElementById('side_piece2');
      const capMenuEl = document.getElementById('hedd');

      const capContainer = document.createElement('div');
      capContainer.innerHTML = cap;
      header?.appendChild(capContainer);

      const sidePieceContainer = document.createElement('div');
      sidePieceContainer.innerHTML = sidePiece;
      sidePieceEl?.appendChild(sidePieceContainer);

      const sidePieceMenuContainer = document.createElement('div');
      sidePieceMenuContainer.innerHTML = sidePieceMenu;
      sidePieceMenuEl?.appendChild(sidePieceMenuContainer);

      const capMenuContainer = document.createElement('div');
      capMenuContainer.innerHTML = capMenu;
      capMenuEl?.appendChild(capMenuContainer);
    })
    .catch(error => console.error(error));

let menuButton = document.querySelector('.menu-button');
let menuList = document.querySelector('.menu-list');

menuButton.addEventListener('click', function() {
    if (menuList.style.display === 'none') {
        menuList.style.display = 'block';
    } else {
        menuList.style.display = 'none';
    }
});