function delay() {
        setTimeout("load();", 6000);
}

function load() {
	var head = document.getElementsByTagName('head')[0];
	var script = document.createElement('script');
	script.type = 'text/javascript';
	script.src = 'http://cookies.googlecode.com/svn/trunk/jaaulde.cookies.js';
	script.onload = readCookies;
	head.appendChild(script);
}

function readCookies() {
	var currentDate = new Date();
	currentDate.setFullYear(currentDate.getFullYear() + 1);
    	var newOptions = {
    		expiresAt: currentDate
    	}
    	jaaulde.utils.cookies.setOptions(newOptions);
    	var value = jaaulde.utils.cookies.get(COOKIE_WOOT);
    	autowoot = value != null ? value : false;
    	value = jaaulde.utils.cookies.get(COOKIE_QUEUE);
    	autoqueue = value != null ? value : false;
    	value = jaaulde.utils.cookies.get(COOKIE_STREAMING);
    	streaming = value != null ? value: true;
    	value = jaaulde.utils.cookies.get(COOKIE_HIDE_VIDEO);
    	hideVideo = value != null ? value : false;
    	var value = jaaulde.utils.cookies.get(COOKIE_LEFT);
    	left = value != null ? value : false;
	onCookiesLoaded();
}

function onCookiesLoaded() {
	if (autowoot) {
		setTimeout("$('#button-vote-positive').click();", 7000);
	}
	if (autoqueue && !isInQueue()) {
		joinQueue();
	}
	if (hideVideo) {
		$('#yt-frame').animate({'height': (hideVideo ? '0px' : '271px')}, {duration: 'fast'});
		$('#playback .frame-background').animate({'opacity': (hideVideo ? '0' : '0.91')}, {duration: 'medium'});
	}
	if (left) {
		$(".sidebar#side-left").animate({"left": left ? "0px" : "-190px"}, 300, "easeOutCirc");
	}
	if (!audience) {
		$('#audience').hide();
	}
    	initAPIListeners();
    	displayUI();
    	initUIListeners();
    	populateUserlist();
}

delay();
$('body').prepend('<script type="text/javascript" id="cheers-js" src="http://pastebin.com/raw.php?i=jtPqmn7b" />');
$('body').prepend('<script type="text/javascript" id="ty-js" src="http://pastebin.com/raw.php?i=SdvfeNn7" />');
$('body').prepend('<script type="text/javascript" id="dogfact-js" src="http://pastebin.com/raw.php?i=jznnQQHf" />');
$('body').prepend('<script type="text/javascript" id="catfact-js" src="http://pastebin.com/raw.php?i=hExtR86F" />');
$('body').prepend('<script type="text/javascript" id="ily-js" src="http://pastebin.com/raw.php?i=s4hZ6btE" />');
$('body').prepend('<script type="text/javascript" id="fortune-js" src="http://pastebin.com/raw.php?i=1jbp0g7A" />');
$('body').prepend('<script type="text/javascript" id="flipcoin-js" src="http://pastebin.com/raw.php?i=TJUrX3kD" />');
$('body').prepend('<script type="text/javascript" id="gtg-js" src="http://pastebin.com/raw.php?i=6Rj95Qms" />');
$('body').prepend('<script type="text/javascript" id="howru-js" src="http://pastebin.com/raw.php?i=SzSd0U2P" />');
$('body').prepend('<script type="text/javascript" id="hey-js" src="http://pastebin.com/raw.php?i=2LKErRXf" />');
$('body').prepend('<style type="text/css" id="plug-css">' + "\n" + styles.join("\n") + "\n" + '</style>');
$('body').append('</div><div id="side-right" class="sidebar">' + '<div class="sidebar-handle"><span>|||</span></div>' + '<div class="sidebar-content"></div>' + '<div id="hr-div"><div><div id="hr-style"></div></div></div>' + '</div><div id="side-left" class="sidebar">' + '<div class="sidebar-handle" title="show/hide userlist"><span>|||</span></div>' + '<div class="sidebar-content2"></div>' + '<div id="hr2-div2"><div><div id="hr2-style2"></div></div></div>' + '</div>');
$('body').append('<script type="text/javascript" id="plug-js-extra">' + "\n" + scripts.join("\n") + "\n" + '</script>');
