let favoritos = document.getElementById("favoritos");
favoritos.addEventListener("click", favoritosFun);
function favoritosFun() {
    document.getElementById("boxTitle").style.display= "none";
    document.getElementById("imgSaludo").style.display= "none";
    document.getElementById("boxSearch-main").style.display= "none";
    document.getElementById("imgSaludo").style.display= "none";
    document.getElementById("headTitleTrendings").style.display= "none";
    document.getElementById("headDesTrendings").style.display= "none";
    document.getElementById("heartIconF").style.display="block";
    document.getElementById("mGContentOff").style.display = "none";
    document.getElementById("textMiGif").style.display = "none";
    document.getElementById("faceMisGifos").style.display = "none";
    document.getElementById("boxFilm").style.display = "none"; 
    document.getElementById("containerMyGif").style.display = "none"; 
    document.getElementById("misGifOS").style.display = "none";
    document.getElementById("textSrchOff").style.display = "none";
    document.getElementById("verMas").style.display = "none";
    document.getElementById("verMasF").style.display = "block";
    document.getElementById("containerSearch").style.display = "none";
    document.getElementById("sectionFilm").style.display = "none"; 
    document.getElementById("trendings").style.display = "block";
    document.getElementById("containerFav").style.display="grid";
    let title = document.getElementById("titleGif");
    title.textContent = "Favoritos";
    title.classList.add("classFavoritos");
    title.classList.remove("classSearchTitle");
    title.classList.remove("classTitleMisGifos");
    title.classList.remove("titleSearch");
  
    var favMargin = 12;
    if (favoritoArray.length <= 12) {
      document.getElementById("verMasF").style.display = "none";
      favMargin = favoritoArray.length;
    }
    if (favoritoArray.length == 0) {
        document.getElementById("favContentOff").style.display = "block";
        document.getElementById("favTextOff").style.display = "block";
      } else {
        document.getElementById("favContentOff").style.display = "none";
        document.getElementById("favTextOff").style.display = "none";
         
      }
      suprGrid();
      creation(favMargin);
}
// 
// VENTANA FAVORITOS, CON FAVORITOS

let favoritoArray=[];
if (localStorage.getItem("azul") != null) {
  favoritoArray = JSON.parse(localStorage.getItem("azul"));
}
console.table(favoritoArray);

// 
// 

function creation(favMargin) {       
  
          for(let i = 0; i < favMargin ;i++){
            const verMas = document.getElementById("verMasF");
          let contenedorBus= document.getElementById("containerFav"); 
              let imgFav = document.createElement("img"); 
                imgFav.setAttribute("title", favoritoArray[i].alt);
                imgFav.setAttribute("id", favoritoArray[i].id);           
                imgFav.setAttribute("src", favoritoArray[i].src);        
                imgFav.setAttribute("alt",favoritoArray[i].title);              
                let divContSearch= document.createElement('div');
                divContSearch.setAttribute("id", favoritoArray[i].id);
                //CREA LOS IMG  
                var minImgHeart = document.createElement("i");
                var minImgDownload = document.createElement("img");
                var minImgMax= document.createElement("img");
                let closeCruz=document.createElement("img");
                let userText= document.createElement("p");
                let titleText = document.createElement("h6");                            
                let divContainerText= document.createElement("div");
                userText.textContent=favoritoArray[i].alt;
                titleText.textContent=favoritoArray[i].title;
                //// SETEA LOS IMG
                minImgHeart.setAttribute("class", "fas fa-heart");
                minImgDownload.setAttribute("src", "/img/icon-download.svg");
                minImgMax.setAttribute("src", "/img/icon-max.svg");
                closeCruz.setAttribute("src", "/img/button-close.svg");              
                //SE LE DA CLASS A LOS IMG
                imgFav.classList.toggle("imgFav");
                closeCruz.classList.toggle("cruz");
                minImgHeart.classList.toggle("hoverIcon");
                minImgDownload.classList.toggle("hoverIcon");
                minImgMax.classList.toggle("hoverIcon");
                // SE CREA EL DIV CONTENEDOR DE LOS IMG
                let divContHeart = document.createElement("div");
                let divContDown = document.createElement("div");
                let divContMax = document.createElement("div");              
                // SE CREA CLASES PARA LOS CONTENEDORES
                divContainerText.classList.toggle("textContainer");
                divContSearch.classList.toggle("GifHoverFav");
                divContSearch.classList.toggle("hoverFav");
                divContHeart.classList.toggle("classFav");
                divContDown.classList.toggle("classDown");
                divContMax.classList.toggle("classMax");
                verMas.classList.add("ACT");
                // Id para los contedores de los botones
                minImgHeart.setAttribute("id", "favourite" + i);
                divContHeart.setAttribute("id", favoritoArray[i].id);
                //  SE UNE LOS IMG CON LOS DIV CORRESPONDIENTES
                divContHeart.appendChild(minImgHeart);
                divContDown.appendChild(minImgDownload);
                divContMax.appendChild(minImgMax);              
                divContainerText.appendChild(userText);
                divContainerText.appendChild(titleText);
                // SE LE UNE AL DIV CONEDOR DEL IMG-GIF LOS DIV FAV DOWN MAX
                divContSearch.appendChild(imgFav);
                divContSearch.appendChild(divContHeart);
                divContSearch.appendChild(divContDown);
                divContSearch.appendChild(divContMax); 
                divContSearch.appendChild(divContainerText);    
                divContSearch.appendChild(closeCruz);       
              contenedorBus.appendChild(divContSearch);
              
              if (screen.width < desktop) {  
                divContSearch.classList.remove("expanDes");
                imgFav.addEventListener("click", exp =>{
                  divContSearch.classList.remove("hoverFav");
                  divContSearch.classList.toggle("expan");
                  document.getElementById("trendings").style.display = "none";
                  document.getElementById("header").style.display = "none";
                  document.getElementById("footer").style.display = "none";                      
                });                
                removedor();
              }
              if(screen.width > desktop){
                divContSearch.classList.remove("expan");
                minImgMax.addEventListener("click", iconMax =>{
                  divContSearch.classList.remove("hoverFav");
                  divContSearch.classList.add("expanDes");
                  document.getElementById("trendings").style.display = "none";
                  document.getElementById("header").style.display = "none";
                  document.getElementById("footer").style.display = "none";                                  
                });                
                removedor();
              }
              function removedor() {
                closeCruz.addEventListener("click", salir =>{
                  divContSearch.classList.remove("expan");
                  divContSearch.classList.remove("expanDes");
                  divContSearch.classList.add("hoverFav");
                  document.getElementById("trendings").style.display = "block";  
                  document.getElementById("header").style.display = "flex";
                  document.getElementById("footer").style.display = "flex"; 
                });
              };
              divContDown.addEventListener("click", async function () {
                let a = document.createElement("a");
                let response = await fetch(imgFav.src);
                console.log(response);
                let gif = await response.blob();
                
                a.download = 'Gif';
                a.href = window.URL.createObjectURL(gif);
                a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                a.click();
            });
              loadingFavourite(favoritoArray[i].id, i);
              divContHeart.addEventListener("click", ()=>{
                
                for (i = 0; i < favoritoArray.length; i++) {
                  if (JSON.stringify(favoritoArray[i].id) === JSON.stringify(divContSearch.id)) {
                    favoritoArray.splice(i, 1);
                    localStorage.setItem("azul", JSON.stringify(favoritoArray));
                    document.getElementById("favourite" + i).removeAttribute("class", "fas fa-heart");
                    document.getElementById("favourite" + i).setAttribute("class", "far fa-heart");
                   contenedorBus.removeChild(divContSearch);
                  }
                }
              
              });
            
            }


       

};

function loadingTrending(id, locationTre){
  if(favoritoArray.length!=0){
    if(localStorage.getItem("azul").includes(JSON.stringify(id))){
      document.getElementById("favourite" + locationTre).removeAttribute("class", "far fa-heart");
      document.getElementById("favourite" + locationTre).setAttribute("class", "fas fa-heart");
    } else {
      document.getElementById("favourite" + locationTre).removeAttribute("class", "fas fa-heart");
      document.getElementById("favourite" + locationTre).setAttribute("class", "far fa-heart");
    }
    
  }
}
function loadingSearch(id, locationSea){
  if(favoritoArray.length!=0){
    if(localStorage.getItem("azul").includes(JSON.stringify(id))){
      document.getElementById("favourite" + locationSea).removeAttribute("class", "far fa-heart");
      document.getElementById("favourite" + locationSea).setAttribute("class", "fas fa-heart");
    } else {
      document.getElementById("favourite" + locationSea).removeAttribute("class", "fas fa-heart");
      document.getElementById("favourite" + locationSea).setAttribute("class", "far fa-heart");
    }
    
  }
}
function loadingFavourite(id, location){
  if(favoritoArray.length!=0){
    if(localStorage.getItem("azul").includes(JSON.stringify(id))){
      document.getElementById("favourite" + location).removeAttribute("class", "far fa-heart");
      document.getElementById("favourite" + location).setAttribute("class", "fas fa-heart");
    } else {
      document.getElementById("favourite" + location).removeAttribute("class", "fas fa-heart");
      document.getElementById("favourite" + location).setAttribute("class", "far fa-heart");
    }
    
  }
}
document.getElementById("verMasF").addEventListener("click", function (favMargin)  {
  if (favMargin + 12 < favoritoArray.length) {
    favMargin = favMargin + 12;
  } else {
    favMargin = favoritoArray.length;
    document.getElementById("verMasF").style.display = "none";
  }
  suprGrid();
  creation(favMargin);
});