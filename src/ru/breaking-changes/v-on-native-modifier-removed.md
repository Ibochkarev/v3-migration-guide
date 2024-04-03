---
title: Удалён модификатор v-on.native
badges:
  - breaking
---

# Удалён модификатор `v-on.native` <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

Модификатор `.native` для `v-on` был удалён.

## 2.x Синтаксис

Обработчики событий, переданные в компонент через `v-on` по умолчанию вызываются по событию, которое генерируется с помощью `this.$emit`. Для добавления обработчика нативного события DOM к корневому элементу дочернего компонента требовалось использовать модификатор `.native`:

```html
<my-component
  v-on:close="handleComponentEvent"
  v-on:click.native="handleNativeClickEvent"
/>
```

## 3.x Синтаксис

Модификатор `.native` для `v-on` был удалён. В то же время, [новая опция `emits`](./emits-option.md) позволяет дочерним компонентам определять, какие события он может генерировать.

Следовательно, Vue теперь добавит все слушатели событий, которые _не были_ объявлены как генерируемые дочерним компонентом, в качестве нативных слушателей событий (кроме случаев, когда `inheritAttrs: false` была задана в опциях дочернего компонента).

```html
<my-component
  v-on:close="handleComponentEvent"
  v-on:click="handleNativeClickEvent"
/>
```

Содержимое `MyComponent.vue`:

```html
<script>
  export default {
    emits: ['close']
  }
</script>
```

## Стратегия миграции

- удалить все экземпляры модификатора `.native`.
- убедитесь, что все компоненты документируют свои события с помощью опции `emits`.

[Флаг сборки для миграции: `COMPILER_V_ON_NATIVE`](../migration-build.html#compat-configuration)

## См. также

- [Relevant RFC](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0031-attr-fallthrough.md#v-on-listener-fallthrough)
- [Migration guide - New Emits Option](./emits-option.md)
- [Migration guide - `$listeners` removed](./listeners-removed.md)
- [Migration guide - Changes in the Render Functions API](./render-function-api.md)
