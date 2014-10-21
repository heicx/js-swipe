window.onload = function(){
	var arrow_obj = document.getElementById("arrow").getElementsByTagName("span");
	var arrow_l_obj = arrow_obj[0];
	var arrow_r_obj = arrow_obj[1];

	arrow_l_obj.onclick = function(){
		console.log(123);
	}
};