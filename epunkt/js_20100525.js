function open_pic(pic_location, page_title, pic_width, pic_height) {
	var imgVar = new Image ();
	imgVar.src = pic_location;
	newWin = window.open ('', 'pic_window', 'height=' + pic_height + ',width=' + pic_width + 
		',top=20,left=20,resizable=no');
	newWin.document.write ('<html><head><title>' + page_title + '</title></head>');
	newWin.document.write ('<body style="margin: 0px; text-align: center; vertical-align: middle">');
	newWin.document.write ('<a href="javascript:window.close()"><img src="' + pic_location + '" height="' + 
		pic_height + '" width="' + pic_width + '" name="im"></a></body></html>');
	newWin.document.close ();
}
function open_popup(pic_location, page_title, new_link, pic_width, pic_height) {
	var imgVar = new Image ();
	imgVar.src = pic_location;
  wleft = (screen.width - pic_width) / 2;
  wtop = (screen.height - pic_height) / 2;
  // IE5 and other old browsers might allow a window that is
  // partially offscreen or wider than the screen. Fix that.
  // (Newer browsers fix this for us, but let's be thorough.)
  if (wleft < 0) {
    pic_width = screen.width;
    wleft = 0;
  }
  if (wtop < 0) {
    pic_height = screen.height;
    wtop = 0;
  }
	newWin = window.open ('', 'pic_window', 'height=' + pic_height + ',width=' + pic_width + 
		',top=' + wtop + ',left=' + wleft + ',resizable=no');
	newWin.document.write ('<html><head><title>' + page_title + '</title></head>');
	newWin.document.write ('<body style="margin: 0px; text-align: center; vertical-align: middle">');
	newWin.document.write ('<a href="javascript:window.opener.location.href=\'' + new_link + '\'; window.close();"><img src="' + pic_location + '" height="' + 
		pic_height + '" width="' + pic_width + '" name="im" style="border: 0;"></a></body></html>');
	newWin.document.close ();
	
	win.resizeTo(pic_width, pic_height);
  // Just in case left and top are ignored
  win.moveTo(wleft, wtop);
  win.focus();
}
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