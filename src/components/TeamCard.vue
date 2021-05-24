<template>
  <div class="team_card col-md-4">
    <div class="team_card__team_avatar col-md-7">
    <div class="team_card__team_avatar-wraper col-md-12">
        <img class="team_card__team_avatar_image" :src="selectedTeam.avatarUrl||defaultAvatar">
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
  </div>
</template>

<script>
import DefaultAvatar from '../assets/images/dreamTeamAvatar.jpg';
export default {
  name: 'TeamCard',
  data() {
      return {
          defaultAvatar: DefaultAvatar,
      }
  },
  props: {
    selectedTeam: Object,
  },
};
</script>

<style>
@import '../styles/common.scss';

.team_card {
    display: flex;
    flex-direction: column;
    flex-shrink: 0;
    align-items: center;
    border: 1px solid var(--COMPONENT-GRAY-BORDER);
    padding: 20px;
    box-shadow: var(--COMPONENT-SHADOW-BOX);
    
}
.team_card__team_title {
    margin-top: 1rem;
    width: 60%;
}
.team_card__team_description {
    display: grid;
    grid-template-columns: 120px 100px;
    grid-template-rows: 1fr 1fr 1fr 1fr;
    
}
.team_card__team_avatar {
    padding: 3px;
}
.team_card__team_avatar-wraper {
    height: 250px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center; 
    border: 2px solid var(--GRAY-COLOR);
    padding: 3px;       
}
.team_card__team_avatar_image {
    width: 100%;
}
</style>
