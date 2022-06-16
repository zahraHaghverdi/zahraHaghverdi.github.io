$(document).ready(function(){
// slider-main
$('.sliderMain').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        rtl:true,
        dots: false, 
        arrows:false,
});  

// part-box-slider-shoe
$('.part-box-slider-shoe').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        rtl:true,
        dots: false, 
        arrows:false,
        //   options
        responsive: [ 
            { breakpoint: 1177, 
                settings: { slidesToShow: 3, slidesToScroll: 3, infinite: true, dots: false, arrows:false }
            },
            { breakpoint: 838, 
                settings: { slidesToShow: 2, slidesToScroll: 2, infinite: true, dots: false, arrows:false }
            },
            { breakpoint: 429, 
                settings: { slidesToShow: 1, slidesToScroll: 1, infinite: true, dots: false, arrows:false }
            },
        ]
    });   
    
});
















