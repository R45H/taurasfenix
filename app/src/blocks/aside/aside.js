var
	classAside = 'aside',
	classAsideOpened = classAside + '_opened',
	classFog = 'fog',
	$body = $('body'),
	$aside = $('.' + classAside),
	$toggle = $('.js-' + classAside + '__toggle'),
	$closeBtn = $('.' + classAside + '__close'),
	delay = 300,
	mobilePoint = 768;

/* Скрытие / раскрытие бокового меню при клике на гамбургер */
$toggle.on('click', function() {

	if ($aside.hasClass(classAsideOpened)) {
		toggleAside('close');
	} else {
		toggleAside('open');
	}
});
/* ===== */

/* Клик по затемнению */
$(document).on('click', '.' + classFog, function() {
	if (!$aside.hasClass(classAsideOpened)) return;
	toggleAside('close');
});
/* ===== */

/* Клик по кнопке "закрыть" */
$closeBtn.on('click', function() {
	toggleAside('close');
});
/* ===== */

/* Закрытие бокового меню при нажатии ESC */
var closeAsideOnEsc = function(event) {
	if (event.keyCode !== 27) return;
	toggleAside('close');
};
/* ===== */

/* Закрытие бокового меню при ресайзе */
$(window).on('resize', function() {
	if (window.innerWidth < mobilePoint) return;
	if (!$aside.hasClass(classAsideOpened)) return;
	toggleAside('close');
});
/* ===== */

/* Показывает или скрывает боковое меню */
function toggleAside(action) {

	if (action === 'open') {
		$aside.addClass(classAsideOpened);
		$body.append('<div class="' + classFog + '"></div>');
		$('.' + classFog).fadeIn(delay);
		$(document).on('keydown', closeAsideOnEsc);
		toggleBodyScroll();
	}

	if (action === 'close') {
		$(document).off('keydown', closeAsideOnEsc);
		$aside.removeClass(classAsideOpened);
		$('.' + classFog).fadeOut(delay / 2);
		$toggle
			.removeClass('toggle_opened')
			.addClass('toggle_closed');

		setTimeout(function() {
			$('.' + classFog).remove();
			toggleBodyScroll(false);
		}, delay / 2);
	}
}
/* ===== */