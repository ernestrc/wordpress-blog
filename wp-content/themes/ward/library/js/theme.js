( function( $ ) {
	// Responsive videos
	var all_videos = $( '.entry-content' ).find( 'iframe[src*="player.vimeo.com"], iframe[src*="youtube.com"], iframe[src*="youtube-nocookie.com"], iframe[src*="dailymotion.com"],iframe[src*="kickstarter.com"][src*="video.html"], object, embed' ),
		f_height;

	all_videos = all_videos.not( 'object object' );

	all_videos.each( function() {
		var video = $(this);

		if ( video.parents( 'object' ).length )
			return;

		if ( ! video.prop( 'id' ) )
			video.attr( 'id', 'rvw' + Math.floor( Math.random() * 999999 ) );

		video
			.wrap( '<div class="responsive-video-wrapper" style="padding-top: ' + ( video.attr( 'height' ) / video.attr( 'width' ) * 100 ) + '%" />' )
			.removeAttr( 'height' )
			.removeAttr( 'width' );
	} );

	// Footer height
	$(window)
		.resize( function() {
			footer_height();
		} )
		.load( function() {
			footer_height();
		} );

	function footer_height() {
		f_height = $( '#footer-content' ).outerHeight() + 1;
		$( '#footer' ).css( { height: f_height + 'px' } );
		$( '#page' ).css( { marginBottom: -f_height + 'px', paddingBottom: f_height + 'px' } );
	}

	// Image anchor
	$( 'a:has(img)' ).addClass('image-anchor');

	$( 'a[href="#"]' ).click( function(e) {
		e.preventDefault();
	});

    jQuery('#nav-wrapper').height(jQuery("#top-ernestrc").height());

    jQuery('#top-ernestrc').affix({
        offset: {
            top: 370
            , bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    });


    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var timer = null;
    var timer2 = null;

    function spectralContinuum(element) {
            var randomColor=getRandomColor();
            element.css('color',randomColor);
            timer = setTimeout(function (){
                    spectralContinuum(element)}
                ,100)
    }

    jQuery('.wrapper-top').css("height",jQuery('.home-top').css("height"));

    function getHeightOfDiv(div,divider){
        var substring = div.css("height").substring(0,3);
        var height = parseInt(substring) / divider;
        return String(height) + "px"
    }

    function getWidthOfDiv(div,divider){
        var string =  div.css("width").trim();
        var substring = div.css("width").substring(0,string.length-2);
        var width = parseInt(substring) / divider;
        return String(width) + "px"
    }

//    jQuery('.fa-folder-o').css("top",getHeightOfDiv(jQuery('.home-top'),3));

var menu = false;
var lockedMenu = false;

    function bannerFxOff(){

        if (timer2 !== null) {
            clearTimeout(timer2);
            timer2 = null
        }

        if(!lockedMenu==true){
            if(menu==true){
                    jQuery('#ernestrc-fx').css('color','#F06665').css('background',colorConfig.backgroundTitle).css('text-shadow',"0px 0px 2px #FFF");
                    jQuery('.wrapper-top').css('opacity','0');
                    jQuery('.wrapper-top').css('visibility','hidden');
                    jQuery('.middle-circle').css('background','#FFFFFF');
                    jQuery('.sticky-bar').css('background','#FFFFFF');
                    menu = false;

            }
        }
    }

    function bannerFxOn(){

        if(menu == false && lockedMenu == false){
            if(timer == null){
                console.log("Yuuuuuuuuup!");
                jQuery('#ernestrc-fx').css('color','#FFF').css('background',colorConfig.backgroundTitle).css('text-shadow',"0px 0px 20px #FFF");
                spectralContinuum2(jQuery('#ernestrc-fx'));
            }
                jQuery('.wrapper-top').css('visibility','visible');
                jQuery('.wrapper-top').css('opacity','50');
                jQuery('.middle-circle').css('background','#F06665');
                jQuery('.sticky-bar').css('background','#F06665');
                menu = true;
        }
    }

    jQuery('#main').hover(function(){
        bannerFxOff();
    });


    jQuery('#ernestrc-icons').hover(function(){
            bannerFxOn();
        });

    jQuery('#ernestrc-icons').click(function(){
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
        if(lockedMenu){
            jQuery('.middle-circle').css('background','#FFFFFF');
            jQuery('.sticky-bar').css('background','#FFFFFF');
            jQuery('.wrapper-top').css('opacity','0');
            lockedMenu=false
            jQuery('.fa-lock').css('opacity','0');
        } else {
            clearTimeout(timer);
            jQuery('.middle-circle').css('background','#F06665');
            jQuery('.sticky-bar').css('background','#F06665');
            jQuery('.fa-lock').css('opacity','50');
            jQuery('.wrapper-top').css('opacity','100');
            lockedMenu=true
        }
    });

    var colorConfig = {
        'backgroundTitle':'#FFFFFF',
        'backgroundMenu':'#FFFFFF'
    }



} )( jQuery );