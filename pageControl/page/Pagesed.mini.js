define(function(require,exports,module){var Pagesed={properties:{totalpage:"",},external:function(pagenum){},init:function(){this.properties.totalpage=$("#lastPage").text();this.events();this.select()},events:function(){$(document).on("click",".pagination li a",$.proxy(this.page,this)).on("click",".seletgo",$.proxy(this.go,this))},select:function(){for(var i=0;i<this.properties.totalpage;i++){$(".selectpicker").append("<option>"+(i+1)+"</option>")}if(parseInt(this.properties.totalpage)<=($(".pagination li").length-3)){var ales=$(".pagination li a");for(var i=1;i<ales.length-2;i++){if(parseInt($(ales[i]).text())==this.properties.totalpage){for(var s=parseInt($(ales[i]).text())+1;s<=ales.length-2;s++){$(ales[s]).css("background-color","#ddd");$(ales[s]).parent().addClass("disabled")}break}}}},page:function(e){var tites="";var target=$(e.target);var num=target.text();var back=$("#back").text();var next=$("#next").text();var pagehead=$("#pagehead").text();var pageend=$("#pageend").text();if(num==back){if($("#back").parent().attr("class")!="disabled"){var led=$(target.parents(".pagination")).find("li");for(var i=1;i<led.length-1;i++){if($(led[i]).attr("class")=="active"){if(i!=1){$(led[i]).removeClass("active");$(led[i-1]).addClass("active");num=parseInt($(led[i-1]).text());if($("#next").parent().attr("class")=="disabled"){if(num<this.properties.totalpage){$("#next").parent().removeClass("disabled")}else{return false}}else{$("#next").parent().removeClass("disabled")}break}else{var led=$(target.parents(".pagination")).find("li a");for(var i=1;i<led.length;i++){if(i!=led.length-1){var nub=parseInt($(led[i]).text())-(led.length-2);$(led[i]).html(nub);if(nub<this.properties.totalpage){$(led[i]).css("background-color","");$(led[i]).parent().removeClass("disabled")}}}$(led[led.length-2]).parent().addClass("active");$(led[led.length-2]).parent().siblings().removeClass("active");num=parseInt(pagehead)-1;if($("#next").parent().attr("class")=="disabled"){if(num<this.properties.totalpage){$("#next").parent().removeClass("disabled")
}else{return false}}else{$("#next").parent().removeClass("disabled")}}}}}else{num=1}}else{if(num==next){if($("#next").parent().attr("class")!="disabled"){var led=$(target.parents(".pagination")).find("li");for(var i=1;i<led.length-2;i++){if($(led[i]).attr("class")=="active"&&i!=led.length-3){$(led[i]).removeClass("active");$(led[i+1]).addClass("active");num=parseInt($(led[i+1]).text());if(num==this.properties.totalpage){$("#next").parent().addClass("disabled")}else{if($("#next").parent().attr("class")=="disabled"){if(num<this.properties.totalpage){$("#next").parent().removeClass("disabled")}else{return false}}else{$("#next").parent().removeClass("disabled")}}break}if(i==led.length-3){var led=$(target.parents(".pagination")).find("li a");for(var i=1;i<led.length;i++){if(i!=led.length-1){var nub=parseInt($(led[i]).text())+(led.length-2);$(led[i]).html(nub);if(nub>this.properties.totalpage){$(led[i]).css("background-color","#ddd");$(led[i]).parent().addClass("disabled")}}}$(led[1]).parent().addClass("active");$(led[1]).parent().siblings().removeClass("active");num=parseInt(pageend)+1;if(num==this.properties.totalpage){$("#next").parent().addClass("disabled")}else{if($("#next").parent().attr("class")=="disabled"){if(num<this.properties.totalpage){$("#next").parent().removeClass("disabled")}else{return false}}else{$("#next").parent().removeClass("disabled")}}}}}}else{if($(target).parent().attr("class")!="disabled"){$(target.parent().siblings()).removeClass("active");$(target.parent()).addClass("active");num=parseInt(num);if(num<this.properties.totalpage){$("#next").parent().removeClass("disabled")}if(num==this.properties.totalpage){$("#next").parent().addClass("disabled")}}}}if(1<parseInt(num)){$("#back").parent().removeClass("disabled")}else{if($("#back").parent().attr("class")!="disabled"){if(num==1){$("#back").parent().addClass("disabled")}else{return false}}else{$("#back").parent().addClass("disabled")}}if(num>parseInt($("#lastPage").text())){num=parseInt($("#currentPage").text())
}$("#currentPage").text(num);this.external(num)},go:function(){var pagenum=parseInt($(".selectpicker").val());if(pagenum!=""){var lied=$(".pagination").find("li");var numes=pagenum%(lied.length-3);if(numes==0){numes=lied.length-3}var lies=$(lied).eq(numes);$(lies).find("a").text(pagenum);$(lies).addClass("active");$(lies).removeClass("disabled");$(lies).find("a").css("background-color","");$(lies).siblings().removeClass("active");var em=1;for(var i=numes-1;i<numes;i--){if(i!=0){var pages=pagenum-1*em;$(lied).eq(i).find("a").text(pages);if(pages<this.properties.totalpage){$(lied).eq(i).find("a").css("background-color","");$(lied).eq(i).removeClass("disabled");$("#back").parent().addClass("disabled");$("#next").parent().removeClass("disabled");if(pagenum!=1){$("#back").parent().removeClass("disabled")}}if(pagenum==this.properties.totalpage){$("#next").parent().addClass("disabled")}}else{break}em++}var es=1;for(var i=numes+1;i<lied.length-2;i++){$(lied).eq(i).find("a").text(pagenum+1*es);if(pagenum+1*es>this.properties.totalpage){$(lied).eq(i).find("a").css("background-color","#ddd");$(lied).eq(i).addClass("disabled");$("#next").parent().addClass("disabled");$("#back").parent().removeClass("disabled")}else{if(pagenum+1*es<this.properties.totalpage){$(lied).eq(i).find("a").css("background-color","");$(lied).eq(i).removeClass("disabled");$("#next").parent().removeClass("disabled");$("#back").parent().removeClass("disabled");if(pagenum==1){$("#back").parent().addClass("disabled")}}}es++}}if(pagenum>parseInt($("#lastPage").text())){pagenum=parseInt($("#currentPage").text())}$("#currentPage").text(pagenum);this.external(pagenum)}};Pagesed.init();module.exports=Pagesed});
