
$(function(){
	initWantList()
})


function initWantList(){
	
	$.ajax({
		type:"get",
		url:"wantInfoServlet",
		success:function(resp){
			for (var i=0;i<resp.length;i++) {
				$("#want-list").append(
					'<li class="want-item"><div class="want-li clearfix"><div class="left"> '+
					'<a href=""><img src="imgs/'+resp[i].photo+'"alt="头像"></a></div> '+
					'<div class="right"><h4 class="want-name">'+resp[i].wantId+'[求购]<span>'+resp[i].title+'</span></h4><p class="want-detail">'+resp[i].desc+'</p> '+
					'<p class="want-attr"><span>期望价格</span><span class="want-price">¥'+resp[i].wantPrice+'</span><span>期望交易地点：</span> '+
					'<span class="want-add">'+resp[i].wantDealArea+'</span><span>'+resp[i].creatTime+'</span></p><p class="want-contact"> '+
					'<a href=""class="want-person">'+resp[i].userName+'</a> '+
					'<span class="mr10">TEL：'+resp[i].tel+'</span><span>QQ：'+resp[i].qq+'</span></p> '+
					'</div></div></li> '
				)
			}
		}
	});
}
