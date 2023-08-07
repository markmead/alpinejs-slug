# Alpine JS Slug

Transform a string into a slug with Alpine JS and
[Slugify](https://www.npmjs.com/package/slugify) 🐌

## Install

### With a CDN

```html
<script
  defer
  src="https://unpkg.com/alpinejs-slug@latest/dist/slug.min.js"
></script>

<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### With a Package Manager

```shell
npm i -D alpinejs-slug

yarn add -D alpinejs-slug
```

```js
import Alpine from 'alpinejs'
import slug from 'alpinejs-slug'

Alpine.plugin(slug)

Alpine.start()
```

## Example

```html
<div x-data="{ articleTitle: ' Alpine JS! ♥ ' }">
  <input type="text" id="articleTitle" x-model="articleTitle" />

  <input type="text" id="articleSlug" x-slug="articleTitle" />
  <!-- This results in "alpine-js-love" -->

  <p x-slug.keep-case.not-strict.replacement.&="articleTitle"></p>
  <!-- This results in "Alpine&JS!&love" -->

  <p x-slug.untrimmed="articleTitle"></p>
  <!-- This results in "-alpine-js-love-" -->

  <p x-slug.locale.de="articleTitle"></p>
  <!-- This results in "alpine-js-liebe" -->
</div>
```

### Modifiers

#### `keep-case`

Default: `false`

| Modifier  | Value       | False       | True        |
| --------- | ----------- | ----------- | ----------- |
| keep-case | Hello World | hello-world | Hello-World |

#### `replacement`

Default: `-`

If you wanted to use an underscore you'd do so like this `replacement._`

#### `not-strict`

Default: `false`

| Modifier   | Value        | False       | True         |
| ---------- | ------------ | ----------- | ------------ |
| not-strict | Hello World! | hello-world | hello-world! |

#### `untrimmed`

Default: `false`

If this modifier is added and the string contains spaces, the spaces will be
replaced with the value of `replacement`.

#### `locale`

Default: `{}`

Set the locale to change how certain characters are transformed. You can see the
list on the
[Slugify repo](https://github.com/simov/slugify/blob/master/config/locales.json).

#### `lazy`

Prevents the `x-slug` input value changing on load. It will only change when the
input `x-slug` is targeting changes.

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-slug)
![](https://img.shields.io/npm/v/alpinejs-slug)
![](https://img.shields.io/npm/dt/alpinejs-slug)
![](https://img.shields.io/github/license/markmead/alpinejs-slug)
