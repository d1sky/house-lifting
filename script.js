/* Когда пользователь нажимает на кнопку,
переключение между скрытием и отображением раскрывающегося содержимого */
function openMenu() {
    document.getElementById("menu-mobile").classList.add("show");
}

function closeMenu() {
    console.log('close');
    document.getElementById("menu-mobile").classList.remove("show");
}

function closeAndScroll(elementName) {
    closeMenu()
    scrollToElement(elementName)
}

function scrollToElement(elementName) {
    document.getElementById(elementName).scrollIntoView();
}