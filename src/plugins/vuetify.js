import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#000083', //hsl(244, 86%, 59%)
                secondary: 'hsl(342, 100%, 50%)',
            },
        },
    },
});
