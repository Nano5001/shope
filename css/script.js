const warpper = document.querySelector('.warpper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.rigester-link');
registerLink.addEventListener('click', () => {
    warpper.classList.add('active');
});
loginLink.addEventListener('click', () => {
    warpper.classList.remove('active');
});