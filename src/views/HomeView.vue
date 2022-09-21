<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar />
    <RightSideBar />
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import RightSideBar from "@/components/RightSideBar.vue";

export default {
  name: "HomeView",

  components: {
    SideBar,
    RightSideBar,
  },
};
</script>
