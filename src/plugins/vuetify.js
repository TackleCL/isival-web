import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        info: '#49A4B9',
        primary: '#1F5298',
        secondary: '#b0bec5',
        accent: '#FFBA2F',
      },
    },
  },
});
