const btn = document.getElementById('btn');
const container = document.getElementById('container');


btn.addEventListener('click', () => {
  createNofication();
});

function createNofication() {
  const notif = document.createElement('div');
  notif.classList.add('toast');

  notif.innerText = 'Hello'

  container.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);

}
