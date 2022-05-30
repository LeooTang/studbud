const toggler = document.querySelector('.help');
const inquiry   = document.querySelector('.inquiry');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  inquiry.classList.toggle('active');
})