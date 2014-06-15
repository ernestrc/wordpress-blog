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

//    jQuery('.fa-folder-o').css("top",getHeightOfDiv(jQuery('.home-top'),3));

    jQuery('#ernestrc-menu').hover(function(){
            function bannerFxOn(){

                //Change colors to face
                spectralContinuum(jQuery('#ernestrc-fx'));
                jQuery('#ernestrc-fx').css('background',colorConfig.backgroundMenu);


                //Move away title
//            jQuery('#blog-title').css('color',colorConfig.backgroundMenu);

                //Open menu options
                jQuery(this).css('width','120%')
                    .css('left','auto')
                    .css('top','-290px')
                    .css('height','370px');


                jQuery('#ernestrc-icons').css('opacity','0');

                //Change background of menu
                jQuery('.home-top, .sticky-bar').css('background',colorConfig.backgroundMenu)

            }
            bannerFxOn();
//
//          jQuery('#ernestrc-fx').css('cursor','pointer');

            //put wrapper in front
            jQuery('.wrapper-top').css('opacity','100');

            setTimeout(function(){
//                jQuery('#blog-menu').css('visibility','visible').css('top','0');//TODO set back to whatever
            },500);



        },function(){
            function bannerFxOff(){

                if (timer !== null) {
                    clearTimeout(timer);
                }
                //return face to initial color
                jQuery('#ernestrc-fx').css('color','#d9534f').css('background',colorConfig.backgroundTitle);


                setTimeout(function(){
                    jQuery('#ernestrc-icons').css('opacity','100');
                },500);

                //title
//            jQuery('#blog-title').css('color','inherit');

                //close menu options
                jQuery(this).css('width','120px')
                    .css('left','50%')
                    .css('top','-15px')
                    .css('height','100px');

                //Change color of menu back
                jQuery('.home-top, .sticky-bar').css('background',colorConfig.backgroundTitle)


            }
            bannerFxOff();

//                        jQuery('#blog-menu').css('visibility','hidden').css('top','-1000px');//TODO SEt back to visib hidden
            setTimeout(function(){
//                jQuery('.wrapper-top').css('opacity','0'); //TODO Set back to 0
            },500);

//                        jQuery('#blog-menu').css('opacity','0'); //TODO set back

        }
    )

} )( jQuery );