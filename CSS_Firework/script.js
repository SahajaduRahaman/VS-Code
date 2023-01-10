const btn = document.getElementById("submit");

btn.addEventListener('click', () => startStyle());

function startStyle() {
    document.getElementById('two').removeAttribute('href');
    document.getElementById('two').setAttribute('href', "style.css");
}