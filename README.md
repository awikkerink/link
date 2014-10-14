#VUI Link [![Build Status](https://travis-ci.org/Desire2Learn-Valence/valence-ui-link.svg?branch=master)](https://travis-ci.org/Desire2Learn-Valence/valence-ui-link)

This library contains a series of LESS mixins and CSS which can be used to
style links.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-link
```

##LESS Mixins

First import the library into your LESS file:

```css
@import 'node_modules/vui-link/link'
```

To apply link styling to an element, apply the `#vui.link` mixin to any CSS
selector in your LESS file:

```css
a {
  #vui.link();
}
```

The color and focus colors can also be overriden:

```css
#vui.link(
  @color: '#ff0000',
  @colorFocus: '#0000ff'
);
```

These colors are also exposed as variables, which can be referenced in your LESS:

```css
.myLink {
  color: @vui-linkColor;
}

.myLink:hover, .myLink:focus {
  color: @vui-linkColorFocus;
}
```

##CSS

If you'd prefer to use CSS, bundle up the provided `link.css` file with
your application's CSS. Then apply the `vui-link` CSS class to elements you
wish to style link links.

```css
<a class="vui-link">link text</a>
```

##Building

After grabbing the source, [Gulp](http://gulpjs.com/) should be installed globally
using the `npm install -g gulp` command. Then install package dependencies:

```shell
npm install
```

To build, run:

```shell
gulp
```

To test using Karma:

```shell
gulp test
```

## Contributing

### Code Style

This repository is configured with [EditorConfig](http://editorconfig.org) rules and contributions should make use of them. See the valence-ui [Code Style wiki page](https://github.com/Desire2Learn-Valence/valence-ui-helpers/wiki/Code-Style) for details.
