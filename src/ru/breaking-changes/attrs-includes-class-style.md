---
title: $attrs includes class & style
badges:
  - breaking
---

# `$attrs` includes `class` & `style` <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

`$attrs` now contains _all_ attributes passed to a component, including `class` and `style`.

## 2.x Поведение

`class` and `style` attributes get some special handling in the Vue 2 virtual DOM implementation. For that reason, they are _not_ included in `$attrs`, while all other attributes are.

A side effect of this manifests when using `inheritAttrs: false`:

- Attributes in `$attrs` are no longer automatically added to the root element, leaving it to the developer to decide where to add them.
- But `class` and `style`, not being part of `$attrs`, will still be applied to the component's root element:

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

when used like this:

```html
<my-component id="my-id" class="my-class"></my-component>
```

...will generate this HTML:

```html
<label class="my-class">
  <input type="text" id="my-id" />
</label>
```

## 3.x Поведение

`$attrs` contains _all_ attributes, which makes it easier to apply all of them to a different element. The example from above now generates the following HTML:

```html
<label>
  <input type="text" id="my-id" class="my-class" />
</label>
```

## Стратегия миграции

In components that use `inheritAttrs: false`, make sure that styling still works as intended. If you previously relied on the special behavior of `class` and `style`, some visuals might be broken as these attributes might now be applied to another element.

[Флаг сборки для миграции: `INSTANCE_ATTRS_CLASS_STYLE`](../migration-build.html#compat-configuration)

## См. также

- [Соответствующий RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md)
- [Руководство по миграции — Удалены `$listeners`](./listeners-removed.md)
- [Руководство по миграции — Новая опция emits](./emits-option.md)
- [Руководство по миграции - Удалён модификатор `v-on.native`](./v-on-native-modifier-removed.md)
- [Руководство по миграции — Изменения в API render-функций](./render-function-api.md)
