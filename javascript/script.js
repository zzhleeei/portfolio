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

	$('.tabmenu>li>a').click(function(){
	$(this).parent().addClass("active").siblings().removeClass("active");
		return false;
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
	
	//팝업 열기
	let popup = getCookie('popup');
	console.log("popup:  "+popup);
	if(!popup){
		$("#popup").show();
		//$("#popup").addClass('active');
		//$("#popup").fadeIn(3000);
	}	

	$(".closePopup_").click(function(){
        // 오늘하루 보지않기
        // if ($("input:checkbox[name=todayPopup_]").is(":checked") == true) {
        //     setCookie00("Popup", "done", 1);
        // }

        // 팝업 닫기
		$("#popup").hide();
        //$("#popup").removeClass("active");
		//$("#popup").fadeOut(3000);
    });

	$(".todayPopup_").click(function(){
		setCookie00("popup", "done", 1);

		// 팝업 닫기
		$("#popup").hide();
        //$("#popup").removeClass("active");
		//$("#popup").fadeOut(3000);
	});
});

// 쿠키 가져오기 
function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;
	console.log("document.cookie.length :"+document.cookie.length);
	while (x <= document.cookie.length) {
		var y = (x + nameOfCookie.length);
		console.log("popup :"+document.cookie.substring(x, y));
		if (document.cookie.substring(x, y) == nameOfCookie) {
			if ((endOfCookie = document.cookie.indexOf(";", y)) == -1)
				endOfCookie = document.cookie.length;
			return unescape(document.cookie.substring(y, endOfCookie));
		}
		x = document.cookie.indexOf(" ", x) + 1;
		if (x == 0) break;
	}
	return "";
} 

// 24시간 기준 쿠키 설정하기 
// 00:00 시 기준 쿠키 설정하기 // expiredays 의 새벽 00:00:00 까지 쿠키 설정 
function setCookie00(name, value, expiredays) {
	var todayDate = new Date(); todayDate = new Date(parseInt(todayDate.getTime() / 86400000) * 86400000 + 54000000);
	if (todayDate > new Date()) {
		expiredays = expiredays - 1;
	}
	todayDate.setDate(todayDate.getDate() + expiredays);
	document.cookie = name + "=" + escape(value) + "; path=/; expires=" + todayDate.toGMTString() + ";";
}

// setInterval(function(){ 
// 	$('.slidelist').delay(2000);
// 	$('.slidelist').animate({marginLeft:-1200});
// 	$('.slidelist').delay(2000);
// 	$('.slidelist').animate({marginLeft:-2400});
// 	$('.slidelist').delay(2000);
// 	$('.slidelist').animate({marginLeft:0});
// 	$('.slidelist').delay(2000);
// 	});
	