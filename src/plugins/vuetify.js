import Vue from "vue";
import Vuetify from "vuetify/lib/framework";
import "@fortawesome/fontawesome-free/css/all.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    icontfont: "fa" || "md",
  },
  theme: {
    themes: {
      background: "#f4f5f9",
    },
  },
});
