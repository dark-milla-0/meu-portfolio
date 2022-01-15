function mostrarMenu() {
    let area = document.querySelector('.menu--area')
    if (area.classList.contains('menu--area--open') == true) {
        area.classList.remove('menu--area--open')
    } else {
        area.classList.add('menu--area--open')
    }
}