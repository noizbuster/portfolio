<template>
  <v-expansion-panel focusable>
    <!--TODO add button to open close all body-->
    <v-expansion-panel-content
      v-for="(item, idx) in skills"
      :key="'skills'+idx"
      :readonly="item.projects.length === 0"
    >
      <v-icon v-if="item.projects.length === 0"
              slot="actions"
              color="primary">remove
      </v-icon>
      <!--head-->
      <div slot="header">
        <v-layout wrap>
          <v-flex v-if="item.img" xs4 sm3 md2 justify-center align-center class="text-xs-center" pa-1 pr-3>
            <v-img :src="prefix + item.img||prefix + '/skill_icons/msa.png'" class="skill_icon" contain></v-img>
          </v-flex>
          <v-flex xs8 sm9 md10>
            <v-layout column fill-height justify-center>
              <!--skill name-->
              <v-flex>
                <v-layout row align-center justify-center>
                  <skill-badge :level="item.level"></skill-badge>
                  <v-flex class="headline" pl-2>{{ item.name }}</v-flex>
                </v-layout>
              </v-flex>
              <!--skill title & sub-skills-->
              <v-flex v-if="item.sub_skills">
                <tag-badge v-for="(subskill, si) in item.sub_skills" :key="si"
                           :level="subskill.level" small label>
                  {{ subskill.name }}
                </tag-badge>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </div>
      <!--body-->
      <v-divider></v-divider>
      <v-list style="background: none">
        <v-subheader class="headline">
          Relative Project{{ item.projects.length > 1 ? 's' : '' }}
        </v-subheader>
        <v-list-tile v-for="(p, idx) in item.projects"
                     :key="item.name+'relative'+idx">
          <v-list-tile-content>
            <v-list-tile-title>{{ p.name }}</v-list-tile-title>
            <v-list-tile-sub-title>{{ p.hint }}</v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-expansion-panel-content>

  </v-expansion-panel>
</template>

<script>
  import TagBadge from '~/components/TagBadge.vue';
  import SkillBadge from '~/components/SkillBadge.vue';
  import catagorizedProjects from '~/assets/projects.js';

  export default {
    components: {TagBadge, SkillBadge},
    props: {skills: {type: Object, default: undefined}},
    data() {
      let prefix = '/portfolio';
      if (process.env.DEPLOY_ENV !== 'GH_PAGES') {
        prefix = '';
      }
      return {show: true, prefix: prefix}
    },
    created() {
      const hasSkill = function (project, skillname) {
        let tech = _.findIndex(project.technologies, (tech) => {
          return tech.name.includes(skillname)
        });
        let base_tech = _.findIndex(project.base_technologies, (tech) => {
          return tech.name.includes(skillname)
        });
        return tech !== -1 || base_tech !== -1;
      };
      _.map(this.skills, (skill, skillId) => {
        let relatedProjects = [];
        _.forEach(catagorizedProjects, (projects) => {
          const related = _.filter(projects, (project) => {
            console.log(project.name, 'has skill', skillId, ': ', hasSkill(project, skillId));
            return hasSkill(project, skillId)
          })
          relatedProjects = _.concat(relatedProjects, related);
        });
        skill.projects = relatedProjects;
      })
    }
  }
</script>

<style>
  .skill_icon {
    height: 100px;
  }
</style>
