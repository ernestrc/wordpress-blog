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
            top: 270
            , bottom: function () {
                return (this.bottom = $('.footer').outerHeight(true))
            }
        }
    });
    var colorConfig = {
        'backgroundTitle':'#FFFFFF',
        'backgroundMenu':'#FFFFFF'
    }

    function getRandomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = '#';
        for (var i = 0; i < 6; i++ ) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    var timer = null;

    function spectralContinuum(element) {
            var randomColor=getRandomColor();
            element.css('color',randomColor);
            timer = setTimeout(function (){
                    spectralContinuum(element)}
                ,100)
    }

    jQuery('#ernestrc-menu').click(function(){
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
    });

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
//    var middle = jQuery('.categories').offset().left - jQuery('.search-menu').offset().left;

    jQuery('.fa-folder-o').css("top",getHeightOfDiv(jQuery('.home-top'),3));

//    jQuery('.about-menu').css("left",getWidthOfDiv(jQuery('.home-top'),2));



    jQuery('#ernestrc-menu').hover(function(){
//            jQuery('#ernestrc-fx').css('cursor','pointer');

            //Change colors to face
            spectralContinuum(jQuery('#ernestrc-fx'));
            jQuery('#ernestrc-fx').css('background',colorConfig.backgroundMenu);


            //Move away title
//            jQuery('#blog-title').css('color',colorConfig.backgroundMenu);

            //put wrapper in front
            jQuery('.wrapper-top').css('opacity','100');

            //Open menu options
            jQuery(this).css('width','120%')
                .css('left','auto')
                .css('top','-290px')
                .css('height','370px');

            setTimeout(function(){
                jQuery('#blog-menu').css('visibility','visible').css('top','0');
            },500);
            jQuery('#ernestrc-icons').css('opacity','0');

            //Change background of menu
            jQuery('.home-top, .sticky-bar').css('background',colorConfig.backgroundMenu)

    },function(){
            if (timer !== null) {
                clearTimeout(timer);
            }
            //return face to initial color
            jQuery('#ernestrc-fx').css('color','#d9534f').css('background',colorConfig.backgroundTitle);
            jQuery('#blog-menu').css('visibility','hidden').css('top','-1000px');

            setTimeout(function(){

                jQuery('.wrapper-top').css('opacity','0');
                jQuery('#ernestrc-icons').css('opacity','100');
            },500);

            //title
//            jQuery('#blog-title').css('color','inherit');

            //close menu options
            jQuery(this).css('width','120px')
                .css('left','50%')
                .css('top','-15px')
                .css('height','100px');
            jQuery('#blog-menu').css('opacity','0');

            //Change color of menu back
            jQuery('.home-top, .sticky-bar').css('background',colorConfig.backgroundTitle)

        }
    )

} )( jQuery );