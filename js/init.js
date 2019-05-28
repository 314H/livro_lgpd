(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
	$(document).ready;
    $('.collapsible').collapsible();
    $('.dropdown-trigger').dropdown();
	  
  }); // end of document ready
})(jQuery); // end of jQuery name space

var root = document.documentElement;
const lists = document.querySelectorAll('.hs');
lists.forEach(el => {
  const listItems = el.querySelectorAll('li');
  const n = el.children.length;
  el.style.setProperty('--total', n);
});

document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.modal');
    var instances = M.Modal.init(elems, options);
  });



  $(document).ready(function() {
  	// set unique id to videoplayer for the Webflow video element
  	var src = $('#video-container1').children('iframe').attr('src');

	$('.modal').modal();
	
  	// when object with class open-popup is clicked...
  	$('.modal-trigger').click(function(e) {
  		e.preventDefault();
  		// change the src value of the video
  		$('#video-container1').children('iframe').attr('src', src);
  	});

  	// when object with class close-popup is clicked...
  	$('.modal-close').click(function(e) {
  		e.preventDefault();
  		$('#video-container1').children('iframe').attr('src', '');
  	});
  });
