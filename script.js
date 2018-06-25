var width = 500;
var height = 500;
var screenHeight = height;
var screenWidth = width;


chrome.app.runtime.onLaunched.addListener(onLaunchedListener);

	
//chrome.runtime.onMessage.addListener(function(message){console.log(message+" (Internal)");onLaunchedListener(message)})
chrome.runtime.onMessageExternal.addListener(function(message){console.log(message);onLaunchedListener(message)})

function onLaunchedListener(url) {
	//localStorage["url"]=url;
	chrome.storage.local.set({"url":url});
	var screenWidth = screen.availWidth;
	var screenHeight = screen.availHeight;
	var width = 440;
	var height = 247;
  	chrome.app.window.create('stream.html', {
		id: "Multi Twitch +",
		alwaysOnTop: true,
		frame: {
			type: 'chrome'
		},
		innerBounds: {
			width: width,
			height: height,
			left: screenWidth,
			top: screenHeight,
			minWidth: 400,
			minHeight: 300
		}
	});//callback
	player.setChannel(url);
}

function changeStream(url){
	player.setChannel(url);

	//création de webview
	// var webview=document.createElement("webview");
	// webview.setAttribute("src","http://player.twitch.tv/?channel="+url+"&muted=false");
	// webview.setAttribute("frameborder","0");
	// webview.setAttribute("scrolling","no");
	// webview.setAttribute("allowfullscreen","true");
	// webview.style.height="100%";
	// webview.style.height="100%";
}

//window.onload=onLaunchedListener();

//chrome.extension.onMessage.addListener(function(detail){console.log(detail);})
/*
var tes = chrome.app.window.get("Multi Twitch +")
var win = tes.contentWindow
var webview = win.document.getElementsByTagName('webview')[0]*/