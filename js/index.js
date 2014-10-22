window.onload = function(){
	var swipe_content = document.getElementById("swipe_content");
	var arrow_obj = document.getElementById("arrow").getElementsByTagName("span");
	var arrow_l_obj = arrow_obj[0];
	var arrow_r_obj = arrow_obj[1];

	var animate = {
		count: 0,
		length: swipe_content.children.length,
		offset: 0,
		on: function(offsetval, timeout){
			var single_pic_width = swipe_content.children[0].children[0].clientWidth;
			if(this.count < this.length-1){
				this.count++;
				if(offsetval > 0){
					if(this.offset === 0){
						this.offset = -swipe_content.clientWidth + single_pic_width;
					}else{
						this.offset = this.offset + offsetval;
					}
				}else{
					if(this.offset === (-1 * single_pic_width * this.count) ){
						this.offset = -single_pic_width;
					}else{
						this.offset = this.offset + offsetval;
					}
				}
			}else{
				this.offset = 0;
				this.count = 0;
			}
			
			swipe_content.style.webkitTransform = "translate3d("+ this.offset +"px, 0, 0)";
			swipe_content.style.webkitTransition = timeout + "ms ease-out";
		}
	}

	arrow_l_obj.onclick = function(){
		var s = animate.on(-320, 200);
	};

	arrow_r_obj.onclick = function(){
		animate.on(320, 200);
	};
};