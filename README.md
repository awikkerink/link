# vui-link
[![Bower version][bower-image]][bower-url]
[![NPM version][npm-image]][npm-url]
[![Build status][ci-image]][ci-url]
[![Dependency Status][dependencies-image]][dependencies-url]

This component contains [SASS mixins](http://sass-lang.com/) and CSS can be used to style links. It's best used in conjunction with the [VUI typography](https://github.com/Brightspace/valence-ui-typography) component.

Links look like this:

![screenshot of fields](/screenshots/overview.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-link` can be installed from [Bower][bower-url]:
```shell
bower install vui-link
```

Or alternatively from [NPM][npm-url]:
```shell
npm install vui-link
```

Depending on which installation method you choose, use that path when doing the SASS import:

```scss
@import 'bower_components/vui-link/link.scss';
// or...
@import 'node_modules/vui-link/link.scss';
```

## Usage

### Standard Links

For most situations requiring a link, use the `vui-link()` mixin on a HTML `<a>` element.

HTML:
```html
<a>Normal Link</a>
```

SCSS:
```scss
a {
	@include vui-link();
}
```

Result:

![screenshot of fields](/screenshots/normal.png?raw=true)

### Main Links

For links which require more emphasis, use the `vui-link-main()` mixin, which is typically applied using a class selector.

HTML:
```html
<a class="main">Main Link</a>
```

SCSS:
```scss
a.main {
	@include vui-link-main();
}
```

Result:

![screenshot of fields](/screenshots/main.png?raw=true)

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-link
[bower-image]: https://img.shields.io/bower/v/vui-link.svg
[npm-url]: https://npmjs.org/package/vui-link
[npm-image]: https://img.shields.io/npm/v/vui-link.svg
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-link.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-link
[dependencies-url]: https://david-dm.org/brightspace/valence-ui-link
[dependencies-image]: https://img.shields.io/david/Brightspace/valence-ui-link.svg
