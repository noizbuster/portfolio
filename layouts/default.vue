<template>
  <v-app class="ma-0" light>
    <v-container pa-0 fill-height fluid>
      <v-layout row wrap align-center fill-height>
        <!--side menu-->
        <v-flex nb-background fill-height xs12 md3>
          <v-layout nb-background fill-height align-center text-xs-center>
            <v-flex class="text-xs-center">
              <v-avatar to="/index" size="125px" @click="$router.push('/')">
                <img class="img-circle elevation-7 mb-1"
                     src="https://avatars0.githubusercontent.com/u/8962065?s=400&u=c4e9bddaf2ba9e74ee659632b4133b8063c4f1ba&v=4">
              </v-avatar>
              <div class="headline pt-2 white--text">Wonwoo <span style="font-weight:bold">Yang</span></div>
              <!--<div class="headline">A.K.A. <span style="font-weight:bold">NoizBuster</span></div>-->
              <div class="subheading text-xs-center grey--text pt-1 pb-3">Full-Stack Developer</div>
              <!--<div class="subheading text-xs-center grey&#45;&#45;text pt-1 pb-3">Interest Driven Developer</div>-->

              {{ $router.matched }}
              <!--<v-navigation-drawer>-->
              <v-list dense class="pt-0" color="primary" router exact>

                <v-list-tile to="/portfolio">
                  <v-list-tile-content>
                    <v-list-tile-title>PORTPOLIO</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/projects">
                  <v-list-tile-content>
                    <v-list-tile-title>PROJECTS</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile to="/skills">
                  <v-list-tile-content>
                    <v-list-tile-title>SKILLS</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-divider></v-divider>
                <v-subheader>
                  GET IN TOUCH
                </v-subheader>

              </v-list>
              <!--</v-navigation-drawer>-->


              <v-layout justify-space-between>
                <a href="javascript:;" class="body-2">Home</a>
                <a href="javascript:;" class="body-2">About</a>
                <a href="javascript:;" class="body-2">Github</a>
                <a href="javascript:;" class="body-2">Other</a>
              </v-layout>
            </v-flex>
          </v-layout>
        </v-flex>
        <!--contents-->
        <v-flex xs12 md5 offset-md2>
          <v-content>
            <nuxt/>
          </v-content>
        </v-flex>
      </v-layout>
      <!--<v-layout xs12 md5 offset-md2>-->
      <!--</v-layout>-->
    </v-container>
    <!--<v-navigation-drawer-->
    <!--:mini-variant="miniVariant"-->
    <!--:clipped="clipped"-->
    <!--v-model="drawer"-->
    <!--fixed-->
    <!--app-->
    <!--&gt;-->
    <!--<v-list>-->
    <!--<v-list-tile-->
    <!--v-for="(item, i) in items"-->
    <!--:to="item.to"-->
    <!--:key="i"-->
    <!--router-->
    <!--exact-->
    <!--&gt;-->
    <!--<v-list-tile-action>-->
    <!--<v-icon v-html="item.icon"/>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-content>-->
    <!--<v-list-tile-title v-text="item.title"/>-->
    <!--</v-list-tile-content>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <!--<v-toolbar-->
    <!--:clipped-left="clipped"-->
    <!--fixed-->
    <!--app-->
    <!--&gt;-->
    <!--<v-toolbar-side-icon @click="drawer = !drawer"/>-->
    <!--<v-btn-->
    <!--icon-->
    <!--@click.stop="miniVariant = !miniVariant"-->
    <!--&gt;-->
    <!--<v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"/>-->
    <!--</v-btn>-->
    <!--<v-btn-->
    <!--icon-->
    <!--@click.stop="clipped = !clipped"-->
    <!--&gt;-->
    <!--<v-icon>web</v-icon>-->
    <!--</v-btn>-->
    <!--<v-btn-->
    <!--icon-->
    <!--@click.stop="fixed = !fixed"-->
    <!--&gt;-->
    <!--<v-icon>remove</v-icon>-->
    <!--</v-btn>-->
    <!--<v-toolbar-title v-text="title"/>-->
    <!--<v-btn-->
    <!--icon-->
    <!--@click.stop="rightDrawer = !rightDrawer"-->
    <!--&gt;-->
    <!--<v-icon>menu</v-icon>-->
    <!--</v-btn>-->
    <!--</v-toolbar>-->
    <!--<v-content>-->
    <!--<v-container>-->
    <!--<nuxt/>-->
    <!--</v-container>-->
    <!--</v-content>-->
    <!--<v-navigation-drawer-->
    <!--:right="right"-->
    <!--v-model="rightDrawer"-->
    <!--temporary-->
    <!--fixed-->
    <!--&gt;-->
    <!--<v-list>-->
    <!--<v-list-tile @click.native="right = !right">-->
    <!--<v-list-tile-action>-->
    <!--<v-icon light>compare_arrows</v-icon>-->
    <!--</v-list-tile-action>-->
    <!--<v-list-tile-title>Switch drawer (click me)</v-list-tile-title>-->
    <!--</v-list-tile>-->
    <!--</v-list>-->
    <!--</v-navigation-drawer>-->
    <v-footer
      :fixed="fixed"
      app
    >
      <v-layout
        row
        wrap
        align-center>
        <v-flex xs12>
          <div class="white--text ml-3">
            Made with
            <v-icon class="red--text">favorite</v-icon>
            by <a class="white--text" href="https://vuetifyjs.com" target="_blank">Vuetify</a>
            and <a class="white--text" href="https://github.com/vwxyzjn" target="_blank">Costa Huang</a>
          </div>
        </v-flex>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        clipped: false,
        drawer: true,
        fixed: false,
        items: [
          {icon: 'apps', title: 'Welcome', to: '/'},
          {icon: 'bubble_chart', title: 'Inspire', to: '/inspire'}
        ],
        miniVariant: false,
        right: true,
        rightDrawer: false,
        title: 'Vuetify.js'
      }
    }
  }
</script>

<style>
  .nb-background {
    background: linear-gradient(rgba(16, 32, 64, 0.75), rgba(16, 32, 64, 0.75)),url('/navback.jpg');
    /*background-color: #102040;*/
  }

  .transparent {
    background-color: transparent !important;
  }
</style>
