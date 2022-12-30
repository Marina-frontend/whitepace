/*--Menu BURGER-----------*/
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger, .header__menu, .header__nav').toggleClass('active');
        // $('.header__burger, ').toggleClass('active');
        $('body'),toggleClass('lock');
    });
});

let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.arrow');
	for(i=0; i<arrow.length; i++){
			let thisLink=arrow[i].previousElementSibling;
			let subMenu=arrow[i].nextElementSibling;
			let thisArrow=arrow[i];

			thisLink.classList.add('parent');
		arrow[i].addEventListener('click', function(){
			subMenu.classList.toggle('open');
			thisArrow.classList.toggle('active');
		});
	}
}else{
	body.classList.add('mouse');
}

/*-----Слайдер Tarif Plans------------*/
$(document).ready(function(){
	$('.choose__items').slick({
		arrows:false,
		dots:false,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1050,
				settings: {
					slidesToShow:2,
					dots: true,
					autoplay:true,
					speed:1000,
					autoplaySpeed:700,
					pauseOnFocus:true,
				}
			},
			{
				breakpoint: 663,
				settings: {
					slidesToShow:1,
					dots: true,
					autoplay:true,
					autoplaySpeed:700,
					pauseOnFocus:true,
				}
			}
		]
	});
});

/*-----Слайдер CLIENTS--------------*/
$(document).ready(function(){
	$('.clients__items').slick({
		arrows:false,
		dots:true,
		slidesToShow:3,
		autoplay:false,
		speed:1000,
		autoplaySpeed:800,
		responsive:[
			{
				breakpoint: 1050,
				settings: {
					slidesToShow:2,
					autoplay:true,
					speed:800,
					autoplaySpeed:700,
					pauseOnFocus:true,
					centerMode: true,
				}
			},
			{
				breakpoint: 663,
				settings: {
					slidesToShow:1,
					autoplay:true,
					autoplaySpeed:700,
					pauseOnFocus:true,
				}
			}
		]
	});
});

/*--Для работы с svg---*/
$("img.img-svg").each(function () {
    var $img = $(this);
    var imgClass = $img.attr("class");
    var imgURL = $img.attr("src");
    $.get(imgURL, function (data) {
        var $svg = $(data).find("svg");
        if (typeof imgClass !== "undefined") {
            $svg = $svg.attr("class", imgClass + " replaced-svg");
        }
        $svg = $svg.removeAttr("xmlns:a");
        if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
            $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
        }
        $img.replaceWith($svg);
    }, "xml");
});

