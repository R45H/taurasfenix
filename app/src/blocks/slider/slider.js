var
	classBlock = 'slider',
	$blocks = $('.' + classBlock);

$blocks.each(function() {
	var
		$this = $(this),
		$prevArrow = '<div class="' + classBlock + '__arrow ' + classBlock + '__arrow_prev"></div>',
		$nextArrow = '<div class="' + classBlock + '__arrow ' + classBlock + '__arrow_next"></div>',
		$slider = $this.find('.' + classBlock + '__body'),
		sliderCols = +$this.attr('data-cols') || 1,
		sliderSmCols = +$this.attr('data-sm-cols') || sliderCols || 1,
		sliderMdCols = +$this.attr('data-md-cols') || sliderSmCols || sliderCols || 1,
		sliderLgCols = +$this.attr('data-lg-cols') || sliderMdCols || sliderCols || 1,
		sliderXlCols = +$this.attr('data-xl-cols') || sliderLgCols || sliderCols || 1;

	$slider.slick({
		prevArrow: $prevArrow,
		nextArrow: $nextArrow,
		appendArrows: $this,
		slidesToShow: sliderCols,
		slidesToScroll: sliderCols,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow: sliderSmCols,
					slidesToScroll: sliderSmCols
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: sliderMdCols,
					slidesToScroll: sliderMdCols
				}
			},
			{
				breakpoint: 991,
				settings: {
					slidesToShow: sliderLgCols,
					slidesToScroll: sliderLgCols
				}
			},
			{
				breakpoint: 1199,
				settings: {
					slidesToShow: sliderXlCols,
					slidesToScroll: sliderXlCols
				}
			}
		]
	});
});