$(document).ready(function() {

	var slideIndex = 1;
	showSlides(slideIndex);

	function showSlides(n) {
		var slides = $(".mySlides");
		var dots = $(".dot");

		if (n > slides.length) {
			slideIndex = 1;
		} 
    	if (n < 1) {
    		slideIndex = slides.length;
    	}
		for (var i = 0; i < slides.length; i++) {
	        slides[i].style.display = "none"; 
	    }
	    for (var i = 0; i < dots.length; i++) {
	        dots[i].className = dots[i].className.replace(" active", "");
	    }

	    slides[slideIndex-1].style.display = "block"; 
	    dots[slideIndex-1].className += " active";
  	}

    // I know this can be done by hover in CSS, just want to try it in JS
    $(".swing").mouseover(function(){
        $(".swing").css("animation-play-state", "running");
    });

    $(".swing").mouseout(function(){
        $(".swing").css("animation-play-state", "paused");
    });


  	$(".prev").click(function(){
 	    slideIndex -= 1;
   		showSlides(slideIndex);
  	});
  	
  	$(".next").click(function(){
  		slideIndex += 1;
  		showSlides(slideIndex);
  	});

  	$(".dot").click(function(){
  		var index = $(".dot").index(this);
  		slideIndex = index + 1;
  		showSlides(slideIndex);
  	});


});