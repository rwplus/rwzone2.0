import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css' // Ensure you are using css-loader



Vue.use(Vuetify);

export default new Vuetify({
  theme: {
      options: {
        customProperties: true,
      },
    themes: {
      light: {
        primary: '#195BDD',
        secondary: '#707070',
        accent: '#82B1FF',
        error: '#f44336',
        info: '#2196F3',
        success: '#01AC5A',
        warning: '#FFC107'
      },
    },
  },
  icons: {
    iconfont: 'mdi',
  },
});
