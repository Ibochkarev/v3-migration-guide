---
title: Удалён доступ к this в функции значения по умолчанию входного параметра
badges:
  - breaking
---

# Удалён доступ к `this` в функции значения по умолчанию входного параметра <MigrationBadges :badges="$frontmatter.badges" />

В функции значения по умолчанию, для входного параметра, больше нет доступа к `this`.

Вместо этого:

- Необработанные входные параметры, полученные компонентом, передаются аргументом в функцию значения по умолчанию;

- Можно теперь использовать API [inject](https://ru.vuejs.org/api/composition-api-dependency-injection.html#inject) внутри функций значения по умолчанию.

```js
import { inject } from 'vue'

export default {
  props: {
    theme: {
      default(props) {
        // `props` — необработанные значения, передаваемые компоненту,
        // перед любыми обработчиками type / default
        // можно использовать `inject` для доступа к внедряемым свойствам
        return inject('theme', 'default-theme')
      }
    }
  }
}
```

## Стратегия миграции

[Флаг сборки для миграции: `PROPS_DEFAULT_THIS`](../migration-build.html#compat-configuration)
