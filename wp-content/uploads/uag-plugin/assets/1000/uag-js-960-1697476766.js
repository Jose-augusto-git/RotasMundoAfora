document.addEventListener("DOMContentLoaded", function(){ jQuery( document ).ready( function() {
	if( jQuery( '.uagb-block-393edfb8' ).length > 0 ){
	jQuery( '.uagb-block-393edfb8' ).find( ".is-carousel" ).slick( {"slidesToShow":3,"slidesToScroll":1,"autoplaySpeed":"3500","autoplay":true,"infinite":true,"pauseOnHover":true,"speed":"1000","arrows":true,"dots":true,"rtl":false,"prevArrow":"<button type='button' data-role='none' class='slick-prev' aria-label='Previous' tabindex='0' role='button' style='border-color: #d75a2b;border-radius:50px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='43' width = '43' fill ='#d75a2b'  ><path d='M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z'><\/path><\/svg><\/button>","nextArrow":"<button type='button' data-role='none' class='slick-next' aria-label='Next' tabindex='0' role='button' style='border-color: #d75a2b;border-radius:50px;border-width:0px'><svg xmlns='https:\/\/www.w3.org\/2000\/svg' viewBox='0 0 256 512' height ='43' width = '43' fill ='#d75a2b' ><path d='M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z'><\/path><\/svg><\/button>","responsive":[{"breakpoint":1024,"settings":{"slidesToShow":1,"slidesToScroll":1}},{"breakpoint":767,"settings":{"slidesToShow":1,"slidesToScroll":1}}]} );
	}
	var $scope = jQuery( '.uagb-block-393edfb8' );
	var enableEqualHeight = ( '1' );
			if( enableEqualHeight ){
				$scope.imagesLoaded( function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				});

				$scope.on( "afterChange", function() {
					UAGBTestimonialCarousel._setHeight( $scope );
				} );
			}
} );
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"143b1720","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"joserock0001@gmail.com","afterSubmitCcEmail":"joserock0001@gmail.com","afterSubmitBccEmail":"joserock0001@gmail.com","afterSubmitEmailSubject":"Envio de formul\u00e1rio","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Preencha o captcha acima.","confirmationUrl":""}, '.uagb-block-143b1720', 960 );
});
window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( {"block_id":"5cc9af97","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-5cc9af97' );
});
window.addEventListener("resize", function(){
	UAGBTimelineClasses( {"block_id":"5cc9af97","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-5cc9af97' );
});
 });