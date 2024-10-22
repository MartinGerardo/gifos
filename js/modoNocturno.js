let tag = document.getElementById("modoNocturno");
let lightBody = document.getElementById('light');
var nameChangeWhite = "Modo Diurno";
var nameChangeBlack = "Modo Nocturno";
tag.addEventListener('click', () => {
    lightBody.classList.toggle('light-dark');
   if(lightBody.classList.contains('light-dark')){
        tag.textContent = nameChangeWhite;
        localStorage.setItem("dark-mode", "true");
    } else {
        tag.textContent = nameChangeBlack;
        localStorage.setItem("dark-mode", "false");
    }
});
if(localStorage.getItem("dark-mode") === "true"){
    tag.textContent = nameChangeWhite;
    lightBody.classList.add('light-dark');
    lightBody.classList.remove('light');
}else{
    tag.textContent = nameChangeBlack;        
    lightBody.classList.remove('light-dark');
    lightBody.classList.add('light');
};