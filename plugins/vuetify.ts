// Styles
import "vuetify/styles";
import { md3 } from "vuetify/blueprints";

// Composables
import { createVuetify } from "vuetify";
import { aliases, md } from "vuetify/iconsets/md";

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    blueprint: md3,
    icons: {
      defaultSet: "md",
      aliases,
      sets: {
        md,
      },
    },
    theme: {
      variations: {
        colors: [
          "primary",
          "secondary",
          "accent",
          "error",
          "info",
          "success",
          "warning",
        ],
        lighten: 4,
        darken: 4,
      },
      themes: {
        light: {
          colors: {
            primary: "#1867C0",
            secondary: "#2eacf6",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            user: "#FFF",
          },
        },
        dark: {
          colors: {
            primary: "#212121",
            secondary: "424242",
            accent: "#82B1FF",
            error: "#FF5252",
            info: "#2196F3",
            success: "#4CAF50",
            warning: "#FFC107",
            user: "#313131",
          },
        },
      },
    },
  });

  nuxtApp.vueApp.use(vuetify);
});
