<template>
  <v-container>
    <v-layout row wrap justify-center align-start fill-height>

      <v-flex xs12>
        <h2 class="display-3 font-weight-regular primary--text">Contact Me</h2>
      </v-flex>

      <v-flex xs12>
        <v-list subheader style="background: none">
          <v-subheader>Personal</v-subheader>
          <v-list-item href="mailto:noizbuster@noizbuster.com">
            <v-list-item-avatar>
              <v-icon color="#204080" large>email</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">noizbuster@noizbuster.com</v-list-item-title>
              <!--<v-list-item-sub-title>e-mail</v-list-item-sub-title>-->
            </v-list-item-content>
          </v-list-item>

          <v-list-item href="https://noizbuster.github.io" target="_blank">
            <v-list-item-avatar>
              <v-icon color="#204080" large>web</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">Tech blog</v-list-item-title>
              <v-list-item-sub-title>noizbuster.github.io</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item href="https://www.noizbuster.com" target="_blank">
            <v-list-item-avatar>
              <v-icon color="#204080" large>web</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">(Old) personal blog</v-list-item-title>
              <v-list-item-sub-title>www.noizbuster.com</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>

          <v-subheader>Social</v-subheader>
          <v-list-item href="https://www.facebook.com/noizbuster" target="_blank">
            <v-list-item-avatar>
              <v-icon color="#3b5998" large>fa-facebook</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">noizbuster</v-list-item-title>
              <v-list-item-sub-title>facebook</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item href="https://www.linkedin.com/in/wonwoo-yang" target="_blank">
            <v-list-item-avatar>
              <v-icon color="#4875B4" large>fa-linkedin</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">wonwoo-yang</v-list-item-title>
              <v-list-item-sub-title>linkedin</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item href="https://www.github.com/noizbuster" target="_blank">
            <v-list-item-avatar>
              <v-icon color="black" large>fa-github</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">noizbuster</v-list-item-title>
              <v-list-item-sub-title>github</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>

          <v-list-item href="https://www.gitlab.com/noizbuster" target="_blank">
            <v-list-item-avatar>
              <v-icon color="#dc713b" large>fa-gitlab</v-icon>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-title class="subheading">noizbuster</v-list-item-title>
              <v-list-item-sub-title>gitlab</v-list-item-sub-title>
            </v-list-item-content>
          </v-list-item>

        </v-list>

      </v-flex>
    </v-layout>
  </v-container>
</template>


<script>
  export default {
    data: () => ({})
  }
</script>

<style>
  .nodeco {
    text-decoration: none;
  }

  .nb-itemname {
    color: #202020;
    font-weight: bold
  }
</style>
