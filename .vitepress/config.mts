import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  locales: {
    root: {
      label: 'Русский',
      lang: 'ru'
    }
  },
  base: "/",
  lang: 'ru-RU',
  title: "ISHome Hub",
  description: "Документация для центра умного дома ISHome Hub",
  themeConfig: {
    lastUpdated: false,
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Редактировать страницу'
    },
    aside: true,
    search: {
      provider: 'local',
      options: {
        locales: {
          root: { // используйте ключ `root`, если хотите перевести локаль по умолчанию
            translations: {
              button: {
                buttonText: 'Поиск',
                buttonAriaLabel: 'Поиск'
              },
              modal: {
                displayDetails: 'Отобразить подробный список',
                resetButtonTitle: 'Сбросить поиск',
                backButtonTitle: 'Закрыть поиск',
                noResultsText: 'Нет результатов по запросу',
                footer: {
                  selectText: 'выбрать',
                  selectKeyAriaLabel: 'выбрать',
                  navigateText: 'перейти',
                  navigateUpKeyAriaLabel: 'стрелка вверх',
                  navigateDownKeyAriaLabel: 'стрелка вниз',
                  closeText: 'закрыть',
                  closeKeyAriaLabel: 'esc'
                }
              }
            }
          }
        }
      }
    },
    outline: {
      label: 'Оглавление',
    },
    logo: '/images/android-chrome-192x192.png',
    // https://vitepress.dev/reference/default-theme-config
    darkModeSwitchLabel: 'Оформление',
    lightModeSwitchTitle: 'Переключить на светлую тему',
    darkModeSwitchTitle: 'Переключить на темную тему',
    sidebarMenuLabel: 'Меню',
    returnToTopLabel: 'На верх',
    externalLinkIcon: true,
    nav: [
      { text: 'Главная', link: '/' },
      { text: 'Первое знакомство', link: '/quick-start' },
    ],
    docFooter: {
      prev: 'Предыдущая страница',
      next: 'Следующая страница'
    },

    footer: {
      message: 'Опубликовано под лицензией MIT.',
      copyright: '© 2024 – настоящее время, IceSlam Networks'
    },

    sidebar: [
      {
        text: 'Главное',
        items: [

          {
            text: 'С чего начать?',
            link: '/quick-start',
          },
          {
            text: 'Настройка сети WiFi',
            link: '/wifi/'
          },
          {
            text: 'Удаленный доступ',
            link: '/remote/'
          },
        ]
      },
      { text: 'Интеграции',
        items: [
          {
            text: 'Умный дом Яндекса',
            link: '/yaha'
          }
        ]
      },
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/iceslam' },
      { icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.7.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>'
        },
        link: 'mailto:support@ishomehub.ru' }
    ]
  }
})
