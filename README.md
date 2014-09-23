#VUI Link

This library contains a series of LESS mixins and CSS which can be used to
style links.

##Usage

Install as a development dependency:

```shell
npm install --save-dev vui-link
```

Import the library into your LESS file:

```css
@import 'node_modules/vui-link/dist/link'
```

##LESS Mixins

To apply link styling to an element, apply the `vui-link` mixin to any CSS
selector in your LESS file:

```css
a {
  .vui-link();
}

The color and hover colors can also be overriden:

```css
.vui-link( '#ff0000', '#0000ff' );
```

These colors are also exposed as variables, which can be referenced:

```css
.myLink {
  color: @vui-linkColor;
}

.myLink:hover, .myLink:focus {
  color: #vui-linkColorHover;
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