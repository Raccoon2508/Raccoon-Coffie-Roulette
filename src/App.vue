<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <nav class="navigation_menu">
        <v-btn class="navigation_menu__item">
          <router-link to="/">
            Roulette room
          </router-link>
        </v-btn>
        <v-btn class="navigation_menu__item">
          <router-link to="/team-room">
            Team Room
          </router-link>
        </v-btn>
        <v-btn class="navigation_menu__item">
          Hall Of Fame
        </v-btn>
      </nav>
      <v-spacer />
      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
<style lang="scss" scoped>
  @import './styles/main.scss';
</style>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
  methods: {

  },
};
</script>
