<template>
<div class="team_card">
    <div class="team_card__team_title">
        <h2>{{selectedTeam.name||'Not selected'}}</h2>
        <span>{{selectedTeam.slogan||'Not selected'}}</span>
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
    name: 'teamCard',
    props: {
        selectedTeam: Object,
    }
}
</script>

<style>
.team_card__block {
    width: 50%;
}
.team_card {
    display: flex;
    border: 1px solid grey;
    padding: 20px;
}
.team_card__team_title {
    width: 60%;
}
</style>