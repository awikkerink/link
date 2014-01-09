/*jslint browser: true*/

(function( vui ) {

	'use strict';

	// Check if the provided vui global is defined, otherwise try to require it if
	// we're in a CommonJS environment; otherwise we'll just fail out
	if( vui === undefined ) {
		if( typeof require === 'function' ) {
			vui = require('../../core');
		} else {
			throw new Error('load vui first');
		}
	}

	// Export the vui object if we're in a CommonJS environment.
	// It will already be on the window otherwise
	if( typeof module === 'object' && typeof module.exports === 'object' ) {
		module.exports = vui;
	}

	var $ = vui.$;

	$.widget( 'vui.vui_link', {

		_create: function () {

			var $node = $( this.element );

			var offscreenText = $node.children('.vui-offscreen').text();
			var title = $node.prop('title');
			var hasTitle = title !== undefined && title.length > 0;

			if( offscreenText.length > 0 && !hasTitle ) {
				this.element.data( 'autoUpdateTitleWithText', true );
				$node.prop( 'title', offscreenText );
			}

		},

		getText: function () {

			var $node = $( this.element );

			var text = $node.text().trim();
			return text;

		},

		setText: function (text) {

			if( this.element.data('autoUpdateTitleWithText') ) {
				this.element.prop( 'title', text );
			}

			var offscreen = this.element.children('.vui-offscreen');
			if( offscreen.length === 1 ) {
				$( offscreen[0] ).text( text );
				return;
			}

			this.element.contents().filter( function () {
					return this.nodeType === 3;
				} ).remove();
			this.element.append( document.createTextNode( text ) );

		}

	});

	vui.addClassInitializer(
			'vui-link',
			function( node ) {
				$( node ).vui_link();
			}
		);

})( window.vui );