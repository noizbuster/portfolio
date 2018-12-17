<template>
  <v-layout>
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
  export default {
    data: () => ({
      items: [
        {
          title: '3f01932jf',
          color: 'primary',
          icon: 'mdi-star',
          year: 'ewf'
        },
        {
          title: '3f01932jf',
          color: 'accent',
          icon: 'mdi-book-variant',
          year: 'ewf'
        },
        {
          title: '3f01932jf',
          color: 'success',
          icon: 'mdi-airballoon',
          year: 'ewf'
        },
        {
          title: '3f01932jf',
          color: 'failed',
          icon: 'mdi-buffer',
          year: 'ewf'
        }
      ]
    })
  }
</script>
