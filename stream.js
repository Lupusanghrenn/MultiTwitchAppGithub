/*window.onload= function(){

	new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: "100%",
        layout:"video",
        channel: "ogaminglol"
      });


}*/

//window.onload=changeStream(url);
window.onload=function () {
	var url = JSON.parse(localStorage["url"]);
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

//chrome.runtime.onMessage.addListener(function(message){console.log(message);})

//chrome.runtime.onMessageExternal.addListener(function(message){console.log(message);})