var flash_iframe_container = '';
function get_page_size() {	
	var xScroll, yScroll, windowWidth, windowHeight;
	if (window.innerHeight && window.scrollMaxY) {
		xScroll = document.scrollWidth;
		yScroll = (this.isFrame ? parent.innerHeight : self.innerHeight) + (this.isFrame ? parent.scrollMaxY : self.scrollMaxY);
	}
	else if (document.body.scrollHeight > document.body.offsetHeight){
		xScroll = document.body.scrollWidth;
		yScroll = document.body.scrollHeight;
	}
	else {
		xScroll = document.getElementsByTagName("html").item(0).offsetWidth;
		yScroll = document.getElementsByTagName("html").item(0).offsetHeight;
		xScroll = (xScroll < document.body.offsetWidth) ? document.body.offsetWidth : xScroll;
		yScroll = (yScroll < document.body.offsetHeight) ? document.body.offsetHeight : yScroll;
	}
	if (self.innerHeight) {
		windowWidth = (this.isFrame) ? parent.innerWidth : self.innerWidth;
		windowHeight = (this.isFrame) ? parent.innerHeight : self.innerHeight;
	}
	else if (document.documentElement && document.documentElement.clientHeight) {
		windowWidth = document.documentElement.clientWidth;
		windowHeight = document.documentElement.clientHeight;
	}
	else if (document.body) {
		windowWidth = document.getElementsByTagName("html").item(0).clientWidth;
		windowHeight = document.getElementsByTagName("html").item(0).clientHeight;
		windowWidth = (windowWidth == 0) ? document.body.clientWidth : windowWidth;
		windowHeight = (windowHeight == 0) ? document.body.clientHeight : windowHeight;
	}
	var pageHeight = (yScroll < windowHeight) ? windowHeight : yScroll;
	var pageWidth = (xScroll < windowWidth) ? windowWidth : xScroll;
	return new Array(pageWidth, pageHeight, windowWidth, windowHeight);
}
function display_overlay(ani_id) {
	isIE6 = navigator.userAgent.toLowerCase().indexOf('msie 6') != -1;
	var page_size = get_page_size();
	flash_iframe_container = document.getElementById('flash_content').innerHTML;
	document.getElementById('flash_content').innerHTML = '';
	document.getElementById('flash_content').style.display = 'none';
	var overlay = document.getElementById('overlay');
	overlay.style.height = page_size[1] + "px";
	overlay.style.display = '';
	var f_ratio = 545 / 409;
	var f_height = page_size[3] - 130;
	var f_width = Math.round(f_height * f_ratio);
	overlay.innerHTML = '<iframe src="ani_overlay.php?id=' + ani_id + '&width=' + f_width + '&height=' + f_height + '" width="' + f_width + '" height="' + f_height + '" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" name="flash_iframe"></iframe>';
	if (isIE6 == true) {
		var new_iframe = overlay.getElementsByTagName("iframe")[0];
		new_iframe.contentWindow.location.reload(); 
	}
	var overlay_footer = document.getElementById('overlay_footer');
	var left_margin = Math.round((page_size[2] - f_width) / 2);
	var top_margin = f_height + 50;
	overlay_footer.style.display = '';
	//overlay_footer.style.top = top_margin + "px";
	overlay_footer.style.left = left_margin + "px";
	var footer_div = overlay_footer.getElementsByTagName("div")[0];
	footer_div.style.width = f_width + "px";
	footer_div.style.marginTop = top_margin + "px";
}
function close_overlay() {
	document.getElementById('overlay').innerHTML = '';
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('overlay_footer').style.display = 'none';
	document.getElementById('flash_content').style.display = '';
	document.getElementById('flash_content').innerHTML = flash_iframe_container;
}