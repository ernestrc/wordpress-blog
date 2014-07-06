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
            top: 380
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



//    function changeHexagonBackground(className,color){
//        jQuery(className).css('background',color);
//        jQuery('#main')
//            .append("<style>" + className + ":before{border-bottom:30px solid "+ color +" !important;}</style>")
//            .append("<style>"+ className + ":after{border-top:30px solid "+ color +" !important;}</style>");
//    }

//    var colorConfig = {
//        'backgroundTitle':'#FFFFFF',
//        'backgroundMenu':'#FFFFFF'
//    };
//    /**
//     * Menu Commons
//     */
//    jQuery('.bakground').hover(function(){
//        changeHexagonBackground("#search-cell","transparent");
//        changeHexagonBackground("#home-cell","transparent");
//        changeHexagonBackground("#tags-cell","transparent");
//        setTimeout(function(){
//            jQuery('#search-form').css('opacity','0');
//            jQuery('#tags-cell1').css('opacity','0');
//            jQuery('#tags-cell2').css('opacity','0');
//            jQuery('#tags-cell3').css('opacity','0');
//            jQuery('#tags-cell4').css('opacity','0');
//            jQuery('#inbox-cell1').css('opacity','0');
//            jQuery('#inbox-cell2').css('opacity','0');
//            jQuery('#inbox-cell3').css('opacity','0');
//            jQuery('#inbox-cell4').css('opacity','0');
//
//
//        },300);
//
//    });
//
//    /**
//     * Search Cell
//     */
//    jQuery('#search-cell').hover(function(){
//        changeHexagonBackground(".middle-circle","#D6A987");
//        jQuery('#background-rightE').css('opacity','100');
//        jQuery('#background-leftE').css('opacity','100');
//        jQuery('#sticky-background-leftE').css('opacity','100');
//        jQuery('#sticky-background-rightE').css('opacity','100');
//
//        setTimeout(function(){
//            jQuery('#search-form').css('opacity','100');
//        },300);
//    },function(){
//        changeHexagonBackground(".middle-circle","#D58381");
//        jQuery('#background-rightE').css('opacity','0');
//        jQuery('#background-leftE').css('opacity','0');
//        jQuery('#sticky-background-leftE').css('opacity','0');
//        jQuery('#sticky-background-rightE').css('opacity','0');
//    });
//
//    /**
//     * Home Cell
//     */
//    jQuery('#home-cell').hover(function(){
//        changeHexagonBackground(".middle-circle","#D281CD");
//        jQuery('#background-rightD').css('opacity','100');
//        jQuery('#background-leftD').css('opacity','100');
//        jQuery('#sticky-background-leftD').css('opacity','100');
//        jQuery('#sticky-background-rightD').css('opacity','100');
//
//    },function(){
//        changeHexagonBackground(".middle-circle","#D58381");
//        jQuery('#background-rightD').css('opacity','0');
//        jQuery('#background-leftD').css('opacity','0');
//        jQuery('#sticky-background-leftD').css('opacity','0');
//        jQuery('#sticky-background-rightD').css('opacity','0');
//    });
//
//    /**
//     * Tags Cell
//     */
//    jQuery('#tags-cell').hover(function(){
//        changeHexagonBackground(".middle-circle","#AFD18C");
//        jQuery('#background-rightF').css('opacity','100');
//        jQuery('#background-leftF').css('opacity','100');
//        jQuery('#sticky-background-leftF').css('opacity','100');
//        jQuery('#sticky-background-rightF').css('opacity','100');
//        setTimeout(function(){
//            jQuery('#tags-cell1').css('opacity','100');
//            jQuery('#tags-cell2').css('opacity','100');
//            jQuery('#tags-cell3').css('opacity','100');
//            jQuery('#tags-cell4').css('opacity','100');
//        },300);
//    },function(){
//        changeHexagonBackground(".middle-circle","#D58381");
//        jQuery('#background-rightF').css('opacity','0');
//        jQuery('#background-leftF').css('opacity','0');
//        jQuery('#sticky-background-leftF').css('opacity','0');
//        jQuery('#sticky-background-rightF').css('opacity','0');
//    });
//
//    /**
//     * Archive Cell
//     */
//    function colorLoop(elem,newCounter){
//        var counter = newCounter;
//        if(counter % 2){
//            changeHexagonBackground(elem,"#D9F6FA");
//        } else {
//            changeHexagonBackground(elem,"#A3E7F0");
//        }
//            counter = counter + 1;
//        archive = setTimeout(function(){
//            colorLoop(elem,counter)
//        },750);
//    }
//    var archive;
//    jQuery('#archive-cell').hover(function(){
//        changeHexagonBackground(".middle-circle","#7CD1D3");
//        jQuery('#background-rightC').css('opacity','100');
//        jQuery('#background-leftC').css('opacity','100');
//        jQuery('#sticky-background-leftC').css('opacity','100');
//        jQuery('#sticky-background-rightC').css('opacity','100');
//    },function(){
//        changeHexagonBackground(".middle-circle","#D58381");
//        jQuery('#background-rightC').css('opacity','0');
//        jQuery('#background-leftC').css('opacity','0');
//        jQuery('#sticky-background-leftC').css('opacity','0');
//        jQuery('#sticky-background-rightC').css('opacity','0');
//        changeHexagonBackground("#archive-cell","transparent");
//    });
//
//    /**
//     * Inbox Cell
//     */
//    jQuery('#inbox-cell').hover(function(){
//        changeHexagonBackground(".middle-circle","#A683CE");
//        jQuery('#background-rightG').css('opacity','100');
//        jQuery('#background-leftG').css('opacity','100');
//        jQuery('#sticky-background-leftG').css('opacity','100');
//        jQuery('#sticky-background-rightG').css('opacity','100');
//        setTimeout(function(){
//            jQuery('#inbox-cell1').css('opacity','100');
//            jQuery('#inbox-cell2').css('opacity','100');
//            jQuery('#inbox-cell3').css('opacity','100');
//            jQuery('#inbox-cell4').css('opacity','100');
//        },300);
//    },function(){
//        changeHexagonBackground(".middle-circle","#D58381");
//        jQuery('#background-rightG').css('opacity','0');
//        jQuery('#background-leftG').css('opacity','0');
//        jQuery('#sticky-background-leftG').css('opacity','0');
//        jQuery('#sticky-background-rightG').css('opacity','0');
//    });


    /**
     * Main Menu function
     */

    var background1 = {
        "row0" : ["#DC7D59","#DA8A5B","#DA9D68","#E9C17E","#EAD286","#ECDB88","#EADE87","#E4DE85","#DCDC82","#D2D881","#CFD886","#CFDA8C","#D5E093","#D2DF90"],
        "row1" : ["#D25E52","#D27255","#CC7D58","#D69D6D","#E1BC7B","#E7CF84","#E8D984","#E3DA82","#DBD880","#CFD47C","#C5D27F","#C2D384","#C7D78A","#CBDB8E","#CBDC8D"],
        "row2" : ["#C1514E","#BF6151","#BC6E58","#CE996E","#D8B377","#DBC37D","#DACD7E","#D6D17D","#CDCF7B","#BCC77A","#B1C479","#B7CA80","#C0D488","#C1D78A"],
        "row3" : ["#C85356","#AD454C","#AB534F","#AA6458","#C28E6B","#CCA975","#CCB677","#CBBF7A","#C5C179","#B6BE78","#A7B774","#A1B977","#ACC47E","#B7CE84","#BDD489"],
        "row4" : ["#B64C56","#9A3F4C","#95484F","#975957","#B5856A","#BD9B71","#BDA874","#BEB478","#B4B678","#A4B074","#91A972","#93AF75","#A1BD7C","#B4CC85"]
    };

    var background2 = {
        "row4" : ["#DC7D59","#DA8A5B","#DA9D68","#E9C17E","#EAD286","#ECDB88","#EADE87","#E4DE85","#DCDC82","#D2D881","#CFD886","#CFDA8C","#D5E093","#D2DF90"],
        "row3" : ["#D25E52","#D27255","#CC7D58","#D69D6D","#E1BC7B","#E7CF84","#E8D984","#E3DA82","#DBD880","#CFD47C","#C5D27F","#C2D384","#C7D78A","#CBDB8E","#CBDC8D"],
        "row2" : ["#C1514E","#BF6151","#BC6E58","#CE996E","#D8B377","#DBC37D","#DACD7E","#D6D17D","#CDCF7B","#BCC77A","#B1C479","#B7CA80","#C0D488","#C1D78A"],
        "row1" : ["#C85356","#AD454C","#AB534F","#AA6458","#C28E6B","#CCA975","#CCB677","#CBBF7A","#C5C179","#B6BE78","#A7B774","#A1B977","#ACC47E","#B7CE84","#BDD489"],
        "row0" : ["#B64C56","#9A3F4C","#95484F","#975957","#B5856A","#BD9B71","#BDA874","#BEB478","#B4B678","#A4B074","#91A972","#93AF75","#A1BD7C","#B4CC85"]
    };

    function Virus(){
        this.spread = {
            "row0" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row1" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row2" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row3" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row4" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        }
    }

    function Hexagon(row,column,color,y,x,lastRow){
        var name = "row"+row+"column"+column;
        this.name = name;
        this.color = color;
        this.y = y;
        this.x = x;
        if(!lastRow){
        var div = document.createElement("div");
        jQuery(div).addClass('hexagonal-cell')
            .attr('id',name)
            .css('top',y)
            .css('margin-left',x)
            .data("column",column)
            .data("row",row);
            jQuery('#ernestrc-menu-bar').append(div);
        } else {
            var sp = document.createElement("div");
            jQuery(sp).addClass('hexagonal-cell')
                .attr('id',name)
                .css('top',"-15px")
                .css('margin-left',x)
                .css('z-index','-1')
                .data("column",column)
                .data("row",row);
            jQuery('.sticky-bar').append(sp);
        }
        changeHexagonColor("#"+name,color);
        return div
    }

    function changeHexagonColor(className,color){
        jQuery(className).css('background',color);
        jQuery(className)
            .append("<style>" + className + ":before{border-bottom:30px solid "+ color +" !important;}</style>")
            .append("<style>"+ className + ":after{border-top:30px solid "+ color +" !important;}</style>");
    }

    function newRow(row,top,modifier,array,lastRow){
        var initialMargin = -750+modifier;
        var i;
        for(i = 0; i < 15; i++){
            var color = array[i];
            new Hexagon(row,i,color,top,initialMargin+"px",lastRow);
            initialMargin = initialMargin + 100;
        }
    }

    function loadGrid(){
        var initialTop = 0;
        var i;
        for(i = 0;i < 5;i ++){
            var array = background1["row"+i];
            if(i != 4){
                if(i % 2){
                    newRow(i,initialTop+"px",0,array,false);
                } else {
                    newRow(i,initialTop+"px",50,array,false);
                }
            } else {
                newRow(i,initialTop+"px",50,array,true);
            }
            initialTop = initialTop + 87
        }
    }

    function stopVirus(){
        clearTimeout(virus);
    }

    jQuery.fn.exists = function () {
        return this.length !== 0;
    };

    function threatStarted(elem,backgroundMap){
        var viral = new Virus;
        function spreadOrNot(elem,row,column){
            if (elem.exists()) {
                var rowNow = "row"+row;
                var virusRow = viral.spread[rowNow];
                var spreaded = virusRow[column];
                if (!spreaded){
                    spreadVirus(elem);
                }
            }
        }
        function spreadVirus(elem) {
            var elemId = elem.attr('id');
            var row = elem.data("row");
            var column = elem.data("column");
            var colorRow = backgroundMap["row"+row];
            var color = colorRow[column];
            var rowNow = "row"+row;
            var virusRow = viral.spread[rowNow];
            virusRow[column] = true;

            changeHexagonColor("#"+elemId,color);

            setTimeout(function(){
                var targetOnecolumn = column+1;
                var targetOne = jQuery('#row'+row+"column"+targetOnecolumn);
                spreadOrNot(targetOne,row,targetOnecolumn);
                var targetTwocolumn = (column-1);
                var targetTwo = jQuery('#row'+row+"column"+targetTwocolumn);
                spreadOrNot(targetTwo,row,targetTwocolumn);
                var target3column = (column-1);
                var target3row = row+1;
                var target3 = jQuery('#row'+target3row+"column"+target3column);
                spreadOrNot(target3,target3row,target3column);
                var target4row = row + 1;
                var target4 = jQuery('#row'+target4row+"column"+column);
                spreadOrNot(target4,target4row,column);
                var target5row = column - 1;
                var target5column = row - 1;
                var target5 = jQuery('#row'+target5row+"column"+target5column);
                spreadOrNot(target5,target5row,target5column);
                var target6row = row - 1;
                var target6 = jQuery('#row'+target6row+"column"+column);
                spreadOrNot(target6,target6row,column);
            },50);
        }
        spreadVirus(elem);
    }


    var menu = false;
    var lockedMenu = false;

    function bannerFxOff(){
        if(!lockedMenu==true){
            if(menu==true){
                setTimeout(function(){
                jQuery('#title').css('opacity','100');
                jQuery('#subtitle').css('opacity','100');
                },300);
                jQuery('#search-comment').css('opacity',"50");
                threatStarted(jQuery('#row4column6'),background1);
                menu = false;
            }
        }
    }

    function bannerFxOn(){
        if(menu == false && lockedMenu == false){
            menu = true;
            jQuery('#title').css('opacity','0');
            jQuery('#subtitle').css('opacity','0');
            threatStarted(jQuery('#row4column6'),background2);
            setTimeout(function(){
                jQuery('#search-comment').css('opacity',"0");

            },300);
        }
    }


    function loadMainMenu() {
        loadGrid();
        jQuery('#main').hover(function(){
            bannerFxOff();
        });
        jQuery('#row4column6').hover(function(){
            bannerFxOn();
        }).click(function(){
            jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
            if(lockedMenu){
                threatStarted(jQuery('#row4column6'),background1);
                lockedMenu=false
                jQuery('.fa-lock').css('opacity','0');
            } else {
                threatStarted(jQuery('#row4column6'),background2);
                clearTimeout(timer);
                jQuery('.fa-lock').css('opacity','50');
                lockedMenu=true
            }
        });
    }


    jQuery( document ).ready(function() {
        loadMainMenu();
        jQuery('[id=icons-menu]').css('background','transparent !important')

        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform'
        })
    })

} )( jQuery );