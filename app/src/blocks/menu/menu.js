var
	classBlock = 'menu',
	$block = $('.' + classBlock),
	$menuItems = $block.find('.' + classBlock + '__item'),
	$menuItemsWithSub = $menuItems.filter(function() {
		return $(this).find('.' + classBlock + '__sub-wrap').length;
	}),
	delay = 150;

$menuItemsWithSub.each(function() {
	var
		$this = $(this),
		$sub = $this.find('.' + classBlock + '__sub-wrap');

	$this.on('mouseenter', function() {
		$sub
			.stop(true, true)
			.fadeIn(delay);
	});

	$this.on('mouseleave', function() {
		$sub
			.stop(true, true)
			.fadeOut(delay);
	});
});
