<template>
  <div class="teams_block col-md-12">
    <h1>Teams Room</h1>
    <div class="teams_block__wrapper">
      <TeamsList @selectedTeam="selectedTeam = $event" />
      <TeamCard :selected-team="selectedTeam" />
      <v-btn class="col-md-12">
        Add team
      </v-btn>
    </div>
  </div>
</template>

<style lang="scss">

.teams_block__wrapper {
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
}

</style>

<script>
import TeamCard from '../../components/TeamCard.vue';
import TeamsList from '../../components/TeamsList.vue';

export default {
  name: 'TeamsView',
  components: { TeamCard, TeamsList },
  data() {
    return {
      selectedTeam: {},
    };
  },
  watch: {
    selectedTeam() {
      this.$emit('selectedTeam', this.selectedTeam);
    },
  },
};
</script>
