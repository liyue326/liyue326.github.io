(function(e){
    var e = DT = {
        progress : function(id, n) {
            if (!id) return false;
            var box = $(id),
                w = n + "%";
            box.animate({width : w},100);
        },
        bottom : function(id){
            var winHeight = $(window).height(),
                bodyHeight = $("html, body").height(),
                box = id || "#bottom";
            if (bodyHeight < winHeight) {
                $(box).css({"bottom" : 0, "left" : 0, "position" : "fixed"});
            }
        },
        tab : function(btn , event , box ,el){ //选项卡
            if (!btn) return false;
            var index = 0,
                btn = $(btn),
                thisEvent = event || "click",
                getBox = function(){
                    return btn.parent().next().attr("class");
                },
                thisBox = box || ("." + getBox());
            btn.on(thisEvent , function(event){
                index = btn.index(this);
                $(this).addClass("on").siblings().removeClass("on");
                $(thisBox).eq(index).show().siblings(thisBox).hide();
                if (el && typeof el == "function") el(index , $(this).text());
            });
            btn.first().trigger(thisEvent);
        },
        hover : function(id, menu){
            if (!id) return false;
            var box = $(id),
                menu = menu ? $(menu) : box.find(".option");
			box.each(function(i){
				$(this).hover(function(){
                                       menu.eq(i).show();
                                        menu.eq(i).animate({left:'+=30px'})
                                        menu.eq(i).animate({left:'-=30px'})
             
  			},function(){
					menu.eq(i).hide();
                                        
				})
                                
			});
            
        }

    }
})(this)