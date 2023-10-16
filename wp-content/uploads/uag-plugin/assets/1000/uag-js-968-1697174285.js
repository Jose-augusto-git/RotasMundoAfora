document.addEventListener("DOMContentLoaded", function(){ var ssLinksParent = document.querySelector( '.uagb-block-96da3b5a' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
window.addEventListener("DOMContentLoaded", function(){
	UAGBForms.init( {"block_id":"143b1720","reCaptchaEnable":false,"reCaptchaType":"v2","reCaptchaSiteKeyV2":"","reCaptchaSecretKeyV2":"","reCaptchaSiteKeyV3":"","reCaptchaSecretKeyV3":"","afterSubmitToEmail":"joserock0001@gmail.com","afterSubmitCcEmail":"joserock0001@gmail.com","afterSubmitBccEmail":"joserock0001@gmail.com","afterSubmitEmailSubject":"Envio de formul\u00e1rio","sendAfterSubmitEmail":true,"confirmationType":"message","hidereCaptchaBatch":false,"captchaMessage":"Preencha o captcha acima.","confirmationUrl":""}, '.uagb-block-143b1720', 968 );
});
window.addEventListener("DOMContentLoaded", function(){
	UAGBTimelineClasses( {"block_id":"5cc9af97","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-5cc9af97' );
});
window.addEventListener("resize", function(){
	UAGBTimelineClasses( {"block_id":"5cc9af97","timelinAlignment":"center","timelinAlignmentTablet":"left","timelinAlignmentMobile":"left"}, '.uagb-block-5cc9af97' );
});
 });