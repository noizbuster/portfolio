<template>
  <v-layout wrap pa-2>

    <!--title-->
    <v-flex pl-3 class="font-weight-light display-3">Tech. Skills</v-flex>
    <!--legend-->
    <v-flex xs12 pa-2 class="font-weight-bold">
      <v-card>
        <v-card-title>
          <div>
            <SkillBadge level="expert"></SkillBadge>
            Expert: I am not only able to use this technique, but also have a deep understanding of it.
          </div>
          <div>
            <SkillBadge level="skilled"></SkillBadge>
            Working Knowledge: I have worked with and feel comfortable using. and ready to use them in practical work.
          </div>
          <div>
            <SkillBadge level="basic"></SkillBadge>
            Basic Knowledge: I have played with or have a basic understanding of their purpose.
          </div>
        </v-card-title>
      </v-card>
    </v-flex>

    <v-flex xs12 mt-5 pa-2 class="font-weight-bold">
      <div class="font-weight-light display-2">Back-End</div>
      <skill-list :skills="skills_backend"></skill-list>
    </v-flex>

    <v-flex xs12 mt-5 pa-2 class="font-weight-bold">
      <div class="font-weight-light display-2">Front-End</div>
      <skill-list :skills="skills_frontend"></skill-list>
    </v-flex>

    <v-flex xs12 mt-5 pa-2 class="font-weight-bold">
      <div class="font-weight-light display-2">Computer Languages</div>
      <skill-list :skills="skills_planguage"></skill-list>
    </v-flex>

    <v-flex xs12 mt-5 pa-2 class="font-weight-bold">
      <div class="font-weight-light display-2">ETC</div>
      <skill-list :skills="skills_etc"></skill-list>
    </v-flex>

    <!--title-->
    <v-flex pl-3 mt-5 class="font-weight-light display-3">Skills</v-flex>

    <v-flex xs12 pa-2 class="font-weight-bold">
      <div class="font-weight-light display-2">Human Languages</div>
      <skill-list :skills="skills_hlanguage"></skill-list>
    </v-flex>

  </v-layout>
</template>

<script>
  import SkillBadge from '~/components/SkillBadge.vue'
  import TagBadge from '~/components/TagBadge.vue'
  import SkillItem from '~/components/SkillItems.vue'
  import SkillList from '~/components/SkillList.vue'
  import mySkills from '~/assets/skills'

  export default {
    components: {
      SkillBadge,
      TagBadge,
      SkillItem,
      SkillList
    },
    data() {
      return {
        skills_backend: mySkills.skills.backend,
        skills_frontend: mySkills.skills.frontend,
        skills_planguage: mySkills.skills.planguage,
        skills_hlanguage: mySkills.skills.hlanguage,
        skills_etc: mySkills.skills.comportable,
      }
    }
  }
</script>
