$.scrollTo=$.fn.scrollTo=function(a,t,e){"use strict";return this instanceof $?(e=$.extend({},{gap:{x:0,y:0},animation:{easing:"swing",duration:600,complete:$.noop,step:$.noop}},e),this.each(function(){var n=$(this);n.stop().animate({scrollLeft:isNaN(Number(a))?$(t).offset().left+e.gap.x:a,scrollTop:isNaN(Number(t))?$(t).offset().top+e.gap.y:t},e.animation)})):$.fn.scrollTo.apply($("html, body"),arguments)},$(document).ready(function(){"use strict";$(".easing").click(function(a){a.preventDefault(),$("html,body").scrollTo(this.hash,this.hash)});for(var a=$("navbar li").children(),t=[],e=0;e<a.length;e++){var n=a[e],o=$(n).attr("href");t.push(o)}$(window).scroll(function(){for(var a=$(window).scrollTop(),e=$(window).height(),n=$(document).height(),o=0;o<t.length;o++){var s=t[o],i=$(s).offset().top,r=$(s).height();a>=i&&i+r>a?$("a[href='"+s+"']").addClass("nav-active"):$("a[href='"+s+"']").removeClass("nav-active")}if(a+e==n&&!$("navbar li:last-child a").hasClass("nav-active")){var l=$(".nav-active").attr("href");$("a[href='"+l+"']").removeClass("nav-active"),$("navbar li:last-child a").addClass("nav-active")}})});