(function($) { "use strict";
	
	$(document).ready(function() {

    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });

    $(".link")
        .mouseenter(function() {
            cursor.css({
                transform: "scale(3.2)"
            });
        })
        .mouseleave(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
        
    $(window)
        .mousedown(function() {
            cursor.css({
                transform: "scale(.2)"
            });
        })
        .mouseup(function() {
            cursor.css({
                transform: "scale(1)"
            });
        });
});

	//About page
	
	$(".about-text").on('click', function () {
		$("body").addClass("about-on");
	});
	$(".about-close").on('click', function () {
		$("body").removeClass("about-on");
	});

	
	//Contact page
	
	$(".contact-text").on('click', function () {
		$("body").addClass("contact-on");
	});
	$(".contact-close").on('click', function () {
		$("body").removeClass("contact-on");
	});

	
	//garphic page
	
	$(".graphic-text").on('click', function () {
		$("body").addClass("graphic-on");
	});
	$(".graphic-close").on('click', function () {
		$("body").removeClass("graphic-on");
	});

	
	//Web page
	
	$(".web-text").on('click', function () {
		$("body").addClass("web-on");
	});
	$(".web-close").on('click', function () {
		$("body").removeClass("web-on");
	});
	
	/**
   * Initiate portfolio lightbox 
   */
  const portfolioLightbox = GLightbox({
    selector: '.portfolio-lightbox'
  });



})(jQuery);

var images = [
	'./tumblr1.gif',
	'./tumblr2.gif',
	'./tumblr3.gif',
	'./tumblr4.gif',
	'./tumblr5.gif',
	'./tumblr6.gif',
	'./tumblr7.gif',
	'./tumblr8.gif',
	'./tumblr9.gif',
	'./tumblr10.gif',
	'./tumblr11.gif',
	'./tumblr12.gif',
	'./tumblr13.gif',
	'./tumblr14.gif',
	'./tumblr15.gif',
	'./tumblr16.gif',
	'./tumblr17.gif',
	'./tumblr18.gif'
];

var img = document.getElementById("img");

function imgDisp(num) {
	var num = Math.floor(Math.random() * 18);
	img.style.backgroundImage = 'url("' + images[num] + '")';
	img.style.backgroundRepeat = "no-repeat";
}
imgDisp();