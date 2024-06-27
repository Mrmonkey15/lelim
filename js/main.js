document.addEventListener('DOMContentLoaded', function() {
    let burgerMenu = document.querySelector('.burger-menu');
    let closeSidebarButton = document.querySelector('.close-sidebar');
    let sidebar = document.querySelector('.sidebar');

    burgerMenu.addEventListener('click', function() {
        burgerMenu.classList.toggle('open');
        sidebar.classList.toggle('open');
    });

    closeSidebarButton.addEventListener('click', function() {
        burgerMenu.classList.remove('open');
        sidebar.classList.remove('open');
    });
});
