( function( $ ) {

    var outdatedBrowser=function(k){var l=document.getElementById("outdated");var f=document.getElementById("btnCloseUpdateBrowser");var h=document.getElementById("btnUpdateBrowser");this.defaultOpts={bgColor:"#F25648",color:"#ffffff",lowerThan:"transform"};if(k){this.defaultOpts.bgColor=k.bgColor,this.defaultOpts.color=k.color;if(k.lowerThan=="IE8"||k.lowerThan=="borderSpacing"){k.lowerThan="borderSpacing"}else{if(k.lowerThan=="IE9"||k.lowerThan=="boxShadow"){k.lowerThan="boxShadow"}else{if(k.lowerThan=="IE10"||k.lowerThan=="transform"||k.lowerThan==""||typeof k.lowerThan==="undefined"){k.lowerThan="transform"}else{if(k.lowerThan=="IE11"||k.lowerThan=="borderImage"){k.lowerThan="borderImage"}}}}this.defaultOpts.lowerThan=k.lowerThan;bkgColor=this.defaultOpts.bgColor;txtColor=this.defaultOpts.color;cssProp=this.defaultOpts.lowerThan}else{bkgColor=this.defaultOpts.bgColor;txtColor=this.defaultOpts.color;cssProp=this.defaultOpts.lowerThan}var a=true;function g(i){l.style.opacity=i/100;l.style.filter="alpha(opacity="+i+")"}function d(i){g(i);if(i==1){l.style.display="none";a=true}}function e(i){g(i);if(i==1){l.style.display="block"}if(i==100){a=true}}function c(m,i){return(" "+m.className+" ").indexOf(" "+i+" ")>-1}var j=(function(){var n=document.createElement("div"),m="Khtml Ms O Moz Webkit".split(" "),i=m.length;return function(o){if(o in n.style){return true}o=o.replace(/^[a-z]/,function(p){return p.toUpperCase()});while(i--){if(m[i]+o in n.style){return true}}return false}})();if(!j(""+cssProp+"")){if(a&&l.style.opacity!=="1"){a=false;for(var b=1;b<=100;b++){setTimeout((function(i){return function(){e(i)}})(b),b*10)}}f.onmousedown=function(){l.style.display="none";return false}}l.style.backgroundColor=bkgColor;l.style.color=txtColor;h.style.color=txtColor;h.style.borderColor=txtColor;f.style.color=txtColor;h.onmouseover=function(){this.style.color=bkgColor;this.style.backgroundColor=txtColor};h.onmouseout=function(){this.style.color=txtColor;this.style.backgroundColor=bkgColor}};

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
                setTimeout(function(){
                jQuery('#title').css('opacity','100');
                jQuery('#subtitle').css('opacity','100');
                },300);
                changeHexagonBackground(".middle-circle",'#80A2D0');
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
            menu = true;
            jQuery('#title').css('opacity','0');
            jQuery('#subtitle').css('opacity','0');

            setTimeout(function(){
                jQuery('.wrapper-top').css('visibility','visible');
                jQuery('.wrapper-top').css('opacity','100');
                jQuery('#sticky-background-leftA').css('opacity','100');
                jQuery('#sticky-background-rightA').css('opacity','100');
                changeHexagonBackground(".middle-circle",'#D58381');
                jQuery('#search-comment').css('opacity',"0");

            },300);

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
            changeHexagonBackground(".middle-circle","#80A2D0");
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
        changeHexagonBackground("#search-cell","transparent");
        changeHexagonBackground("#home-cell","transparent");
        changeHexagonBackground("#tags-cell","transparent");
        setTimeout(function(){
            jQuery('#search-form').css('opacity','0');
            jQuery('#tags-cell1').css('opacity','0');
            jQuery('#tags-cell2').css('opacity','0');
            jQuery('#tags-cell3').css('opacity','0');
            jQuery('#tags-cell4').css('opacity','0');
            jQuery('#inbox-cell1').css('opacity','0');
            jQuery('#inbox-cell2').css('opacity','0');
            jQuery('#inbox-cell3').css('opacity','0');
            jQuery('#inbox-cell4').css('opacity','0');


        },300);

    });

    /**
     * Search Cell
     */
    jQuery('#search-cell').hover(function(){
        changeHexagonBackground(".middle-circle","#D6A987");
        jQuery('#background-rightE').css('opacity','100');
        jQuery('#background-leftE').css('opacity','100');
        jQuery('#sticky-background-leftE').css('opacity','100');
        jQuery('#sticky-background-rightE').css('opacity','100');

        setTimeout(function(){
            jQuery('#search-form').css('opacity','100');
        },300);
    },function(){
        changeHexagonBackground(".middle-circle","#D58381");
        jQuery('#background-rightE').css('opacity','0');
        jQuery('#background-leftE').css('opacity','0');
        jQuery('#sticky-background-leftE').css('opacity','0');
        jQuery('#sticky-background-rightE').css('opacity','0');
    });

    /**
     * Home Cell
     */
    jQuery('#home-cell').hover(function(){
        changeHexagonBackground(".middle-circle","#D281CD");
        jQuery('#background-rightD').css('opacity','100');
        jQuery('#background-leftD').css('opacity','100');
        jQuery('#sticky-background-leftD').css('opacity','100');
        jQuery('#sticky-background-rightD').css('opacity','100');

    },function(){
        changeHexagonBackground(".middle-circle","#D58381");
        jQuery('#background-rightD').css('opacity','0');
        jQuery('#background-leftD').css('opacity','0');
        jQuery('#sticky-background-leftD').css('opacity','0');
        jQuery('#sticky-background-rightD').css('opacity','0');
    });

    /**
     * Tags Cell
     */
    jQuery('#tags-cell').hover(function(){
        changeHexagonBackground(".middle-circle","#AFD18C");
        jQuery('#background-rightF').css('opacity','100');
        jQuery('#background-leftF').css('opacity','100');
        jQuery('#sticky-background-leftF').css('opacity','100');
        jQuery('#sticky-background-rightF').css('opacity','100');
        setTimeout(function(){
            jQuery('#tags-cell1').css('opacity','100');
            jQuery('#tags-cell2').css('opacity','100');
            jQuery('#tags-cell3').css('opacity','100');
            jQuery('#tags-cell4').css('opacity','100');
        },300);
    },function(){
        changeHexagonBackground(".middle-circle","#D58381");
        jQuery('#background-rightF').css('opacity','0');
        jQuery('#background-leftF').css('opacity','0');
        jQuery('#sticky-background-leftF').css('opacity','0');
        jQuery('#sticky-background-rightF').css('opacity','0');
    });

    /**
     * Archive Cell
     */
    function colorLoop(elem,newCounter){
        var counter = newCounter;
        if(counter % 2){
            changeHexagonBackground(elem,"#D9F6FA");
        } else {
            changeHexagonBackground(elem,"#A3E7F0");
        }
            counter = counter + 1;
        archive = setTimeout(function(){
            colorLoop(elem,counter)
        },750);
    }
    var archive;
    jQuery('#archive-cell').hover(function(){
        changeHexagonBackground(".middle-circle","#7CD1D3");
        jQuery('#background-rightC').css('opacity','100');
        jQuery('#background-leftC').css('opacity','100');
        jQuery('#sticky-background-leftC').css('opacity','100');
        jQuery('#sticky-background-rightC').css('opacity','100');
    },function(){
        changeHexagonBackground(".middle-circle","#D58381");
        jQuery('#background-rightC').css('opacity','0');
        jQuery('#background-leftC').css('opacity','0');
        jQuery('#sticky-background-leftC').css('opacity','0');
        jQuery('#sticky-background-rightC').css('opacity','0');
        changeHexagonBackground("#archive-cell","transparent");
    });

    /**
     * Inbox Cell
     */
    jQuery('#inbox-cell').hover(function(){
        changeHexagonBackground(".middle-circle","#A683CE");
        jQuery('#background-rightG').css('opacity','100');
        jQuery('#background-leftG').css('opacity','100');
        jQuery('#sticky-background-leftG').css('opacity','100');
        jQuery('#sticky-background-rightG').css('opacity','100');
        setTimeout(function(){
            jQuery('#inbox-cell1').css('opacity','100');
            jQuery('#inbox-cell2').css('opacity','100');
            jQuery('#inbox-cell3').css('opacity','100');
            jQuery('#inbox-cell4').css('opacity','100');
        },300);
    },function(){
        changeHexagonBackground(".middle-circle","#D58381");
        jQuery('#background-rightG').css('opacity','0');
        jQuery('#background-leftG').css('opacity','0');
        jQuery('#sticky-background-leftG').css('opacity','0');
        jQuery('#sticky-background-rightG').css('opacity','0');
    });



    jQuery( document ).ready(function() {
        jQuery('[id=icons-menu]').css('background','transparent !important')

        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform'
        })
    })

} )( jQuery );