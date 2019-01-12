<template>
  <v-card>
    <v-card-title class="font-weight-light display-2">
      <slot></slot>
    </v-card-title>
    <v-divider></v-divider>

    <v-layout wrap>

      <!--items-->
      <!--nodejs-->
      <v-flex v-for="(item, idx) in skills" :key="idx"
              pt-3 flat color="whitesmoke" xs6 sm4 md3>
        <v-card>
          <v-img v-if="item.img" :src="item.img" height="150px" contain></v-img>
          <v-divider></v-divider>
          <v-card-title>
            <div class="headline">
              {{ item.name }}
            </div>
          </v-card-title>
          <v-divider></v-divider>

          <v-card-actions @click="show = !show">

            <skill-badge :level="item.level"></skill-badge>
            <v-chip v-if="item.sub_skills" color="accent" text-color="white">
              <v-avatar color="secondary">{{ item.sub_skills.length }}</v-avatar>
              Sub-Skills
            </v-chip>
            <v-chip v-if="item.projects" color="accent" text-color="white">
              <v-avatar color="secondary">{{ item.projects.length }}</v-avatar>
              Related Projects
            </v-chip>
            <!--<v-spacer></v-spacer>-->
            <!--<v-btn icon @click="show = !show">-->
              <!--<v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>-->
            <!--</v-btn>-->
          </v-card-actions>

          <v-slide-y-transition>
            <v-card-text v-show="show">
              <v-layout wrap>
                <tag-badge v-for="(subskill, sidx) in item.sub_skills" :key="sidx"
                           :level="subskill.level||'basic'" small>
                  {{ subskill.name }}
                </tag-badge>
              </v-layout>
            </v-card-text>
          </v-slide-y-transition>
        </v-card>
      </v-flex>

    </v-layout>
  </v-card>
</template>

<script>
  import TagBadge from '~/components/TagBadge.vue';
  import SkillBadge from '~/components/SkillBadge.vue';

  export default {
    components: {TagBadge, SkillBadge},
    props: {skills: {type: Object, default: undefined}},
    data(){
      return {show: true}
    }
  }
</script>
