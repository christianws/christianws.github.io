
$('document').ready(function(){
		

  	

		var siteGlob = {};

		siteGlob.navOpen = false;
		siteGlob.greaterMarginGap = "260px";

		  var pull    = $('#pull');
		  var headerGap = $('#header-gap');
		  var headMarginOrig = headerGap.css("margin-top");
		  menu    = $('nav ul');


		  menuHeight  = menu.height();
		  console.log("headerheight: " + headMarginOrig);

		  $(pull).on('click', function(e) {
		    
		    e.preventDefault();

		    siteGlob.navOpen = siteGlob.navOpen ===true ? false : true;
		    menu.slideToggle();

		    if(siteGlob.navOpen){ // push content down
		    	 console.log("siteGlobNav now open about to extend spacer");
		    	 headerGap.css({"margin-top":siteGlob.greaterMarginGap});
		    }else{
		    	console.log("siteGlobNav now closed so reduce spacer");
		    	headerGap.css({"margin-top":headMarginOrig });
		    }
		  

		    
		  });
	
		$(window).resize(function(){
		  var w = $(window).width();
		
		  if(w > 320 && menu.is(':hidden')) {
		    menu.removeAttr('style');
		   
		  }
		  if(w > 480){
		  	console.log("window > 480 setting siteGlob.navOpen to false with margin:" + headMarginOrig);
		  	headerGap.css({"margin-top":headMarginOrig });    
		  }else{
		  	 console.log("window < 480 ");
		  	if(siteGlob.navOpen===true){
		  		console.log("siteGlob.navOpen === true so about to create create margin");
		  			headerGap.css({"margin-top":siteGlob.greaterMarginGap }); 
		  	}else{
		  		console.log("siteGlob.navOpen ==== false  so not about to create create margin");
		  	}
		  }

		}); 
	
});

	