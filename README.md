# css
Allow you to write inline CSS (pseudo-classes, media queries, etc) on HTML elements.

## Install
```html
<script src="https://cdn.jsdelivr.net/gh/audinue/css/index.js"></script>
```

## Examples
```html
<a css="
    color: red;
    &:hover {
      color: blue;
    }
">
  ...
</a>

```
```html
<tbody
  css="
    & tr:nth-child(even) {
      background: red;
    }
  ">
  ...
</tbody>
```
