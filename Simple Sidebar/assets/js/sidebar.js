var sb_right_default = 0;
jQuery(document).ready(function($) {
	sb_right_default = parseInt($('.side-bar').css('right').replace('px',''));

    $('.side-bar').click(function(event) {
        /* Act on the event */
        var sb_current_position = parseInt($('.side-bar').css('right').replace('px',''));

        if(sb_current_position == 0) {
        	$('.side-bar').animate({right:sb_right_default+'px'});
        } else {
        	$('.side-bar').animate({right:'0px'});
        }
    });
});