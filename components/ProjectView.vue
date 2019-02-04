<template>
  <v-card color="primary" dark>
    <!--TODO image-->
    <!--<v-img v-if="item.img" :src="item.img" height="150px" contain></v-img>-->
    <!--<v-divider></v-divider>-->

    <!--title-->
    <v-card-title>
      <v-layout justify-space-between align-center>
        <v-flex>
          <v-layout column>
            <v-flex class="title">
              {{ project.name }}
            </v-flex>
            <v-flex class="subheading">
              {{ project.hint }}
            </v-flex>
          </v-layout>
        </v-flex>
        <v-flex text-xs-right class="subheading">
          <v-layout column>
            <v-flex v-if="project.dev_period">
              Dev: {{ project.dev_period }}
            </v-flex>
            <v-flex v-if="project.service_period">
              Maintain: {{ project.service_period }}
            </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-card-title>

    <!--body-->
    <v-card-text class="white text--primary">
      <!--discription: '2,475$ Advertising revenue in 6 month (2013-03-01 ~ 2013-09-23)',-->
      <pre class="subheading mb-4 prewrap">{{ project.discription }}</pre>

      <!--members-->
      <p class="subheading mb-0">Members</p>
      <p class="subheading mb-0"> Total {{ totalMember(project.members) }} member{{ totalMember(project.members)>=2?'s':'' }} team</p>
      <v-chip v-for="(part, pi) in project.members" :key="'member'+pi"
              :color="part.related?'success':'secondary'"
              :small="!part.related"
              class="white--text">
        <v-avatar :color="part.related?'primary':'success'">{{ part.count }}</v-avatar>
        {{ part.role }}
      </v-chip>

      <!--roles-->
      <p class="subheading mb-0 mt-3">My Roles</p>
      <v-chip v-for="(role, ri) in project.roles" :key="'role'+ri" color="success"
              class="white--text" label>
        {{ role }}
      </v-chip>

      <!--technologies-->
      <p class="subheading mb-0 mt-3">Main Technologies</p>
      <tag-badge
        v-for="(tech, ti) in getSkills(project.technologies)" :key="'tech'+ti"
        :level="tech.level" label>
        {{ tech.name }}
      </tag-badge>

      <!--technologies-->
      <p class="subheading mb-0 mt-3">Base Technologies</p>
      <tag-badge
        v-for="(tech, bti) in getSkills(project.base_technologies)" :key="'btech'+bti"
        :level="tech.level" label>
        {{ tech.name }}
      </tag-badge>

      <!--tags-->
      <p class="subheading mb-0 mt-3">Tags</p>
      <tag-badge
        v-for="(tag, tagi) in project.tags" :key="'tag'+tagi"
        :level="tag.level"
        label
      >{{ tag.name }}
      </tag-badge>

    </v-card-text>

    <!--TODO details-->
    <!--<v-divider></v-divider>-->
    <!--<v-card-actions @click="show = !show">-->
    <!--&lt;!&ndash;<skill-badge :level="item.level"></skill-badge>&ndash;&gt;-->
    <!--&lt;!&ndash;<v-chip v-if="item.sub_skills" color="accent" text-color="white">&ndash;&gt;-->
    <!--&lt;!&ndash;<v-avatar color="secondary">{{ item.sub_skills.length }}</v-avatar>&ndash;&gt;-->
    <!--&lt;!&ndash;Sub-Skills&ndash;&gt;-->
    <!--&lt;!&ndash;</v-chip>&ndash;&gt;-->
    <!--&lt;!&ndash;<v-chip v-if="item.projects" color="accent" text-color="white">&ndash;&gt;-->
    <!--&lt;!&ndash;<v-avatar color="secondary">{{ item.projects.length }}</v-avatar>&ndash;&gt;-->
    <!--&lt;!&ndash;Related Projects&ndash;&gt;-->
    <!--&lt;!&ndash;</v-chip>&ndash;&gt;-->
    <!--</v-card-actions>-->

    <!--<v-slide-y-transition>-->
    <!--<v-card-text v-show="show">-->
    <!--<v-layout wrap>-->
    <!--<tag-badge v-for="(subskill, sidx) in item.sub_skills" :key="sidx"-->
    <!--:level="subskill.level||'basic'" small>-->
    <!--{{ subskill.name }}-->
    <!--</tag-badge>-->
    <!--</v-layout>-->
    <!--</v-card-text>-->
    <!--</v-slide-y-transition>-->
  </v-card>
</template>

<script>
  import mySkills from '~/assets/skills'
  import TagBadge from "./TagBadge";

  export default {
    components: {TagBadge},
    props: {
      project: {type: Object, default: undefined}
    },
    data() {
      return {
      }
    },
    methods: {
      getSkills(skillNames) {
        let skills = _.map(skillNames, (skill) => {
          console.log('find skill by name', mySkills.skills, skill.name);
          let skillObject = _.get(mySkills.skills, skill.name);
          if (!skillObject) {
            return {
              name: skill.name,
              level: skill.level || 'basic'
            }
          }
          return skillObject;
        })
        console.log('skills', skills);
        return skills;
      },
      totalMember(members) {
        return _.reduce(members, (acc, item) => {
          return acc + item.count;
        }, 0)
      }
    }
  }
</script>
