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
//
//    /**
//     * Search Cell
//     */
//    jQuery('#search-cell').hover(function(){
//        threatStarted(jQuery('#row2column7'),background1);
//        setTimeout(function(){
//            jQuery('#search-form').css('opacity','100');
//        },300);
//    },function(){
//        changeHexagonColor(".middle-circle","#D58381");
//        threatStarted(jQuery('#row2column7'),background2);
//    });
//
//    /**
//     * Home Cell
//     */
//    jQuery('#home-cell').hover(function(){
//        changeHexagonColor(".middle-circle","#D281CD");
//        jQuery('#background-rightD').css('opacity','100');
//        jQuery('#background-leftD').css('opacity','100');
//        jQuery('#sticky-background-leftD').css('opacity','100');
//        jQuery('#sticky-background-rightD').css('opacity','100');
//
//    },function(){
//        changeHexagonColor(".middle-circle","#D58381");
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
//        changeHexagonColor(".middle-circle","#AFD18C");
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
//        changeHexagonColor(".middle-circle","#D58381");
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
//            changeHexagonColor(elem,"#D9F6FA");
//        } else {
//            changeHexagonColor(elem,"#A3E7F0");
//        }
//            counter = counter + 1;
//        archive = setTimeout(function(){
//            colorLoop(elem,counter)
//        },750);
//    }
//    var archive;
//    jQuery('#archive-cell').hover(function(){
//        changeHexagonColor(".middle-circle","#7CD1D3");
//        jQuery('#background-rightC').css('opacity','100');
//        jQuery('#background-leftC').css('opacity','100');
//        jQuery('#sticky-background-leftC').css('opacity','100');
//        jQuery('#sticky-background-rightC').css('opacity','100');
//    },function(){
//        changeHexagonColor(".middle-circle","#D58381");
//        jQuery('#background-rightC').css('opacity','0');
//        jQuery('#background-leftC').css('opacity','0');
//        jQuery('#sticky-background-leftC').css('opacity','0');
//        jQuery('#sticky-background-rightC').css('opacity','0');
//        changeHexagonColor("#archive-cell","transparent");
//    });
//
//    /**
//     * Inbox Cell
//     */
//    jQuery('#inbox-cell').hover(function(){
//        changeHexagonColor(".middle-circle","#A683CE");
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
//        changeHexagonColor(".middle-circle","#D58381");
//        jQuery('#background-rightG').css('opacity','0');
//        jQuery('#background-leftG').css('opacity','0');
//        jQuery('#sticky-background-leftG').css('opacity','0');
//        jQuery('#sticky-background-rightG').css('opacity','0');
//    });

    var background1 = {
        "row0" : ["#D25E52","#D27255","#CC7D58","#D69D6D","#E1BC7B","#E7CF84","#E8D984","#E3DA82","#DBD880","#CFD47C","#C5D27F","#C2D384","#C7D78A","#CBDB8E","#CBDC8D"],
        "row1" : ["#C1514E","#BF6151","#BC6E58","#CE996E","#D8B377","#DBC37D","#DACD7E","#D6D17D","#CDCF7B","#BCC77A","#B1C479","#B7CA80","#C0D488","#C1D78A"],
        "row2" : ["#C85356","#AD454C","#AB534F","#AA6458","#C28E6B","#CCA975","#CCB677","#CBBF7A","#C5C179","#B6BE78","#A7B774","#A1B977","#ACC47E","#B7CE84","#BDD489"],
        "row3" : ["#B64C56","#9A3F4C","#95484F","#975957","#B5856A","#BD9B71","#BDA874","#BEB478","#B4B678","#A4B074","#91A972","#93AF75","#A1BD7C","#B4CC85"],
        "row4" : ["#B14E5A","#A44554","#86384A","#7C3D4C","#834C54","#A97C68","#B08F6E","#B09E73","#AFA876","#A3A875","#8C9E6F","#7D996C","#8AA872","#9BB87B","#B2CB85"]
    };

    var background2 = {
        "row0" : ["#565892","#755E93","#835F8F","#A5719A","#C47EA3","#D985A7","#DF84A1","#E2829C","#E47F97","#E47A8E","#E67C8A","#E8818C","#EC8791","#EE8B95","#F18A93"],
        "row1" : ["#4A5588","#5D5686","#736088","#A27397","#BE7A9C","#D07F9F","#D77D98","#DE7B93","#DF7A8E","#DD7784","#DD767E","#E37D84","#EB858C","#EE878D"],
        "row2" : ["#475D91","#3C547F","#4E557D","#645C7F","#987091","#B67796","#C57893","#CC798F","#D2788B","#D47582","#D27178","#D77275","#E07A7D","#E98085","#ED868A"],
        "row3" : ["#405E89","#345475","#425673","#585C75","#8F6F8A","#A9738D","#B9758B","#C47789","#CA7683","#CA7177","#C86E6D","#D0706E","#DC7777","#E78184"],
        "row4" : ["#426288","#375C80","#2B536B","#345365","#4A5A6A","#856D83","#9E7186","#AE7484","#BB7581","#BF737A","#BB6C6B","#BB6761","#CA6D69","#D97774","#E78183"]
    };
    var background3 = {
        "row0" : ["#D05F88","#D06B7F","#C96972","#D27872","#DB806B","#E08D6E","#E4976F","#E89D6F","#EAA26E","#EBA76C","#EFB370","#F1BB77","#F5C07C","#F8C380","#FBC57F"],
        "row1" : ["#BD517F","#BE617D","#BA6A78","#CB7973","#D37C68","#D5876A","#DB926B","#E39B6B","#E6A36B","#E5AA6B","#E5B16D","#ECB974","#F4C37C","#F8C77D"],
        "row2" : ["#B85183","#9C4471","#A75376","#A96578","#C07774","#C97968","#C88066","#D08D69","#D69669","#D9A16A","#D8A769","#DFB36C","#E9BC73","#F3C378","#F7C87D"],
        "row3" : ["#9D4A78","#803D66","#824767","#8F586F","#B47473","#BB7567","#BB7D66","#C78C6A","#CF986B","#CFA069","#CDA86A","#D7B36D","#E5BD72","#F1C47A"],
        "row4" : ["#944C77","#85426D","#65365A","#5E3B57","#6E4A60","#A87374","#AF7368","#AF7B67","#BD8A6A","#C2966B","#BE9C68","#BFA466","#D0B16B","#E1BC73","#F1C67B"]
    };
    var background4 = {
        "row0" : ["#7E5B9D","#763683","#6F2678","#6C2572","#712672","#7B4481","#805889","#825D87","#855F80","#885B72","#862C4A","#802840","#81373F","#905A4B","#976E58"],
        "row1" : ["#7F5F9F","#753F89","#712B7C","#702A78","#744184","#7C5F94","#80719C","#837397","#857591","#896E7F","#864859","#814B4F","#814F45","#91775A"],
        "row2" : ["#8270AD","#7D64A3","#775094","#723F87","#71468A","#76619A","#858AB3","#8797B8","#879CB5","#8C9CAD","#8C8A93","#836368","#7C675C","#806B52","#9BA86D"],
        "row3" : ["#8378B3","#8276B0","#7B63A1","#745999","#756AA4","#7F9BC6","#7DB2D4","#80BED7","#89BDC6","#8AB6B8","#8BA09F","#7C7F77","#7D8C72","#7D8C72"],
        "row4" : ["#949BCC","#969DCB","#8D8EC1","#817CB4","#8489BB","#7DA0CC","#7DBEE0","#83CADA","#87D0DC","#8DD1D5","#89CEC7","#85B3A8","#709F89","#6FAF84","#89BB7E"]
    };

    var background5 = {
        "row0" : ["#E47865","#DE8A69","#C6906D","#DAB086","#FFD396","#FFE19F","#FFE99E","#FCE89C","#DADD99","#ACCC95","#84C097","#7CC09D","#8EC7A4","#9ECEA9","#9ACFA8"],
        "row1" : ["#AF6562","#A67166","#957B6E","#BCA688","#DBC291","#E5D197","#DDD696","#C8D395","#A5C794","#65B291","#3EAA90","#53B198","#74BEA1","#77C1A3"],
        "row2" : ["#C2696C","#805460","#775F64","#6A6C6F","#979685","#ACAF8F","#AAB790","#A1BB93","#8BB792","#55A98F","#009D8B","#009C8D","#1DA795","#51B49C","#68BCA1"],
        "row3" : ["#8D5C6D","#594B60","#4C5164","#425D6D","#738783","#7C9A8A","#77A28E","#71A991","#4FA390","#00978B","#008F88","#00938B","#009E92","#46B19D"],
        "row4" : ["#7F5D71","#68516A","#35425E","#1C4461","#15506A","#557C81","#588B87","#50948C","#43998E","#00938D","#008885","#008780","#008F88","#009A91","#009A91"]
    };
    var backgroundBW = {
        "row0" : ["#A79A96","#A99C98","#9C8E8A","#AFA39F","#C3B8B5","#C5BBB8","#C4BAB6","#C0B5B2","#BBB0AD","#B8ADA9","#B9AEAB","#B8ADA9","#C0B5B2","#C7BDBA","#C6BCB9"],
        "row1" : ["#877975","#8C7D7A","#887976","#A39592","#B2A6A2","#B7ACA8","#B7ABA7","#B7ABA7","#B7ABA7","#A99C98","#9C8D89","#A59793","#B6AAA6","#B7ACA8"],
        "row2" : ["#928380","#6C5F5C","#726461","#766865","#9A8C88","#A99C98","#ADA09C","#B1A5A1","#B1A5A1","#9F918D","#8D7D7A","#8A7A77","#978884","#A89A96","#B0A4A0"],
        "row3" : ["#776966","#685C58","#665A57","#675A57","#8B7C79","#9A8C88","#9F918E","#A39592","#998B87","#877774","#796A67","#7D6E6A","#8A7B77","#A39592"],
        "row4" : ["#7C6E6A","#726561","#5B504D","#544A47","#594E4B","#7B6D69","#877875","#8D7E7A","#8E7F7B","#847572","#736562","#726461","#796A66","#857672","#A1928F"]
    };

    var backgroundSepia = {
        "row0" : ["#BC7467","#BF816C","#BA856E","#C49D7F","#CCB28C","#D1BD93","#D0C394","#CDC393","#CAC391","#C2BF8E","#BCBF90","#BCC194","#C2C69A","#C4C89D","#C4C99D"],
        "row1" : ["#AC6760","#AE7164","#AD7A6A","#BE9A7F","#C6AA88","#C8B48C","#C6B98C","#C4BD8D","#C0BC8C","#B5B68A","#B0B489","#B4BA8F","#BCC298","#BEC599"],
        "row2" : ["#B26A67","#9B5C5B","#9B645E","#9E7066","#B4907A","#BCA183","#BAA884","#BBAF88","#B8B187","#B0AF86","#A5AA83","#A3AC85","#ADB68D","#B6BF94","#BBC398"],
        "row3" : ["#A36162","#8A5256","#895858","#8E6461","#AB8977","#B0977D","#AF9D7F","#B3A784","#ADA985","#A2A481","#979F7E","#9BA582","#A6B18A","#B4BD95"],
        "row4" : ["#A06265","#94595E","#794950","#734B51","#7B5759","#A18274","#A68E79","#A6967D","#A89E80","#A19F80","#92967A","#889377","#929F7F","#A2AD89","#B3BD95"]
    };


    var ColorScheme = {
        "main" : backgroundBW,
        "sub": backgroundSepia,
        "tags":background1,
        "home":background1,
        "search":background1,
        "archive":background1,
        "inbox":background1
    };



    function Spread(){
        this.spread = {
            "row0" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row1" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row2" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row3" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false],
            "row4" : [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
        }
    }

    function Triangle(row,column,top){
        this.name = "row"+row+"column"+column;
        var div = document.createElement("div");
        if(top == true){
            jQuery(div).addClass('triangle-top')
                .attr('id',"top-"+this.name)
                .css('top',"-29px")
                .css('left',"0");
        } else {
                jQuery(div).addClass('triangle-bottom')
                    .attr('id',"bottom-"+this.name)
                    .css('bottom',"-29px")
                    .css('left',"0");
        }
        return div

    }

    function Square(row,column){
        var name = "square-row"+row+"column"+column; //TODO change name for hexagoncolorchange?
        this.name = name;
        var div = document.createElement("div");
        jQuery(div).addClass('hexagonal-cell')
            .attr('id',this.name)
            .css('top',"0")
            .css('left',"0");
        return div
    }

    function Hexagon(row,column,color,yAxis,xAxis,lastRow){
        var name = "row"+row+"column"+column;
        if(lastRow){
            var down = new Triangle(row,column,false);
            var core = new Square(row,column);
            var up = new Triangle(row,column,true);
            var div = document.createElement("div");
            jQuery(div).addClass('hexagon')
                .attr('id',name)
                .css('top',"-18px")
                .css('margin-left',xAxis+"px")
                .data("column",column)
                .data("row",row)
                .append(core).append(up);
            jQuery('.sticky-bar').append(div);
            jQuery(div).click(function(){
                var actualColor = jQuery("#"+name).data("color");
                changeHexagonColor(name,"white");
                jQuery("#square-"+name).css("transition", "all 0.3s");
                jQuery("#top-"+name).css("transition", "all 0.3s");
                jQuery("#bottom-"+name).css("transition", "all 0.3s");
                setTimeout(function(){
                    changeHexagonColor(name,actualColor);
                },100)
            })
        } else {
            var up = new Triangle(row,column,true);
            var core = new Square(row,column);
            var down = new Triangle(row,column,false);
            var div = document.createElement("div");
            jQuery(div).addClass('hexagon')
                .attr('id',name)
                .css('top',yAxis+"px")
                .css('margin-left',xAxis+"px")
                .data("column",column)
                .data("row",row)
                .append(down).append(core).append(up);
            jQuery('#ernestrc-menu-bar').append(div);
            jQuery(div).click(function(){
                var actualColor = jQuery("#"+name).data("color");
                changeHexagonColor(name,"white");
                jQuery("#square-"+name).css("transition", "all 0.3s");
                jQuery("#top-"+name).css("transition", "all 0.3s");
                jQuery("#bottom-"+name).css("transition", "all 0.3s");
                setTimeout(function(){
                    changeHexagonColor(name,actualColor);
                },100)
            })
        }
        changeHexagonColor(name,color);
    }


    function changeHexagonColor(className,color){
        jQuery('#'+className).data('color',color);
        function changeSquareColor(className,color){
            jQuery("#square-"+className).css('background',color)
        }
        function changeTriangleColor(className,top,color){
            if(top == true){
                jQuery("#top-"+className).css('border-bottom','29px solid '+color)
            }else {
                jQuery("#bottom-"+className).css('border-top','29px solid '+color)
            }
        }
        changeSquareColor(className,color);
        changeTriangleColor(className,true,color);
        changeTriangleColor(className,false,color)
    }

    function newRow(row,top,modifier,array,lastRow){
        var initialMargin = -750+modifier;
        var i;
        for(i = 0; i < 15; i++){
            var color = array[i];
            new Hexagon(row,i,color,top,initialMargin,lastRow);
            initialMargin = initialMargin + 100;
        }
    }

    function loadGrid(){
        var initialTop = 0;
        var i;
        for(i = 0;i < 5;i ++){
            var array = ColorScheme.main["row"+i];
            if(i != 4){
                if(i % 2){
                    newRow(i,initialTop,50,array,false);
                } else {
                    newRow(i,initialTop,0,array,false);
                }
            } else {
                newRow(i,initialTop,0,array,true);
            }
            initialTop = initialTop + 86
        }
    }

    jQuery.fn.exists = function () {
        return this.length !== 0;
    };

    var delay = 40;
    var VIRUZ = [];


    function threatStarted(startRow,startColumn,backgroundMap,timeout){
        var previousSpread = VIRUZ.length -1;
            while(previousSpread > 0){
                var t = VIRUZ[previousSpread];
                clearTimeout(t);
                previousSpread = previousSpread - 1;
        }
        VIRUZ = [];
        var elem = jQuery('#row'+startRow+"column"+startColumn);
        var viral = new Spread;
        function spreadOrNot(elem,row,column){
            if (elem.exists()) {
                var rowNow = "row"+row;
                var virusRow = viral.spread[rowNow];
                var spreaded = virusRow[column];
                if (!spreaded){
                    spreadVirus(elem,timeout);
                }
            }
        }

        function spreadVirus(elem,to) {
            var elemId = elem.attr('id');
            var row = elem.data("row");
            var column = elem.data("column");
            var colorRow = backgroundMap["row"+row];
            var color = colorRow[column];
            var rowNow = "row"+row;
            var virusRow = viral.spread[rowNow];
            virusRow[column] = true;

            changeHexagonColor(elemId,color);

            var SPRD = setTimeout(function(){
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
            },to);
            VIRUZ.push(SPRD);
        }
        spreadVirus(elem,0);
    }


    var menu = false;
    var lockedMenu = false;
    var title;

    function menuOff(){
        if(lockedMenu==false){
            if(menu==true){
                jQuery('.submenu').css('visibility','hidden');
                jQuery('#search-comment').css('opacity',"50");
                jQuery('.submenu').css('opacity',"0");
                threatStarted(4,7,ColorScheme["main"],delay);
                jQuery('.subtitles').css('top','-120px');
                jQuery('.subsubtitles').css('top','-120px');
                jQuery('#search-form').css('visibility','hidden').css('opacity','0');
                jQuery('.subsubmenuTag').css('opacity','0');
                jQuery('.subsubmenuInbox').css('opacity','0');
                menu = false;
                title = setTimeout(function(){
                    jQuery('#title').css('opacity','100').css('visibility','visible');
                    jQuery('#beta').css('opacity','100').css('visibility','visible');
                    jQuery('#subtitle').css('opacity','100').css('visibility','visible');
                },300);

            }
        }
    }

    function menuOn(){
        if(menu == false && lockedMenu == false){
          jQuery('.submenu').css('visibility','visible');
            menu = true;
            clearTimeout(title);
            jQuery('#title').css('opacity','0').css('visibility','hidden');
            jQuery('#beta').css('opacity','0').css('visibility','hidden');
            jQuery('#subtitle').css('opacity','0').css('visibility','hidden');
            threatStarted(4,7,ColorScheme["sub"],delay);
            jQuery('.submenu').css('opacity',"100");
            setTimeout(function(){
                jQuery('#search-comment').css('opacity',"0");
            },300);
        }
    }

    $('#top-ernestrc').on('affix-top.bs.affix', function (e) {
        jQuery('.fa-bolt').css('top','5px');
        jQuery('.fa-lock').css('top','0');
    });
    $('#top-ernestrc').on('affix.bs.affix', function (e) {
        jQuery('.fa-lock').css('top','10px');
        jQuery('.fa-bolt').css('top','15px');
    });

    function findAllHexagons(row,column){
        var one = '#row'+row+'column'+(column-1);
        var two = '#row'+(row)+'column'+(column+1);
        var three= '#row'+(row-1)+'column'+(column-1);
        var four= '#row'+(row-1)+'column'+(column);
        var five= '#row'+(row+1)+'column'+(column-1);
        var six= '#row'+(row+1)+'column'+(column);
        return jQuery(one+","+two+","+three+","+four+","+five+","+six);
    }

    function findSquareOfHexagonsAround(row,column){
        var one = '#row'+row+'column'+(column-1);
        var two = '#row'+(row)+'column'+(column+1);
        var eight= '#row'+(row-1)+'column'+(column-2);
        var six= '#row'+(row-1)+'column'+(column+1);
        var three= '#row'+(row+1)+'column'+(column-2);
        var four= '#row'+(row+1)+'column'+(column+1);
        var nine= '#row'+(row+2)+'column'+(column);
        var ten= '#row'+(row+2)+'column'+(column-1);
        var eleven= '#row'+(row+2)+'column'+(column+1);
        var five= '#row'+(row-2)+'column'+(column);
        var seven= '#row'+(row-2)+'column'+(column-1);
        var twelve= '#row'+(row-2)+'column'+(column+1);
        return jQuery(one+","+two+","+three+","+four+","+five+","+six+","+seven+","+eight+","+nine+","+ten+","+eleven+","+twelve);
    }
    var home;
    var tags;
    var archive;
    var inbox;
    var search;

    function appendSearchButton(row,column){
        var div = "<i id=\"search-menu\" class=\"fa fa-search submenu\"></i>"
        jQuery('#row'+row+'column'+column).append(div).css('z-index','99').hover(function(){

            search = setTimeout(function(){
                if(menu){
                    jQuery('#search-form').css('visibility','visible').css('opacity','100');
                    jQuery('#title-search').css('top','0px');
                    threatStarted(row,column,ColorScheme["search"],delay);
                }
            },0)
        });
        if(jQuery(window).width() > 900) {
            var hexagons = findAllHexagons(row, column);
            hexagons.hover(function () {

                clearTimeout(search);
                search = setTimeout(function () {
                    if (menu) {
                        threatStarted(row, column, ColorScheme["sub"], delay);
                        jQuery('#title-search').css('top', '-120px');
                        jQuery('#search-form').css('visibility', 'hidden').css('opacity', '0')
                    }
                }, 0)
            }, function () {
//            clearAllTimeouts();
            })
        }
    }

    function appendHomeButton(row,column){
        var div = "<a href=\"http://unstable.build\"><i id=\"home-menu\" class=\"fa fa-home submenu\"></i></a>"
        jQuery('#row'+row+'column'+column).append(div).css('z-index','99').hover(function(){

            home = setTimeout(function(){
            if(menu){
                jQuery('#title-home').css('top','0px');
                threatStarted(row,column,ColorScheme["home"],delay);
            }
        },0)
        },function(){

            home = setTimeout(function() {
                if (menu) {
                    threatStarted(row, column, ColorScheme["sub"], delay);
                    jQuery('#title-home').css('top', '-120px');
                }
            },0)
        });
    }

    function appendSubTag(row,column,tag,section){
        if(jQuery(window).width() > 900) {
            var cell = '#row' + (row) + 'column' + (column);
            var div = "<a href=\"http://unstable.build/topics/" + section + "/\"><i id=\"" + tag + "-menu\" class=\"fa fa-" + tag + " subsubmenuTag\"></i></a>"
            jQuery(cell).append(div)
        }
    }

    function appendSubInbox(row,column,tag,url){
        if(jQuery(window).width() > 900) {
            var cell = '#row' + (row) + 'column' + (column);
            var div = "<a href=\"" + url + "/\" target=\"_blank\"><i id=\"" + tag + "-menu\" class=\"fa fa-" + tag + " subsubmenuInbox\"></i></a>";
            jQuery(cell).append(div)
        }
    }


    function appendTagsButton(row,column){
        var div = "<a href=\"http://unstable.build/topics/\"><i id=\"tags-menu\" class=\"fa fa-tags submenu\"></i></a>";
            appendSubTag(row + 1, column - 1, "code", "programming");
            appendSubTag(row + 1, column, "graduation-cap", "learn");
            appendSubTag(row - 1, column - 1, "rebel", "random");
            appendSubTag(row - 1, column, "database", "data");
            jQuery('#row' + row + 'column' + column).append(div).hover(function () {

                tags = setTimeout(function () {
                    if (menu) {
                        jQuery('#title-categories').css('top', '0px');
                        jQuery('.subsubmenuTag').css('opacity', '100').css('visibility', 'visible');
                        threatStarted(row, column, ColorScheme["tags"], delay);
                    }
                }, 0)
            });
        if(jQuery(window).width() > 900) {
            var hexagons = findSquareOfHexagonsAround(row, column);
            hexagons.hover(function () {
                tags = setTimeout(function () {
                    if (menu) {
                        threatStarted(row, column, ColorScheme["sub"], delay);
                        jQuery('#title-categories').css('top', '-120px');
                        jQuery('.subsubmenuTag').css('opacity', '0').css('visibility', 'hidden');
                    }
                }, 0)
            }, function () {
                clearAllTimeouts();
            })
        }
    }

    function appendArchiveButton(row,column){
        var div = "<i id=\"archive-menu\" class=\"fa fa-archive submenu\"></i>"
        jQuery('#row'+row+'column'+column).append(div).hover(function(){
            if (menu) {
                archive = setTimeout(function () {
                    threatStarted(row, column, ColorScheme["main"], delay);
                    jQuery('#title-archive').css('top', '0px');
                    jQuery('#archive-beta').css('opacity', '100');
                },0);
            }
        },function(){
            clearTimeout(archive);
            archive = setTimeout(function() {
                if (menu) {
                    jQuery('#archive-beta').css('opacity', '0');
                    threatStarted(row, column, ColorScheme["sub"], delay);
                    jQuery('#title-archive').css('top', '-120px');
                }
            },0)
        });
    }

    function clearAllTimeouts(){
        clearTimeout(tags);
        clearTimeout(home);
        clearTimeout(archive);
        clearTimeout(search);
        clearTimeout(inbox);
    }

    function appendInboxButton(row,column){
        var div = "<a href=\"http://unstable.build/contact/\"><i id=\"inbox-menu\" class=\"ernestrc-face submenu\"></i></a>"
        appendSubInbox(row+1,column-1,"twitter","http://twitter.com/ernestrc_");
        appendSubInbox(row+1,column,"linkedin","http://uk.linkedin.com/in/ernestromero");
        appendSubInbox(row-1,column-1,"envelope","mailto:info@unstable.build?Subject=Hello%20again\" target=\"_top");
        if(jQuery(window).width() > 900) {
            var everreachCell = '#row' + (row - 1) + 'column' + (column);
            var everreach = "<a href=\"http://www.everreach.co.uk\"><i id=\"everreach-menu\" class=\"ernestrc-everreach subsubmenuInbox\"></i></a>"
            jQuery(everreachCell).append(everreach);
        }
        jQuery('#row'+row+'column'+column).append(div).hover(function(){

            inbox = setTimeout(function() {
                if (menu) {
                    jQuery('.subsubmenuInbox').css('opacity', '100').css('visibility', 'visible');
                    threatStarted(row, column, ColorScheme["inbox"], delay);
                    jQuery('#title-contact').css('top', '0px');
                }
            },0)
        });

        if(jQuery(window).width() > 900) {
            var hexagons = findSquareOfHexagonsAround(row, column);
            hexagons.hover(function () {

                inbox = setTimeout(function () {
                    if (menu) {
                        threatStarted(row, column, ColorScheme["sub"], delay);
                        jQuery('#title-contact').css('top', '-120px');
                        jQuery('.subsubmenuInbox').css('opacity', '0').css('visibility', 'hidden');
                    }
                }, 0)
            }, function () {
                clearAllTimeouts();
            })
        }
    }

    function loadSubSubMenu(){
        jQuery('#rebel-menu').hover(function(){
            if(menu){
                jQuery('#title-random').css('top','60px');
            }
        },function(){
            if(menu){
                jQuery('#title-random').css('top','-120px');
                jQuery('#title-categories').css('top','0px');
            }
        });
        jQuery('#graduation-cap-menu').hover(function(){
            if(menu){
            jQuery('#title-learn').css('top','60px');
            }
        },function(){
            if(menu){
            jQuery('#title-learn').css('top','-120px');
            jQuery('#title-categories').css('top','0px');
            }
        });
        jQuery('#code-menu').hover(function(){
            if(menu){
            jQuery('#title-code').css('top','60px');
            }
        },function(){
            if(menu){
            jQuery('#title-code').css('top','-120px');
            jQuery('#title-categories').css('top','0px');
            }
        });
        jQuery('#database-menu').hover(function(){
            if(menu){
            jQuery('#title-data').css('top','60px');
            }
        },function(){
            if(menu){
            jQuery('#title-data').css('top','-120px');
            jQuery('#title-categories').css('top','0px');
            }
        });
        jQuery('#everreach-menu').hover(function(){
            if(menu){
            jQuery('#title-everreach').css('top','60px');
            }
        },function(){
            if(menu){
            jQuery('#title-everreach').css('top','-120px');
            jQuery('#title-contact').css('top','0px');
            }
        });
    }

    function appendTitles() {
        var cat = "<div id=\"title-categories\" class=\"subtitles\">Topics</div>";
        var con = "<div id=\"title-contact\" class=\"subtitles\">Contact</div>";
        var sea = "<div id=\"title-search\" class=\"subtitles\">Search</div>";
        var arc = "<div id=\"title-archive\" class=\"subtitles\">Archive</div>";
        var hom = "<div id=\"title-home\" class=\"subtitles\">Home</div>";
        var men = "<div id=\"title-menu\" class=\"subtitles\">Menu</div>";
        var cod = "<div id=\"title-code\" class=\"subtitles subsubtitles\">Programming in Scala</div>";
        var lea = "<div id=\"title-learn\" class=\"subtitles subsubtitles\">Learning to Code</div>";
        var dat = "<div id=\"title-data\" class=\"subtitles subsubtitles\">Data Analytics</div>";
        var ran = "<div id=\"title-random\" class=\"subtitles subsubtitles\">Random</div>";
        var eve = "<div id=\"title-everreach\" class=\"subtitles subsubtitles\">+44 20 3582 1468</div>";
        var bet = "<div id=\"archive-beta\">Coming Soon!</div>";
        jQuery('#ernestrc-menu-bar').append(cat).append(con).append(sea).append(arc).append(hom).append(men).append(cod).append(lea)
            .append(dat).append(ran).append(eve).append(bet);
    }

    function loadSubMenu() {
        if(jQuery(window).width() > 900){
            appendTitles();
            appendSearchButton(2,7);
            appendHomeButton(2,5);
            appendTagsButton(2,3);
            appendArchiveButton(2,9);
            appendInboxButton(2,11);
            jQuery('#secondary').css('visibility','visible');
        } else if (jQuery(window).width() > 675) {
            appendSearchButton(2,7);
            appendHomeButton(2,5);
            appendTagsButton(1,6);
            appendArchiveButton(2,9);
            appendInboxButton(1,7);
        } else {
          appendSearchButton(2,7);
          appendHomeButton(2,6);
          appendTagsButton(3,6);
          appendArchiveButton(2,8);
          appendInboxButton(3,7);
        }

    }

    function loadMainMenu() {
        loadGrid();
        jQuery('#main').hover(function(){
            menuOff();
        });
        jQuery('#row4column7').hover(function(){
            menuOn();
        }).click(function(){
            jQuery('html, body').animate({ scrollTop: 0 }, 'slow');
            if(lockedMenu){
                jQuery('.submenu').css('visibility','hidden');
                jQuery('#search-comment').css('opacity',"50");
                jQuery('.submenu').css('opacity',"0");
                threatStarted(4,7,ColorScheme["main"],delay);
                jQuery('.subtitles').css('top','-120px');
                jQuery('.subsubtitles').css('top','-120px');
                jQuery('#search-form').css('visibility','hidden').css('opacity','0');
                jQuery('.subsubmenuTag').css('opacity','0');
                jQuery('.subsubmenuInbox').css('opacity','0');
                menu = false;
                title = setTimeout(function(){
                    jQuery('#title').css('opacity','100').css('visibility','visible');
                    jQuery('#beta').css('opacity','100').css('visibility','visible');
                    jQuery('#subtitle').css('opacity','100').css('visibility','visible');
                },300);
                threatStarted(4,7,ColorScheme["main"],delay);
                lockedMenu=false
                jQuery('.fa-lock').css('opacity','0');
            } else {
                menuOn();
                threatStarted(4,7,ColorScheme["sub"],delay);
                clearTimeout(timer);
                jQuery('.fa-lock').css('opacity','50');
                lockedMenu=true
            }
            var name = "row4column7";
            var actualColor = jQuery("#"+name).data("color");
            changeHexagonColor(name,"white");
            jQuery("#square-"+name).css("transition", "all 0.3s");
            jQuery("#top-"+name).css("transition", "all 0.3s");
            jQuery("#bottom-"+name).css("transition", "all 0.3s");
            setTimeout(function(){
                changeHexagonColor(name,actualColor);
            },100)
        });
        var down = new Triangle("4","7",false);
        var color = jQuery('#square-row4column7').css('background-color');
        jQuery(down).css('border-top','29px solid '+color);
        jQuery('#row4column7').append("<i class=\"fa fa-bolt\"></i>").append(down)
    }


    jQuery( document ).ready(function() {
        loadMainMenu();
        loadSubMenu();
        loadSubSubMenu();
        jQuery('[id=icons-menu]').css('background','transparent !important');

        outdatedBrowser({
            bgColor: '#f25648',
            color: '#ffffff',
            lowerThan: 'transform'
        })
    })

} )( jQuery );
