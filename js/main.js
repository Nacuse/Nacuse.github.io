$(document).ready(function(){
    // Menú hamburguesa (página Inicio)
    $(".burger").click(function(){
        $(".menu").animate({height:"toggle"},500);
    });
    $(".cerrar").click(function(){
        $(".menu").animate({height:"toggle"},500);
    });
    // Menú hamburguesa (resto páginas)
    $(".burger2").click(function(){
        $(".burger2").toggleClass("abierto"); 
        $(".menu2").animate({height:"toggle"},500);
        $(".menu2 a").toggleClass("aparicion");
    });
    // Cambio de estilo según scroll vertical (cambio de clase .inicio de header y fondo gris de logo al hacer scroll)
    $(window).on("scroll", function(){ 
        var posicion = $("#fila1").offset(); 
        if ($(window).scrollTop() > posicion.top - 140) { 
            $("header").removeClass("inicio");
        } else {
            $("header").addClass("inicio");
        } 
    });
    $(window).on("scroll", function(){ 
        var posicion = $("#fila1").offset(); 
        if ($(window).scrollTop() > posicion.top - 140) { 
            $("#span").addClass("grey");
        } else {
            $("#span").removeClass("grey");
        } 
    });
    // Scroll vertical suave al pulsar enlace a id en misma página (botones flecha abajo y arriba)
    $("a").on("click", function(){ 
        if (this.hash !== "") { 
            var hash = this.hash; 
            $("html,body").animate({
                scrollTop: $(hash).offset().top 
            }, 750);
        } 
    });
    // Ventana modal (página detalle)
    $("#open").click(function(){
        $(".overlay, .modal").addClass("visible"); 
    });
    $("#close, .overlay").click(function(){ 
        $(".overlay, .modal").removeClass("visible");
    });
});