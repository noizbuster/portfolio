<template>
  <v-container :pl-5="!$vuetify.breakpoint.xs" justify-left align-start>
    <v-layout wrap>
      <v-flex xs12 pb-5>
        <h2 class="display-3 primary--text font-weight-bold">Wonwoo Yang</h2>
        <h3 class="display-1 primary--text font-weight-regular">A.K.A NoizBuster</h3>
        <h4 class="headline">
          I'm a "Happy"
          <v-btn class="ma-0 pa-2 title" to="/skills" large outline color="primary">full-stack</v-btn>
          developer specialized in back-end development.<br>
          Feel free to take a look at my
          <v-btn class="ma-0 pa-2 title" to="/projects" large outline color="primary">Projects</v-btn>
          and
          <v-btn class="ma-0 pa-2 title" to="/portfolio" large outline color="primary">Portfolio</v-btn>
          <br>
        </h4>
      </v-flex>
      <v-flex xs12>
        <v-alert
          :value="true"
          class="subheading"
          type="success"
          icon="email"
          @click="$router.push('/contact')"
        >
          NoizBuster@noizbuster.com
        </v-alert>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Your Logo'
      }
    }
  }
</script>
