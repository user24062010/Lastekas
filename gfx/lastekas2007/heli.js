var dragapproved=false
var minrestore=0
var initialwidth,initialheight
var ie5=document.all&&document.getElementById
var ns4=(document.layers);
var ns6=document.getElementById&&!document.all

function iecompattest(){
	return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body
}

function drag_drop(e){
	if (ie5&&dragapproved&&event.button==1){
		document.getElementById("dwindow").style.left=tempx+event.clientX-offsetx+"px"
		document.getElementById("dwindow").style.top=tempy+event.clientY-offsety+"px"
	}
	else if (dragapproved){
		document.getElementById("dwindow").style.left=tempx+e.clientX-offsetx+"px"
		document.getElementById("dwindow").style.top=tempy+e.clientY-offsety+"px"
	}
}

function initializedrag(e){
	offsetx=ie5? event.clientX : e.clientX
	offsety=ie5? event.clientY : e.clientY
	
	tempx=parseInt(document.getElementById("dwindow").style.left)
	tempy=parseInt(document.getElementById("dwindow").style.top)

	dragapproved=true
	document.onmousemove=drag_drop
}

function get_link_pos(anchorname) {
	var coordinates = new Object();
	var x = 0;
	var y = 0;
 	/*if (document.getElementById && document.all) {
		x = get_link_pos_left(document.all[anchorname]);
		y = get_link_pos_top(document.all[anchorname]);
	}*/
	if (document.getElementById) {
		var o = document.getElementById(anchorname);
		x = get_link_pos_left(o);
		y = get_link_pos_top(o);
	}
 	else if (document.all) {
		x = get_link_pos_left(document.all[anchorname]);
		y = get_link_pos_top(document.all[anchorname]);
	}
	else if (document.layers) {
		var found = 0;
		for (var i = 0; i < document.anchors.length; i++) {
			if (document.anchors[i].name == anchorname) { 
				found = 1;
				break;
			}
		}
		if (found == 0) {
			x = 0; 
			y = 0;
		}
		x = document.anchors[i].x;
		y = document.anchors[i].y;
	}
	else {
		x = 0; 
		y = 0; 
	}
	coordinates.x = x;
	coordinates.y = y;
	return coordinates;
}
function get_link_pos_left(el) {
	var ol = el.offsetLeft;
	while ((el = el.offsetParent) != null) {
		ol += el.offsetLeft;
	}
	return ol;
}
function get_link_pos_top(el) {
	var ot = el.offsetTop;
	while ((el = el.offsetParent) != null) {
		ot += el.offsetTop;
	}
	return ot;
}

var intid;
function loadSMS(id, teema){

	var s='<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="350" height="100" id="SMSplayer" align="middle">';
	s+='<param name="FlashVars" value="song_id='+id+'" />';
	s+='<param name="movie" value="heli.swf" />';
	s+='<param name="wmode" value="opaque" />';
	s+='<embed src="heli.swf?song_id='+id+'" wmode="opaque" FlashVars="song_id='+id+'" quality="high" bgcolor="#ffffff" width="350" height="100" name="SMSplayer" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" />';
	s+='</object><IFRAME src="http://www.lastekas.ee/?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>';
	s+='<div style="width: 100%; text-align: center; background-color: #e4e7e8; padding-top: 8px; padding-bottom: 8px;"><iframe src="http://www.lastekas.ee/banners/banner.php?go=heli&loc=8&loc2=1" width="120" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" name="I8"></iframe>';
	s+='&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<iframe src="http://www.lastekas.ee/banners/banner.php?go=heli&loc=8&loc2=2" width="120" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" name="I8"></iframe></div>';
	
	document.getElementById("dwindow").style.display=""
	document.getElementById("dwindow_flash").innerHTML=s;

	var coords = get_link_pos('dwindow_link_' + id);
	var left_extra = 50;
	var top_extra = -215;
	if (document.getElementById || document.all) {
		if (document.getElementById) var elem = document.getElementById('dwindow');
		else var elem = document.all['dwindow'];
		elem.style.left = (coords.x + left_extra) + 'px';
		elem.style.top = (coords.y + top_extra) + 'px';
	}
	else if (document.layers) {
		var elem = document.layers['dwindow'];
		elem.left = (coords.x + left_extra) + 'px';
		elem.top = (coords.y + top_extra) + 'px';
	}
}

function closeit(){
	document.getElementById("dwindow").style.display="none"
	document.getElementById('SMSplayer').SetVariable("song_id","none");
}

function stopdrag(){
	dragapproved=false;
	document.onmousemove=null;
}