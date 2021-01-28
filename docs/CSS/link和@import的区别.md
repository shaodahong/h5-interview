## 相同点

- 两者都可以加载样式文件

## 不同点

- `@import` 是 CSS 语法，`link` 是 HTML 标签

```html
<style>
  @import url(a.css);
</style>

<link href="a.css" ref="stylesheet" />
```

- `@import` 只能加载样式文件，`link` 不仅可以加载样式文件，还可以设置 `rel` 等属性进行预加载，manifest 等

```html
<link rel="icon" href="favicon.ico" />
<link rel="preload" href="main.js" as="script" />
```

- `@import` 最低支持 [IE 5.5](https://developer.mozilla.org/zh-CN/docs/Web/CSS/@import#%E6%B5%8F%E8%A7%88%E5%99%A8%E5%85%BC%E5%AE%B9%E6%80%A7) 以上的以浏览器，`link` 没有兼容性问题
- `link` 可以通过 DOM 改变样式文件，`@import` 不行
- `link` 可以并行下载，而 `@import` 如果被包含在 css 文件中则不支持并行下载

```html
<link href="a.css" ref="stylesheet" />

<!-- a.css -->
<style>
  @import url(b.css);
</style>
```
