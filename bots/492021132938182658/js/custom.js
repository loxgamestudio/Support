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

var pwidth = $(window).width();
if (pwidth < 995)
{
	var patreon = document.getElementById('ilox-patreon');
	patreon.style.display = "none";
}
