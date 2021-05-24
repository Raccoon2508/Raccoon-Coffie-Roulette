<template>
  <div class="teams_block">
    <h2>Teams Room</h2>
    <div class="teams_block__wrapper">
      <v-list class="teams_list">
        <v-list-item-group
          color="primary"
        >
          <v-list-item
            v-for="(team,i) in teams"
            :key="i"
            @click="selectedTeam = team"
          >
            <v-list-item-content>
              <v-list-item-title v-text="team.name" />
              <v-list-item-subtitle v-text="team.slogan" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
      <TeamCard :selected-team="selectedTeam" />
    </div>
  </div>
</template>

<style lang="scss">
.teams_list {
  width: 50%;
}
.teams_block__wrapper {
  display: flex;
}

</style>

<script>
import TEAMS from '../../teams';
import TeamCard from '../../components/TeamCard.vue';

export default {
  name: 'TeamsView',
  components: { TeamCard },
  data() {
    return {
      teams: TEAMS,
      selectedTeam: {},
    };
  },
};
</script>
