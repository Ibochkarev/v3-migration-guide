---
title: Наблюдение за массивами
badges:
  - breaking
---

# {{ $frontmatter.title }} <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

- **РАЗРЫВ**: При наблюдении за массивом callback будет срабатывать только при замене массива. Если вам нужно срабатывать при мутации, необходимо указать опцию `deep`.

## 3.x Синтаксис

При использовании [опции `watch`](https://vuejs.org/api/options-state.html#watch) для просмотра массива callback будет срабатывать только при замене массива. Другими словами, callback watch больше не будет срабатывать при мутации массива. Для срабатывания при мутации необходимо указать опцию `deep`.

```js
watch: {
  bookList: {
    handler(val, oldVal) {
      console.log('список книг изменен')
    },
    deep: true
  },
}
```

## Стратегия миграции

Если вы полагаетесь на наблюдение за мутациями массива, добавьте опцию `deep`, чтобы убедиться, что ваш callback срабатывает правильно.

[Флаг миграционной сборки: `WATCH_ARRAY`](../migration-build.html#compat-configuration)
