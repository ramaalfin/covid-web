import $ from 'jquery';
import 'regenerator-runtime';
import './style/style.css';
import main from './scripts/main.js';

$(document).ready(() => {
  $(window).on("load scroll", function(){
    if($(window).scrollTop() > 0){
      $("header").addClass("sticky");
    }
    else{
      $("header").removeClass("sticky");
    }
  })
  $('a[href*="#"]').on('click',(e) => {

    $('html, body').animate({

      scrollTop : $($(this).attr('href')).offset().top,

    },
      500,
      'linear'
    );

  });
})
main();