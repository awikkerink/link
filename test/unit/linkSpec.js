( function() {
	'use strict';

	describe( 'vui-link', function() {

		var node;

		beforeEach( function () {
			node = document.body.appendChild( document.createElement( 'div' ) );
			node.className = 'vui-link';
		} );

		afterEach( function() {
			document.body.removeChild( node );
		} );

		it( 'has the correct color', function() {

			var style = window.getComputedStyle( node, null ).getPropertyValue( 'color' );
			expect( style ).toBe( 'rgb(0, 97, 127)' );

		} );

	} );

} )();