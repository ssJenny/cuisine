

$(function(){
	
	var likeTipsArr = ["娘娘威武","皇上万岁，万万岁","爱死你啦、MUA~","再点一下试试~"];

	var ifLikebtnClicked = true;
	var iftextApear = false;
	$('.like_btn').click(function(){
		if(ifLikebtnClicked && !iftextApear){
			var index = Math.floor(Math.random()*likeTipsArr.length);
			$('.like_tips').text(likeTipsArr[index]);
			doDown();
		}
		
		else if(('.like_tips').text() == "再点一下试试~"){
			iftextApear = true;
			$('.like_tips').text("喊你点就点嗦~傻！");
			doDown();
			$('.like_btn').addClass("like_btn_clicked");
		}
	})
	function doDown(){
		$('.like_tips').animate({opacity:1,top:0},600,"elasticOut",function(){
			$('.like_tips').delay(600).animate({left:-500},600,'backIn',function(){
				$('.like_tips').animate({left:258,top:-200,opacity:0},0);
			});
		})
	}
	
	loadArticleDetail();
	
})

function loadArticleDetail(){
	if(getUrlParams("type")){
		var result = articleData[getUrlParams("type")+getUrlParams("articleid")];
		$('#articleTitle').text(result.data.title);
//		$('#updateTime').text(result.data.updateAt.substr(0,10));
//		$('#author').text(result.data.updateByFullName);
		$('#cover').attr('src',result.data.coverimgs);
		$('#content').html(content);
	}
}

function getUrlParams(name){
	var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)");
	var result = window.location.search.substr(1).match(reg);
	if(result != null){
		return result[2];
	}else{
		return "";
	}
}
