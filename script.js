const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu');

menu.addEventListener('click', ()=> {
    menu.classList.toggle('active');
    navigation.classList.toggle('active');
});