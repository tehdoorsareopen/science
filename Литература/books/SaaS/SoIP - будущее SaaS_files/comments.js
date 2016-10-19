// Функция для цитирования
function quoteSelection(name)
{
// Определяем текстовое поле
var txtarea = document.getElementById ('comment_text');

// Запоминаем выделенный текст
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
// Вставляем текст в поле
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

// Функция для вставки имени автора в комментарий
function quoteAuthor(name)
{
// Определяем текстовое поле
var txtarea = document.getElementById ('comment_text');
txtarea.value  += "[b]" + name + "[/b]\n";
txtarea.focus();
return; 
}


// Функция для отображения комментария внизу
function comment_form(){
	$('a','.comment_reply').show();
	var form = $('.comments_form');
	$('input[name="comment_parent_id"]',form).val(0);
	$('#comments_form_placeholder').append(form);
	form.show();
	return false;
}

// Функция для отображения формы субкомментария
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
