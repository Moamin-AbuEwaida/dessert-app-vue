<template>
  <v-app :style="{ background: $vuetify.theme.themes.dark.background }">
    <SideBar />
    <RightSideBar />
    <v-container>
      <Navbar />
      <Desserts />
      <v-toolbar flat color="transparent" class="mt-n4">
        <v-toolbar-title class="ml-4">
          <strong>Day</strong><span class="grey--text ml-2">Menu</span>
        </v-toolbar-title>
      </v-toolbar>
      <Menu />
      <v-toolbar flat color="transparent" class="mt-n4">
        <v-toolbar-title class="ml-4">
          <strong>Ingredients</strong><span class="grey--text ml-2">Food</span>
        </v-toolbar-title>
      </v-toolbar>
      <Food />
      <Comments />
    </v-container>
  </v-app>
</template>

<script>
import SideBar from "@/components/SideBar.vue";
import RightSideBar from "@/components/RightSideBar.vue";
import Navbar from "@/components/Navbar.vue";
import Desserts from "../components/Desserts.vue";
import Menu from "@/components/Menu.vue";
import Comments from "../components/Comments.vue";
import Food from "../components/Food.vue";

export default {
  name: "HomeView",

  components: {
    SideBar,
    RightSideBar,
    Navbar,
    Desserts,
    Menu,
    Comments,
    Food,
  },
};
</script>
