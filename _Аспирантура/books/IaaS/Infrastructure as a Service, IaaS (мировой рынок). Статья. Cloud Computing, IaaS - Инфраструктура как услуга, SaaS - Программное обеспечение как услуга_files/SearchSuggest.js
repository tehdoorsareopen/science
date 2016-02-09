var ss_memory = null;
function SearchCall(){
	var newdiv = document.getElementById("extended_search");
	var x = document.getElementById("searchInput").value;
	if (x == ss_memory) {
		return;
	}
	ss_memory = x;
	document.getElementById("search").className = '';
	if (x.length < 30 && x.length > 2 && x.value != "") {
		sajax_do_call("wfAjaxSearchSuggest", [x], newdiv);
		if (document.getElementById("extended_search").innerHTML != '')
		{	document.getElementById("extended_search").style.display="block";
			document.getElementById("hide").style.display="none";
			document.getElementById("search").className = 'extended_active';
		}
	}
}

function ss_ajax_onload(){
	var x = document.getElementById('searchInput');
	x.onkeyup = function(){
		SearchCall();
	};
}