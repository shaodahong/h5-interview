> Position 可以设置元素的定位方式，并可以通过 `top`、`right`、`bottom`、`left` 设置偏移位置

## static

默认值，且只有此值下 `top`、`right`、`bottom`、`left` 无效

## relative

相对定位

- 不脱标[^1]

## absolute

绝对定位

- 脱标[^1]
- 相对最近的非 `static` 定位的祖先元素定位

## fixed

固定定位

- 脱标[^1]
- 相对浏览器视口定位
- 当元素祖先的 `transform`, `perspective` 或 `filter` 属性非 `none` 时，相对该元素祖先定位

```jsx live
<div
  style={{
    transform: 'translate(0, 0)',
  }}
>
  <span
    style={{
      position: 'fixed',
      top: 0,
      left: 0,
    }}
  >
    hello world
  </span>
</div>
```

## sticky

粘性定位

- 不脱标[^1]

[^1] [什么是标准文档流和脱标](/CSS/什么是标准文档流和脱标)
