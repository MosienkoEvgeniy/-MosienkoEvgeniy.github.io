$(document).ready(function() {

	$(function() {
		$('.upup2').mask("7 (999) 999-9999");
		$('.utel').mask("7 (999) 999-9999");
		$('.upup2-rieltor').mask("7 (999) 999-9999");
		$('.upup2-ocenka').mask("7 (999) 999-9999");
		$('.upup2-novostroy').mask("7 (999) 999-9999");
		$('.upup2-viezd').mask("7 (999) 999-9999");
		$('.upup2-pomenyat').mask("7 (999) 999-9999");
	});

  // Форма Есть вопросы?
  $('.fgres1').click(function(){ 	
    	if ($('.zak1').val() == '') {
    		$('.zak1').focus();
			$('.zak1').css('border', '2px solid red');
    		return;
    	}else {
    		$('.zak1').css('border', '1px solid #41aded;');		
		}
    	if ($('.zak2').val() == '') {
    		$('.zak2').focus();
			$('.zak2').css('border', '2px solid red');
    		return;
    	}else {
    		$('.zak2').css('border', '1px solid #41aded;');		
		}
    	if ($('.zak3').val() == '') {
    		$('.zak3').focus();
			$('.zak3').css('border', '2px solid red');
    		return;
    	}else {
    		$('.zak3').css('border', '1px solid #41aded;');		
		}		
		
	
		if($('#zakaza').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
		
    	$.post('/sendmailforms/save_phone1.php', { name: $('.zak1').val(), email: $('.zak2').val(), text: $('.zak3').val() },
            function() {
            	yaCounter30203659.reachGoal('vacancy');
            	$('#zapa').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
            });
	});
// Форма заказать обратный звонок
  $('.hot').click(function(){ 	
    	if ($('.upup1').val() == '') {
    		$('.upup1').focus();
			$('.upup1').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2').val() == '') {
    		$('.upup2').focus();
			$('.upup2').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2').css('border', '1px solid #41aded;');		
		}
		if($('#che1').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			$.post('/sendmailforms/save_phone0.php', { name: $('.upup1').val(), phone: $('.upup2').val()},
				function() {
					yaCounter30203659.reachGoal('callback');
					$('#ase').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});
	
	});



	
// Форма Задать вопрос риэлтору
  $('.rieltor').click(function(){ 	
    	if ($('.upup1-rieltor').val() == '') {
    		$('.upup1-rieltor').focus();
			$('.upup1-rieltor').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1-rieltor').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2-rieltor').val() == '') {
    		$('.upup2-rieltor').focus();
			$('.upup2-rieltor').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2-rieltor').css('border', '1px solid #41aded;');		
		}
		if($('#che1-rieltor').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			$.post('/sendmailforms/save_rieltor.php', { name: $('.upup1-rieltor').val(), phone: $('.upup2-rieltor').val()},
				function() {
					yaCounter30203659.reachGoal('rieltor');
					$('#ase-rieltor').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});
	
	});	

// Форма Заказать оценку квартиры
  $('.ocenka').click(function(){ 	
    	if ($('.upup1-ocenka').val() == '') {
    		$('.upup1-ocenka').focus();
			$('.upup1-ocenka').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1-ocenka').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2-ocenka').val() == '') {
    		$('.upup2-ocenka').focus();
			$('.upup2-ocenka').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2-ocenka').css('border', '1px solid #41aded;');		
		}
		if($('#che1-ocenka').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			$.post('/sendmailforms/save_ocenka.php', { name: $('.upup1-ocenka').val(), phone: $('.upup2-ocenka').val()},
				function() {
					yaCounter30203659.reachGoal('ocenka');
					$('#ase-ocenka').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});
	
	});		

// Форма Заказать оценку квартиры
  $('.novostroy').click(function(){ 	
    	if ($('.upup1-novostroy').val() == '') {
    		$('.upup1-novostroy').focus();
			$('.upup1-novostroy').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1-novostroy').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2-novostroy').val() == '') {
    		$('.upup2-novostroy').focus();
			$('.upup2-novostroy').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2-novostroy').css('border', '1px solid #41aded;');		
		}
		if($('#che1-novostroy').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			$.post('/sendmailforms/save_novostroy.php', { name: $('.upup1-novostroy').val(), phone: $('.upup2-novostroy').val()},
				function() {
					yaCounter30203659.reachGoal('novostroy');
					$('#ase-novostroy').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});
	
	});	

// Форма Заказать оценку квартиры
  $('.viezd').click(function(){ 	
    	if ($('.upup1-viezd').val() == '') {
    		$('.upup1-viezd').focus();
			$('.upup1-viezd').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1-viezd').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2-viezd').val() == '') {
    		$('.upup2-viezd').focus();
			$('.upup2-viezd').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2-viezd').css('border', '1px solid #41aded;');		
		}
		if($('#che1-viezd').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			$.post('/sendmailforms/save_viezd.php', { name: $('.upup1-viezd').val(), phone: $('.upup2-viezd').val()},
				function() {
					yaCounter30203659.reachGoal('viezd');
					$('#ase-viezd').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});
	
	});	

	// Форма Заказать оценку квартиры
  $('.pomenyat').click(function(){ 	
    	if ($('.upup1-pomenyat').val() == '') {
    		$('.upup1-pomenyat').focus();
			$('.upup1-pomenyat').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1-pomenyat').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2-pomenyat').val() == '') {
    		$('.upup2-pomenyat').focus();
			$('.upup2-pomenyat').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2-pomenyat').css('border', '1px solid #41aded;');		
		}
		if($('#che1-pomenyat').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			$.post('/sendmailforms/save_pomenyat.php', { name: $('.upup1-pomenyat').val(), phone: $('.upup2-pomenyat').val()},
				function() {
					yaCounter30203659.reachGoal('pomenyat');
					$('#ase-pomenyat').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});
	
	});	
	
	
// Форма тарифы 
  $('.hot_tarif').click(function(){ 	
  ind = $('.hot_tarif').index(this);

    	if ($('.upup1').val() == '') {
    		$('.upup1').focus();
			$('.upup1').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup1').css('border', '1px solid #41aded;');		
		}
    	if ($('.upup2').val() == '') {
    		$('.upup2').focus();
			$('.upup2').css('border', '2px solid red');
    		return;
    	}else {
    		$('.upup2').css('border', '1px solid #41aded;');		
		}

		if($('.checkbox__input').eq(ind).is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			
		dele = $(this).parent().prev().prev().text();	
		
			$.post('/sendmailforms/save_phone0.php', { name: $('.upup1').val(), phone: $('.upup2').val(), tar: dele },
				function() {
						yaCounter30203659.reachGoal('tarif');
					$('.ase').html('<div class="mfp-default mfp-default-center mfp-with-anim" id="popup-accept"><div class="mfp__heading">Спасибо!</div><div class="mfp__description">Ваша заявка уже доставлена. Мы свяжемся с Вами <br>в ближайшее время.</div></div>');
				});	
	});	
	
	


// Форма Получить прайс
  $('.b-hero__form-submit').click(function(){ 		
    	if ($('.b-hero__form-field').val() == '') {
    		$('.b-hero__form-field').focus();
			$('.b-hero__form-field').css('border', '2px solid red');
    		return;
    	}else {
    		$('.b-hero__form-field').css('border', '1px solid #41aded;');		
		}
		
    	$.post('sendmailforms/save_phone.php', { email: $('.b-hero__form-field').val() },
            function() {
            	yaCounter30203659.reachGoal('tarif');
            	$('.b-hero__form').html('<div class="call_me_success"><div class="spas">Спасибо за обращение</div>Мы отправим актуальный прайс-лист на Ваш e-mail.</div>');
            });
	});
	
	
// Форма КОНСУЛЬТАЦИЯ ПО ПРОДУКТУ
  $('#mini').click(function(){ 		
    	if ($('.b-lead__right-input').val() == '') {
    		$('.b-lead__right-input').focus();
			$('.b-lead__right-input').css('border', '2px solid red');
    		return;
    	}else {
    		$('.b-lead__right-input').css('border', '1px solid #41aded;');		
		}
		if($('#check_kons').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}	
			
    	$.post('sendmailforms/save_konsult.php', { email: $('.b-lead__right-input').val() },
            function() {
            	$('.b-lead__right').html('<div class="call_me_success"><div class="spas">Спасибо за обращение</div>Наш менеджер свяжется с Вами в ближайшее время.</div>');
            });
	});	
	
	
// Форма Заполните форму и отправьте заявку
  $('#check_otpr_subm').click(function(){ 		
    	if ($('#ploshad').val() == '') {
    		$('#ploshad').focus();
			$('#ploshad').css('border', '2px solid red');
    		return;
    	}else {
    		$('#ploshad').css('border', '1px solid #41aded;');		
		}
    	if ($('#city').val() == '') {
    		$('#city').focus();
			$('#city').css('border', '2px solid red');
    		return;
    	}else {
    		$('#city').css('border', '1px solid #41aded;');		
		}
    	if ($('#phoon').val() == '') {
    		$('#phoon').focus();
			$('#phoon').css('border', '2px solid red');
    		return;
    	}else {
    		$('#phoon').css('border', '1px solid #41aded;');		
		}	
		if($('#lij').is(':checked')){
				room = $('#lij').val();
			}		
		if($('#nelij').is(':checked')){
				room = $('#nelij').val();
			}		
		
		if($('#check_otpr').is(':checked')){
			}else{
				alert('Дайте свое согласие на обработку данных!');
				return;
			}
			

			
    	$.post('sendmailforms/save_zayav3.php', { room: room, home: $('#home').val(), street: $('#street').val(),name: $('#ploshad').val(), phone: $('#phoon').val(), city: $('#city').val() },
            function() {
            	$('#deer').html('<div class="call_me_success"><div class="spas">Спасибо за обращение</div>Наш менеджер свяжется с Вами в ближайшее время.</div>');
            });
	});	
});