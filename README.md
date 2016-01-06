# vui-link
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains Sass mixins and CSS that you can use to style links.

## Installation

Install from NPM:
```shell
npm install vui-link
```

Install from Bower:
```shell
bower install vui-link
```

## Usage

**Import the mixins:**

```scss
@import 'bower_components/vui-link/link.scss'; // or...

@import "node_modules/vui-link/link.scss";
```

**Links:** 

```scss
.app {

	a {
		@include vui-link;
	}

}
```

For further information on this component and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

#### Coding styles
See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-link
[bower-image]: https://img.shields.io/bower/v/vui-link.svg
[npm-url]: https://npmjs.org/package/vui-link
[npm-image]: https://img.shields.io/npm/v/vui-link.svg
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-link.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-link
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-link
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-link.svg
