let boton=document.getElementById("boton");
let boton2=document.getElementById("boton2");
let foto1=document.getElementById("foto1");
let titulo1=document.getElementById("titulo1");
let audio1 =document.getElementById("audio1");
boton.addEventListener("click",perroguardian);
boton2.addEventListener("click",borrarperroguardian);

function perroguardian(){
  //  console.log("hiciste clic");
  titulo1.textContent="Twenty one pilots: Heathens(from suicide squam)"
  foto1.src="img/img4.jpg"
  audio1.src="audio/cancion4.mp3"

}

    function borrarperroguardian(){
     titulo1.textContent="card-title"
     foto1.src="img/img1.jpg"
    audio1.src="audio/cancion1.mp3"
    }   

