$(document).ready(function(){
    
var visibility = $(window).width();

var btnservicios1 = function(){

    $('#btnServicios').click(function(){

        $('#btnServicios').toggleClass('back');
        $('#empresas').addClass('hiden');
        $('#btnEmpresas').removeClass('back');
        $('#servicios').toggleClass('hiden');
        
    });
}

var btnempresas1 = function(){

    $('#btnEmpresas').click(function(){

        $('#btnEmpresas').toggleClass('back');
        $('#servicios').addClass('hiden');
        $('#btnServicios').removeClass('back');
        $('#empresas').toggleClass('hiden');

    });
}
    


    
    if( visibility >= 992){
        btnservicios1();
        btnempresas1();
    }


});