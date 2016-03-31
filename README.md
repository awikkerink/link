**Looking for SASS-based `vui-link`?** It's [over here](https://github.com/Brightspace/valence-ui-link/tree/sass).

# vui-link
[![Bower version][bower-image]][bower-url]
[![Build status][ci-image]][ci-url]

A Valence UI, [Polymer](https://www.polymer-project.org/1.0/)-based web component link element.

Links look like this:

![example screenshot of link](/screenshots/overview.png?raw=true)

For further information on this and other VUI components, see the docs at [ui.valence.d2l.com](http://ui.valence.d2l.com/).

## Installation

`vui-link` can be installed from [Bower][bower-url]:
```shell
bower install vui-link
```
## Usage

### Standard Links

For most situations requiring a link:

Include the [webcomponents.js](http://webcomponents.org/polyfills/) "lite" polyfill (for browsers who don't natively support web components), then import `link.html`:

```html
<head>
	<script src="https://s.brightspace.com/lib/webcomponentsjs/0.7.21/webcomponents-lite.min.js"></script>
	<link rel="import" href="../vui-link/link.html">
</head>
```

The native `<a>` element can now be extended to be a `vui-link`:

```html
<a href="foo.html" is="vui-link">Take me to Foo</a>
```

Result:

![example screenshot of standard link](/screenshots/standard.png?raw=true)

### Main Links

For links which require more emphasis:

Follow the steps above for a standard link and include the boolean attribute `main`.

```html
<a href="ultimate-foo.html" is="vui-link" main>Take me to the ultimate Foo!</a>
```

Result:

![example screenshot of main link](/screenshots/main.png?raw=true)

## Running tests locally in Windows

Tests in this repo use web-component-tester (WCT). Currently WCT has an issue in Windows with tests taking about a minute to start.  A workaround is to set two environment variables for Launchpad (a library used by WCT).  These help bypass browser searching which is what causes the delay.  For example:
LAUNCHPAD_BROWSERS=CHROME
LAUNCHPAD_CHROME-'C:\Program Files (x86)\Google\Chrome\Application'

## Coding styles

See the [VUI Best Practices & Style Guide](https://github.com/Brightspace/valence-ui-docs/wiki/Best-Practices-&-Style-Guide) for information on VUI naming conventions, plus information about the [EditorConfig](http://editorconfig.org) rules used in this repo.

[bower-url]: http://bower.io/search/?q=vui-link
[bower-image]: https://img.shields.io/bower/v/vui-link.svg
[ci-image]: https://travis-ci.org/Brightspace/valence-ui-link.svg?branch=master
[ci-url]: https://travis-ci.org/Brightspace/valence-ui-link
