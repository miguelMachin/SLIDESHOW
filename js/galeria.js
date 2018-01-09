/**************************************
	Atributos
***********************/
var galeria = {
	imgGaleria: document.querySelectorAll("#galeria ul li img"),
	rutaImagen: null,
	cuerpoDom: document.querySelector("body"),
	lightbox: null,
	modal: null,
	animacionGaleria: "fade"
}

/*var galeria = {

   imgGaleria: document.querySelectorAll("#galeria ul li img"),
   rutaImagen: null,
   cuerpoDom: document.querySelector("body"),
   lightbox: null,
   modal: null,
   animacionGaleria: "fade"

}
*/




/**************************************
	Metodos
***********************/

var mGaleria = {

	inicioGaleria: function(){
		for (var i = 0; i < galeria.imgGaleria.length; i++) {
			galeria.imgGaleria[i].addEventListener("click", mGaleria.capturarImagen);
		}
	},
	capturarImagen: function(img){
		galeria.rutaImg = img.target;
		mGaleria.lightbox(galeria.rutaImg);
	},
	lightbox: function(img){

		galeria.cuerpoDom.appendChild(document.createElement("DIV")).setAttribute("id", "lightbox");
		galeria.lightbox = document.querySelector("#lightbox");

		galeria.lightbox.style.width = "100%";
		galeria.lightbox.style.height = "100%";
		galeria.lightbox.style.position = "fixed";
		galeria.lightbox.style.zIndex = "10";
		galeria.lightbox.style.background = "rgba(0,0,0,.8)";
		galeria.lightbox.style.top = 0;
		galeria.lightbox.style.lefts = 0;

		galeria.lightbox.appendChild(document.createElement("DIV")).setAttribute("id", "modal");

		galeria.modal = document.querySelector("#modal");

		galeria.modal.innerHTML = img.outerHTML+"<div>x</div>";

		galeria.modal.style.display = "block";
		galeria.modal.style.position = "relative";
		galeria.modal.childNodes[0].style.width = "100%";
		galeria.modal.childNodes[0].style.border = "15px solid white";

		if(window.matchMedia("(max-width:1000px)").matches){

			galeria.modal.style.width = "90%";

		}else{

			galeria.modal.style.width = "60%";

		}	

		if(galeria.animacionGaleria == "slideLeft"){

			galeria.modal.style.top = "50%";
			galeria.modal.style.left = 0;
			galeria.modal.style.opacity = 0;

			setTimeout(function(){

				galeria.modal.style.transition = ".5s left ease";
				galeria.modal.style.left = "50%";
				galeria.modal.style.opacity = 1;
				galeria.modal.style.marginLeft = -galeria.modal.childNodes[0].width/2 +"px";
				galeria.modal.style.marginTop = -galeria.modal.childNodes[0].height/2 +"px";

			},50)

		}
		if(galeria.animacionGaleria == "slideTop"){

			galeria.modal.style.top = "-100%";
			galeria.modal.style.left = "50%";
			galeria.modal.style.opacity = 0;

			setTimeout(function(){

				galeria.modal.style.transition = ".5s top ease";
				galeria.modal.style.top = "50%";
				galeria.modal.style.opacity = 1;
				galeria.modal.style.marginLeft = -galeria.modal.childNodes[0].width/2 +"px";
				galeria.modal.style.marginTop = -galeria.modal.childNodes[0].height/2 +"px";

			},50)

		}
		if(galeria.animacionGaleria == "fade"){

			galeria.modal.style.top = "50%";
			galeria.modal.style.left = "50%";
			galeria.modal.style.opacity = 0;

			setTimeout(function(){

				galeria.modal.style.transition = ".5s opacity ease";
				galeria.modal.style.opacity = 1;
				galeria.modal.style.marginLeft = -galeria.modal.childNodes[0].width/2 +"px";
				galeria.modal.style.marginTop = -galeria.modal.childNodes[0].height/2 +"px";

			},50)
		}


		galeria.modal.childNodes[1].style.position ="absolute";
		galeria.modal.childNodes[1].style.right ="5px";
		galeria.modal.childNodes[1].style.top ="5px";
		galeria.modal.childNodes[1].style.color ="silver";
		galeria.modal.childNodes[1].style.cursor ="pointer";
		galeria.modal.childNodes[1].style.fontSize ="30px";
		galeria.modal.childNodes[1].style.width ="40px";
		galeria.modal.childNodes[1].style.height ="40px";
		galeria.modal.childNodes[1].style.textAlign ="center";
		galeria.modal.childNodes[1].style.background ="white";
		galeria.modal.childNodes[1].style.borderRadius ="0px 0px 0px 5px";

		galeria.modal.childNodes[1].addEventListener("click", mGaleria.salirGaleria)

	},
	salirGaleria: function(){
		galeria.lightbox.parentNode.removeChild(galeria.lightbox);

	}




}

mGaleria.inicioGaleria();