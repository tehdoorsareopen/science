/** ***********SEARCH****************** */


function initializeGM(id, a, b, x, y) {
	var mapOptions = {
		zoom:10,
		center:new google.maps.LatLng(x, y),
		mapTypeId:google.maps.MapTypeId.ROADMAP
	}
	var map = new google.maps.Map(document.getElementById('gm' + id),
		mapOptions);

	//var image = 'images/beachflag.png';
	var myLatLng = new google.maps.LatLng(a, b);
	var beachMarker = new google.maps.Marker({
		position:myLatLng,
		map:map
		//icon:image
	});
}


$.ajax({
	cache:false
});

$(function () {
	$('.active-hint').not().click(function () {
		hide_hints();
	});

	showServices();

});

/**
 * Показываем/скрываем главное меню
 */
function showServices() {
	var allServices = $('.menu-right-top-block a');
	allServices.click(function (e) {
		e.preventDefault();
		$('.g-menu li:first').trigger('mouseover');
		if ($('#gMenuBox').is(':visible')) {

			$('#gMenuBox').hide();
			$('#middle-overlay').hide();
		} else {
			$('#gMenuBox').show();
			$('#middle-overlay').show();
		}

	});

	$('#gMenuBox .close').click(function () {
		$('#gMenuBox').hide();
		$('#middle-overlay').hide();
	})
}


$(window).load(function () {
	h = $(document).height();
	$('#middle-overlay').height(h);
});

s_index = 0;
function arrows_pressed(event, inp_id) {
	var all;

	all = document.getElementById('inp_' + inp_id).nextSibling.childNodes;
	var s = [];
	var search_hints;
	for (var i = 0; i < all.length; i++) {
		if (all.item(i).getAttributeNode("style").value == 'display:block') {
			s.push(all[i].id);
		}
	}

	s_counter = s.length;
	var enter_hints = [];
	if (event.keyCode == 13) {
		for (var i = 0; i < s_counter; i++) {
			if (document.getElementById(s[i]).className == "active-hint") {
				var act_id = s[i];
				choose_search_hint2(act_id);
				$("#search-form").submit();
				// return false;
			}
		}
		// return false;
	} else {
		if (event.keyCode == 40) {
			if (document.getElementById(s[s_index]) != null) {
				if (document.getElementById(s[s_index]).className == 'active-hint')
					s_index++;
			}

			if (s_index != 0 && s_index != s_counter)
				document.getElementById(s[s_index - 1]).className = '';

			if (document.getElementById(s[s_index]) != null) {
				document.getElementById(s[s_index]).className = '';
				document.getElementById(s[s_index]).className += "active-hint";
			}

			if (s_index < s_counter - 1)
				s_index++;
		}

		if (event.keyCode == 38) {
			if (document.getElementById(s[s_index - 1]) !== null) {
				if (document.getElementById(s[s_index - 1]).className == 'active-hint')
					s_index--;
			}
			if (s_index > 0)
				s_index--;

			if (s_index != 0)
				document.getElementById(s[s_index + 1]).className = '';
			else
				document.getElementById(s[1]).className = '';

			document.getElementById(s[s_index]).className = '';
			document.getElementById(s[s_index]).className += "active-hint";
		}
	}
}

function choose_search_hint(hint_id) {
	var hint_txt;
	hint_txt = document.getElementById('hint_' + hint_id).innerHTML;
	var make_val = document.getElementById('hint_' + hint_id).parentNode.previousSibling;
	make_val.value = hint_txt;

	var pr_id = document.getElementById('hint_' + hint_id).getAttribute("pr_id");
	var make_val_system = document.getElementById('hint_' + hint_id).parentNode.previousSibling.previousSibling;
	make_val_system.value = pr_id;
}

function choose_search_hint2(hint_id) {
	var hint_txt;
	hint_txt = document.getElementById(hint_id).innerHTML;
	var make_val = document.getElementById(hint_id).parentNode.previousSibling;
	make_val.value = hint_txt;

	var pr_id = document.getElementById(hint_id).getAttribute("pr_id");
	var make_val_system = document.getElementById(hint_id).parentNode.previousSibling.previousSibling;
	make_val_system.value = pr_id;
	// runajax();
}

function compare_hint_and_input(hint_idd) {
	var pr_id = document.getElementById(hint_idd).getAttribute("pr_id");
	var make_val_system = document.getElementById(hint_idd).parentNode.previousSibling.previousSibling;
	make_val_system.value = pr_id;
}

var old_inp_txt;
function listdrop(event, inp_id) {
	if (event.keyCode == 13) {
		$('.search-items-container').hide();
		// return false;
	} else {
		var node_child;
		node_child = document.getElementById('ind_' + inp_id).childNodes;

		var inp_txt;
		inp_txt = document.getElementById('inp_' + inp_id).value;

		var temp = 'ind_' + inp_id;

		$('#ind_' + inp_id).show();
		if (inp_txt != old_inp_txt) {
			s_index = 0;
			for (var i = 0; i < node_child.length; i++) {
				node_child[i].className = '';
			}
		}

		old_inp_txt = inp_txt;

		var expr = new RegExp('^' + inp_txt, 'i');

		for (var i = 0; i < node_child.length; i++) {
			if (expr.test(node_child.item(i).innerHTML)) {
				node_child.item(i).getAttributeNode("style").value = 'display:block';
				var hint_id_temp = node_child.item(i).getAttribute("id");
				compare_hint_and_input(hint_id_temp);
			} else {
				node_child.item(i).getAttributeNode("style").value = 'display:none';
			}
		}
	}
}

function hide_hints() {
	$('.search-items-container').hide();
	$('.search-items-container').children().attr('class', ' ');
	s_index = 0;

}

function parseUrlQuery() {
	var data = {};
	if (location.search) {
		var pair = (location.search.substr(1)).split('&');
		for (var i = 0; i < pair.length; i++) {
			var param = pair[i].split('=');
			data[param[0]] = param[1];
		}
	}
	return data;
}

idd = 0;
function add_input(f_type) {
	var idd = Math.random();
	var new_input = document.createElement('div');

	if (f_type == 'vendor')
		new_input.innerHTML = '<input type="hidden" id="' + idd + '" name="arrFilter_pf[VENDOR][]">';
	if (f_type == 'client')
		new_input.innerHTML = '<input type="hidden" id="' + idd + '" name="arrFilter_pf[CLIENT][]">';
	if (f_type == 'sector')
		new_input.innerHTML = '<input type="hidden" id="' + idd + '" name="arrFilter_pf[SECTOR][]">';
	if (f_type == 'tec')
		new_input.innerHTML = '<input type="hidden" id="' + idd + '" name="arrFilter_pf[TECHNOLOGIES][]">';

	document.getElementById('inputi').appendChild(new_input);

	return (idd);
}

div_id = 0;
function add_hint_div(div_id) {
	var a_id = Math.random();
	var new_div = document.createElement('div');
	var new_a = document.createElement('a');
	var exist_hint_txt = document.getElementById(div_id).innerHTML;
	new_div.className = "chosen";

	document.getElementById('hints').appendChild(new_div);
	new_div.innerHTML = exist_hint_txt;
	new_div.appendChild(new_a);
	new_a.className += 'del-chosen';
	new_a.id = a_id;
	new_a.setAttribute('onclick', "remove_choosen_gage(" + a_id + ")");
}

function remove_choosen_gage(a_id) {
	el_to_del = document.getElementById(a_id).parentNode;
	var el_txt = el_to_del.innerHTML;
	el_txt = el_txt.split('<');
	// alert(el_txt);

	var all = document.getElementById("ind_88").childNodes;
	for (var i = 0; i < all.length; i++) {
		if (all.item(i).innerHTML == el_txt[0]) {
			var pr_id = all.item(i).getAttributeNode("pr_id").value;

		}
	}

	var all_c = document.getElementById("ind_87").childNodes;
	for (var q = 0; q < all_c.length; q++) {
		if (all_c.item(q).innerHTML == el_txt[0]) {
			var pr_id = all_c.item(q).getAttributeNode("pr_id").value;

		}
	}

	/*
	 * var all_s = document.getElementById("ind_82").childNodes; for(var m=0; m<all_s.length;
	 * m++) { if(all_s.item(m).innerHTML == el_txt[0]) { var pr_id =
	 * all_s.item(m).getAttributeNode("pr_id").value; } }
	 */

	/*
	 * var all_t = document.getElementById("ind_91").childNodes; for(var w=0; w<all_t.length;
	 * w++) { if(all_t.item(w).innerHTML == el_txt[0]) { var pr_id =
	 * all_t.item(w).getAttributeNode("pr_id").value; } }
	 */

	var hidden_inputsy = document.getElementById('inputi').childNodes;
	for (var k = 1; k < hidden_inputsy.length; k++) {
		var hidden_inputs = hidden_inputsy.item(k).childNodes;
		for (var j = 0; j < hidden_inputs.length; j++) {
			if (hidden_inputs.item(j).value == pr_id) {
				var h_id = hidden_inputs.item(j).getAttributeNode("id").value;
				var hid_el_to_del = document.getElementById(h_id).parentNode;
				hid_el_to_del.parentNode.removeChild(hid_el_to_del);
			}
		}
	}

	el_to_del.parentNode.removeChild(el_to_del);
	$("#search-form").submit();
}

function pr_id_inputs() {
	var childrenyata = document.getElementById('inputi').childNodes;
	for (var i = 0; i < childrenyata.length; i++) {
		Math.floor(Math.random() * (n + 1))
	}
}

function get_choosen_hints(vendor_id, client_id) {
	var s = [];
	var arr = vendor_id.split(',');

	var all_vendors = document.getElementById('ind_88').childNodes;
	var min = 1;
	var max = 1000;

	for (var j = 0; j < arr.length; j++) {
		if (arr[j] > 0) {
			var pr_input_id = add_input('vendor');
			document.getElementById(pr_input_id).value = arr[j];
			var inp_txt = document.getElementById(pr_input_id).value;
			search_prop(inp_txt, 'ind_88');
			// �������� ����� id ���� � ������
			// pr-id
		}
	}

	var arr_c = client_id.split(',');
	var all_clients = document.getElementById('ind_87').childNodes;

	for (var i = 0; i < arr_c.length; i++) {
		if (arr_c[i] > 0) {
			var pr_input_id_c = add_input('client');
			document.getElementById(pr_input_id_c).value = arr_c[i];
			var inp_c_txt = document.getElementById(pr_input_id_c).value;
			search_prop(inp_c_txt, 'ind_87');
			// �������� ����� id ���� �
			// ������ pr-id
		}
	}

	/*
	 * var arr_s = sector_id.split(','); var all_sectors =
	 * document.getElementById('ind_82').childNodes;
	 *
	 * for(var k=0; k<arr_s.length; k++) { if(arr_s[k] > 0) { var pr_input_id_s =
	 * add_input('sector'); document.getElementById(pr_input_id_s).value =
	 * arr_s[k]; var inp_s_txt = document.getElementById(pr_input_id_s).value;
	 * search_prop(inp_s_txt, 'ind_82'); //�������� ����� id ���� � ������ pr-id } }
	 */

	/*
	 * var arr_t = tech_id.split(','); var all_ts =
	 * document.getElementById('ind_91').childNodes;
	 *
	 * for(var j=0; j<arr_t.length; j++) { if(arr_t[j] > 0) { var pr_input_id_t =
	 * add_input('tec'); document.getElementById(pr_input_id_t).value =
	 * arr_t[j]; var inp_t_txt = document.getElementById(pr_input_id_t).value;
	 * search_prop(inp_t_txt, 'ind_91'); //�������� ����� id ���� � ������ pr-id } }
	 */
}

function search_prop(hint_index, container_id) {
	var all = document.getElementById(container_id).childNodes;
	for (var i = 0; i < all.length; i++) {
		if (all.item(i).getAttributeNode("pr_id").value == hint_index) {
			var it_id = all.item(i).getAttributeNode("id").value;
			var some = it_id + hint_index;
			add_hint_div(it_id);
		}
	}
}

function count_search(counts) {
	document.getElementById('search-count').innerHTML = counts;
}

// ************************

var waitTime = 0;

function theRotator() {

	$('.top-specials ul li').css({
		opacity:0.0
	}).hide();
	$('.top-specials ul li:first').css({
		opacity:1.0
	}).show();

	setInterval('rotate()', 8000);
}

function rotate() {
	if (waitTime > 0) {
		waitTime--;
		return;
	}

	var current = ($('.top-specials ul li.show') ? $('.top-specials ul li.show') : $('.top-specials ul li:first'));
	var next = ((current.next().length) ? ((current.next().hasClass('show')) ? $('.top-specials ul li:first') : current.next()) : $('.top-specials ul li:first'));
	current.animate({
		opacity:0.0
	}, 500, function () {

		if (next.attr('id') == 'col-r-center1') {
			$('#n-a-1').addClass('active-ban');
			if ($('#n-a-2').hasClass('active-ban'))
				$('#n-a-2').removeClass('active-ban');
			if ($('#n-a-3').hasClass('active-ban'))
				$('#n-a-3').removeClass('active-ban');
		}

		if (next.attr('id') == 'col-r-center2') {
			$('#n-a-2').addClass('active-ban');
			if ($('#n-a-1').hasClass('active-ban'))
				$('#n-a-1').removeClass('active-ban');
			if ($('#n-a-3').hasClass('active-ban'))
				$('#n-a-3').removeClass('active-ban');
		}

		if (next.attr('id') == 'col-r-center3') {
			$('#n-a-3').addClass('active-ban');
			if ($('#n-a-1').hasClass('active-ban'))
				$('#n-a-1').removeClass('active-ban');
			if ($('#n-a-2').hasClass('active-ban'))
				$('#n-a-2').removeClass('active-ban');
		}

		current.hide().removeClass('show');
		next.css({
			opacity:0.0
		}).addClass('show').show().animate({
				opacity:1.0
			}, 500);
	});
}
;

function smartpoint(cur_ban, next_ban) {
	waitTime = 1;
	var current = ($('.top-specials ul li.show') ? $('.top-specials ul li.show') : $('.top-specials ul li:first'));
	current.stop();
	current.animate({
		opacity:0.0
	}, 200, function () {
		current.hide().removeClass('show');
		next_ban.css({
			opacity:0.0
		}).addClass('show').show().animate({
				opacity:1.0
			}, 200);
	});

	if (cur_ban == 1) {
		$('#n-a-1').addClass('active-ban');
		if ($('#n-a-2').hasClass('active-ban'))
			$('#n-a-2').removeClass('active-ban');
		if ($('#n-a-3').hasClass('active-ban'))
			$('#n-a-3').removeClass('active-ban');
	}

	if (cur_ban == 2) {
		$('#n-a-2').addClass('active-ban');
		if ($('#n-a-1').hasClass('active-ban'))
			$('#n-a-1').removeClass('active-ban');
		if ($('#n-a-3').hasClass('active-ban'))
			$('#n-a-3').removeClass('active-ban');
	}

	if (cur_ban == 3) {
		$('#n-a-3').addClass('active-ban');
		if ($('#n-a-1').hasClass('active-ban'))
			$('#n-a-1').removeClass('active-ban');
		if ($('#n-a-2').hasClass('active-ban'))
			$('#n-a-2').removeClass('active-ban');
	}
}

function mainMenuHover() {

	$('body.main-page .g-menu li').hover(function () {

		$(this).find('.sub-g-menu').show();
	}, function () {
		$('.g-menu .sub-g-menu').hide();
	});

	$('#gMenuBox .g-menu li').hover(function () {
		$('.g-menu .sub-g-menu').hide();
		$(this).find('.sub-g-menu').show();
	}, function () {

	});
}

function chatRedesign() {
    $('body[id!="iframe-chat"] #socnet_chat_body #socnet_chat_info span.close').live('click', function () {
        mes = $('#socnet_chat_body #sonet_chat_messages');
        form = $('#socnet_chat_body #socnet_chat_form .socnet-chat-input');
        infoTable = $('#socnet_chat_body #socnet_chat_info .bx-photo').parents('table:first');
        close = $('#socnet_chat_body #socnet_chat_info td.close span');
        if (mes.is(':visible')) {
            mes.slideUp();
            form.slideUp();
            infoTable.slideUp();
            close.html('Закрыть');
        }
        else {
            mes.slideDown();
            form.slideDown();
            infoTable.slideDown();
            close.html('Закрыть');
        }
    });
    $('body#iframe-chat #socnet_chat_body #socnet_chat_info span.close').live('click', function (e) {
        $('#alal-bg', window.parent.document).trigger('click');
        $('#modal-bg', window.parent.document).closest('.main-page').css({"overflow":"visible"});
        $('#modal-bg', window.parent.document).remove();
        $('#modal-win', window.parent.document).remove();
        $("body", window.parent.document).css({"overflow":"visible"});
    });
    $('#socnet_chat_body #post_message_button').val('отправить');
    var close = '<span class="close">Закрыть</span>', 
    	chat = '<div style="font-size: 24px; color:#333333; font-weight: bold; margin-bottom: 25px;">Он-лайн чат</div>';
    $('#socnet_chat_body #socnet_chat_info').prepend('<table><tr><td>' + chat + '</td><td class="close">' + close + '</td></tr></table>');
    $('#socnet_chat_body #socnet_chat_info td:eq(3)').prepend('<div style="color:#009999; font-weight: bold; font-size: 14px; text-transform: uppercase;">ваш Эксперт: </div>');
    var icon = $('#socnet_chat_body #socnet_user_online'),
    	statusText = $('#socnet_chat_body #socnet_user_online_text');
    if (icon.is('.bx-icon-offline')) {
        statusText.html('Не в сети');
    }
    else {
        statusText.html('В сети');
    }
    $('#socnet_chat_body #sonet_chat_messages br').remove();
}


function modalclose() {
	$('#modal-bg').remove();
	$('#modal-win').remove();
	$("body").css({
		"overflow":"visible"
	});
	$("body").css({
		"overflow":"auto"
	});
	return false;
}

function vacancyForm(){
	partCss = {'color':'#009999', 'fontWeight':'bold', 'fontSize':'14px', 'textTransform':'uppercase', 'marginTop':'20px'};
	part1 = $('<h2>Личные данные</h2>').css(partCss);
	part2 = $('<h2>Вакансия</h2>').css(partCss);
	$('body#vacancy-form form p:eq(1)').prepend(part1);
	$('body#vacancy-form input[name^="form_email_"]').after(part2);
	$('body#vacancy-form form label[for]').css({'marginRight':'20px'});
	$('body#vacancy-form input[type="submit"]').css({'marginTop':'20px', 'display':'inline-block'});
	vacancyName = $('body#vacancy-form #iframe-form').attr('data-vacancy');
	$('body#vacancy-form input[name^="form_text_44"]').val(vacancyName);
}

function banners(){
    $('.top-specials li img').removeAttr('width').removeAttr('height');
}

$(document).ready(function (event) {
    $("#slides").slides({
        play: 5000,
        pause: 2500,
        effect: "fade",
        hoverPause: false
    });

    if(jQuery().fancybox){
        $(".fancybox-line").fancybox({
            openEffect : 'none',
            closeEffect	: 'none',
            helpers : {
                title : {
                    type : 'outside'
                }
            }
        });
    }

    if(jQuery().scrollable){
        $("#photoLine").scrollable();
    }

  //  }



    $('.updown-text-link').each(function(ind,el){

        $(el).html('<span>'+$(el).html()+'</span>');
    });

    $('.updown-text-link').live('click', function(e){
        e.preventDefault();
        if($(this).hasClass('active')){
            $(this).removeClass('active').next('.updown-text').slideUp();
        }else{
            $(this).addClass('active').next('.updown-text').slideDown();
        }
    });



    $('.vacancy-section a').live('click', function(e){
        e.preventDefault();
        if($(this).parent().hasClass('active')){
            $(this).parent().removeClass('active').next('.vacancy-section-list').slideUp();
        }else{
            $(this).parent().addClass('active').next('.vacancy-section-list').slideDown();
        }
    });

	$("select.make-custom-select").each(function(){
		var select = $(this);
		var options = "";
		select.children("option").each(function(){

			options += '<div class="custom-select-list-item" data-value="'+ $(this).val() +'">'+ $(this).html() +'</div>';
		});
		var html = '<div class="custom-select"><div class="custom-select-value"></div><div class="custom-select-trigger"></div><div class="custom-select-list">'+options+'</div></div>';
		select.before(html);
		var newSelect = select.prev(".custom-select");
		newSelect.width(Math.min(newSelect.children(".custom-select-list").width() + 28, newSelect.parent().width()));
		newSelect.children(".custom-select-list").hide();
		select.wrap("<div class='custom-select-parent'/>");
		newSelect.children(".custom-select-value").html(select.children("option:selected").html());
		select.live("change", function(){
			newSelect.children(".custom-select-value").html(select.children("option:selected").html());
		});
	});
	$(".custom-select-list-item").live("click", function() {
		var item = $(this);
		var select = item.closest(".custom-select").next(".custom-select-parent").children("select");
		if (select.children("option:selected").val() != item.attr("data-value")) {
			select.val(item.attr("data-value"));
			select.change();
		}
	});
	$(".custom-select").live("click", function(){
		$(this).children(".custom-select-list").toggle();
	});
	$('html').click(function(e) {
		if ($(e.target).closest(".custom-select").length == 0) {
			$(".custom-select-list").hide();
		}
	});

	banners();

	vacancyForm();

	chatRedesign();

	mainMenuHover();

	$('.tec-search-left').click(function () {
		$(this).next().slideToggle("slow");
	});

	$('.super-che').change(function () {
		if ($('.super-che').attr('checked'))
			$('.inps1').attr("checked", true);
		else
			$('.inps1').attr("checked", false);
	});

	$('#n-a-1').addClass('active-ban');

	$('#n-a-1').click(function () {
		var next = $('#col-r-center1');
		smartpoint(1, next);
	});

	$('#n-a-2').click(function () {
		var next = $('#col-r-center2');
		smartpoint(2, next);
	});

	$('#n-a-3').click(function () {
		var next = $('#col-r-center3');
		smartpoint(3, next);
	});

	theRotator();

// $('<span>sdfasdfsf</span>').replaceAll('.dontbreak');
// $('div.g-menu ul li div.sub-g-menu a').html().replace('
// ', '***');
// $('div.g-menu ul li div.sub-g-menu a').each(function(){
// $(this).html('<nobr>' + $(this).html() + '</nobr>');
// });

	$('ul#vertical-multilevel-menu li:first').addClass('multim-li-first');
	$('ul#vertical-multilevel-menu li:first a').click(function () {
		return false;
	});

	$('div.top-menu ul li ul').each(function () {
		var w = $(this).width(), wp = $(this).parents('li').eq(0).width();
		if (wp > w) {
			$(this).width(wp);
		}
	});

	function slide(id, ui) {
		// $('li#actual_' + id + ' div.over-center').html(id);
		var AOverH = $('li#actual_' + id + ' div.over-center').height(), ACenterH = $('li#actual_' + id + ' div.a-center').height(), $BlockA = $('li#actual_' + id + ' div.over-center'), ValT = (ACenterH - AOverH) * ui / 100;

		if (ValT > 0)
			return false;
		$BlockA.css({
			marginTop:ValT + "px"
		});

	}


	$('div.g-menu ul li div.sub-g-menu a').hover(function () {
		// $(this).siblings().toggle();

	});

	$('div.b-menu ul li').hover(function () {
		$(this).toggleClass('hovclass');
		// $(this:first-child).toggleClass('img-hov');
	});
	$(".slider").slider({
		animate:false,
		range:"min",
		value:0,
		min:0,
		max:100,
		step:1,
		slide:function (event, ui) {
			slide($(this).attr('id').replace('slider_', ''), ui.value);
		}/*
		 * , change: function(event,ui) {
		 * slide($(this).attr('id').replace('slider_', ''),
		 * ui.value); }
		 */
	});
	$('.slider a').html($('.slider a').html() + '<span></span>');
	$('div.actual ul li div.a-bottom').css('display', 'block');
	$('div.actual ul li div.a-center').each(function () {
		/*
		 * h = $(this).height(); over =
		 * $(this).children('div.over-center'); if (h <
		 * over.height()) {
		 * $(this).children('a.ui-slider-handle').width(100); }
		 */
	});

	$('.cl-q').html($('.cl-q').html() + '<span class="quote-close"></span>');
	$(".tab tr:nth-child(even)").addClass("odd");
	$(".tab tr:last").addClass("last");

	function ModalWindows(clearModal) {
        var DocHeight = $('body').height(),
            DocWidth = $('body').width(),
            ScreenHeight = $(document).height(),
            ScreenWidth = $(window).width(),
            ModalBG = $("div#modal-bg"),
            Modal = $("div#modal-win"),
            ModalWidth = Modal.width(),
            ModalHeight = Modal.height() + 8,
            Top = (DocHeight - ModalHeight) / 2,
            Top = (Top < 0) ? 0 : Top;
         //   Top = 20,

            if( ($(window).scrollTop()+ModalHeight+20)<ScreenHeight){
                Top = $(window).scrollTop()+20;
            }else{
                Top = Math.max(ScreenHeight-ModalHeight-20-900,20);
            }

            Left = (DocWidth - 700) / 2;


        ModalBG.addClass('modal-bg').css({
			"width":DocWidth,
			"height":DocHeight
		});

		if (clearModal) {
			ModalBG.css({'background':'none'}).show();
			//fade = 0;
		}
		else {
			ModalBG.fadeIn(1000);
		}

		Modal.addClass('modal-win').css({
			"top":Top,
			"left":Left
		});
		$("body").css({
		//	"overflow":"hidden"
		});
		// alert('Top:' + Top + '\nDocHeight:' + DocHeight +
		// '\nModalHeight:' +
		// ModalHeight);

        $('.video-holder').hide();
	}


	$("#modalclose").live('click', function (e) {
		e.preventDefault();
		modalclose();
        $('.video-holder').show();
	});




	$(window).bind('resize', function () {
        resized();
		if ($("div#modal-win").length) {
			ModalWindows();
		}
	});

	$('div.top-menu ul li a.no-active').click(function () {
		return false;
	});
//a[href="/online-chat/"],



$("a[href='/online-chat/'],a[href='/en/online-chat/']").click(function(){
   jivo_api.open();
   return false;
});

$("a.online-chat").click(function(){
   jivo_api.open();
return false;
});


	$('a[href="/feedback/"], a[href="/callback/"],  a[href="/en/feedback/"], a[href="/en/callback/"],  input[data-form], a.vacancy-form').click(function(e) {
		var src, 
			clearModal = false;
		$('body').append('<div id="modal-bg"></div><div class="modal-win" id="modal-win"></div>');
		if ($(this).is('a[href]')) {
			// $('div#modal-win').load($(this).attr('href') +
			// '?ajax');

			if ($(this).attr('href') == '/callback/') {
				src = '/include/callback.php?iframe';
			}
			if ($(this).attr('href') == '/feedback/') {
				src = '/include/feedback.php?iframe';
			}
			if ($(this).attr('href') == '/online-chat/') {
				src = '/include/chat.php?iframe';
				clearModal = true;
			}
			if ($(this).attr('href') == '/en/callback/') {
				src = '/include/callback_en.php?iframe';
			}
			if ($(this).attr('href') == '/en/feedback/') {
				src = '/include/feedback_en.php?iframe';
			}
			if ($(this).attr('href') == '/en/online-chat/') {
				src = '/include/chat_en.php?iframe';
				clearModal = true;
			}

			if ($(this).is('.vacancy-form') && $(this).is('[data-id]')) {
				var src = '/include/vacancy-form.php?VACANCY='+$(this).attr('data-id');
			}

		}
		if ($(this).is('input[data-form]')) {
			var src = '/activity/registration.php?WEB_FORM_ID=' + $(this).attr('data-form');
		}

		var iframe = $('<iframe src="' + src + '" width="100%" height="693px" frameborder="0"></iframe>'),
			modal = $('div#modal-win');
		
		modal.html('<a href="#" id="modalclose"></a>').append(iframe);
		if (clearModal) {
			modal.css({'background':'none', 'border':'none'});
			$('a#modalclose').css({margin:'-9px 0 0 603px'});
		}


		ModalWindows(false);
		e.preventDefault();
		return false;
	});
    resized();
    $('a.arr-left, a.arr-right').click(function(){
        var _i = $(this).attr('class').replace('arr-', ''),
            _p = (_i == 'left') ? '0' : '-260';
        $('div.logos').animate({marginLeft: _p + 'px'}, 1000);
        return false;
    });


    $('div.dochki div.logos-block div.logos a').each(function(){
        $(this).html('<div><p class="logos-text">' + $(this).html() + '</p><p class="sep"></p></div><span></span>');
        h  = -1*$(this).children('div').height(),
            Nw = ($(this).width() - $(this).children('div').width())/2;
        $(this).children('div').css({
            'margin' : h + 'px 0 0 ' + Nw + 'px',
            'display' : 'none'
        });
    });

    $('div.dochki div.logos-block div.logos a span').hover(
        function () {
            $(this).closest(".logos").find("div").each(function(){$(this).hide();});
            $(this).parent().children('div').css({'position':'absolute'}).fadeIn(400);
        }, function () {
            $(this).parent().children('div').css({'position':'relative'}).fadeOut(200);
        }
    );

});
function resized() {
    $(".promo-slide").width($("body").width());
}
