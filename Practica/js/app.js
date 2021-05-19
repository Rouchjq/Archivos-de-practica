/*MENU RESPONSIVE*/
var btn_menuOpen = document.getElementById("btn_menuOpen"),
    btn_menuClose = document.getElementById("btn_menuClose"),
    menu_responsivo = document.getElementById("menuBar"),
    enlaces = document.getElementById("enlaces");

    // Click abrir
    btn_menuOpen.addEventListener("click", function(){
        menu_responsivo.classList.add("active");
    })

    //Click cerrar

    btn_menuClose.addEventListener("click", function(){
        menu_responsivo.classList.remove("active");
    })

    //Cerrar con elementos de navegacion

    enlaces.addEventListener("click", function(){
        menu_responsivo.style.transitionDelay = "0.5s";
        menu_responsivo.classList.remove("active");
    })


 /*SLIDER DE PRODUCTOS*/
 var slider = document.querySelectorAll('.productos'),
    btn_left = document.getElementById("btn-left"),
    btn_right = document.getElementById("btn-right");

    
    var position = 0;

    var moveSlide = function(item){ 
    item.style.transform = `translateX(-${position*100}%)`
    }

    var rightAction = function (){
        if(position < slider.length - 1 ){
            position++;
        }else{
            position = 0;
        }
        slider.forEach(moveSlide);
    }

    function leftAction (){
        if(position > 0){
            position--;
        }else{
            position = slider.length - 1;
        }
        slider.forEach(moveSlide);
    }

    var automaticMoveSlides = function() {
        rightAction();
    }

    //Evento para el boton derecho
    btn_right.addEventListener("click",rightAction);
    //Evento para el boton izquierdo
    btn_left.addEventListener("click",leftAction);

    //Slider automatico
    setInterval(automaticMoveSlides,5000);



