<template>
  <v-layout pl-3>
    <v-timeline dense align-top clipped>
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
          <v-card-title class="title">{{ item.title }}</v-card-title>
          <v-card-text class="white text--primary">
            <p>Lorem ipsum dolor sit amet, sententiae.</p>
          </v-card-text>
        </v-card>
      </v-timeline-item>

    </v-timeline>
  </v-layout>
</template>

<script>
  import experiences from '~/assets/experiences'

  export default {
    data: () => ({
      items: experiences.items
    })
  }
</script>
