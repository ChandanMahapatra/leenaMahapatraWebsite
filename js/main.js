$(document).ready(function() {
            
            $('button').click(function() {
                    $(this).toggleClass('expanded').siblings('div').slideToggle();
                });
    
            $('.carousel').carousel({
                interval: 3000
            });

            $('.carousel').carousel('cycle');
    
			/*
			 *  Simple image gallery. Uses default settings
			 */

			$('.fancybox').fancybox();

			/* Custom effect */

			// Set custom style, close if clicked, change title type and overlay color
			$(".fancybox-effects-c").fancybox({
				wrapCSS    : 'fancybox-custom',
				closeClick : true,

				openEffect : 'none',

				helpers : {
					title : {
						type : 'inside'
					},
					overlay : {
						css : {
							'background' : 'rgba(238,238,238,0.85)'
						}
					}
				}
			});
    
            	/*
			 *  Thumbnail helper. Disable animations, hide close button, arrows and slide to next gallery item if clicked
			 */

			$('.fancybox-thumbs').fancybox({
				prevEffect : 'none',
				nextEffect : 'none',

				closeBtn  : false,
				arrows    : false,
				nextClick : true,

				helpers : {
					thumbs : {
						width  : 50,
						height : 50
					}
				}
			});

            $("#painting-section").on("click",function(e){
                
                $("#gallery-craft").hide();
                $("#gallery-painting").fadeIn();
                
                $("#option-craft").removeClass("options");
                $("#option-painting").addClass("options");
                
            });
            
             $("#craft-section").on("click",function(e){
                
                $("#gallery-painting").hide();
                $("#gallery-craft").fadeIn();
                
                $("#option-painting").removeClass("options");
                $("#option-craft").addClass("options");
            });

});

    
function init (){
window.sr = ScrollReveal();
    var options = {
        origin: 'left',
        duration : 300,
        delay: 300,
        mobile: false,
        useDelay: 'always',
    };
sr.reveal('.reveal', options);
}

window.onload = init;

function myFunction() {
    var x = document.getElementById("navbar");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}