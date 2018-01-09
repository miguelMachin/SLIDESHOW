//OBJETO PROPIEDADES DEL SLIDE 

var slide = {
	paginacion: document.querySelectorAll("#paginacion li"),
	item :0,
	cajaSlide: document.querySelector("#slide ul"),
	animacionSlide: "slide",
	imgSlide: document.querySelectorAll("#slide ul li"),
	avanzar : document.querySelector("#slide #avanzar"),
	retroceder : document.querySelector("#slide #retroceder"),
	velocidadSlide: 3000,
	reiniciarTime: false

}


//OBJETO PROPIEDADES DEL SLIDE 

var metodos = {
	incioSlide: function(){
		for (var i = 0; i < slide.paginacion.length; i++) {
			slide.paginacion[i].addEventListener("click", metodos.paginacionSlide);	
			slide.imgSlide[i].style.width = (100/slide.paginacion.length) + "%";

		}
		slide.avanzar.addEventListener("click",metodos.avanzar);
		slide.retroceder.addEventListener("click",metodos.retroceder);
		metodos.intervalo();
		slide.cajaSlide.style.width = (slide.paginacion.length * 100) +"%";
	},
	paginacionSlide:function(item){
		//console.log("item",item.target.parentNode.getAttribute("item"));
		slide.item = item.target.parentNode.getAttribute("item")-1;
		metodos.movimientoSlide(slide.item);
	},
	avanzar:function(){

		if (slide.item == slide.imgSlide.length-1)
			slide.item = 0;
		else
			slide.item++;

		metodos.movimientoSlide(slide.item);
	},
	retroceder:function(){
		if (slide.item == 0)
			slide.item = slide.imgSlide.length-1;
		else
			slide.item--;
		metodos.movimientoSlide(slide.item);
	},
	movimientoSlide:function(item){
		slide.reiniciarTime = true;
		var aux = item * -100;
		slide.cajaSlide.style.left = aux+"%"; 
		for (var i = 0; i < slide.paginacion.length; i++) {
			slide.paginacion[i].style.opacity = .5;	
		}
		slide.paginacion[item].style.opacity = 1;
		if (slide.animacionSlide == "slide")
			slide.cajaSlide.style.transition = ".7s left ease-in-out";

		if (slide.animacionSlide == "fade"){
			slide.imgSlide[item].style.opacity = 0;	
			slide.imgSlide[item].style.transition = ".7s opacity ease-in-out";
			setTimeout(function(){slide.imgSlide[item].style.opacity = 1;},500);
		}

	},
	intervalo: function(){
		setInterval(function(){
			if (slide.reiniciarTime)
				slide.reiniciarTime = false;
			else
				metodos.avanzar();
		},slide.velocidadSlide)
	}
		
}


metodos.incioSlide();