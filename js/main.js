(function(){
  'use strict';

  document.addEventListener('DOMContentLoaded', function(){
    var division = document.getElementById('division');
    var carroceria = document.getElementById('carroceria');
    var perfil = document.getElementById('pilotoPerfil');
    var piloto= document.getElementById('nombre');


    //Mostrar PILOTOS

    $('div.carroceria a').on('click',function(){
      // $('div.pilotos').slideUp("2000",'linear');
      var enlace = $(this).attr('href');
      $(enlace).slideToggle(2000,'linear');

      return false;
    })

    //Menu movil

    $('.menu-movil').on('click',function(){
      $('.navegacion-principal').slideToggle();
    })


  });
  // DOM CONTENT
})();

$(function(){
//Mostrar pistasMundiales
  $('div.pista').hide();

  $('div.prueba a').on('click',function(){
    $('div.prueba h3').css({'border-bottom':'none'});
    // $('div.pista').hide();
    var pista = $(this).attr('href');
    $(pista).slideToggle(1000,'linear');
    $(this).css({'border-bottom':'2px solid #fff'});
  });



});
