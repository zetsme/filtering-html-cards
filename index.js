//
const buttons = document.querySelectorAll('.button');
const cards = [...document.querySelectorAll('.card')];
//
buttons.forEach((btn) => {
  btn.addEventListener('click', () => {
    filterCards(btn.dataset.btn);
  });
});
//
const filterCards = (type) => {
  cards.forEach((i) => i.classList.remove('hide'));

  if (type === 'all') {
    cards.forEach((i) => i.classList.remove('hide'));
  } else {
    const filtered = cards.filter((card) => card.dataset.card !== type);
    filtered.forEach((i) => i.classList.add('hide'));
  }
};
