<template>
<div class="team_redactor__block">
    <div class="col-md-6">
        <h2>Create new team</h2>
        <v-text-field label="Team name" outlined></v-text-field>
        <v-text-field label="Team slogan" outlined></v-text-field>
        <v-text-field label="Progect name" outlined></v-text-field>
        <v-text-field label="Team avatar url" outlined></v-text-field>
        <v-text-field label="Team password" outlined></v-text-field>
        <v-text-field label="Repeat password" outlined></v-text-field>
        <div class="flex team_redactor_buttons_block">
            <v-btn class="col-md-6" @click="routeToTeamRedactor()">
                Save
            </v-btn>
            <v-btn class="col-md-6" @click="routeToTeamRedactor()">
                Back
            </v-btn>
        </div>

    </div>

    <div class="col-md-6">
        <div>
            <h2>Create teammate</h2>
            <v-text-field label="Teammate name" v-model="actualTeammate.name" outlined></v-text-field>
            <v-text-field label="Teammate surname" v-model="actualTeammate.surname" outlined></v-text-field>
            <v-btn class="col-md-12" @click="addTeammate()">
                {{teammateActionButtonTitle}}
            </v-btn>
        </div>

        <div class="teammates_list__block col-md-12">
            <h2>Teammates</h2>
            <v-list class="teams_list col-md-12">
                <v-list-item-group color="primary" v-for="(teammate, i) in actualTeam.teammates" :key="i">
                    <v-list-item>
                        <v-list-item-content>
                            <v-list-item-title />
                            {{teammate.name}}
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
import teammate from '../../models/teammate';
import team from '../../models/team';

export default {
    data() {
        return {
            actualTeammate: {
                ...teammate
            },
            actualTeam: {
                ...team
            },
            teammateActionButtonTitle: 'Add teammate',

        }
    },
    methods: {
        addTeammate() {
            this.actualTeammate.teamId = this.actualTeam.id;
            this.actualTeammate.project = this.actualTeam.project;
            this.actualTeammate.id = this.actualTeam.teammates.length + 1;

            this.actualTeam.teammates.push(this.actualTeammate);
            console.log(this.actualTeam.teammates)
            this.actualTeammate = {
                ...teammate
            };

        },
        saveTeammate() {

        },
        selectTeammate(teammate) {
            this.actualTeammate = teammate;
            this.teammateActionButtonTitle = 'Save teammate'
        }
    }

}
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
