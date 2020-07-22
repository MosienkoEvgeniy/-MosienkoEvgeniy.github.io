$(function() {

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });
	
});

$(window).load(function() {

	$(".loader_inner").fadeOut();
	$(".loader").delay(400).fadeOut("slow");

});

$(function(){
  $("#box").twentytwenty({
  	no_overlay: true,
  });
});

$(document).ready(function(){

	$('.enter').on('click', function(){
		$('.registration,.profile').toggle();
	});

	$('.exit').on('click', function(){
		$('.registration,.profile').toggle();
	});

	$('.cod').on('click', function(){
		$('.promocod,#cod').toggle();
	});

	$('#load_img').on('click', function(){
		$('.first_step,.second_step').toggle();
	});

	$('.up').on('click', function(){
		$('.first_step,.second_step').toggle();
	});

	$('.popup').magnificPopup();
	$('.popup_f').magnificPopup();

	$('.hidden-btn').on('click', function(){
		$('.hidden-btn').toggle();
		$('.know-hidden').toggle();
	});
});