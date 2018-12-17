<template>
  <v-app light>
    <v-container :fill-height="!$vuetify.breakpoint.xs" pa-0 fluid>
      <v-layout :fill-height="!$vuetify.breakpoint.xs" row wrap align-center>

        <!--side menu-->
        <v-flex :fill-height="!$vuetify.breakpoint.xs" xs12 sm4 md3 nb-background>
          <v-icon v-if="$vuetify.breakpoint.xs" color="white" large @click="drawer = !drawer">menu</v-icon>
          <v-layout :fill-height="!$vuetify.breakpoint.xs" wrap align-center justify-center column>

            <!--avatar-->
            <v-flex pt-3 class="text-xs-center" shrink>
              <v-avatar to="/index" size="125px" @click="$router.push('/')">
                <img class="img-circle elevation-7 mb-1"
                     src="https://avatars0.githubusercontent.com/u/8962065?s=400&u=c4e9bddaf2ba9e74ee659632b4133b8063c4f1ba&v=4">
              </v-avatar>
              <div class="headline pt-2 white--text">Wonwoo <span style="font-weight:bold">Yang</span></div>
              <div class="subheading text-xs-center grey--text pt-1 pb-3">Full-Stack Developer</div>
            </v-flex>

            <!--menu items-->
            <v-flex shrink style="width:100%;">
              <v-navigation-drawer v-if="!$vuetify.breakpoint.xs || drawer" permanent dark class="nb-drawer">
                <v-list router exact>
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
                </v-list>
              </v-navigation-drawer>
            </v-flex>

          </v-layout>
        </v-flex>
        <!--end of side menu-->

        <!--router outlet-->
        <v-flex xs12 sm8 md9>
          <v-content>
            <nuxt/>
          </v-content>
        </v-flex>

      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        drawer: false
      }
    }
  }
</script>

<style>
  .nb-background {
    background: linear-gradient(rgba(16, 32, 64, 0.75), rgba(16, 32, 64, 0.75)), url('/navback.jpg');
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
    /*background-color: #102040;*/
  }

  .nb-drawer {
    width: 100% !important;
    background-color: transparent !important;
  }
</style>
