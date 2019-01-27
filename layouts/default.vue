<template>
  <v-app>
    <v-navigation-drawer v-if="drawer || !$vuetify.breakpoint.smAndDown"
                         app clipped fixed dark permanent>
      <v-layout
        :style="{ 'background-image': 'linear-gradient(rgba(16, 32, 64, 0.75), rgba(16, 32, 64, 0.75)), url(' + base + '/navback.jpg' + ')' }"
        fill-height column justify-center nb-bg>

        <!--avatar-->
        <v-flex pt-3 class="text-xs-center" shrink>
          <v-avatar to="/index" size="125px" @click="$router.push('/')">
            <img class="img-circle elevation-7 mb-1"
                 src="https://avatars0.githubusercontent.com/u/8962065?s=400&u=c4e9bddaf2ba9e74ee659632b4133b8063c4f1ba&v=4">
          </v-avatar>
          <div class="headline pt-2 white--text">Wonwoo <span style="font-weight:bold">Yang</span></div>
          <div class="subheading text-xs-center grey--text pt-1 pb-3">Full-Stack Developer</div>
        </v-flex>

        <!--menu-->
        <v-list router exact style="background: none">
          <v-list-tile to="/portfolio">
            <v-list-tile-content class="white--text">
              <v-list-tile-title>PORTPOLIO</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/projects">
            <v-list-tile-content class="white--text">
              <v-list-tile-title>PROJECTS</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/skills">
            <v-list-tile-content class="white--text">
              <v-list-tile-title>SKILLS</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile to="/contact">
            <v-list-tile-content class="white--text">
              <v-list-tile-title>CONTACT ME</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-layout>
    </v-navigation-drawer>

    <v-toolbar v-if="$vuetify.breakpoint.smAndDown" dark clipped-left app fixed color="primary">
      <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>NoizBuster</v-toolbar-title>
    </v-toolbar>

    <v-content>
      <v-container pa-0 fluid fill-height>
        <v-layout justify-center align-center>
          <nuxt/>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
  export default {
    data() {
      let base = process.env.DEPLOY_ENV !== 'GH_PAGES' ? '' : '/portfolio/' ;
      return {
        drawer: false,
        base: base
      }
    }
  }
</script>

<style>
  .nb-bg {
    background: linear-gradient(rgba(16, 32, 64, 0.75), rgba(16, 32, 64, 0.75));
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
</style>
