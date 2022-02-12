# Alpine JS Slug

Alpine JS plugin `x-slug` allows you to reactively convert a string to slug, perfect for blog titles

## Example 👀

```html
<form x-data="{ title: '' }">
  <label for="title">Title</label>
  <input type="text" id="title" x-model="title" />

  <label for="slug">Slug</label>
  <input type="text" id="slug" x-slug="title" />
</form>
```

This will update the `slug` input reactively when the `title` input updates. Whatever is inputed in the `title` input will be converted into a slug.

**Examples**

```
"My Awesome Blog" => "my-awesome-blog"
"Is React Better than Vue?" => "why-are-we-still-talking-about-this-in-2022"
```

## Install 🌟

It's very easy to install Alpine JS plugins! 🙌

### CDN

```html
<script src="https://unpkg.com/alpinejs-slug@1.x.x/dist/slug.min.js"></script>
<script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>
```

### NPM/Yarn

```shell
npm i -D alpinejs-slug

yarn add -D alpinejs-slug
```

Then you can register the plugin.

```js
import Alpine from "alpinejs";
import slug from "alpinejs-slug";

Alpine.plugin(slug);

window.Alpine = Alpine;

Alpine.start();
```

### Stats 📊

Here's some stats about the Alpine JS slug package! As you can see, it's tiny 🤏

![](https://img.shields.io/bundlephobia/min/alpinejs-slug)
![](https://img.shields.io/npm/v/alpinejs-slug)
![](https://img.shields.io/npm/dt/alpinejs-slug)
![](https://img.shields.io/github/license/markmead/alpinejs-slug)
