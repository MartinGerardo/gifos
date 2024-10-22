var zeroValue= 0;
let verMas = document.getElementById("verMas");
let searchC = document.getElementById("containerSearch")
const apikeySearch ='KG0m1940RMdqR9RnxK2XeHivdbIcSGUO';
let titleGif = document.getElementById("titleGif");
let getBusTwo = document.getElementById('btn-main');

let getBusOne = document.getElementById('btn-header');
getBusOne.addEventListener("click", searchHeader);
function searchHeader() {
  var divContSea = document.getElementById("boxSearch");
  var textoInput = document.getElementById("inputSearch-header").value;
  if (textoInput.length != 0) {
    divContSea.style.display = "flex";
    zeroValue = 0;
    arrayObj.length=0;
    suprGrid();
    buscaGif(textoInput);
    searchC.style.display="grid";
    let titlebusqueda = document.createElement("h3");
    titlebusqueda.textContent= textoInput;
    titlebusqueda.classList.add("titleSearch");
    titleGif.appendChild(titlebusqueda);    
    document.getElementById("verMas").style.display="block"; 
    document.getElementById("verMasF").style.display="none";
    document.getElementById("boxSearch-main").style.display= "initial";
    document.getElementById("boxTitle").style.display= "initial";
    document.getElementById("imgSaludo").style.display= "initial";  
    document.getElementById("headTitleTrendings").style.display= "block";
    document.getElementById("textSrchOff").style.display = "none";
    document.getElementById("headDesTrendings").style.display= "block"; 
    document.getElementById("heartIconF").style.display = "none";
    document.getElementById("srchSinCont").style.display="none";
    document.getElementById("faceMisGifos").style.display="none";
    document.getElementById("mGContentOff").style.display="none";
    document.getElementById("textMiGif").style.display="none"

  } 
}; 
document.getElementById("inputSearch-main").addEventListener("keydown", searchMain);
function searchMain() {
  var divContSea = document.getElementById("boxSearch-main");
  var textoInput = document.getElementById("inputSearch-main").value;
    if (event.which === 13 || event.keyCode == 13 || enter === true) {
      if (textoInput.length != 0) {
        divContSea.style.display = "flex";
        zeroValue = 0;
        arrayObj.length=0;
        suprGrid();
        buscaGif(textoInput);
        eliminarSugerencias();
        let titlebusqueda = document.createElement("h3");
        titlebusqueda.textContent= textoInput;
        titlebusqueda.classList.add("titleSearch");
        titleGif.appendChild(titlebusqueda);
        document.getElementById("boxTitle").style.display= "initial";
        document.getElementById("imgSaludo").style.display= "initial";      
        document.getElementById("verMas").style.display="block";
        document.getElementById("suggest").style.display="none";
        document.getElementById("boxSearch-main").style.marginTop="0";
        document.getElementById("headTitleTrendings").style.display= "block";
        document.getElementById("headDesTrendings").style.display= "block";   
      } 
      }else {
        document.getElementById("inputSearch-main").style.display="inline";
        document.getElementById("boxTitle").style.display= "initial";
        document.getElementById("imgSaludo").style.display= "initial";
        document.getElementById("boxSearch-main").style.marginTop="0";         
        divContSea.style.display="initial";
        titleGif.textContent= "";
        titleGif.classList.remove("titleSearch");
        document.getElementById("verMas").style.display="none";

   }
};



let inputTextMain = document.getElementById("inputSearch-main");
let boxTextMain = document.getElementById("boxSearch-main");
let glassMo= document.getElementById("glassSearch");
let btnGlas= document.getElementById("glassSearchVis");
let flexSugg= document.getElementById("suggest");
let enter = false;
inputTextMain.addEventListener("input", searchInput);
function searchInput() {
  
  suprGrid();
  
  if(inputTextMain.value.length != 0){ 
    glassMo.style.display="block";   
    glassMo.style.visibility="visible";
    btnGlas.removeAttribute("class", "fas fa-search");
    btnGlas.setAttribute("id", "glassSearchVis "+"closeCruz" )
    btnGlas.setAttribute("class", "fas fa-times");   
    flexSugg.style.display="flex";
    document.getElementById("srchSinCont").style.display="none";
    document.getElementById("textSrchOff").style.display = "none";
    document.getElementById("headTitleTrendings").style.display= "none";
    document.getElementById("headDesTrendings").style.display= "none";
    if(screen.width <= 800){
      document.getElementById("boxTitle").style.display= "none";
      document.getElementById("imgSaludo").style.display= "none";
    }   
    let exitCruz= document.getElementById("glassSearchVis closeCruz");
      exitCruz.addEventListener("click", () => {
        suprGrid();
        document.getElementById("inputSearch-main").value = "";      
        glassMo.style.visibility= "hidden";
        btnGlas.removeAttribute("id", "closeCruz");
        btnGlas.removeAttribute("class", "fas fa-times");
        btnGlas.setAttribute("id", "glassSearchVis");
        btnGlas.setAttribute("class", "fas fa-search");
        flexSugg.style.display="none";
        titleGif.textContent= "";
        titleGif.classList.remove("titleSearch");
        document.getElementById("textSrchOff").style.display = "none";
        document.getElementById("srchSinCont").style.display="none"
        document.getElementById("verMas").style.display="none";
        document.getElementById("boxSearch-main").style.marginTop="0";
        document.getElementById("headTitleTrendings").style.display= "block";
        document.getElementById("headDesTrendings").style.display= "block";      
        document.getElementById("suggest").removeChild(document.getElementById("sugg")).firstChild;
        document.getElementById("suggest").removeChild(document.getElementById("sugg")).lastChild;
        document.getElementById("boxTitle").style.display= "initial";
        document.getElementById("imgSaludo").style.display= "initial"; 
      });
    }
    else{
      glassMo.style.visibility= "hidden";
      btnGlas.removeAttribute("id", "closeCruz");
      btnGlas.removeAttribute("class", "fas fa-times");
      btnGlas.setAttribute("id", "glassSearchVis");
      btnGlas.setAttribute("class", "fas fa-search");
      btnGlas.style.display="block";
      flexSugg.style.display="none";
      titleGif.textContent= "";
      titleGif.classList.remove("titleSearch");
      document.getElementById("boxTitle").style.display= "initial";
      document.getElementById("imgSaludo").style.display= "initial";  
      document.getElementById("headTitleTrendings").style.display= "block";
      document.getElementById("headDesTrendings").style.display= "block";
      document.getElementById("verMas").style.display="none";

    }
    suggestion();
     
}

function suggestion() {
  let buscarSugerencia = document.getElementById("inputSearch-main").value;
  const apiSuggestion = `https://api.giphy.com/v1/gifs/search/tags?api_key=${apikeySearch}&q=${buscarSugerencia}`;
  fetch(apiSuggestion)
    .then(response => {
      return response.json();
    })
    .then(json => {
      eliminarSugerencias();
      if (document.getElementById("inputSearch-main").value.length != 0) {
        for (i = 0; i < json.data.length; i++) {
          let wordSugg = document.createElement("label");         
          document.getElementById("suggest").appendChild(wordSugg);
          wordSugg.setAttribute("class", "words");
          wordSugg.id="sugg";
          wordSugg.setAttribute("tabindex", "10");
          document.getElementById("boxSearch-main").style.marginTop="5px";
          document.getElementById("boxSearch-main").style.marginBottom="15px";
          wordSugg.setAttribute("title", json.data[i].name);          
          wordSugg.textContent = json.data[i].name;
                    
          wordSugg.addEventListener("click", function () {
            document.getElementById("inputSearch-main").value
            document.getElementById("inputSearch-main").value = event.target.title;
            document.getElementById("suggest").style.display="none";
            enter = true;
            searchMain();
            enter = false;
          });
        };
      } else {
        eliminarSugerencias();

      }
    })
    .catch(err => console.log(err));
};
function buscaGif(gif){
  let inputSearch = gif;
  const endpointSearch= 'search';
  const url = 'https://api.giphy.com/v1/gifs/';
  const limite= 12; 
  let apiurl=`${url}${endpointSearch}?api_key=${apikeySearch}&q=${inputSearch}&limit=${limite}&offset=${zeroValue}&rating=g&lang=es`;
      fetch(apiurl)
        .then(response => {
          return response.json();
        })  
        .then(respuesta => {
          if (respuesta.data.length !== 0) {
            textoInput = inputSearch;
            for (i = 0; i < limite; i++) {            
            function objeto(url, id, title, username) {
              this.url=url;
              this.id= id;
              this.title = title;
              this.username = username;
            }; 
            let usernameComplet;
            if(respuesta.data[i].username.length != 0){
              usernameComplet = respuesta.data[i].username;
            }else{
              usernameComplet = i+" Gif identified search: "+respuesta.data[i].title;
            };
            let objetoArray = new objeto (respuesta.data[i].images.original.url, usernameComplet, respuesta.data[i].title, respuesta.data[i].id);
            arrayObj.push(objetoArray);
            };
            let contenedorBus= document.getElementById("containerSearch");     
            for (i = zeroValue; i < limite + zeroValue; i++) {            
              let image= document.createElement("img");     
              image.setAttribute("id", arrayObj[i].id);
              image.setAttribute("src",arrayObj[i].url);
              image.setAttribute("title", arrayObj[i].title);
              image.setAttribute("alt", arrayObj[i].username);                            
              let divContSearch= document.createElement('div');
              divContSearch.setAttribute("id", arrayObj[i].id)
              divContSearch.setAttribute("tabindex", "11");
              //CREA LOS IMG  
              var minImgHeart = document.createElement("i");
              var minImgDownload = document.createElement("img");
              var minImgMax= document.createElement("img");
              let closeCruz=document.createElement("img");
              let userText= document.createElement("p");
              let titleText = document.createElement("h6");                            
              let divContainerText= document.createElement("div");
              userText.textContent=arrayObj[i].username;
              titleText.textContent= arrayObj[i].title;    
              //SETEA LOS IMG
              minImgHeart.setAttribute("class", "far fa-heart");
              minImgHeart.setAttribute("id", "hover " + "change");
              minImgDownload.setAttribute("src", "/img/icon-download.svg");
              minImgMax.setAttribute("src", "/img/icon-max.svg");
              closeCruz.setAttribute("src", "/img/button-close.svg");              
              //SE LE DA CLASS A LOS IMG
              image.classList.toggle("imgSearch");
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
              divContSearch.classList.toggle("hoverSearch")
              divContHeart.classList.toggle("classFav");
              divContDown.classList.toggle("classDown");
              divContMax.classList.toggle("classMax");
              verMas.classList.add("ACT");
              // Id para los contedores de los botones
              minImgHeart.setAttribute("id", "favourite" + i)
              divContHeart.setAttribute("id", arrayObj[i].id);
              //  SE UNE LOS IMG CON LOS DIV CORRESPONDIENTES
              divContHeart.appendChild(minImgHeart);
              divContDown.appendChild(minImgDownload);
              divContMax.appendChild(minImgMax);              
              divContainerText.appendChild(userText);
              divContainerText.appendChild(titleText);
              // SE LE UNE AL DIV CONEDOR DEL IMG-GIF LOS DIV FAV DOWN MAX
              divContSearch.appendChild(image);
              divContSearch.appendChild(divContHeart);
              divContSearch.appendChild(divContDown);
              divContSearch.appendChild(divContMax); 
              divContSearch.appendChild(divContainerText);    
              divContSearch.appendChild(closeCruz);     
              contenedorBus.appendChild(divContSearch);
              
              if (screen.width < desktop) {  
                divContSearch.classList.remove("expanDes");
                image.addEventListener("click", exp =>{
                  divContSearch.classList.add("hoverImageGif");
                  divContSearch.classList.remove("hoverSearch");
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
                  divContSearch.classList.add("hoverImageGif");
                  divContSearch.classList.remove("hoverSearch");
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
                  divContSearch.classList.add("hoverSearch");
                  document.getElementById("trendings").style.display = "block";  
                  document.getElementById("header").style.display = "flex";
                  document.getElementById("footer").style.display = "flex"; 
                });
              };
              divContDown.addEventListener("click", async function () {
                let a = document.createElement("a");
                let response = await fetch(image.src);
                console.log(response);
                let gif = await response.blob();
                a.download = 'Gif';
                a.href = window.URL.createObjectURL(gif);
                a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                a.click();
              });
             
              loadingSearch(arrayObj[i].id, i);
              divContHeart.addEventListener("click", () =>{                                     
                      let saveImg = image;                                                                        
                      function objetion(src,alt,id,title) {
                      this.src=src;
                      this.alt=alt;
                      this.id=id;
                      this.title=title;
                    }
                  let ObjetoFavSea = new objetion(saveImg.src, saveImg.alt, saveImg.id, saveImg.title)
                  console.log(ObjetoFavSea);
                  if(favoritoArray.length === 0){
                      favoritoArray.push(ObjetoFavSea);   
                      localStorage.setItem("azul", JSON.stringify(favoritoArray));
                      divContHeart.firstChild.removeAttribute("class", "far fa-heart");
                      divContHeart.firstChild.setAttribute("class", "fas fa-heart");
                  } else {
                      if(JSON.stringify(favoritoArray).indexOf(JSON.stringify(ObjetoFavSea.id)) == -1){
                          favoritoArray.push(ObjetoFavSea);
                          localStorage.setItem("azul", JSON.stringify(favoritoArray));
                          divContHeart.firstChild.removeAttribute("class", "far fa-heart");
                          divContHeart.firstChild.setAttribute("class", "fas fa-heart");  
                      }
                      else {                                           
                          for (i = 0; i < favoritoArray.length; i++) {
                              if (JSON.stringify(favoritoArray[i].id) === JSON.stringify(ObjetoFavSea.id)) {
                                favoritoArray.splice(i, 1);
                                localStorage.setItem("azul", JSON.stringify(favoritoArray));
                                divContHeart.firstChild.removeAttribute("class", "fas fa-heart");
                                  divContHeart.firstChild.setAttribute("class", "far fa-heart"); 
                              };
                            };
                      };       
                  }         
                });
                
             };      
          } else {
            document.getElementById("verMas").style.display="none";
            document.getElementById("srchSinCont").style.display="block"
            document.getElementById("textSrchOff").style.display = "block";
           } 
        }).catch(err => console.log(err));  
    
} 
let arrayObj = [];
function suprGrid() {
  let borraGridSearch = document.getElementById("containerSearch");
  while (borraGridSearch.firstChild) {
    borraGridSearch.removeChild(borraGridSearch.firstChild);
  };
  let borraGridMiGif = document.getElementById("containerMyGif");
  while (borraGridMiGif.firstChild) {
    borraGridMiGif.removeChild(borraGridMiGif.firstChild);
  };
  let borraGridFav = document.getElementById("containerFav");
  while (borraGridFav.firstChild) {
    borraGridFav.removeChild(borraGridFav.firstChild);
  }
};
document.getElementById("verMas").addEventListener("click", verMasAct);
function verMasAct() {    
    zeroValue = zeroValue + 12;
    buscaGif(textoInput);
    
  
};

function eliminarSugerencias() {
  while (document.getElementById("suggest").firstChild) {
    document.getElementById("suggest").removeChild(document.getElementById("suggest").firstChild);
  }
}