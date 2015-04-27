### Match Tags

```js
/<script>[\s\S]*?<\/script>/ig
/<style>[\s\S]*?<\/style>/ig
/<object>[\s\S]*?<\/object>/ig
/<title>([\s\S]*?)<\/title>/i
```

### Strip Meta

```js
/<meta[^>]*?name=['\"](keywords|description)['\"][^>]*?content=['\"]([^>]*)['\"]/ig
```
