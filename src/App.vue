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
         <router-link to="/hall-of-fame">
            Hall Of Fame
          </router-link>
        </v-btn>
      </nav>
      <v-spacer />
    </v-app-bar>

    <v-main class="main_wrapper col-md-9">
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
