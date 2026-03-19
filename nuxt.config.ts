export default defineNuxtConfig({
  devtools: { enabled: false },
  css: ['~/assets/css/global.css'],
  app: {
    head: {
      title: 'Студия маникюра и парикмахерская в Москве',
      htmlAttrs: { lang: 'ru' },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'студия маникюра и парикмахерская в Москве. Профессиональный уход, современные техники, атмосфера заботы. Запись онлайн.' }
      ],
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&family=DM+Sans:wght@300;400;500&display=swap'
        }
      ]
    }
  }
})
