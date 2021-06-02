<template>
  <div class="team_redactor__block">
    <div class="col-md-6">
      <h2>Create new team</h2>
      <v-text-field v-model="actualTeam.teamName" label="Team name" outlined />
      <v-text-field v-model="actualTeam.teamSlogan" label="Team slogan" outlined />
      <v-text-field v-model="actualTeam.teamProject" label="Progect name" outlined />
      <v-text-field v-model="actualTeam.teamAvatarUrl" label="Team avatar url" outlined />
      <v-text-field v-model="teamAuthData.teamPassword" label="Team password" outlined />
      <v-text-field label="Repeat password" outlined />
      <div class="flex team_redactor_buttons_block">
        <v-btn class="col-md-6" @click="saveTeam()">
          Save
        </v-btn>
        <v-btn class="col-md-6">
          Back
        </v-btn>
      </div>
    </div>

    <div class="col-md-6">
      <div>
        <h2>Create teammate</h2>
        <v-text-field v-model="actualTeammate.name" label="Teammate name" outlined />
        <v-text-field v-model="actualTeammate.surname" label="Teammate surname" outlined />
        <v-btn class="col-md-12" @click="saveOrAddTeammate()">
          Save teammate
        </v-btn>
        <v-btn class="col-md-12" v-if="selectedTeammateIndex !== null">Add teammate</v-btn>
      </div>

      <div class="teammates_list__block col-md-12">
        <h2>Teammates</h2>
        <v-list class="teams_list col-md-12" dense>
          <v-list-item-group color="primary">
            <v-list-item v-for="(teammate, i) in actualTeam.teammates" :key="i" @click="selectTeammate(teammate, i)">
              <v-list-item-content>
                <v-list-item-title />
                {{ teammate.name }}
                <v-list-item-subtitle />
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
          <v-list-item-group>
            <v-list-item v-if="!actualTeam.teammates.length">
              <v-list-item-content>
                Teammate list is empty
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </div>
    </div>
  </div>
</template>

<script>
import teammate from "../../models/teammate";
import team from "../../models/team";
import teamAuthData from "../../models/auth";

export default {
  data() {
    return {
      actualTeammate: { ...teammate },
      actualTeam: { ...team },
      teammateActionButtonTitle: 'Save teammate',
      teamAuthData: { ...teamAuthData },
      selectedTeammateIndex: null,
    };
  },
  methods: {
    saveOrAddTeammate() {
      if (this.selectedTeammateIndex !== null) {
        this.actualTeam.teammates[this.selectedTeammateIndex] = { ...this.actualTeammate };
      } else {
        this.actualTeammate.teamId = this.actualTeam.id;
        this.actualTeammate.project = this.actualTeam.teamProject;
        this.actualTeammate.id = this.actualTeam.teammates.length + 1;
        this.actualTeam.teammates.push(this.actualTeammate);
        this.actualTeammate = { ...teammate };
        this.selectedTeammateIndex = null;
      }
    },
    selectTeammate(person, index) {
      this.actualTeammate = { ...person };
      this.selectedTeammateIndex = index;
    },
    saveTeam() {
      this.teamAuthData.teamId = this.actualTeam.id;
      console.log("Team saved", this.actualTeam);
      console.log("Team saved", this.teamAuthData);
    },
  },
};
</script>

<style>
.team_redactor__block {
  display: flex;
}

.team_redactor_buttons_block {
  display: flex;
  gap: 10px;
}
</style>
