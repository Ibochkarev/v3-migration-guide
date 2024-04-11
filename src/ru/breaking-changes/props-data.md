---
badges:
  - removed
---

# `propsData` <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

Опция `propsData`, использовавшаяся для передачи props экземпляру Vue при его создании, удалена. Чтобы передать props корневому компоненту приложения Vue 3, используйте второй аргумент опции [createApp](https://ru.vuejs.org/api/application.html#createapp).

## Синтаксис в 2.x

В версии 2.x мы могли передавать props экземпляру Vue во время его создания:

```js
const Comp = Vue.extend({
  props: ['username'],
  template: '<div>{{ username }}</div>'
})

new Comp({
  propsData: {
    username: 'Эван'
  }
})
```

## Что изменилось в 3.x

Опция `propsData` была удалена. Если вам нужно передать props корневому экземпляру компонента при его создании, используйте второй аргумент `createApp`:

```js
const app = createApp(
  {
    props: ['username'],
    template: '<div>{{ username }}</div>'
  },
  { username: 'Эван' }
)
```
