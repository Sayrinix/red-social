//Código Página Bienvenido
  
    //Rescatar datos de los input (text y file)

    document.getElementById("formulario").addEventListener("submit", function(event){
        //Para que el botón no recargue la página
        event.preventDefault();

        const nickname = document.getElementById("nombre").value;
        const archivo = document.getElementById("inputFile").files[0];

        //FileReader es para leer los archivos que estén en el navegador.
        let leerArchivo = new FileReader();
        leerArchivo.onload = function(){

            //Guardar los datos temporalmente en el navegador
            sessionStorage.setItem("nickname", nickname);
            sessionStorage.setItem("archivo", leerArchivo.result);

            window.location.href = "../../index.html";
        };

        if(archivo){
            leerArchivo.readAsDataURL(archivo);
        }else{
            alert('Por favor, sube una imagen para continuar');
        }
    })

/*
document.getElementById("formulario").addEventListener("submit", function(event){
    event.preventDefault();

    const nickname = document.getElementById("nombre").value;
    const archivo = document.getElementById("inputFile").files[0];

    if (!archivo) {
        alert('Por favor, sube una imagen para continuar');
        return; 
    }

    const leerArchivo = new FileReader();

    leerArchivo.onload = function() {
        sessionStorage.setItem("nickname", nickname);
        sessionStorage.setItem("archivo", leerArchivo.result);

        window.location.href = "../../index.html";
    };

    leerArchivo.readAsDataURL(archivo);
});
*/
//Mostrar valor del formulario en los comentarios

let valorInput = document.getElementById('escribir');
let contenedor = document.getElementById('comentarios');
let botonEnviar = document.getElementById('boton');

botonEnviar.addEventListener("click", function(event){
    event.preventDefault();
    
    if(valorInput.value !== ''){

    let nuevoComentario = document.createElement('li');
    nuevoComentario.textContent = valorInput.value
    valorInput.value = ''
    nuevoComentario.style.listStyleType = 'none';
    nuevoComentario.style.margin = '5px';
    nuevoComentario.style.borderTop = '1px solid #f9b4c8';
    nuevoComentario.style.borderBottom = '1px solid #f9b4c8';
    nuevoComentario.style.padding = '10px';

    //Recuperar datos de imagen y nickname

    const nombre = sessionStorage.getItem("nickname");
    const imagen = sessionStorage.getItem("archivo");

    let nombreNuevo = document.createElement("p");
    nombreNuevo.textContent = nombre;

    let fotoPerfil = document.createElement('img');
    fotoPerfil.src = imagen;
    fotoPerfil.width = 50;
    fotoPerfil.height = 50;
    fotoPerfil.style.borderRadius = "50%";

    nuevoComentario.appendChild(fotoPerfil);
    nuevoComentario.appendChild(nombreNuevo);
    contenedor.appendChild(nuevoComentario);
    }else{
        alert('Tu comentario está vacío. Intenta otra vez.')
    }
    
})

//Toggle al apretar el boton de comentarios

    let botonComentar = document.getElementById('comentar');
    let contenedorComentar = document.getElementById('seccionComentarios');
    

    contenedorComentar.style.display = 'none';

    botonComentar.addEventListener('click', function(event){
        event.preventDefault();

        if(contenedorComentar.style.display == 'none'){

            contenedorComentar.style.display = 'block';
        } else{
            contenedorComentar.style.display = 'none';
        }

    })


    
    /*

    //Hover para los iconos, esta manera es mas larga porque se va uno por uno,

    //Boton comentar
    let botonComment = document.getElementById('comentar');
    let icon3 = document.getElementById('icono3');

    botonComment.addEventListener('mouseover', function(){
        icon3.style.color = '#ff2969';
    })

    botonComment.addEventListener('mouseout', function(){
        icon3.style.color = '#f9b4c8';
    })

    //Boton de like
    let botonLike = document.getElementById('boton2');
    let icono1 = document.getElementById('icono');

    botonLike.addEventListener('mouseover', function(){
        icono1.style.color = '#ff2969';
    })

    botonLike.addEventListener('mouseout', function(){
        icono1.style.color = '#f9b4c8';
    })
    
    //Boton de compartir
    let botonShare = document.getElementById('boton3');
    let icon2 = document.getElementById('icono2');

    botonShare.addEventListener('mouseover', function(){
        icon2.style.color = '#ff2969';
    })

    botonShare.addEventListener('mouseout', function(){
        icon2.style.color = '#f9b4c8';
    })

    */


//Nueva forma de darle un hover a TODOS los iconos y no ir uno por uno.

let enlaces = document.getElementsByTagName('a');

for (let i = 0; i < enlaces.length; i++) {
  let enlace = enlaces[i];
  
  let iconos = enlace.getElementsByTagName('i');
  
  for (let j = 0; j < iconos.length; j++) {
    let icono = iconos[j];
    
    enlace.addEventListener('mouseover', function() {
      icono.style.color = '#ff2969';  
    });

    enlace.addEventListener('mouseout', function() {
      icono.style.color = '#ff81a5';  
    });
  }
}



