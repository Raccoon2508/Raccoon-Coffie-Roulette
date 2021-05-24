<template>
  <div class="team_card">
    <div class="team_card__team_avatar">
      <div class="team_card__team_avatar-wraper">
        <img :src="selectedTeam.avatarUrl">
      </div>
    </div>
    <div class="team_card__team_title">
      <h2>{{ selectedTeam.name||'Not selected' }}</h2>
      <div class="team_card__team_description">
        <span>Team slogan: </span>
        <span>{{ selectedTeam.slogan||'No slogan' }}</span>
        <span>Progect: </span>
        <span>{{ selectedTeam.project||'No project' }}</span>
        <span>Team size: </span>
        <span>{{ selectedTeam.teamSize||'Unknow' }}</span>
      </div>
    </div>
    <div class="team_card__team_avatar">
      <div class="team_card__team_avatar-wraper">
        <img :src="selectedTeam.avatarUrl">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamCard',
  props: {
    selectedTeam: Object,
  },
};
</script>

<style>
.team_card {
    display: flex;
    flex-direction: column;
    border: 1px solid grey;
    padding: 20px;
}
.team_card__team_title {
    width: 60%;
}
</style>
