var arregloMisGifos = [];
if (localStorage.getItem("misGifOS") != null) {
  arregloMisGifos = JSON.parse(localStorage.getItem("misGifOS"));
}

// MIS GIFOS
let sectionMisGif = document.createElement("section");
document.getElementById("main").appendChild(sectionMisGif);
sectionMisGif.setAttribute("id", "misGifOS");
sectionMisGif.setAttribute("class", "misGifOS");
document.getElementById("mis-Gifos").addEventListener("click", misGif);
function misGif() {
    // document.getElementById("head").style.display = "block";
    document.getElementById("misGifOS").style.display = "flex";
    document.getElementById("trendings").style.display = "block";
    document.getElementById("boxTitle").style.display= "none";
    document.getElementById("imgSaludo").style.display= "none";
    document.getElementById("boxSearch-main").style.display= "none";
    document.getElementById("containerSearch").style.display="none";
    document.getElementById("containerFav").style.display="none";
    document.getElementById("verMas").style.display="none";
    document.getElementById("verMasF").style.display="none";
    document.getElementById("imgSaludo").style.display= "none";
    document.getElementById("headTitleTrendings").style.display= "none";
    document.getElementById("headDesTrendings").style.display= "none";
    document.getElementById("heartIconF").style.display="none";
    document.getElementById("favContentOff").style.display="none";
    document.getElementById("favTextOff").style.display="none";
    document.getElementById("favTextOff").style.display="none";
    document.getElementById("sectionFilm").style.display = "none"; 
    document.getElementById("boxFilm").style.display = "none"; 
    document.getElementById("containerMyGif").style.display = "grid";    
    document.getElementById("faceMisGifos").style.display = "block";
        
   let titleMG=document.getElementById("titleGif");
    titleMG.textContent = "Mis GIFOS";
    titleMG.classList.add("classTitleMisGifos");
    titleMG.classList.remove("classFavoritos");
    titleMG.classList.remove("classSearchTitle");
    titleMG.classList.remove("titleSearch");
    console.log(titleMG)
  if (arregloMisGifos.length == 0) {
    document.getElementById("mGContentOff").style.display = "block";
    document.getElementById("textMiGif").style.display = "block";
  } else {
    document.getElementById("mGContentOff").style.display = "none";
    document.getElementById("textMiGif").style.display = "none";
  }
  suprGrid() ;
  // if (screen.width < desktop) {
  //   recargar()
  // }
  misGifos();
}

// GRABAR GIFS
let tiempoRepetir = document.createElement("h6");
document.getElementById("boxFilm").appendChild(tiempoRepetir);
tiempoRepetir.setAttribute("id", "filmAgain");
document.getElementById("creaPropioGif").addEventListener("click", function () {
  document.getElementById("boxSearch").style.display="none";
  document.getElementById("boxTitle").style.display= "none";
  document.getElementById("imgSaludo").style.display= "none";
  document.getElementById("boxSearch-main").style.display= "none";
  document.getElementById("containerSearch").style.display="none";
  document.getElementById("verMas").style.display="none";
  document.getElementById("verMasF").style.display="none";
  document.getElementById("imgSaludo").style.display= "none";
  document.getElementById("headTitleTrendings").style.display= "none";
  document.getElementById("headDesTrendings").style.display= "none";
  document.getElementById("heartIconF").style.display="none";
  document.getElementById("favContentOff").style.display="none";
  document.getElementById("favTextOff").style.display="none";
  document.getElementById("favTextOff").style.display="none";
  document.getElementById("containerFav").style.display="none";
  document.getElementById("sectionFilm").style.display = "none";
  document.getElementById("mGContentOff").style.display = "none";
  document.getElementById("textMiGif").style.display = "none";
  document.getElementById("faceMisGifos").style.display = "none";
  document.getElementById("textSrchOff").style.display = "none";
  document.getElementById("boxFilm").style.display="block";
  document.getElementById("misGifOS").style.display = "none";
  document.getElementById("trendings").style.display = "none";
  document.getElementById("containerMyGif").style.display = "none"; 
  document.getElementById("sectionFilm").style.display = "grid";
  document.getElementById("creaPropioGif").setAttribute("class", "active")
});

// COMENZAR
document.getElementById("BTN-letGoo").addEventListener("click", comenzar);
function comenzar() {
  document.getElementById("BTN-letGoo").style.visibility = "hidden";
  document.getElementById("partOne").classList.add("hover");
  document.getElementById("descripcion").innerHTML = "¿Nos das acceso <br/> a tu cámara?";
  document.getElementById("desPermiso").innerHTML = "El acceso a tu camara será válido sólo <br/> por el tiempo en el que estés creando el GIFO."
  getStreamAndRecord();
};

function cronometrar() {
  h = 0;
  m = 0;
  s = -1;
  document.getElementById("filmAgain").innerHTML = "00:00:00";
  
  time();
  id = setInterval(time, 1000);
}
function time() {
  var hAux, mAux, sAux;
  s++;
  if (s > 59) { m++; s = 0; }
  if (m > 59) { h++; m = 0; }
  if (h > 24) { h = 0; }
  if (s < 10) { sAux = "0" + s; } else { sAux = s; }
  if (m < 10) { mAux = "0" + m; } else { mAux = m; }
  if (h < 10) { hAux = "0" + h; } else { hAux = h; }
  document.getElementById("filmAgain").innerHTML = hAux + ":" + mAux + ":" + sAux;
}

function getStreamAndRecord() {
  stream = navigator.mediaDevices.getUserMedia({audio: false, video: true})
    .then(function (stream) {
      document.getElementById("descripcion").style.display = "none";
      document.getElementById("desPermiso").style.display = "none";
      let capturaVideo = document.createElement("video");
      document.getElementById("recordingFilm").appendChild(capturaVideo);
      capturaVideo.setAttribute("id", "videoGif")
      capturaVideo.srcObject = stream;
      capturaVideo.play()
      document.getElementById("BTN-letGoo").style.display = "none";
      document.getElementById("filmAgain").style.visibility = "visible";
      let grabar = document.createElement("h4");
      document.getElementById("pie").appendChild(grabar);
      grabar.setAttribute("id", "btn-grabar");
      grabar.setAttribute("class", "BTN-letGoo");
      grabar.textContent = "GRABAR";
      document.getElementById("partOne").classList.remove("hover");
      document.getElementById("partTwo").classList.add("hover");
      document.getElementById("btn-grabar").addEventListener("click", grabacion);
      function grabacion() {
        recorder =  RecordRTC(stream, {
          type: 'gif',
          frameRate: 1,
          quality: 10,
          onGifRecordingStarted: function () {
            console.log('started') 
          },
        });
        cronometrar();
        recorder.startRecording();
        document.getElementById("btn-grabar").style.display = "none";
        let pararGrabacion = document.createElement("h4");
        document.getElementById("pie").appendChild(pararGrabacion);
        pararGrabacion.setAttribute("id", "btn-parar");
        pararGrabacion.setAttribute("class", "BTN-letGoo");
        pararGrabacion.textContent = "FINALIZAR";
        document.getElementById("btn-parar").addEventListener("click", ejecuta);
      };
    })
};

function ejecuta() {
  finalizarGrabacion(stopRecording);
}

function finalizarGrabacion(callback) {
  recorder.stopRecording(callback);
}

function stopRecording() {
  let video = document.getElementById("videoGif");
  let form = new FormData();
  form.append("file", recorder.getBlob(), "myGif.gif");
  let info = URL.createObjectURL(recorder.getBlob());
  let stream = video.srcObject;
  let tracks = stream.getTracks();
  tracks.forEach(function (tracks) {
    tracks.stop();
  })
  video.src = video.srcObject;
  recorder = null;
  let imgGif = document.createElement("img");
  imgGif.setAttribute("id", "imgGif")
  video.style.display = "none";
  document.getElementById("recordingFilm").appendChild(imgGif);
  imgGif.src = info;
  document.getElementById("btn-parar").style.display = "none";
  let subirGif = document.createElement("h4");
  document.getElementById("pie").appendChild(subirGif);
  subirGif.setAttribute("id", "subirGif");
  subirGif.setAttribute("class", "BTN-letGoo");
  subirGif.textContent = "SUBIR GIFO";
  clearInterval(id);
  document.getElementById("filmAgain").textContent = "REPETIR CAPUTURA";
  document.getElementById("filmAgain").style.borderBottom = "2px solid #5ED7C6";
  document.getElementById("filmAgain").addEventListener("click", function () {
      imgGif.remove();
    document.getElementById("subirGif").remove();
    document.getElementById("btn-grabar").remove();
    document.getElementById("btn-parar").remove();
    document.getElementById("videoGif").remove();
    document.getElementById("filmAgain").innerHTML = "00:00:00";
    document.getElementById("filmAgain").style.borderBottom = "none";
    document.getElementById("descripcion").style.display = "block";
    document.getElementById("desPermiso").style.display = "block";
    getStreamAndRecord();
  });
  document.getElementById("subirGif").addEventListener("click", function () {
    document.getElementById("partTwo").classList.remove("hover");
    document.getElementById("partThree").classList.add("hover");
    document.getElementById("subirGif").style.display = "none";
    document.getElementById("filmAgain").style.visibility = "hidden";
    let loader = document.createElement("img");
    loader.setAttribute("id", "loader");
    loader.src = "img/loader.svg";
    let subiendoGifo = document.createElement("p");
    subiendoGifo.setAttribute("id", "subiendoGifo");
    subiendoGifo.textContent = "Estamos subiendo tu GIFO";
    document.getElementById("recordingFilm").appendChild(loader);
    document.getElementById("recordingFilm").appendChild(subiendoGifo);
    let hoverCard = document.createElement("div");
    hoverCard.setAttribute("id", "hoverCard");
    document.getElementById("recordingFilm").appendChild(hoverCard);
    fetch(`https://upload.giphy.com/v1/gifs?api_key=KG0m1940RMdqR9RnxK2XeHivdbIcSGUO`, { method: "POST", body: form })
      .then(respuesta => {
        return respuesta.json();
      })
      .then(json => {
        console.log(json.data);
        arregloMisGifos.push(json.data.id);
        localStorage.setItem("misGifOS", JSON.stringify(arregloMisGifos));
        loader.src = "img/check.svg";
        subiendoGifo.textContent = "GIFO subido con éxito";
        let otroGif = document.createElement("h4");
        document.getElementById("pie").appendChild(otroGif);
        otroGif.setAttribute("id", "otroGif");
        otroGif.setAttribute("class", "BTN-letGoo");
        otroGif.textContent = "Quieres cargar otro Gif?";
        otroGif.style.width = "250px";
        document.getElementById("otroGif").addEventListener("click", function () {
          document.getElementById("otroGif").remove();
          document.getElementById("imgGif").remove();
          document.getElementById("loader").remove();
          document.getElementById("subiendoGifo").remove();
          document.getElementById("hoverCard").remove();
          document.getElementById("btn-parar").remove();
          document.getElementById("btn-grabar").remove();
          document.getElementById("subirGif").remove();
          document.getElementById("videoGif").remove();
          document.getElementById("partThree").classList.remove("hover");
          document.getElementById("filmAgain").style.visibility = "hidden";
          document.getElementById("filmAgain").style.borderBottom = "none";
          document.getElementById("filmAgain").innerHTML = "00:00:00";
          comenzar();
        })

      })
      .catch(err => console.log(err));
  });
}

let j = 0;
function misGifos() {
  for (i = 0; i < arregloMisGifos.length; i++) {
    let buscarId = arregloMisGifos[i];
    const apiId = `https://api.giphy.com/v1/gifs/${buscarId}?api_key=KG0m1940RMdqR9RnxK2XeHivdbIcSGUO`;

    fetch(apiId)
      .then(response => {
        return response.json();
      })
      .then(json => {
        // console.log(json);
          let imgMG = document.createElement("img");
          imgMG.classList.toggle("imgOwn");
          imgMG.setAttribute("id", json.data.id);
          imgMG.setAttribute("src", json.data.images.original.url);
          imgMG.setAttribute("title", json.data.title);
          imgMG.setAttribute("alt", json.data.username);
          let divConteinerImgMG = document.createElement("div");          
          divConteinerImgMG.setAttribute("class", "contenedorMG");
          divConteinerImgMG.id="identity " + j;
          divConteinerImgMG.appendChild(imgMG);
          document.getElementById("containerMyGif").appendChild(divConteinerImgMG);         
          imgMatris(json.data.id, json.data.images.original.url, json.data.username, json.data.title, j);
          j += 1;
          ClickeaMe(imgMG, divConteinerImgMG);          
          
      })
      .catch(err => console.log(err));
  }
  
}
function imgMatris(id, url, title, username,j) {
  let divText = document.createElement("div");
  divText.classList.toggle("textContainer")
  
  let usuarioText = document.createElement("p");
  document.getElementById("identity " + j).appendChild(divText).appendChild(usuarioText);
  usuarioText.setAttribute("id", "usuarioText" + j)
  usuarioText.textContent =title;

  let titleUser = document.createElement("h6");
  document.getElementById("identity " + j).appendChild(divText).appendChild(titleUser);
  titleUser.setAttribute("id", "tituloUser" + j)
  titleUser.textContent =  id + username;
 
  let divSupr = document.createElement("div");
  let imgSupr = document.createElement("img");
  imgSupr.setAttribute("src", "img/icon_trash.svg");
  imgSupr.classList.toggle("hoverIcon");
  imgSupr.id= "BtnSupresor" + j;
  divSupr.id="supresor " + j;
  divSupr.classList.toggle("classSupr");
  document.getElementById("identity " + j).appendChild(divSupr).appendChild(imgSupr);
  

  let divDownload = document.createElement("div");
  let imgDownload = document.createElement("img");
  imgDownload.setAttribute("src", "img/icon-download.svg");  
  imgDownload.classList.toggle("hoverIcon");  
  divDownload.classList.toggle("classDown");
  divDownload.id="imgDownload " + j;  
  document.getElementById("identity " + j).appendChild(divDownload).appendChild(imgDownload);

  let divExpanMax = document.createElement("div");
  let imgMax = document.createElement("img");
  document.getElementById("identity " + j).appendChild(divExpanMax).appendChild(imgMax);
  divExpanMax.id = "imgMax ";
  divExpanMax.classList.toggle("classMax");
  imgMax.classList.toggle("hoverIcon");  
  imgMax.setAttribute("src", "img/icon-max.svg");

  divExpanMax.addEventListener("click", () =>{
    if(screen.width >= 1440){
      document.getElementById("identity " + j).setAttribute("class", "hoverImageGif");
          document.getElementById("identity " + j).classList.toggle("expanDes");
          document.getElementById("trendings").style.display = "none";
          document.getElementById("header").style.display = "none";
          document.getElementById("footer").style.display = "none";     
    };
  });


  let closeCruz=document.createElement("img");
  closeCruz.setAttribute("src", "/img/button-close.svg");
  closeCruz.classList.toggle("cruz");
  closeCruz.id= "Cruz "+j;
  document.getElementById("identity " + j).appendChild(closeCruz);
  
  closeCruz.addEventListener("click", ()=>{
    closeCruz.parentNode.classList.remove("expan");
    closeCruz.parentNode.classList.remove("expanDes");
    closeCruz.parentNode.setAttribute("class", "contenedorMG");
    document.getElementById("trendings").style.display = "block";  
    document.getElementById("header").style.display = "flex";
    document.getElementById("footer").style.display = "flex"; 
  });

  divSupr.addEventListener("click", function () {
    arregloMisGifos.splice(j, 1);
    localStorage.setItem("misGifOS", JSON.stringify(arregloMisGifos));
  });

  divDownload.addEventListener("click", async function () {
    let a = document.createElement("a");
    let response = await fetch(url);
    console.log(response);
    let gif = await response.blob();
    a.download = 'Gif';
    a.href = window.URL.createObjectURL(gif);
    a.dataset.downloadurl = ['application/octet-stream', a.download, a.href].join(':');
    a.click();
  }) 
 
}

function ClickeaMe(imgMG, divConteinerImgMG) {

  var imgCompleta = imgMG;
  var divContenedor = divConteinerImgMG;
  
  imgCompleta.addEventListener("click", () => { 
    if(screen.width < 1440){   
    divContenedor.setAttribute("class", "hoverImageGif");
    divContenedor.classList.toggle("expan");
    document.getElementById("trendings").style.display = "none";
    document.getElementById("header").style.display = "none";
    document.getElementById("footer").style.display = "none"; 
    };
  });
  
}

