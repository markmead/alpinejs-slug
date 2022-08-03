# Alpine JS Slug

Transform a string into a slug with Alpine JS and Slugify 🐌

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
<form x-data="{ title: '' }">
  <label for="title">Title</label>

  <input type="text" id="title" x-model="title" />

  <label for="slug">Slug</label>

  <input type="text" id="slug" x-slug="title" />
</form>
```

In this example the `x-slug` directive is doing the following.

1. Watching the `title` data
2. Converting the value of `title` to a slug
3. Setting the value of the input (with the `x-slug` directive) to the slug

### Stats

![](https://img.shields.io/bundlephobia/min/alpinejs-slug)
![](https://img.shields.io/npm/v/alpinejs-slug)
![](https://img.shields.io/npm/dt/alpinejs-slug)
![](https://img.shields.io/github/license/markmead/alpinejs-slug)
