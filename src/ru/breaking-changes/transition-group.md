---
title: Корневой элемент <transition-group> больше не создаётся
badges:
  - breaking
---

# {{ $frontmatter.title }} <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

Теперь `<transition-group>` по умолчанию больше не создаёт корневой элемент при отрисовке, но может его создавать при указании атрибута `tag`.

## 2.x Синтаксис

Во Vue 2, `<transition-group>` как и другие пользовательские компоненты, нуждался в корневом элементе, который по умолчанию был `<span>`, но настраивался через атрибут `tag`.

```html
<transition-group tag="ul">
  <li v-for="item in items" :key="item">
    {{ item }}
  </li>
</transition-group>
```

## 3.x Синтаксис

Во Vue 3 теперь появилась [поддержка фрагментов](../new/fragments.html), поэтому корневой тег больше не нужен компонентам. Поэтому по умолчанию `<transition-group>` и не отрисовывает его.

Если уже указан атрибут `tag` в коде Vue 2, как в примере выше, то всё будет работать как и раньше. Если атрибут не указывался и стилизация или другое поведение полагается на наличие корневого элемента `<span>`, то добавьте `tag="span"` в `<transition-group>`:

```html
<transition-group tag="span">
  <!-- -->
</transition-group>
```

## Стратегия миграции

[Флаг сборки для миграции: `TRANSITION_GROUP_ROOT`](../migration-build.html#compat-configuration)

## См. также

- [Переименованы некоторые классы `<transition>`](./transition.html)
- [Использование `<transition>` корневым элементом](./transition-as-root.html)
