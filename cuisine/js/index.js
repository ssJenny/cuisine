$('#head').load("header.html");
//$('#footer').load("footer.html");
$(function() {

	var index = 0;
	var len = $('.bananer-wrap .middle-circle>span').length;
	$('.middle-circle>span').click(function() {
		index = $(this).index();
		changeBananer(index);
	});
	$('.bananer-bar .prev').click(function() {
		index--;
		index = index < 0 ? 2 : index;
		changeBananer(index);
		console.log(index)
	});
	$('.bananer-bar .next').click(function() {
		index++;
		index = index > len - 1 ? 0 : index;
		changeBananer(index);
		console.log(index)
	});

	function changeBananer(index) {
		$('.middle-circle span').eq(index).addClass("now").siblings().removeClass("now");
		$('.bananer-wrap li').eq(index).fadeIn(500).siblings("li").fadeOut(500);
	}
});

$(function() {
	var index = 0;
	var len = $('.product .contents_items').length;

	function moveContents(index) {

		var oldIndex = $(".contents>.contents_items:visible").index();
		$('.line_btn').eq(index).addClass("line_btn_on").siblings().removeClass("line_btn_on");
		if(index > oldIndex) {
			$('.contents_items').eq(index).removeClass("fadeInRight").addClass("animated fadeInLeft").fadeIn(400).siblings().fadeOut(100);
		} else {
			$('.contents_items').eq(index).removeClass("fadeInLeft").addClass("animated fadeInRight").fadeIn(400).siblings().fadeOut(100);
		}
	}

	$('.line_btn').click(function() {
		index = $(this).index()
		moveContents(index);
	});
	$('.change_line .prev').click(function() {
		index--;
		index = index < 0 ? (len - 1) : index;
		moveContents(index);
		console.log(len - 1);
	});

	$('.change_line .next').click(function() {
		index++;
		index = index > (len - 1) ? 0 : index;
		moveContents(index);
		console.log(index);
	});
});

$('.bussiness_icon').hover(function() {
	$(this).addClass("animated tada");
}, function() {
	$(this).removeClass("animated tada");
});

$('.center_img').hover(function() {
	$(this).addClass("animated tada");
}, function() {
	$(this).removeClass("animated tada");
});

$('.bussiness_icon').click(function() {
	if($(this).parent().next().is(":hidden")) {
		$(this).parent().next().slideDown(500);
		$(this).parent().parent().siblings().find(".bussiness_detail").slideUp(500);
		$(this).removeClass("close").addClass("open");
	} else {
		$(this).parent().next().slideUp(500);
		$(this).removeClass("open").addClass("close");
	}
})

$('.headimg').hover(function() {
	$(this).find("a").stop().animate({
		opacity: 1

	}, 500).fadeIn(500);
}, function() {
	$(this).find("a").stop().animate({
		opacity: 0

	}, 500).fadeOut(500);
})


$('.team_changebar .prev').click(function() {
	$('.team_move').prepend($(".team_move").children().last()).css("left",-1100).animate({left:400},1000).animate({left:0},1000);
	moveteamContent();
});

$('.team_changebar .next').click(function() {
	$('.team_move').animate({left:400},1000).animate({left:-1100},1000,function(){
		$(this).append($(this).children().first()).css("left",0);
	});	
	moveteamContent(true);
});

function moveteamContent(bool){
	var bool = bool;
	var index = $('.teamcontent_wrap .middle-circle>span.now').index();
	console.log(index);
	if(bool){
		index++;
		index = index>2?0:index;
	}else{
		index--;
		index = index<0?2:index;
	}
	$('.teamcontent_wrap .middle-circle>span').eq(index).addClass("now").siblings().removeClass("now");
}
$('.team_changebar .next,.team_changebar .prev').hover(function(){
	clearInterval(timer);
},function(){
	timer = setInterval(autoAnimate,5000);
})

var timer = setInterval(autoAnimate,5000)
function autoAnimate(){
	$('.team_changebar .next').trigger("click");
}

$('.input_box input').focus(function() {
	$(this).parent().addClass("input_box_hover");
	$(this).parent().siblings().removeClass("input_box_hover");
})
$('.input_box textarea').focus(function() {
	$(this).parent().addClass("input_box_hover");
	$(this).parent().siblings().removeClass("input_box_hover");
})
$('.bussiness_simple .simple_description1').html("<p>零食、饮料要减少</p><p>聚餐、聊天、打牌时注意控制摄入量<p><p>戒烟限酒</p>");
$('.bussiness_simple .simple_description2').html("<p>少吃一餐的你，少吃的是哪一餐?</p><p>肉类脂肪多?肉类热量高?<p><p>骚年不识米饭香</p>");
$('.bussiness_simple .simple_description3').html("<p>帮助消化、治疗胃炎和胃溃疡、保护皮肤和胃黏膜；</p><p>提高食欲，改善消化不良等症<p><p>骚年不识米饭香</p>");
//
$('.healthdetail1').html("<p>一般来说，慢性病人应避免食用含有蛋黄的月饼，以减少摄取一个蛋黄中250毫克的胆固醇，市售低热量的蒸月饼、冰皮月饼，每个热量都低于120卡，可以列入考虑食用。</p><p>专家指出，慢性病人应把月饼当成点心，而不是正餐，一天食用量不可超过一个，每次只能吃下一小块，且不能同时搭配含糖饮料;在食用月饼的同时，必须减少白饭及油脂的吸收，以平衡饮食量。</p><p>柚子是中秋节唯一可以降低胆固醇及防止便秘的食物，但160克的柚子就有60卡的热量，吃太多也会消化不良、胀气或腹泻，最好是浅尝即可。</p><p>零食、饮料要减少聚餐、聊天、打牌时零食和饮料必不可少，但要注意控制摄入量。瓜子、花生、糖果等小食品中油脂、糖、盐、香料较多，过多食用，会难以消化，导致腹胀、口干舌燥，甚至情绪激动;饮料含糖量较高，会使体内渗透压升高，越喝越渴。因此，零食要少吃，饮料也宜换成清香的热茶或新鲜果蔬汁。</p>");
$('.healthdetail2').html("<p>大米能提供淀粉质，属于碳水化合物的一种。而碳水化合物可分为糖(包括单糖和双糖)、淀粉质及膳食纤维三大类，其中糖类、糖浆和蜜糖都含丰富的单糖或双糖，而白米饭和根茎类蔬菜含丰富的淀粉质及膳食纤维。根据营养学家研究建议，我们每天膳食当中，碳水化合物应占全日总能量的60%-70%。</p><p>　含有蛋白质、少量脂肪以及富含纤维的食物、水果都是减肥早餐的首选。谷类能提供稳定的热量，而蛋白质、脂肪和高纤维食品能给人饱腹感，并且维持血糖正常，用营养密度高的水果做成轻食早餐，开胃之外也能控制体重、缓解便秘。</p><p>随着餐数的增多，身体代谢效率更高，体脂肪也更能燃烧起来，抑制脂肪囤积。</p><p>少吃多餐是减肥界推崇的健康饮食方式，能加速身体的新陈代谢，促进脂肪的燃烧。</p>");
$('.healthdetail3').html("<p>秋葵的介绍 秋葵又名羊角豆、咖啡黄葵、毛茄，目前黄秋葵已成为人们所热追高档营养保健蔬菜，风靡全球。它的可食用部分是果荚，又分绿色和红色两种，其脆嫩多汁，滑润不腻，香味独特，深受百姓青睐。原产于非洲，20世纪初由印度引入我国，近年来，在日本、台湾、香港及西方国家已成为热门畅销蔬菜，在非洲许多国家已成为运动员食用之首选蔬菜，更是老年人的保健食品。种子可榨油，黄秋葵油是一种高档植物油，它的营养成分和香味远远超过芝麻油和花生油。 秋葵的营养价值1、具有帮助消化、治疗胃炎和胃溃疡、保护皮肤和胃黏膜；2、提高食欲，改善消化不良等症；秋葵的适用人群 一般人群均可用。1. 但是秋葵属于性味偏于寒凉的蔬菜，胃肠虚寒、功能不佳、经常腹泻的人不可多食。2. 适合胃炎、癌症、胃溃疡、贫血、消化不良食用，特别是青壮年、运动员、护肤女士、男士更应该多吃。");
//$('.bussiness_detail2').html(bussiness[1] + bussiness[2] + bussiness[3]);

//$(window).scroll(function() {
//	if($(window).scrollTop() > 300) { //滑动100像素显示返回顶部
//		$('#scrollTop_wrap').fadeIn(1500);
//	} else {
//		$('#scrollTop_wrap').fadeOut(1500); //否则缓慢消失
//	}
//});
//
//$('#scrollTop').click(function() {
//	$(window).scrollTop(0);
//})

$(function(){
	//返回顶部效果（判断是否在顶部以隐藏显示按钮）
	$(window).scroll(function () {
		if ($(this).scrollTop() > 500) {
			$('#scrollTop_wrap').fadeIn();
		} else {
			$('#scrollTop_wrap').fadeOut(0);
		}
	});

	// 点击返回顶部滚动
	$('#scrollTop').click(function () {
		
		$(this).parent().animate({"bottom":1000,"opacity":0},400,function(){
			$('#scrollTop_wrap').css("opacity",1).fadeOut(0).css("bottom",200);
		});
		$('body,html').animate({
			scrollTop: 0
		}, 400);
	});
		
	
	
})