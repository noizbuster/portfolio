<template>
  <v-expansion-panel>
    <!--TODO add button to open close all body-->
    <v-expansion-panel-content
      v-for="(item, idx) in skills"
      :key="idx"
    >
      <!--head-->
      <div slot="header">
        <v-layout wrap>
          <v-flex v-if="item.img" xs4 sm3 md2 justify-center align-center class="text-xs-center" pa-1 pr-3>
            <v-img :src="item.img||'/skill_icons/msa.png'" class="skill_icon" contain></v-img>
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
      <v-card>
        <v-card-text>
          <!--TODO related projects-->
          <!--TODO description in markdown-->
        </v-card-text>
      </v-card>
    </v-expansion-panel-content>

  </v-expansion-panel>
</template>

<script>
  import TagBadge from '~/components/TagBadge.vue';
  import SkillBadge from '~/components/SkillBadge.vue';

  export default {
    components: {TagBadge, SkillBadge},
    props: {skills: {type: Object, default: undefined}},
    data() {
      return {show: true}
    }
  }
</script>

<style>
  .skill_icon {
    height: 100px;
  }
</style>
