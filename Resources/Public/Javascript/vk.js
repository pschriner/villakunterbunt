$('header h1 span').each(function(){
	if($(this).html().toUpperCase() == 'villa'.toUpperCase()) {
		$(this).html("<span class='blau1'>V</span><span class='gelb1'>I</span><span class='rot1'>L</span><span class='gruen1'>L</span><span class='blau2'>A</span>");
	}
	if($(this).html().toUpperCase() == 'kunterbunt'.toUpperCase()) {
		$(this).html("<span class='blau2'>K</span><span class='gelb1'>U</span><span class='rot1'>N</span><span class='gruen1'>T</span><span class='blau1'>E</span><span class='blau2'>R</span><span class='gelb1'>B</span><span class='rot1'>U</span><span class='gruen1'>N</span><span class='blau1'>T</span>");
	}
	//console.log($(this).html());
});

$(document).ready(function(){
	if ($('HTML.lt-ie9 BODY').length == 0) {
		return;
	}
	var backgroundimage = $('HTML.lt-ie9 BODY').eq(0).css('background-image');
	backgroundimage = backgroundimage.split('"');
	backgroundimage = backgroundimage[1];	
	var image = $('<img src="'+backgroundimage+'" class="backgroundimage" />');
	$('body').eq(0).append(image);
	$('body').addClass('background-removed');
});

// include fancybox on demand
$(document).ready(function(){
	if ($('.lightbox').length > 0) {
		$('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', '/typo3conf/ext/villakunterbunt/Resources/Public/Javascript/fancybox/jquery.fancybox.css') );
		$('head').append( $('<script type="text/javascript" />').attr('src', '/typo3conf/ext/villakunterbunt/Resources/Public/Javascript/fancybox/jquery.fancybox.pack.js') );
		
		$(".lightbox").fancybox({
        tpl: {
          error    : '<p class="fancybox-error">Der Inhalt konnte nicht geladen werden.<br/>Bitte probieren Sie es später noch einmal.</p>',
          closeBtn : '<a title="Schliessen" class="fancybox-item fancybox-close" href="javascript:;"></a>',
          next     : '<a title="Nächstes" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',
          prev     : '<a title="Vorheriges" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'
        },
        nextEffect : 'fade',
        prevEffect : 'fade'
      });
	}
});