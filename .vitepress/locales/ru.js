export default {
  title: 'Миграция из Vue 3',
  description: 'Гид по миграции с Vue 2 на Vue 3',
  lang: 'ru-RU',
  themeConfig: {
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница',
    },
    outlineTitle: 'На этой странице',
    nav: [
      { text: 'Документация по Vue 3', link: 'https://ru.vuejs.org' },
    ],

    sidebar: [
      {
        text: 'Гид',
        items: [
          { text: 'Обзор', link: '/ru/' },
          { text: 'Новые рекомендации', link: '/ru/recommendations' },
          { text: 'Миграционная сборка', link: '/ru/migration-build' },
          {
            text: 'Несовместимые изменения',
            link: '/ru/breaking-changes/'
          }
        ]
      },
      {
        text: 'Глобальный API',
        items: [
          {
            text: 'Экземпляр программы глобального API',
            link: '/ru/breaking-changes/global-api'
          },
          {
            text: 'Глобальный API - Treeshaking',
            link: '/ru/breaking-changes/global-api-treeshaking'
          }
        ]
      },
      {
        text: 'Шаблон директив',
        items: [
          { text: 'v-model', link: '/ru/breaking-changes/v-model' },
          {
            text: 'Изменения использования key',
            link: '/ru/breaking-changes/key-attribute'
          },
          {
            text: 'Приоритет v-if против v-for',
            link: '/ru/breaking-changes/v-if-v-for'
          },
          { text: 'Поведение слияния v-bind', link: '/ru/breaking-changes/v-bind' },
          {
            text: 'Модификатор v-on.native удален',
            link: '/ru/breaking-changes/v-on-native-modifier-removed'
          }
        ]
      },
      {
        text: 'Компоненты',
        items: [
          {
            text: 'Функциональные компоненты',
            link: '/ru/breaking-changes/functional-components'
          },
          {
            text: 'Асинхронные компоненты',
            link: '/ru/breaking-changes/async-components'
          },
          { text: 'Опция emits', link: '/ru/breaking-changes/emits-option' }
        ]
      },
      {
        text: 'Функции рендеринга',
        items: [
          {
            text: 'API функций рендеринга',
            link: '/ru/breaking-changes/render-function-api'
          },
          {
            text: 'Унификация слотов',
            link: '/ru/breaking-changes/slots-unification'
          },
          {
            text: '$listeners объединены с $attrs',
            link: '/ru/breaking-changes/listeners-removed'
          },
          {
            text: '$attrs включает в себя class & style',
            link: '/ru/breaking-changes/attrs-includes-class-style'
          }
        ]
      },
      {
        text: 'Специальные элементы',
        items: [
          {
            text: 'Изменения взаимодействия',
            link: '/ru/breaking-changes/custom-elements-interop'
          }
        ]
      },
      {
        text: 'Удаленные API',
        items: [
          {
            text: 'Модификатор v-on keyCode',
            link: '/ru/breaking-changes/keycode-modifiers'
          },
          { text: 'API событий', link: '/ru/breaking-changes/events-api' },
          { text: 'Фильтры', link: '/ru/breaking-changes/filters' },
          {
            text: 'inline-template',
            link: '/ru/breaking-changes/inline-template-attribute'
          },
          { text: '$children', link: '/ru/breaking-changes/children' },
          { text: 'Опция propsData', link: '/ru/breaking-changes/props-data' }
        ]
      },
      {
        text: 'Другие незначительные изменения',
        items: [
          {
            text: 'Поведение приведения атрибутов',
            link: '/ru/breaking-changes/attribute-coercion'
          },
          {
            text: 'Пользовательские директивы',
            link: '/ru/breaking-changes/custom-directives'
          },
          { text: 'Опция Data', link: '/ru/breaking-changes/data-option' },
          {
            text: 'Изменения в API монтирования',
            link: '/ru/breaking-changes/mount-changes'
          },
          {
            text: 'Доступ до this в функциях входных параметров',
            link: '/ru/breaking-changes/props-default-this'
          },
          {
            text: 'Изменения классов переходов',
            link: '/ru/breaking-changes/transition'
          },
          {
            text: 'Transition как корневой элемент',
            link: '/ru/breaking-changes/transition-as-root'
          },
          {
            text: 'Transition Group как корневой элемент',
            link: '/ru/breaking-changes/transition-group'
          },
          {
            text: 'События жизненного цикла VNode',
            link: '/ru/breaking-changes/vnode-lifecycle-events'
          },
          { text: 'Наблюдатели за массивами', link: '/ru/breaking-changes/watch' }
        ]
      }
    ]
  }
}
