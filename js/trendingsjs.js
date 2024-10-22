const apikey ='KG0m1940RMdqR9RnxK2XeHivdbIcSGUO';
const endpointTrendings= 'trending';
const urlTrend = 'https://api.giphy.com/v1/gifs/';
const limitElement= "25";
const desktop = 950;

function mostrarGif(){

function buscaGif() {


    let apiurlTren=`${urlTrend}${endpointTrendings}?api_key=${apikey}&limit=${limitElement}`;
        // console.log(apiurlTren);
       fetch(apiurlTren)
                    .then(devuelve =>{
                        // console.log(devuelve);
                        return devuelve.json();
                    })
                    .then( result =>{
                        // console.log(result);
                        let containerTrending = document.getElementById("containerTrendingsImg");
                        for (i = 0; i < 25; i++){
                        function objeto(url, id, title, username) {
                            this.url=url;
                            this.id= id;
                            this.title = title;
                            this.username=username;
                        }; 
                        let trendingName;
                        if(result.data[i].username.length != 0) {
                            trendingName = result.data[i].username;
                        }else{
                            trendingName = i+" gif identity "+result.data[i].title;
                        };
                        let objetoArray = new objeto (result.data[i].images.original.url, trendingName, result.data[i].title, result.data[i].id);
                        arrayTrendings.push(objetoArray);
                        // console.log(arrayTrendings);                        
                        }                        
                        for (i = 0; i < 25; i++){
                            let images = document.createElement("img");
                            images.setAttribute("id" , arrayTrendings[i].id);
                            images.setAttribute("src", arrayTrendings[i].url);
                            images.setAttribute("title", arrayTrendings[i].title);
                            images.setAttribute("alt", arrayTrendings[i].username);                                                    
                            let divContainer = document.createElement("div"); 
                            divContainer.setAttribute("tabindex", "15");                                                       
                            //CREA LOS IMG 
                            var minImgHeartHover = document.createElement("i");
                            var minImgDownload = document.createElement("img");
                            var minImgMax= document.createElement("img");
                            let closeCruz=document.createElement("img");
                            let userText= document.createElement("p");
                            let titleText = document.createElement("h6");                            
                            let divContainerText= document.createElement("div");
                            userText.textContent=arrayTrendings[i].username;
                            titleText.textContent= arrayTrendings[i].title;     
                             //SETEA LOS IMG 
                            divContainer.setAttribute("id", arrayTrendings[i].id);
                            divContainer.setAttribute("alt", arrayTrendings[i].username);                            
                            minImgHeartHover.setAttribute("class", "far fa-heart");                
                            minImgDownload.setAttribute("src", "/img/icon-download.svg");
                            minImgMax.setAttribute("src", "/img/icon-max.svg");
                            closeCruz.setAttribute("src", "/img/button-close.svg");
                            divContainerText.setAttribute("id", arrayTrendings[i].id);
                            //SE LE DA CLASS A LOS IMG
                            images.classList.toggle("hovercard");
                            minImgDownload.classList.toggle("hoverIcon");
                            minImgMax.classList.toggle("hoverIcon");
                            closeCruz.classList.toggle("cruz");                            
                             // SE CREA EL DIV CONTENEDOR DE LOS IMG
                            let divContHeart = document.createElement("div");
                            let divContDown = document.createElement("div");
                            let divContMax = document.createElement("div");
                             // SE CREA CLASES PARA LOS CONTENEDORES
                            divContainerText.classList.toggle("textContainer");
                            divContainer.classList.toggle("hoverImageGif");
                            divContainer.classList.toggle("hover")                                
                            divContHeart.classList.toggle("classFav");
                            divContDown.classList.toggle("classDown");
                            divContMax.classList.toggle("classMax");
                            // ID PARA EL BOTON DE FAVORITOS
                            minImgHeartHover.setAttribute("id","favourite" + i);
                            divContHeart.setAttribute("id", arrayTrendings[i].id);                        
                            //  SE UNE LOS IMG CON LOS DIV CORRESPONDIENTES                            
                            divContHeart.appendChild(minImgHeartHover);                            
                            divContDown.appendChild(minImgDownload);
                            divContMax.appendChild(minImgMax);
                            divContainerText.appendChild(userText);
                            divContainerText.appendChild(titleText);
                            // SE LE UNE AL DIV CONEDOR DEL IMG-GIF LOS DIV FAV DOWN MAX                            
                            divContainer.appendChild(images);                            
                            divContainer.appendChild(divContHeart);
                            divContainer.appendChild(divContDown);
                            divContainer.appendChild(divContMax);                            
                            divContainer.appendChild(divContainerText);    
                            divContainer.appendChild(closeCruz);                       
                            containerTrending.appendChild(divContainer);
                            
                            loadingTrending(arrayTrendings[i].id, i); 

                            if (screen.width < desktop) {
                                divContainer.classList.remove("expanDes");
                                images.addEventListener("click", exp =>{
                                    divContainer.classList.toggle("expan");
                                    divContainer.classList.remove("hover");
                                    document.getElementById("head").style.display = "none";  
                                    document.getElementById("header").style.display = "none";
                                    document.getElementById("footer").style.display = "none";   
                           
                                });
                                removedor();
                            }
                            if(screen.width > desktop){
                                divContainer.classList.add("hover");                     
                                minImgMax.addEventListener("click", iconMax =>{                                    
                                    divContainer.classList.add("expanDes");
                                   divContainer.classList.remove("hover");
                                
                                      document.getElementById("head").style.display = "none";  
                                    document.getElementById("header").style.display = "none";
                                    document.getElementById("footer").style.display = "none";   
                                   
                                });                                
                                removedor();
                            }
                            function removedor() {
                                closeCruz.addEventListener("click", salir =>{
                                    divContainer.classList.remove("expan");
                                    divContainer.classList.remove("expanDes");
                                    divContainer.classList.add("hover");
                                    document.getElementById("head").style.display = "grid";  
                                    document.getElementById("header").style.display = "flex";
                                    document.getElementById("footer").style.display = "flex";
                                    
                                });
                            }                            

                            // DESCARGA
                            divContDown.addEventListener("click", async function () {
                                let a = document.createElement("a");
                                let response = await fetch(images.src);
                                console.log(response);
                                let gif = await response.blob();
                                a.download = 'Gif';
                                a.href = window.URL.createObjectURL(gif);
                                a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
                                a.click();
                            });
                            // ///FAVORITOS                              
                            
                            
                            loadingTrending(arrayTrendings[i].id, i); 
                                divContHeart.addEventListener("click", () =>{ 
                                    
                                        let saveImg = images;                                                                        
                                    function objetion(src,alt,id,title) {
                                        this.src=src;
                                        this.alt=alt;
                                        this.id=id;
                                        this.title=title;
                                    }
                                    let otroObjeto = new objetion(saveImg.src, saveImg.alt, saveImg.id, saveImg.title)
                                    if(favoritoArray.length === 0){
                                        favoritoArray.push(otroObjeto);   
                                        localStorage.setItem("azul", JSON.stringify(favoritoArray));
                                        divContHeart.firstChild.removeAttribute("class", "far fa-heart");
                                        divContHeart.firstChild.setAttribute("class", "fas fa-heart");
                                    } else {
                                        if(JSON.stringify(favoritoArray).indexOf(JSON.stringify(otroObjeto.id)) == -1){
                                            favoritoArray.push(otroObjeto);
                                            localStorage.setItem("azul", JSON.stringify(favoritoArray));
                                            divContHeart.firstChild.removeAttribute("class", "far fa-heart");
                                            divContHeart.firstChild.setAttribute("class", "fas fa-heart");  
                                        }
                                         else {                                           
                                            for (i = 0; i < favoritoArray.length; i++) {
                                                if (JSON.stringify(favoritoArray[i].id) === JSON.stringify(otroObjeto.id)) {
                                                  favoritoArray.splice(i, 1);
                                                  localStorage.setItem("azul", JSON.stringify(favoritoArray));
                                                  divContHeart.firstChild.removeAttribute("class", "fas fa-heart");
                                                    divContHeart.firstChild.setAttribute("class", "far fa-heart"); 
                                                };
                                              };
                                        };
                                        
                                        
                                    }                                    
                                
                                });
                      
                        }
                        
                    })
                    

                    
                     

    }
    
buscaGif();

}
mostrarGif();

let arrayTrendings = [];



