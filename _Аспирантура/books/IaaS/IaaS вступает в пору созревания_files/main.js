function SendLink(ElementID)
{
	width=400;
	height=520;
	var scroll = 'yes';
	var top=0, left=0;
	if(width > screen.width-10 || height > screen.height-28)
		scroll = 'yes';
	if(height < screen.height-28)
		top = Math.floor((screen.height - height)/2-14);
	if(width < screen.width-10)
		left = Math.floor((screen.width - width)/2);
	width = Math.min(width, screen.width-10);	
	height = Math.min(height, screen.height-28);
	window.open('/send-article/index.php?ID='+ElementID,'','scrollbars='+scroll+',resizable=yes,width='+width+',height='+height+',left='+left+',top='+top);
}

function SendEvent(ElementID)
{
	width=400;
	height=520;
	var scroll = 'yes';
	var top=0, left=0;
	if(width > screen.width-10 || height > screen.height-28)
		scroll = 'yes';
	if(height < screen.height-28)
		top = Math.floor((screen.height - height)/2-14);
	if(width < screen.width-10)
		left = Math.floor((screen.width - width)/2);
	width = Math.min(width, screen.width-10);	
	height = Math.min(height, screen.height-28);
	window.open('/send-event/index.php?ID='+ElementID,'','scrollbars='+scroll+',resizable=yes,width='+width+',height='+height+',left='+left+',top='+top);
}

function SendAuthor(ElementID)
{
	width=400;
	height=520;
	var scroll = 'yes';
	var top=0, left=0;
	if(width > screen.width-10 || height > screen.height-28)
		scroll = 'yes';
	if(height < screen.height-28)
		top = Math.floor((screen.height - height)/2-14);
	if(width < screen.width-10)
		left = Math.floor((screen.width - width)/2);
	width = Math.min(width, screen.width-10);	
	height = Math.min(height, screen.height-28);
	window.open('/send-author/index.php?ID='+ElementID,'','scrollbars='+scroll+',resizable=yes,width='+width+',height='+height+',left='+left+',top='+top);
}

function PrintVersion(ElementURL)
{
	width=650;
	height=600;
	var scroll = 'yes';
	var top=0, left=0;
	if(width > screen.width-10 || height > screen.height-28)
		scroll = 'yes';
	if(height < screen.height-28)
		top = Math.floor((screen.height - height)/2-14);
	if(width < screen.width-10)
		left = Math.floor((screen.width - width)/2);
	width = Math.min(width, screen.width-10);	
	height = Math.min(height, screen.height-28);
	window.open(ElementURL,'','scrollbars='+scroll+',resizable=yes,width='+width+',height='+height+',left='+left+',top='+top);
}

function BlogPreview()
{
	windowLeaving=window.open('','BlogPreview','width=500,height=300,scrollbars=yes,toolbar=no,location=no,directories=no,status=no,resizable=yes' );
	windowLeaving.document.open();
	windowLeaving.document.writeln("<HTML><HEAD><TITLE>��������������� ��������</TITLE></HEAD>");
	windowLeaving.document.writeln("<BODY bgcolor='white'><p>"+parent.window.document.FormBlog.MsgCode.value+"</p><p align='center'><a href='#' OnClick='javascript: window.close();'>������� ����</a></p></BODY></HTML>");
	windowLeaving.document.close();
	return false;
}

function BlogCopyClipboard(MsgField)
{
	if (document.body.createTextRange)
	{
		MsgField.createTextRange().execCommand("Copy");
	        alert("��� ���������� � ����� ������");
	}
	else
	{
		alert("��� ������� �� ������������ �������� � ������� ������");
	}
	return false;
}

function AnswerShow(ElementID)
{
	if(document.getElementById("answer"+ElementID).style.display == "none")
	{
		document.getElementById("answer"+ElementID).style.display = "block";
		document.getElementById("link_open"+ElementID).style.display = "none";
		document.getElementById("link_close"+ElementID).style.display = "block";
	}
	else
	{
		document.getElementById("answer"+ElementID).style.display = "none";
		document.getElementById("link_open"+ElementID).style.display = "block";
		document.getElementById("link_close"+ElementID).style.display = "none";
	}
}