(function($, document, window){
	
	$(document).ready(function(){

		// Cloning main navigation for mobile menu
		$(".mobile-navigation").append($(".main-navigation .menu").clone());

		// Mobile menu toggle 
		$(".menu-toggle").click(function(){
			$(".mobile-navigation").slideToggle();
		});

		$(".offer img, .news img").panr({
			sensitivity: 15,
			scale: false,
			scaleOnHover: true,
			scaleTo: 1.2,
			scaleDuration: 0.25,
			panY: true,
			panX: true,
			panDuration: 1.25,
			resetPanOnMouseLeave: false
		});

		$(".testimonial-slider").flexslider({
			directionNav: false,
			controlNav: true
		});

		// if( $(".map").length ) {
		// 	$('.map').gmap3({
		// 		map: {
		// 			options: {
		// 				maxZoom: 14,
		// 				scrollwheel: false
		// 			}  
		// 		},
		// 		marker:{
		// 			address: "Chau. de Roodebeek 206, 1200 Bruxelles, België",
		// 			// options: {
		// 			// 	icon: new google.maps.MarkerImage(
		// 			// 		"images/map-marker.png",
		// 			// 		new google.maps.Size(43, 53, "px", "px")
		// 			// 	)
		// 			// }
		// 		}
		// 	},
		// 	"autofit" );
	    	
	    // }

		$('.bottom-header .social-links').hide();
		// $('.team .social-links').hide();
		// $('.right-section').hide();

		$(".offer__form .button").click(function(){
			$('.offer__form').hide();
			$('.offer__action').show();
		});
		
	});

	$(window).load(function(){

	});

})(jQuery, document, window);

const pageTitleElements = document.getElementsByTagName('title');
if(pageTitleElements.length > 0 && pageTitleElements[0].textContent === 'Thuis | blog'){
	const blogNews = document.querySelectorAll('.news');

	blogNews.forEach((item, index)=>{
		const blogNewsButton = document.createElement('a');
		blogNewsButton.textContent = 'Lees verder!';
		blogNewsButton.setAttribute('target', '_blank');
		blogNewsButton.setAttribute('href', `blog-${index + 1}.html`);
		// blogNewsButton.setAttribute('href', '#!');
		blogNewsButton.classList.add('news__link', 'button');
		item.appendChild(blogNewsButton);
	});
}

const entryTitles = document.querySelectorAll('.entry-title__text');
const MAX_LENGTH = 137; 

entryTitles.forEach((item) => {
    let text = item.textContent;
    if (text.length > MAX_LENGTH) {
        item.textContent = text.slice(0, MAX_LENGTH) + '...';
    }
});

