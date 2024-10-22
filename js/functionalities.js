function scrollHeader() {
    const desktop = 800;
window.onscroll = function () {
    if (screen.width ) {
      var scroll = document.documentElement.scrollTop;
      if (scroll > 10) {
        document.getElementById("header").style.boxShadow = "0 2px 4px 1px rgba(156,175,195,0.55)";
        document.getElementById("creaPropioGif").style.visibility = "hidden";
        if (screen.width >= 1250 && scroll > 350) {
          document.getElementById("boxSearch").style.visibility = "visible";
          document.getElementById("boxSearch").style.display = "flex";
        } else {
          document.getElementById("boxSearch").style.visibility = "hidden";
          document.getElementById("boxSearch").style.display = "none";
        }
      } else {
        document.getElementById("header").style.boxShadow = "";
        document.getElementById("creaPropioGif").style.visibility = "visible";
        document.getElementById("boxSearch").style.visibility = "hidden";
        document.getElementById("boxSearch").style.display = "none";
      }
    }
  }
}
scrollHeader();
// TRENDINGS MOVEMENT
function overflow() {
  const container = document.getElementById("containerTrendingsImg");
  const moveLeft = document.getElementById("leftBtn");
  const moveRight = document.getElementById("rightBtn");
  moveRight.addEventListener("click", move => {
      container.scrollLeft += container.offsetWidth;
  });
  moveLeft.addEventListener("click", move => {
      container.scrollLeft -= container.offsetWidth;
  });
} 
overflow();
document.getElementById("logo").addEventListener("click", recargar);
function recargar() {
  location.reload();
  document.getElementById("inputSearch-main").value = "";
  document.getElementById("inputSearch-header").value = "";
}

 

