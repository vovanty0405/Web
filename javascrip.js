document.querySelector('.menu-icon').addEventListener('click', function() {
    this.classList.toggle('show');
    const body  = document.querySelector('body')
    body.classList.toggle('overFlow')
    const menu = document.querySelector('.menu-mb');
    menu.classList.toggle('hide-menu');
});
 
