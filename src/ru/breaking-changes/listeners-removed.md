---
title: $listeners removed
badges:
  - breaking
---

# `$listeners` removed <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

The `$listeners` object has been removed in Vue 3. Event listeners are now part of `$attrs`:

```js
{
  text: 'this is an attribute',
  onClose: () => console.log('close Event triggered')
}
```

## 2.x Синтаксис

In Vue 2, you can access attributes passed to your components with `this.$attrs`, and event listeners with `this.$listeners`.
In combination with `inheritAttrs: false`, they allow the developer to apply these attributes and listeners to some other element instead of the root element:

```html
<template>
  <label>
    <input type="text" v-bind="$attrs" v-on="$listeners" />
  </label>
</template>
<script>
  export default {
    inheritAttrs: false
  }
</script>
```

## 3.x Синтаксис

In Vue 3's virtual DOM, event listeners are now just attributes, prefixed with `on`, and as such are part of the `$attrs` object, so `$listeners` has been removed.

```vue
<template>
  <label>
    <input type="text" v-bind="$attrs" />
  </label>
</template>
<script>
export default {
  inheritAttrs: false
}
</script>
```

If this component received an `id` attribute and a `v-on:close` listener, the `$attrs` object will now look like this:

```js
{
  id: 'my-input',
  onClose: () => console.log('close Event triggered')
}
```

## Стратегия миграции

Remove all usages of `$listeners`.

[Флаг сборки для миграции: `INSTANCE_LISTENERS`](../migration-build.html#compat-configuration)

## См. также

- [Соответствующий RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md)
- [Migration guide - `$attrs` includes `class` & `style`](./attrs-includes-class-style.md)
- [Руководство по миграции — Изменения в API render-функций](./render-function-api.md)
- [Руководство по миграции — Новая опция emits](./emits-option.md)
- [Руководство по миграции - Удалён модификатор `v-on.native`](./v-on-native-modifier-removed.md)
