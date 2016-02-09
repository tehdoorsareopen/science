// ������� ��� �����������
function quoteSelection(name)
{
// ���������� ��������� ����
var txtarea = document.getElementById ('comment_text');

// ���������� ���������� �����
	if (window.getSelection)
	{
		selection = window.getSelection().toString();
	}
	else if (document.getSelection)
	{
		selection = document.getSelection();
	}
	else if (document.selection)
	{
		selection = document.selection.createRange().text;
	}
// ��������� ����� � ����
	if (selection)
	{ 
		if (name)
		{
		txtarea.value  += "[b]" + name + "[/b]\n";
		}
		txtarea.value  += "[quote]" + selection + "[/quote]\n";
		txtarea.focus();
		return; 
	}
}

// ������� ��� ������� ����� ������ � �����������
function quoteAuthor(name)
{
// ���������� ��������� ����
var txtarea = document.getElementById ('comment_text');
txtarea.value  += "[b]" + name + "[/b]\n";
txtarea.focus();
return; 
}


// ������� ��� ����������� ����������� �����
function comment_form(){
	$('a','.comment_reply').show();
	var form = $('.comments_form');
	$('input[name="comment_parent_id"]',form).val(0);
	$('#comments_form_placeholder').append(form);
	form.show();
	return false;
}

// ������� ��� ����������� ����� ��������������
function subcomment_form(comment_id){
	$('a','.comment_reply').show();
	var form = $('.comments_form');
	$('input[name="comment_parent_id"]',form).val(comment_id);
	var reply = $('#comment-'+comment_id);
	$('a',reply).hide();
	reply.append(form);
	form.show();
	return false;
}
