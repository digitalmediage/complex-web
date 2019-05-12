# Styling (CSS)

- [Styling (CSS)](#styling-css)
    - [Linting](#linting)
    - [sanitize.css](#sanitizecss)
  - [CSS Support](#css-support)
  - [Stylesheet](#stylesheet)
  - [CSS Modules](#css-modules)
    - [Usage](#usage)

### Linting


### sanitize.css

In addition, this boilerplate also uses
[`sanitize.css`](https://github.com/jonathantneal/sanitize.css)
to make browsers render all elements more consistently and in line with modern standards,
it's a modern alternative to CSS resets. More info available on the [`sanitize.css` page](sanitize.md).

## CSS Support

We also support the use of CSS [stylesheets](#stylesheet).

## Stylesheet

[Webpack](https://webpack.js.org/) allows you to import more than JavaScript.
Using the [`css-loader`](https://webpack.js.org/loaders/css-loader/) you can import CSS
into a JavaScript:

**`Button.css`**

```css
.danger {
  background-color: red;
}
```

**`Button.js`**

```js
import React from 'react';
import './Button.css'; // Tell Webpack that Button.js uses these styles

function Button() {
  // You can use them as regular CSS styles
  return <button className="danger">Click me</button>;
}
```

> For more information about Stylesheets and the `css-loader` see https://github.com/webpack-contrib/css-loader

## CSS Modules


### Usage

The syntax is very similar to using a [Stylesheet](#stylesheet)
and this often catches people out.
The key difference in CSS Modules is that you import styles to a variable.

**`Button.css`**

```css
.danger {
  background-color: red;
}
```

**`Button.js`**

```js
import React from 'react';
import styles from './Button.css'; // different import compared to stylesheets

function Button() {
  // different usage to stylesheets
  return <button className={styles.danger}>Click me</button>;
}
```

**IMPORTANT: if you enable this rule, [stylesheets](#stylesheet) will no longer work,
it's one or the other unless you include or exclude specific directories.**

> For more information about CSS Modules see https://github.com/css-modules/css-modules