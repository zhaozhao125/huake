// JavaScript Document
//banner
(function(d,D,v){d.fn.responsiveSlides=function(h){var b=d.extend({auto:!0,speed:1E3,timeout:4E3,pager:!1,nav:!1,random:!1,pause:!1,pauseControls:!1,prevText:"Previous",nextText:"Next",maxwidth:"",controls:"",namespace:"rslides",before:function(){},after:function(){}},h);return this.each(function(){v++;var e=d(this),n,p,i,k,l,m=0,f=e.children(),w=f.size(),q=parseFloat(b.speed),x=parseFloat(b.timeout),r=parseFloat(b.maxwidth),c=b.namespace,g=c+v,y=c+"_nav "+g+"_nav",s=c+"_here",j=g+"_on",z=g+"_s",
o=d("<ul class='"+c+"_tabs "+g+"_tabs' />"),A={"float":"left",position:"relative"},E={"float":"none",position:"absolute"},t=function(a){b.before();f.stop().fadeOut(q,function(){d(this).removeClass(j).css(E)}).eq(a).fadeIn(q,function(){d(this).addClass(j).css(A);b.after();m=a})};b.random&&(f.sort(function(){return Math.round(Math.random())-0.5}),e.empty().append(f));f.each(function(a){this.id=z+a});e.addClass(c+" "+g);h&&h.maxwidth&&e.css("max-width",r);f.hide().eq(0).addClass(j).css(A).show();if(1<
f.size()){if(x<q+100)return;if(b.pager){var u=[];f.each(function(a){a=a+1;u=u+("<li><a href='#' class='"+z+a+"'>"+a+"</a></li>")});o.append(u);l=o.find("a");h.controls?d(b.controls).append(o):e.after(o);n=function(a){l.closest("li").removeClass(s).eq(a).addClass(s)}}b.auto&&(p=function(){k=setInterval(function(){var a=m+1<w?m+1:0;b.pager&&n(a);t(a)},x)},p());i=function(){if(b.auto){clearInterval(k);p()}};b.pause&&e.hover(function(){clearInterval(k)},function(){i()});b.pager&&(l.bind("click",function(a){a.preventDefault();
b.pauseControls||i();a=l.index(this);if(!(m===a||d("."+j+":animated").length)){n(a);t(a)}}).eq(0).closest("li").addClass(s),b.pauseControls&&l.hover(function(){clearInterval(k)},function(){i()}));if(b.nav){c="<a href='#' class='"+y+" prev'>"+b.prevText+"</a><a href='#' class='"+y+" next'>"+b.nextText+"</a>";h.controls?d(b.controls).append(c):e.after(c);var c=d("."+g+"_nav"),B=d("."+g+"_nav.prev");c.bind("click",function(a){a.preventDefault();if(!d("."+j+":animated").length){var c=f.index(d("."+j)),
a=c-1,c=c+1<w?m+1:0;t(d(this)[0]===B[0]?a:c);b.pager&&n(d(this)[0]===B[0]?a:c);b.pauseControls||i()}});b.pauseControls&&c.hover(function(){clearInterval(k)},function(){i()})}}if("undefined"===typeof document.body.style.maxWidth&&h.maxwidth){var C=function(){e.css("width","100%");e.width()>r&&e.css("width",r)};C();d(D).bind("resize",function(){C()})}})}})(jQuery,this,0);

//nav
$(function(){
	$(".subnav li").hover(function(){
		   $(this).find("a").addClass("bg");
		   $(this).find("dl").stop(true,true);
		   $(this).find("dl").stop().slideDown(200);
		}
		,function(){
		   $(this).find("a").removeClass("bg");
		   $(this).find("dl").stop(true,true);
		   $(this).find("dl").stop().slideUp(200);
			})
	});
//three
$(function(){
	$(".newslist ul li").hover(function(){
/*		    $(this).stop().animate({'height':'391px'},300);*/
		    $(this).find(".the-down").stop().animate({'top':'68px'},300);
		    $(this).find(".the-down h3").stop().delay(400).fadeIn(500);
			$(this).find(".the-down h4").stop().delay(600).fadeIn(500);
			$(this).find(".the-down p").stop().delay(800).fadeIn(500);
		 },function(){
			/* $(this).stop().animate({'height':'276px'},300);*/
		     $(this).find(".the-down").stop().animate({'top':'391px'},300);
			 $(this).find(".the-down h3").stop().delay(400).stop().hide(1);
			 $(this).find(".the-down h4").stop().delay(600).stop().hide(1);
			 $(this).find(".the-down p").stop().delay(800).stop().hide(1);
			})
	});

$(function(){
	$(".newslist ul .cm1").hover(function(){
		    $(this).stop().animate({'height':'391px'},0);
		    $(".newslist ul .cm2").animate({'height':'391px'},0);
			$(".newslist ul .cm3").animate({'height':'391px'},0);
		 },function(){
			 $(this).stop().animate({'height':'276px'},0);
		     $(".newslist ul .cm2").animate({'height':'276px'},0);
			 $(".newslist ul .cm3").animate({'height':'276px'},0);
			})
	});
$(function(){
	$(".newslist ul .cm2").hover(function(){
		    $(this).stop().animate({'height':'391px'},0);
		    $(".newslist ul .cm1").animate({'height':'391px'},0);
			$(".newslist ul .cm3").animate({'height':'391px'},0);
		 },function(){
			 $(this).stop().animate({'height':'276px'},0);
		     $(".newslist ul .cm1").animate({'height':'276px'},0);
			 $(".newslist ul .cm3").animate({'height':'276px'},0);
			})
	});
$(function(){
	$(".newslist ul .cm3").hover(function(){
		    $(this).stop().animate({'height':'391px'},0);
		    $(".newslist ul .cm1").animate({'height':'391px'},0);
			$(".newslist ul .cm2").animate({'height':'391px'},0);
		 },function(){
			 $(this).stop().animate({'height':'276px'},0);
		     $(".newslist ul .cm1").animate({'height':'276px'},0);
			 $(".newslist ul .cm2").animate({'height':'276px'},0);
			})
	});


//right
$(function(){
$("#imgchange li:gt(0)").hide();
    var num = $("#imgchange li").length;
    for(i=1;i<=num;i++){
	 $("#imgchange h5").append("<font></font>");
    }
    $("#imgchange h5 font:first").addClass("current");
    $("#imgchange h5 font").mouseover(function(){
		 $(this).addClass("current").siblings().removeClass("current");
 
		 index=$(this).index();
		 $("#imgchange li").eq(index).stop(true,true).fadeIn().siblings("li").hide();
	});	
	int=setInterval(function(){
    indexCurrent=$(".current").index("font");
	if(indexCurrent+1==num){
		index1=0;		
	}
	else{
		index1=indexCurrent+1;
	}
	$("font").eq(index1).trigger("mouseover");		
	},4000);

	$("#imgchange img").mouseover(function(){
		clearInterval(int);
	}).mouseout(function(){
	int=setInterval(function(){
    indexCurrent=$(".current").index("font");
	if(indexCurrent+1==num){
		index1=0;		
	}
	else{
		index1=indexCurrent+1;
	}
	$("font").eq(index1).trigger("mouseover");	
	},4000);});			
})


//joinus
$(function() {
    var Accordion = function(el, multiple) {
        this.el = el || {};
        this.multiple = multiple || false;
        var links = this.el.find('.tit');
        links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
    }
    Accordion.prototype.dropdown = function(e) {
        var $el = e.data.el;
            $this = $(this),
            $next = $this.next();
        $next.slideToggle();
        if (!e.data.multiple) {
            $el.find('.info').not($next).slideUp();
        };
    }	
   var accordion = new Accordion($('.hd-list'), false);
});


//anli
$(function(){
	$(".the-zhan li").toggle(function(){
		 $(this).stop().find(".nei").stop().animate({"height":"100%"},300);
		 $(this).stop().find("font").stop().addClass("bg");
		 $(this).stop().find(".xss1").css("display","none");
		 $(this).stop().find(".xss2").css("display","block");
		},function(){
			 $(this).stop().find(".nei").stop().animate({"height":"88px"},300);
		     $(this).stop().find("font").stop().removeClass("bg");
			 $(this).stop().find(".xss1").css("display","block");
		     $(this).stop().find(".xss2").css("display","none");
			})
	
	});
//
$(function(){
	$("header .top nav .subnav .langugae .en").hover(function(){
		 $(this).stop().addClass("bg");
		 $(this).next().stop().addClass("ys");
		}
		 ,function(){
			 $(this).stop().removeClass("bg");
		     $(this).next().stop().removeClass("ys");		 
			 }
		)
	})



































