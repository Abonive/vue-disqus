# vue-disqus
> Vue component to integrate Disqus comments in your application [Vue.js](http://vuejs.org/), with support for SPA and Vue 2.*


## Installation

##### 1.) Install package via NPM

```shell
$ npm install vue-disqus
```

> For Vue 1.* use [v1.0.2](https://github.com/ktquez/vue-disqus/tree/v1.0.2) - `npm install --save vue-disqus@1.0.2`

## Using in `.vue` files
##### 2.) Add the component disqus
```javascript
<template>
  // omited
  <div class="comments">
    <disqus shortname="your_shortname_disqus" identifier="opcional_page_identifier"></disqus>
  </div>
</template>

<script>
import Disqus from 'vue-disqus'

export default {
  // ...
  components: {
    Disqus
  }
}
// ...
```

---

## Using with HTML files
##### 3.) Add the component to the base instance Vue

```html
<!-- Required Javascript -->
<script src="vue.js"></script>
<script src="node_modules/vue-disqus/vue-disqus.js"></script>
```

```html
<!-- Assuming your view app is APP. -->
<body id="app">
  <div class="comments">
    <disqus shortname="your_shortname_disqus"></disqus>
  </div>
</body>
```

## Props

Prop           | Data Type  | required  | Description
-------------- | ---------- | --------- | -----------
`shortname`    | String     | true      | Your shortname disqus.


## License

[MIT](http://opensource.org/licenses/MIT)
