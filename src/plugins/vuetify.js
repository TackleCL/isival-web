import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        secondary: '#b0bec5',
        //// palette isival
        info: '#49A4B9',
        accent: '#FFBA2F',
        primary: '#1F5298',

        //// palette grey
        cloud: '#F3F5F6',
        silver: '#959DA5',
        concrete: '#3E464D'
      },
    },
  },
});
