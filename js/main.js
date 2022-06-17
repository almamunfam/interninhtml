$(function(){
  // sticky navigation var 
  $(window).scroll(function(){
    var scroll=$(this).scrollTop();
    if( scroll>100 ){
        $(".navbar").addClass ("mamun");
    }
    else{
        $(".navbar").removeClass ("mamun");
    }
        });

      // service part 
       $('.slider_mainnn').slick({
         vertical:true,
         slidesToShow:6,
         infinite:true,
         slidesToScroll:1,
         autoplay: true,
         autoplaySpeed: 2000,
         arrows: false,
      });
     
});

// first slider section 
$(document).ready(function(){
  $('.slider_img_section').slick({
    slidesToShow:6,
    slidesToScroll:1,
    infinite:true,
     autoplay: true,
     autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '30px',
          centerMode: true,
        }
      }
    ]
  });
});

// second slider section 
$(document).ready(function(){
  $('.secondslider_img_section').slick({
    slidesToShow:6,
    infinite:true,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '30px',
          centerMode: true,
        }
      }
    ]

  });
});
// team section slider section 
$(document).ready(function(){
  $('.owl_team_section').slick({
    slidesToShow:4,
    infinite:true,
    slidesToScroll:1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '60px',
          centerMode: true,
        }
      }
    ]

  });
});




$(document).ready(function(){
  $('.collapse.in').each(function(){
  $(this).parent().find(".glyphicon").removeClass("glyphicon-plus").addClass("glyphicon-minus");
});
  
$('.collapse').on('shown.bs.collapse', function(){
  $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
}).on('hidden.bs.collapse', function(){
  $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
});       
});