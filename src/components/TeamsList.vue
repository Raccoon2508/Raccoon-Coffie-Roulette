<template>
  <div class="teams_list__block col-md-4">
  <v-list class="teams_list">
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(team,i) in teams"
            :key="i"
            @click="emitSelectedTeam(team)"
          >
            <v-list-item-content>
              <v-list-item-title v-text="team.name" />
              <v-list-item-subtitle v-text="team.slogan" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    
  </div>
</template>

<script>
import TEAMS from '../teams';
export default {
  
  name: 'TeamsList',
  props: {

  },
  data() {
    return {
      teams: TEAMS,
      selectedTeam: {},
    };
  },
  methods: {
    emitSelectedTeam(team) {
      this.$emit('selectedTeam', team);
    }
  }

};
</script>

<style>
 .teams_list__block {
   border: 1px solid var(--COMPONENT-GRAY-BORDER);
   box-shadow: var(--COMPONENT-SHADOW-BOX);
 }

</style>
