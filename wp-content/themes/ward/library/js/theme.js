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
            top: 360
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

    function spectralContinuum2(element,counter){
        if(counter % 2){
            element.css('text-shadow',"0px 0px 2px #FFF");
            var ccounter = counter +1
        }else {
            element.css('text-shadow',"0px 0px 20px #FFF");
        }
        timer2 = setTimeout(function (){
            spectralContinuum2(element,ccounter)
        },100);
    }


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

//    jQuery('#ernestrc-menu-bar').css('background-size',getWidthOfDiv(jQuery('#ernestrc-menu-bar'),1)+' '+getHeightOfDiv(jQuery('#ernestrc-menu-bar'),1));

//    jQuery('.fa-folder-o').css("top",getHeightOfDiv(jQuery('.home-top'),3));

var menu = false;
var lockedMenu = false;

    function bannerFxOff(){
        if(!lockedMenu==true){
            if(menu==true){
                changeHexagonBackground(".middle-circle",'#89A4CC');
                jQuery('#search-comment').css('opacity',"50");
                jQuery('#sticky-background-leftA').css('opacity','0');
                jQuery('#sticky-background-rightA').css('opacity','0');
                jQuery('.wrapper-top').css('opacity','0');
                jQuery('.wrapper-top').css('visibility','hidden');
                menu = false;
            }
        }
    }

    function bannerFxOn(){

        if(menu == false && lockedMenu == false){
            changeHexagonBackground(".middle-circle",'#D58381');
            jQuery('#search-comment').css('opacity',"0");
            jQuery('#sticky-background-leftA').css('opacity','100');
            jQuery('#sticky-background-rightA').css('opacity','100');
            jQuery('.wrapper-top').css('visibility','visible');
            jQuery('.wrapper-top').css('opacity','50');
//            if(timer == null){
//                console.log("Yuuuuuuuuup!");
//            }
            menu = true;
        }
    }

    jQuery('#main').hover(function(){
        bannerFxOff();
    });


    jQuery('#ernestrc-icons').hover(function(){
            bannerFxOn();
        });

    function changeHexagonBackground(className,color){
        jQuery(className).css('background',color);
        jQuery('#main')
            .append("<style>" + className + ":before{border-bottom:30px solid "+ color +" !important;}</style>")
            .append("<style>"+ className + ":after{border-top:30px solid "+ color +" !important;}</style>");
    }

    jQuery('#ernestrc-icons').click(function(){
        jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
        if(lockedMenu){
            jQuery('#sticky-background-leftA').css('opacity','0');
            jQuery('#sticky-background-rightA').css('opacity','0');
            changeHexagonBackground(".middle-circle","#89A4CC");
            jQuery('.wrapper-top').css('opacity','0');
            lockedMenu=false
            jQuery('.fa-lock').css('opacity','0');
        } else {
            clearTimeout(timer);
            jQuery('#sticky-background-leftA').css('opacity','100');
            jQuery('#sticky-background-rightA').css('opacity','100');
            changeHexagonBackground(".middle-circle","#D58381");
            jQuery('.fa-lock').css('opacity','50');
            jQuery('.wrapper-top').css('opacity','100');
            lockedMenu=true
        }
    });

    var colorConfig = {
        'backgroundTitle':'#FFFFFF',
        'backgroundMenu':'#FFFFFF'
    };
    /**
     * Menu Commons
     */
    jQuery('.bakground').hover(function(){
        changeHexagonBackground("#search-cell","#F9C3BA");
        changeHexagonBackground("#home-cell","#F4AD9C");
        changeHexagonBackground("#tags-cell","#F4C9BF");
        setTimeout(function(){
            jQuery('#search-form').css('opacity','0');
            jQuery('#tags-cell1').css('opacity','0');
            jQuery('#tags-cell2').css('opacity','0');
            jQuery('#tags-cell3').css('opacity','0');
            jQuery('#tags-cell4').css('opacity','0');
        },300);

    });

    /**
     * Search Cell
     */
    jQuery('#search-cell').hover(function(){
        changeHexagonBackground("#search-cell","#FADCD5");

        setTimeout(function(){
            jQuery('#search-form').css('opacity','100');
        },300);
    });

    /**
     * Home Cell
     */
    jQuery('#home-cell').hover(function(){
        changeHexagonBackground("#home-cell","#F7D1C5");
    });

    /**
     * Tags Cell
     */
    jQuery('#tags-cell').hover(function(){
        changeHexagonBackground("#tags-cell","#F7DFD8");
        setTimeout(function(){
            jQuery('#tags-cell1').css('opacity','100');
            jQuery('#tags-cell2').css('opacity','100');
            jQuery('#tags-cell3').css('opacity','100');
            jQuery('#tags-cell4').css('opacity','100');
        },300);
    });



} )( jQuery );