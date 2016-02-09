window.onload = function() {  
	var news1 = document.getElementById('tab_1');
	var news2 = document.getElementById('tab_2');
	var news3 = document.getElementById('tab_3');
	if (news1)
	{	news1.onclick = function() {
			document.getElementById('top_news').className='active_1';
			return false;
		}
	}
	if (news1)
	{
		news2.onclick = function() {
			document.getElementById('top_news').className='active_2';
			return false;
		}
	}
	if (news1)
	{
		news3.onclick = function() {
			document.getElementById('top_news').className='active_3';
			return false;
		}
	}

	// Для форм
	/*
	i = 0;
	while (typeof document.getElementById("add_form_"+i))
	{
		d = document.getElementById("add_form_"+i);
		i++;
		alert(d);
	}
	*/
}