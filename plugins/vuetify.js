import Vue from 'vue'
import Vuetify from 'vuetify'
import colors from 'vuetify/es5/util/colors'

Vue.use(Vuetify, {
  theme: {
    primary: '#102040', // a color that is not in the material colors palette
    accent: '#204080',
    secondary: '#4080C0',
    info: '#80C0F0',
    warning: '#800000',
    error: '#C00000',
    success: '#204080',
  }
})
