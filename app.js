const links = document.querySelector('.links');
const btn = document.querySelector('.btn');
 
function showLinks() {
    links.classList.toggle('showlinks');
}
 
btn.addEventListener('click', showLinks);
