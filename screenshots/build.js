var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(name) {

	var clipRect = page.evaluate(function(n) {
		var screenshot = document.querySelector('.screenshot-' + n);
		return screenshot.getBoundingClientRect();
	}, name);

	page.clipRect = {
		top:    clipRect.top,
		left:   clipRect.left,
		width:  clipRect.width,
		height: clipRect.height
	};
	page.render('./screenshots/' + name + '.png');

}

page.open('./screenshots/index.html', function() {
	setTimeout(function() {
		capture('overview');
		capture('standard');
		capture('main');
		capture('small');
		phantom.exit();
	}, 1000);
});
