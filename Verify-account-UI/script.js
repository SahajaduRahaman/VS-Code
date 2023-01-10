const btn = document.getElementById("btn");

btn.addEventListener('click', () => startStyle());

function startStyle() {

    document.getElementById('showfirework').classList.add('firework');

    setInterval(() => document.getElementById('showfirework').classList.remove('firework'),5000);
}




