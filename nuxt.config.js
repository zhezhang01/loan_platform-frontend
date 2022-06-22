module.exports = {
  server: {
    port: 3000, // default: 3000
  },

  head: {
    title: 'srb',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'meta-key-words',
        name: 'keywords',
        content:
          'Srb official website_New York Stock Exchange listed company, online lending platform, solves the problem of personal small loan and short-term loan. Fund bank deposit, security.',
      },
      {
        hid: 'description',
        name: 'description',
        content:
          'Srb official website_New York Stock Exchange listed company, online lending platform, solves the problem of personal small loan and short-term loan. Fund bank deposit, security.',
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    // CSS file in the project
    '~/assets/css/common.css',
  ],

  modules: [
    '@nuxtjs/axios', //Introduce the axios module
  ],

  env: {
    // the server port of gateway is 8000
    BASE_API: 'http://localhost:8000',
  },

  axios: {
    // Axios options here
    baseURL: 'http://localhost:8000',
  },

  plugins: [
    '~/plugins/axios',
    '~/plugins/element-ui.js',
    '~/plugins/vue-qriously-plugin.js',
  ],

};
