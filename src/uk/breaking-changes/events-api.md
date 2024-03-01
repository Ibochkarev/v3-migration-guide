---
badges:
  - breaking
---

# API подій <MigrationBadges :badges="$frontmatter.badges" />

## Огляд

Методи екземплярів `$on`, `$off` та `$once` видалено. Екземпляри компонентів більше не реалізують інтерфейс випромінювача подій.

## 2.x Синтаксис

У версії 2.x екземпляр Vue можна було використовувати для ініціювання обробників, приєднаних безпосередньо через API випромінювача подій (`$on`, `$off` та `$once`). Це могло бути використано для створення _шини подій_ для створення глобальних слухачів подій, що використовуються у всьому додатку:

```js
// eventBus.js

const eventBus = new Vue()

export default eventBus
```

```js
// ChildComponent.vue
import eventBus from './eventBus'

export default {
  mounted() {
    // додавання слухача шини подій
    eventBus.$on('custom-event', () => {
      console.log('Ініційовано користувацьку подію!')
    })
  },
  beforeDestroy() {
    // видалення слухача шини подій
    eventBus.$off('custom-event')
  }
}
```

```js
// ParentComponent.vue
import eventBus from './eventBus'

export default {
  methods: {
    callGlobalCustomEvent() {
      eventBus.$emit('custom-event') // коли ChildComponent змонтовано, то в консолі з'явиться повідомлення
    }
  }
}
```

## 3.x Оновлення

Ми повністю видалили методи `$on`, `$off` та `$once` з екземпляра. Метод `$emit` все ще є частиною чинного API, оскільки він використовується для ініціювання обробників подій, які декларативно приєднані батьківським компонентом.

## Стратегія міграції

[Стяг збірки міграції: `INSTANCE_EVENT_EMITTER`](../migration-build.html#compat-configuration)

У Vue 3 більше не можна використовувати ці API для прослуховування власних подій, що випромінюються компонентом зсередини. Для цього варіанту використання не існує шляху міграції.

### Події кореневого компонента

Статичні слухачі подій можна додати до кореневого компонента, передавши їх як реквізити до `createApp`:

```js
createApp(App, {
  // Прослуховування події 'expand'
  onExpand() {
    console.log('expand')
  }
})
```

### Шина подій

Шаблон шини подій можна замінити за допомогою зовнішньої бібліотеки, що реалізує інтерфейс випромінювача подій, наприклад, [mitt](https://github.com/developit/mitt) або [tiny-emitter](https://github.com/scottcorgan/tiny-emitter).

Наприклад:

```js
// eventBus.js
import emitter from 'tiny-emitter/instance'

export default {
  $on: (...args) => emitter.on(...args),
  $once: (...args) => emitter.once(...args),
  $off: (...args) => emitter.off(...args),
  $emit: (...args) => emitter.emit(...args)
}
```

Це забезпечує той самий API випромінювача подій, що й версія Vue 2.

У більшості випадків не рекомендується використовувати глобальну шину подій для зв'язку між компонентами. Хоча це часто є найпростішим рішенням у короткостроковій перспективі, в довгостроковій перспективі це майже завжди призводить до головного болю в підтримці. Залежно від обставин, існують різні альтернативи використанню шини подій:

* Реквізити та події повинні бути вашим першим вибором для спілкування між батьківськими та дочірніми компонентами. Дочірні компоненти можуть спілкуватися через своїх батьків.
* `Provide / inject` дозволяє компоненту обмінюватися даними з вмістом слота. Це корисно для тісно пов'язаних компонентів, які завжди використовуються разом.
* `Provide / inject` також можна використовувати для зв'язку між компонентами на великих відстанях. Це може допомогти уникнути "буріння реквізиту", коли реквізит потрібно передавати через багато рівнів компонентів, які самі не потребують цього реквізиту.
* Буріння реквізиту також можна уникнути шляхом рефакторингу з використанням слотів. Якщо проміжному компоненту не потрібні реквізити, це може вказувати на проблему з розділенням відповідальності. Введення слоту в цей компонент дозволяє батьківському компоненту створювати вміст безпосередньо, так що реквізити можуть бути передані без участі проміжного компонента.
* [Глобальне управління станом](https://ua.vuejs.org/guide/scaling-up/state-management.html), таке як [Pinia](https://pinia.vuejs.org/).