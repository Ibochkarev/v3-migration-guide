---
title: v-if vs. v-for Precedence
badges:
  - breaking
---

# {{ $frontmatter.title }} <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

- **BREAKING**: If used on the same element, `v-if` will have higher precedence than `v-for`

## Введение

Two of the most commonly used directives in Vue.js are `v-if` and `v-for`. So it's no surprise that there comes a time when developers want to use both together. While this is not a recommended practice, there may be times when this is necessary, so we wanted to provide guidance for how it works.

## 2.x Синтаксис

In 2.x, when using `v-if` and `v-for` on the same element, `v-for` would take precedence.

## 3.x Синтаксис

In 3.x, `v-if` will always have the higher precedence than `v-for`.

## Стратегия миграции

It is recommended to avoid using both on the same element due to the syntax ambiguity.

Rather than managing this at the template level, one method for accomplishing this is to create a computed property that filters out a list for the visible elements.

[Флаг миграционной сборки: `COMPILER_V_IF_V_FOR_PRECEDENCE`](../migration-build.html#compat-configuration)

## См. также

- [List Rendering - Displaying Filtered/Sorted Results](https://vuejs.org/guide/essentials/list.html#displaying-filtered-sorted-results)
- [List Rendering - `v-for` with `v-if`](https://vuejs.org/guide/essentials/list.html#v-for-with-v-if)
