---
badges:
  - new
---

# Асинхронные компоненты <MigrationBadges :badges="$frontmatter.badges" />

## Обзор

Вот общий обзор того, что изменилось:

- Новый вспомогательный метод `defineAsyncComponent`, который явно определяет асинхронные компоненты
- Опция `component` переименована в `loader`.
- Функция загрузчика по своей природе не принимает аргументы `resolve` и `reject` и должна возвращать Promise

Для более подробного объяснения читайте дальше!

## Введение

Раньше компоненты async создавались простым определением компонента как функции, возвращающей promise, например:

```js
const asyncModal = () => import('./Modal.vue')
```

Или для более продвинутого синтаксиса компонентов с опциями:

```js
const asyncModal = {
  component: () => import('./Modal.vue'),
  delay: 200,
  timeout: 3000,
  error: ErrorComponent,
  loading: LoadingComponent
}
```

## 3.x Синтаксис

Теперь, в Vue 3, поскольку функциональные компоненты определяются как чистые функции, определения асинхронных компонентов должны быть определены явно, обернуты их в новый хелпер `defineAsyncComponent`:

```js
import { defineAsyncComponent } from 'vue'
import ErrorComponent from './components/ErrorComponent.vue'
import LoadingComponent from './components/LoadingComponent.vue'

// Асинхронный компонент без опций
const asyncModal = defineAsyncComponent(() => import('./Modal.vue'))

// Асинхронный компонент с опциями
const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('./Modal.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

::: tip ПРИМЕЧАНИЕ
Vue Router поддерживает аналогичный механизм асинхронной загрузки компонентов маршрута, известный как *lazy loading*. Несмотря на сходство, эта функция отличается от поддержки асинхронных компонентов в Vue. Вы **не должны** использовать `defineAsyncComponent` при настройке компонентов маршрута с помощью Vue Router. Подробнее об этом можно прочитать в разделе [Lazy Loading Routes](https://router.vuejs.org/guide/advanced/lazy-loading.html) документации Vue Router.
:::

Еще одно изменение по сравнению с 2.x заключается в том, что опция `component` теперь переименована в `loader`, чтобы точно сообщить, что определение компонента не может быть предоставлено напрямую.

```js{4}
import { defineAsyncComponent } from 'vue'

const asyncModalWithOptions = defineAsyncComponent({
  loader: () => import('./Modal.vue'),
  delay: 200,
  timeout: 3000,
  errorComponent: ErrorComponent,
  loadingComponent: LoadingComponent
})
```

Кроме того, в отличие от 2.x, функция загрузчика больше не принимает аргументы `resolve` и `reject` и всегда должна возвращать Promise.

```js
// 2.x версия
const oldAsyncComponent = (resolve, reject) => {
  /* ... */
}

// 3.x версия
const asyncComponent = defineAsyncComponent(
  () =>
    new Promise((resolve, reject) => {
      /* ... */
    })
)
```

Более подробную информацию об использовании асинхронных компонентов см:

- [Руководство: Асинхронные компоненты](https://ru.vuejs.org/guide/components/async.html)
- [Флаг миграционной сборки: `COMPONENT_ASYNC`](../migration-build.html#compat-configuration)
