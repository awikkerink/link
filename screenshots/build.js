var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(name) {

	var clipRect = page.evaluate(function(n) {
		return document.querySelector('.screenshot-' + n)
			.getBoundingClientRect();
	}, name);

	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  clipRect.width,
		height: clipRect.height
	};
	page.render('./screenshots/' + name + '.png');

}

page.open('./test/link.html', function() {
	capture('overview');
	capture('normal');
	capture('main');
	phantom.exit();
});
