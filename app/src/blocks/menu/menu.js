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
		$this.addClass(classBlock + '__item_hover');

		setTimeout(function() {

			if ($this.hasClass(classBlock + '__item_hover')) {
				$sub
					.stop(true, true)
					.fadeIn(delay);
			}
		}, 100);
	});

	$this.on('mouseleave', function() {
		$this.removeClass(classBlock + '__item_hover');

		$sub
			.stop(true, true)
			.fadeOut(delay);
	});
});
