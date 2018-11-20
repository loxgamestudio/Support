function isMobile(){
 if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 )
    return true;
 else
    return false;
}

initLoxMessageBox(getToken("msgBox_cancel"), getToken("msgBox_ok"));
var selectedTab = getUrlParam("selectedtab", "default");

switch (selectedTab)
{
	case "1":
	case "default":
	case "securitybot":
		activeTab("1");
	break;
	case "2":
	case "setup":
		activeTab("2");
	break;
	case "3":
	case "cmds":
		activeTab("3");
	break;
	case "4":
	case "maliciousdomains":
		activeTab("4");
	break;
}

/*var ahrefDomains = document.getElementsByClassName("lx-panel-a-mcl");
alert(ahrefDomains + " - "+ahrefDomains.length);
for (var i = 0; i < ahrefDomains.length; i++)
	ahrefDomains[i].addEventListener("click", onDomainLinkClick);*/

function openMaliciousDomainList(type)
{
	setLoxMessageBoxColors("rgb(0, 200, 0)","rgb(220, 0, 0)","green","red");
	setLoxMesageBoxTextColors("white","white");
	var msgtitle = getToken("msgboxTitle01");
	var msgmessage = getToken("msgboxMessage01");
	switch(type)
	{
		case "sqlinsert":
			openLoxMessageBox(msgtitle,msgmessage, 3, function(){window.open('https://www.lgamestudio.com/database/mdomains/domains.sql','_blank');closeLoxMessageBox(true);}, undefined);
		break;
		case "xml":
			openLoxMessageBox(msgtitle,msgmessage, 3, function(){window.open('https://www.lgamestudio.com/database/mdomains/domains.xml','_blank');closeLoxMessageBox(true);}, undefined);
		break;
		case "json":
			openLoxMessageBox(msgtitle,msgmessage, 3, function(){window.open('https://www.lgamestudio.com/database/mdomains/domains.json','_blank');closeLoxMessageBox(true);}, undefined);
		break;
		case "txt":
			openLoxMessageBox(msgtitle,msgmessage, 3, function(){window.open('https://www.lgamestudio.com/database/mdomains/domains.txt','_blank');closeLoxMessageBox(true);}, undefined);
		break;
	}
}

function openPatreonPage()
{
	window.open('https://www.patreon.com/loxgamestudio','_blank');
}

LDisableReadyFunction = true;

$( document ).ready(function() 
{
	var site_container = document.getElementById("ilcontainer");
    // Make the animation
    site_container.style.display = "block";
    site_container.style.animation = "fadeInAnimation linear 1s 1";
    site_container.style.transformOrigin = "50% 50%";
    site_container.style.webkitanimation = "fadeInAnimation linear 1s 1";
    site_container.style.webkitTransformOrigin = "50% 50%";
});