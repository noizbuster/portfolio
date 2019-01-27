<template>
  <v-container>
    <v-layout column>
      <!--<v-flex>-->
        <!--<v-alert-->
          <!--:value="true"-->
          <!--type="info"-->
        <!--&gt;-->
          <!--This is a info alert.-->
        <!--</v-alert>-->
      <!--</v-flex>-->
      <v-flex xs12 pl-2 class="font-weight-regular display-3 primary--text">Portfolio</v-flex>
      <v-timeline style="width:100%" dense align-top clipped>
        <v-timeline-item
          v-for="(item, i) in items"
          :color="item.color"
          :icon="item.icon"
          :key="i"
          right
          fill-dot
        >
          <v-card
            :color="item.color"
            dark
          >
            <!--head-->
            <v-card-title>
              <v-layout column>
                <flex class="title">
                  <v-layout justify-space-between>
                    <v-flex>{{ item.title }}</v-flex>
                    <v-flex text-xs-right class="subheading">
                      {{ item.year }}
                    </v-flex>
                  </v-layout>
                </flex>
                <flex class="subheading">{{ item.subtitle }}</flex>
              </v-layout>
            </v-card-title>
            <!--body-->
            <v-card-text class="white text--primary">
              <p class="subheading ma-0 font-weight-bold">{{ item.position }}</p>
              <p class="caption">{{ item.period }}</p>
              <pre> {{ item.discription }}</pre>
            </v-card-text>
          </v-card>
        </v-timeline-item>

      </v-timeline>
    </v-layout>
  </v-container>
</template>

<script>
  import experiences from '~/assets/experiences'

  export default {
    data: () => ({
      items: experiences.items
    })
  }
</script>
