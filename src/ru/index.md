# Руководство по миграции Vue 3

:::warning Поддержка Vue 2 закончится 31 декабря 2023 года.
Узнайте больше о [Расширенной версии LTS](https://v2.vuejs.org/lts/), если обновление до Vue 3 нецелесообразно до даты окончания поддержки.
:::

Это руководство предназначено в первую очередь для пользователей с опытом работы с Vue 2, которые хотят узнать об изменениях между Vue 2 и Vue 3. **Это не то, что вы должны прочитать сверху донизу, прежде чем пробовать Vue 3.** Рекомендуемый способ изучения Vue 3 - это чтение [новой документации](https://ru.vuejs.org).

<!-- VueMastery Start -->
<script setup>
import VueMasteryWidget from './VueMastery.vue'
</script>
<VueMasteryWidget/>
<!-- VueMastery End -->

## Notable New Features

Среди новых возможностей Vue 3 можно отметить следующие:

- [Composition API](https://ru.vuejs.org/guide/extras/composition-api-faq.html)<span class="note">\*</span>
- [SFC Composition API Syntax Sugar (`<script setup>`)](https://ru.vuejs.org/api/sfc-script-setup.html)<span class="note">\*</span>
- [Teleport](https://ru.vuejs.org/guide/built-ins/teleport.html)
- [Fragments](./new/fragments.html)
- [Emits Component Option](https://ru.vuejs.org/api/options-state.html#emits)<span class="note">\*\*</span>
- [`createRenderer` API from `@vue/runtime-core`](https://ru.vuejs.org/api/custom-renderer.html) для создания пользовательских рендеров
- [SFC State-driven CSS Variables (`v-bind` in `<style>`)](https://ru.vuejs.org/api/sfc-css-features.html#v-bind-in-css)<span class="note">\*</span>
- [SFC `<style scoped>` теперь можно включать глобальные правила или правила, направленные только на содержимое слотов](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md)
- [Suspense](https://ru.vuejs.org/guide/built-ins/suspense.html) <sup class="warning">экспериментальный</sup>

<sub class="note"><b>\*</b> Теперь также поддерживается в <a href="https://blog.vuejs.org/posts/vue-2-7-naruto.html" target="_blank">Vue 2.7</a></sub><br>
<sub class="note"><b>\*\*</b> Поддерживается в Vue 2.7, но только для вывода типов</sub>

## Критические изменения

Критические изменения между Vue 2 и Vue 3 перечислены [здесь](./breaking-changes/).

## Новые рекомендации уровня фреимворка

Новые рекомендации уровня фреимворка перечислены [здесь](./recommendations).

## Миграционная сборка

Если у вас есть существующий проект или библиотека Vue 2, которые вы собираетесь обновить до Vue 3, мы предоставляем сборку Vue 3, которая предлагает API, совместимые с Vue 2. Подробнее об этом читайте на странице [Миграционная сборка](./migration-build.html).

<style>
.note {
  color: #476582;
}
</style>
