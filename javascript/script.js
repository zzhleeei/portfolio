// JavaScript Document

jQuery(document).ready(function(){
	  
	$('.navi>li').mouseover(function(){
		$('.submenu').stop().slideDown(500);
	}).mouseout(function(){
		$('.submenu').stop().slideUp(500);
	});

	setInterval(function(){ 
		$('.slidelist').delay(1000);
		$('.slidelist').animate({marginLeft: 0});
		$('.slidelist').delay(2000);
		$('.slidelist').animate({marginLeft: '-100%'});
		$('.slidelist').delay(2000);
		$('.slidelist').animate({marginLeft: '-200%'});
		$('.slidelist').delay(2000);
  	});

	$(function(){
		$('.tabmenu>li>a').click(function(){
		$(this).parent().addClass("active")
							.siblings()
							.removeClass("active");
			return false;
		});
	});

	$(".notice li:first").click(function(){
		$("#layer").addClass("active");
	});

	$(".btn").click(function(){
		$("#layer").removeClass("active");
	});

	$(".navi>li").mouseover(function(){
		$(this).children().find(".fa-solid").css("color","#4a6de2");
		$(this).children().css({"font-weight":"bold","color":"#4a6de2"});
	});

	$(".navi>li").mouseout(function(){
		$(this).children().find(".fa-solid").css("color","#000");
		$(this).children().css({"font-weight":"400","color":"#000"});
	});

	$("#agbutton_mn").click(function(){
		let htm = "";
		htm += "<li><a href='#'><img src='images/news image.png'></a></li>";
		htm += "<li><a href='#'><img src='images/news image.png'></a></li>";
		htm += "<li><a href='#'><img src='images/news image.png'></a></li>";

		$("#news_ul").append(htm);
		$(".contents_mn").css("height","auto");
	});

});

// setInterval(function(){ 
// 	$('.slidelist').delay(2000);
// 	$('.slidelist').animate({marginLeft:-1200});
// 	$('.slidelist').delay(2000);
// 	$('.slidelist').animate({marginLeft:-2400});
// 	$('.slidelist').delay(2000);
// 	$('.slidelist').animate({marginLeft:0});
// 	$('.slidelist').delay(2000);
// 	});
	