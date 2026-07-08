function getObject(obj) {
	if (document.all) {
		if (typeof obj == 'string') return document.all(obj);
		else return obj.style;
	}
	if (document.getElementById) {
		if (typeof obj == 'string') return document.getElementById(obj);
		else return obj.style;
	}
	return null;
}
function counter(textarea, left, text, max) {
	var textareaObj = getObject(textarea);
	var leftObj = getObject(left);
	var char_left = max - textareaObj.value.length;
	if (char_left <= 0) {
		char_left = 0;
		text = '<span style="color: red">' + text + '</span>';
		textareaObj.value = textareaObj.value.substr(0, max);
	}
	leftObj.innerHTML = text.replace('{CHAR}', char_left);
}
function isViewletCompliant()

{

  answer=true;

  version=Math.round(parseFloat(navigator.appVersion) * 1000);

  if (navigator.appName.substring(0,9) == "Microsoft")

  {

    if(version<4000) answer=false;

  }

  if (navigator.appName.substring(0,8) == "Netscape")

  {

    if ((navigator.appVersion.indexOf("Mac")> 0) && (version<5000))

      answer=false;

    else

    if (version<4060)

      answer=false;

  }



  plugins=navigator.plugins;

  if (answer==false && plugins!=null)

  {

    for(i=0;i!=plugins.length;i++)

    if((plugins[i].name.indexOf("Java Plug-in")>=0) && (plugins[i].name.indexOf("1.0")<0))

    answer=true;

  }

  return answer;

}



function openViewlet(htmlFile,htmlWidth,htmlHeight)

{

  str = 'resizable=0,toolbar=0,menubar=0,';

  str = str + 'scrollbars=0,status=0,location=0,directory=0,width=350,height=200';



  version=Math.round(parseFloat(navigator.appVersion) * 1000);



  if(navigator.appName.indexOf("Konqueror")!=-1) // konqueror

  {

    htmlWidth+=18;

    htmlHeight+=96;

  }



  if(navigator.appName.indexOf("Netscape")!=-1)

  {

    if(version>=5000)

    {

      if(navigator.appVersion.indexOf("Mac")!=-1) // Netscape6+ on mac

      {

        htmlHeight+=5;

      }

    }

  }



  if(navigator.appName.indexOf("Microsoft")!=-1)

  {

    if(navigator.appVersion.indexOf("Mac")!=-1) // IE on Mac

    {

       htmlWidth  -= 11;

       htmlHeight -= 11;

    }

  }



    if(!isViewletCompliant())

    {

      open("http://www.qarbon.com/warning/index.html",'Leelou',str);

    }

    else

    {

      window.open(htmlFile,'Leelou','width='+htmlWidth+',height='+htmlHeight+',top=10,left=20');

    }



}


// siit edasi uute asjade lugu...

function saada(where)
    {
    url="index.php?go=saada&ver=print&purl=" + where;
    help=window.open(url,"saada","toolbar=0,location=0,status=0,menubar=0,scrollbars=0,resizable=0,top=50,left=100,width=400,height=450");
    help.focus();
    }
function openFlash(url, imageWidth, imageHeight, teema, nimi) {
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+imageWidth+",height="+(imageHeight+70)+",left=80,top=50");
	newWindow.document.open();
	newWindow.document.writeln('<html><head><title>Lasteveeb</title>');
	if (url == 'GKM_070314_pank2.swf') {
		newWindow.document.writeln('<script src="http://www.google-analytics.com/urchin.js" type="text/javascript"></script><script type="text/javascript">_uacct="UA-117729-19";urchinTracker();</script>');
	}
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');
	newWindow.document.writeln('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+imageWidth+'" height="'+imageHeight+'">');
	newWindow.document.writeln('<param name="allowScriptAccess" value="sameDomain" />');
  newWindow.document.writeln('<param name="quality" value="high">');
  newWindow.document.writeln('<param name="bgcolor" value="#ffffff">');
if (teema == 17)
{
  newWindow.document.writeln('<param name="movie" value="reklaam.swf?multikas=mangud/pusa/pusa.swf&fail=file-upload/'+url+'&teema='+teema+'&nimi='+nimi+'">');
  newWindow.document.writeln('<embed src="reklaam.swf?multikas=mangud/pusa/pusa.swf&fail=file-upload/'+url+'&teema='+teema+'&nimi='+nimi+'" quality="high" bgcolor="#ffffff" width="'+imageWidth+'" height="'+imageHeight+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></object>');
}
else
{
  newWindow.document.writeln('<param name="movie" value="reklaam.swf?multikas=file-upload/'+url+'&teema='+teema+'&nimi='+nimi+'">');
  newWindow.document.writeln('<embed src="reklaam.swf?multikas=file-upload/'+url+'&teema='+teema+'&nimi='+nimi+'" quality="high" bgcolor="#ffffff" width="'+imageWidth+'" height="'+imageHeight+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></object>');
}
	newWindow.document.writeln('<div style="text-align: center; width: '+(imageWidth-1)+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
	newWindow.document.writeln('<IFRAME src="?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}
function openPicture(url, imageWidth, imageHeight, teema, nimi) {
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+(imageWidth+100)+",height="+(imageHeight+120)+",left=80,top=50");
	newWindow.document.open();
	newWindow.document.writeln('<html><head><title>Lasteveeb</title>');
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');
  newWindow.document.writeln('<br><div align=center><a href="javascript:self.close()"><img border=0 src="file-upload/'+url+'" hspace=0 vspace=0 border=0 width="'+imageWidth+'" height="'+imageHeight+'"></a></div><br>');
	newWindow.document.writeln('<div style="text-align: center; width: '+(imageWidth+100)+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
	newWindow.document.writeln('<IFRAME src="?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}
function openJuku(url, imageWidth, imageHeight, teema, nimi) {
if ((url == 'hansa/massin/massin.html') || (url == 'hansa/klotris/loader.html') || (url == 'hansa/pussle/pussle.html'))
{
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width=702,height=622,left=80,top=50");
}
else
{
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+imageWidth+",height="+(imageHeight+70)+",left=80,top=50");
}
	newWindow.document.open();
	newWindow.document.writeln('<html><title>Lasteveeb</title>');
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');

if ((url == 'hansa/massin/massin.html') || (url == 'hansa/klotris/loader.html') || (url == 'hansa/pussle/pussle.html'))
{
	newWindow.document.writeln('<table border="0" cellpadding="0" cellspacing="0" width="100%" height="552"><tr><td align="center">');
	newWindow.document.writeln('<IFRAME src="mangud/'+url+'" width="'+imageWidth+'" height="'+imageHeight+'" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</td></tr></table>');
	newWindow.document.writeln('<div style="text-align: center; width: "720"; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
}

if ((url == 'yeti/index.html'))
{
	newWindow.document.writeln('<IFRAME src="mangud/'+url+'" width="'+(imageWidth+20)+'" height="'+imageHeight+'" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('<div style="text-align: center; width: "720"; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
}
else
{
	newWindow.document.writeln('<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+imageWidth+'" height="'+imageHeight+'">');
        newWindow.document.writeln('<param name="movie" value="reklaam.swf?multikas='+url+'&teema='+teema+'&nimi='+nimi+'">');
        newWindow.document.writeln('<param name="quality" value="high">');
if (url == 'lib/juku.swf')
{
        newWindow.document.writeln('<param name="bgcolor" value="#0099ff">');
        newWindow.document.writeln('<embed src="reklaam.swf?multikas='+url+'&teema='+teema+'&nimi='+nimi+'" quality="high" bgcolor="#0099ff" width="'+imageWidth+'" height="'+imageHeight+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></object>'); 
}
else
{
        newWindow.document.writeln('<param name="bgcolor" value="#FFFFFF">');
        newWindow.document.writeln('<embed src="reklaam.swf?multikas='+url+'&teema='+teema+'&nimi='+nimi+'" quality="high" bgcolor="#FFFFFF" width="'+imageWidth+'" height="'+imageHeight+'" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash"></object>'); 
}
//	newWindow.document.writeln('<IFRAME src="?go=banners&teema='+teema+'" width="'+imageWidth+'" height="65" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('<div style="text-align: center; width: '+imageWidth+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
}

	newWindow.document.writeln('<IFRAME src="?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}
function openRist(url, imageWidth, imageHeight) {
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+imageWidth+",height="+(imageHeight+70)+",left=80,top=50");
	newWindow.document.open();
	newWindow.document.writeln('<html><head><title>Lasteveebi ristsõna</title>');
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');
	newWindow.document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+imageWidth+'" height="'+imageHeight+'" align="middle">');
        newWindow.document.writeln('<param name="allowScriptAccess" value="sameDomain" />');
        newWindow.document.writeln('<param name="flashvars" value="file=./ristsona/'+url+'/ristsona.xml" />');
        newWindow.document.writeln('<param name="movie" value="ristsona/ristsona.swf">');
        newWindow.document.writeln('<param name="quality" value="high">');
        newWindow.document.writeln('<param name="bgcolor" value="#ffffff">');
        newWindow.document.writeln('<embed src="ristsona/ristsona.swf" flashvars="file=./ristsona/'+url+'/ristsona.xml" quality="high" bgcolor="#ffffff" width="'+imageWidth+'" height="'+imageHeight+'" name="ristsona" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>'); 
	newWindow.document.writeln('<div style="text-align: center; width: '+(imageWidth-1)+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
	newWindow.document.writeln('<IFRAME src="?go=stat&teema=5" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}
function openKaraoke(url, imageWidth, imageHeight, teema, nimi) {
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+imageWidth+",height="+(imageHeight+70)+",left=80,top=50");
	newWindow.document.open();
	newWindow.document.writeln('<html><head><title>Lasteveeb</title>');
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');
	newWindow.document.writeln('<table border="0" cellpadding="0" style="border-collapse: collapse" width="700" id="table1" height="525"><tr><td align="center">');
	newWindow.document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+imageWidth+'" height="'+imageHeight+'" id="player" align="middle">');
	newWindow.document.writeln('<param name="allowScriptAccess" value="sameDomain" />');
	newWindow.document.writeln('<param name="quality" value="high" />');
	newWindow.document.writeln('<param name="bgcolor" value="#ffffff" />');
	newWindow.document.writeln('<param name="movie" value="reklaam.swf?multikas=player.swf&fail=file-upload/'+url+'&teema='+teema+'&nimi='+nimi+'" />');
	newWindow.document.writeln('<embed src="reklaam.swf?multikas=player.swf&fail=file-upload/'+url+'&teema='+teema+'&nimi='+nimi+'" quality="high" bgcolor="#ffffff" width="'+imageWidth+'" height="'+imageHeight+'" name="player" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>');
	newWindow.document.writeln('</td></tr></table>');
	newWindow.document.writeln('<div style="text-align: center; width: '+(imageWidth-1)+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
	newWindow.document.writeln('<IFRAME src="?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}
function openWall(val, id)
 {
    url="index.php?go=wall&ver=print&size=" + val + "&id=" + id;
    help=window.open(url,"saada","toolbar=0,location=0,status=0,menubar=0,scrollbars=1,resizable=0,top=50,left=100,width=750,height=500");
    help.focus();
 }
function openPilt(hori, vert, pic_id)
    {
    online=window.open("","_blank","toolbar=0,location=0,status=0,menubar=0,left=100,top=75,scrollbars=0,resizable=0,width=" + hori + ",height=" + vert);
    online.document.writeln("<html><title>Pilt</title><body bgcolor='#F5F5F5' topmargin=0 leftmargin=0 marginwidth=0 marginheight=0><a href='javascript:self.close()'><img border=0 src='" + pic_id + "' hspace=0 vspace=0 border=0 width=" + hori + " height=" + vert + "></a>");
	newWindow.document.writeln('<IFRAME src="?go=stat&teema=100" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
    online.document.writeln("</body></html>");
    }
function openStreem(url, imageWidth, imageHeight, teema) {
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+imageWidth+",height="+(imageHeight+70)+",left=80,top=50");
	newWindow.document.open();
	newWindow.document.writeln('<html><title>Jänku-Jussi kodu!</title>');
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');
	newWindow.document.writeln('<table border="0" cellpadding="0" cellspacing="0" width="100%" height="380"><tr><td width="146" align="center">');
	newWindow.document.writeln('<!-- ilma algus --><IFRAME src="http://www.ilm.ee/~data/include/ilm.php3" width="142" height="360" scrolling="no" frameborder="0"></IFRAME><!-- ilma lõpp -->');
	newWindow.document.writeln('</td><td>');
	newWindow.document.writeln('<IFRAME src="http://www.lastekas.ee/axis/" width="480" height="360" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</td></tr></table>');
	newWindow.document.writeln('<div style="text-align: center; width: '+(imageWidth-1)+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
	newWindow.document.writeln('<IFRAME src="http://www.lastekas.ee/?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}

function openMuster(url, imageWidth, imageHeight, teema, nimi) {
	newWindow = window.open("","newWindow","scrollbars=0,resizable=0,width="+imageWidth+",height="+(imageHeight+70)+",left=80,top=50");
	newWindow.document.open();
	newWindow.document.writeln('<html><title>Lasteveeb</title>');
	newWindow.document.writeln('<script src="https://unpkg.com/@ruffle-rs/ruffle"></script>
</head>');
	newWindow.document.writeln('<body bgcolor="#FFFFFF" leftmargin="0" topmargin="0" marginheight="0" marginwidth="0">');
	newWindow.document.writeln('<table border="0" cellpadding="0" style="border-collapse: collapse" width="700" id="table1" height="525"><tr><td align="center">');
	newWindow.document.writeln('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://fpdownload.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=7,0,0,0" width="'+imageWidth+'" height="'+imageHeight+'" id="player" align="middle">');
	newWindow.document.writeln('<param name="allowScriptAccess" value="sameDomain" />');
	newWindow.document.writeln('<param name="movie" value="muster.swf?fail=file-upload/'+url+'" />');
	newWindow.document.writeln('<param name="quality" value="high" />');
	newWindow.document.writeln('<param name="bgcolor" value="#ffffff" />');
	newWindow.document.writeln('<embed src="muster.swf?fail=file-upload/'+url+'" quality="high" bgcolor="#ffffff" width="'+imageWidth+'" height="'+imageHeight+'" name="player" align="middle" allowScriptAccess="sameDomain" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>');
	newWindow.document.writeln('</td></tr></table>');
	newWindow.document.writeln('<div style="text-align: center; width: '+imageWidth+'; margin: 2px 0px 10px;"><div style="width: 468px; margin: 4px auto;"><iframe src="http://www.lastekas.ee/banners/banner.php?loc=11" width="468" height="60" marginwidth="0" marginheight="0" vspace="0" hspace="0" frameborder="0" align="middle" scrolling="no" style="float:left;"></iframe></div><div class="clear"></div></div>');
	newWindow.document.writeln('<IFRAME src="?go=stat&teema='+teema+'" width="1" height="1" scrolling="no" frameborder="0"></IFRAME>');
	newWindow.document.writeln('</body></html>');
	newWindow.document.close();
	newWindow.focus();
}