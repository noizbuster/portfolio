<template>
  <v-layout wrap pa-2>

    <!--title-->
    <v-flex pl-3 class="font-weight-light display-3">Projects</v-flex>

    <!--projects-->
    <v-flex xs12>
      <project-view
        v-for="(project, pi) in myProjects.projects" :key="pi"
        :project="project"
      ></project-view>
    </v-flex>

  </v-layout>
</template>

<script>
  import SkillBadge from '~/components/SkillBadge.vue'
  import TagBadge from '~/components/TagBadge.vue'
  import SkillItem from '~/components/SkillItems.vue'
  import SkillList from '~/components/SkillList.vue'
  import myProjects from '~/assets/projects'
  import mySkills from '~/assets/skills'
  import ProjectView from '~/components/ProjectView.vue'

  export default {
    components: {
      SkillBadge,
      TagBadge,
      SkillItem,
      SkillList,
      ProjectView
    },
    data() {
      return {
        myProjects,
        mySkills
      }
    }
  }
</script>
