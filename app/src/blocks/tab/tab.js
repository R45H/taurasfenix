var
	classBlock = 'tab',
	$blocks = $('.' + classBlock),
	delay = 300;

$blocks.each(function() {
	var
		$block = $(this),
		$links = $block.find('.' + classBlock + '__link'),
		$targets = $block.find('.' + classBlock + '__panel'),
		isAnimate = false;

	$links.each(function() {
		var
			$link = $(this),
			link = $link.attr('data-tab-link'),
			$target = $targets.filter('[data-tab-target="' + link + '"]');

		$link.on('click', function(e) {

			e.preventDefault();

			if ($link.hasClass(classBlock + '__link_active') || isAnimate) return;

			isAnimate = true;

			$targets
				.filter('.' + classBlock + '__panel_active')
				.stop(true, true)
				.fadeOut(delay, function() {
					$links.removeClass(classBlock + '__link_active');
					$link.addClass(classBlock + '__link_active');
					$(this)
						.removeClass(classBlock + '__panel_active')
						.css('display', '');
					$target
						.stop(true, true)
						.fadeIn(delay, function() {
							$(this)
								.addClass(classBlock + '__panel_active')
								.css('display', '');

							isAnimate = false;
						});
				});
		});
	});
});