
const dark = document.getElementById('dark');
const mode = document.getElementById('mode');

mode.onclick = function(){
    mode.classList.toggle('active');
    dark.classList.toggle('active');
}