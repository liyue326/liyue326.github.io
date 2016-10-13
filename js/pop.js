window.onresize = function(){
	var minWidth = document.getElementById('wrap'),
		flashWidth = document.documentElement.clientWidth;
	if (flashWidth < 1002){
		minWidth.style.width = 1002 + 'px';
	}else{
		minWidth.style.width = '100%';
	}
}
var lightbox = (function(){
	var getPageScroll = function(){ //获取滚动条高度
		var yScroll; 
		if (document.documentElement && document.documentElement.scrollTop){ 
			yScroll = document.documentElement.scrollTop; 
		} else if (document.body) { 
			yScroll = document.body.scrollTop; 
		} 
		return yScroll; 
		
		
	}
 
	var pageWidth = document.documentElement.clientWidth//可视区域宽和高
		pageHeight = document.documentElement.clientHeight;
	var widthMore = document.documentElement.scrollWidth,//有滚动条时的宽高
		heightMore = document.body.scrollHeight || document.documentElement.scrollHeight;
	var	rWidth = widthMore,//透明层宽高
		rHeight = Math.max(pageHeight, heightMore);
	var blackDiv = document.createElement('div');
		blackDiv.id = "pop_div"
	function setBlack(){//设置透明层
		heightMore = document.body.scrollHeight || document.documentElement.scrollHeight;
		rHeight = Math.max(pageHeight, heightMore);
		var cssStr = 'position:absolute;top:0;left:0;background-color:black;z-index:20000;opacity:.80;filter:alpha(opacity=80);width:' + rWidth + 'px;height:' + rHeight + 'px';
		blackDiv.style.cssText = cssStr;
		document.body.appendChild(blackDiv);
	}
	function setWhitePos(id){//设置弹出层位置
		var whiteDiv = document.getElementById(id);
		whiteDiv.style.display = 'block';
		if ((pageWidth - whiteDiv.offsetWidth) > 0){//控制弹出层位置
			whiteDiv.style.left = parseInt((pageWidth - whiteDiv.offsetWidth)/2) + 'px';
		}else{
			whiteDiv.style.left = 0;
		}
		if ((pageHeight - whiteDiv.offsetHeight) > 0){
			whiteDiv.style.top = getPageScroll() + parseInt((pageHeight - whiteDiv.offsetHeight)/2) + 'px';
		}else{
			whiteDiv.style.top = getPageScroll() + 'px';
		}
	}
	return {//返回2个含开关方法的对象
		clockScreen : function(id){
			
			setBlack();
			setWhitePos(id);
		},
		openScreen : function(id){
			document.getElementById(id).style.display = 'none';
			blackDiv.style.display = 'none';
		}
	}	
})();