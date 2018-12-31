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
              <skill-badge :level="item.level"></skill-badge>
              {{ item.name }}
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-actions>
            <v-layout wrap>
              <tag-badge v-for="(subskill, sidx) in item.sub_skills" :key="sidx"
                         :level="subskill.level||'basic'" small>
                {{ subskill.name }}
              </tag-badge>
            </v-layout>
          </v-card-actions>
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
    props: {skills: {type: Object, default: undefined}}
  }
</script>
