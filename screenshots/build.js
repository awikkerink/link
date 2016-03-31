var page = require('webpage').create();
page.viewportSize = {width: 750, height: 1000};

function capture(name) {

	var clipRect = page.evaluate(function(n) {
		var screenshot = document.querySelector('.screenshot-' + n);
		screenshot.style.display = 'inline-block';
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

page.open('./demo/index.html', function() {
	setTimeout(function() {
		capture('overview');
		capture('standard');
		capture('main');
		phantom.exit();
	}, 1000);
});
