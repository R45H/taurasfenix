var
	classBlock = 'slider-single',
	classDots = classBlock + '__dots container',
	classDot = classBlock + '__dot',
	$blocks = $('.' + classBlock);

$blocks.each(function() {

	$(this).slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		dotsClass: classDots,
		customPaging: function() {
			return '<div class="' + classDot + '"></div>'
		}
	});
});