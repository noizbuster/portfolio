<template>
  <v-layout
    column
    justify-center
    align-center>
    <div v-for="post in posts" :key="post.title">
      <v-card class="my-3" hover>
        <v-card-media
          :src="post.imgUrl"
          class="white--text"
          height="170px"
        >
          <v-container fill-height fluid>
            <v-layout>
              <v-flex xs12 align-end d-flex>
                <span class="headline"></span>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card-media>
        <v-card-text>

        </v-card-text>
        <v-card-actions>
          <v-btn icon class="red--text">
            <v-icon medium>fa-reddit</v-icon>
          </v-btn>
          <v-btn icon class="light-blue--text">
            <v-icon medium>fa-twitter</v-icon>
          </v-btn>
          <v-btn icon class="blue--text text--darken-4">
            <v-icon medium>fa-facebook</v-icon>
          </v-btn>
          <v-spacer></v-spacer>
          <v-btn flat class="blue--text">Read More</v-btn>
        </v-card-actions>
      </v-card>
    </div>
  </v-layout>
</template>

<script>
  import Logo from '~/components/Logo.vue'
  import VuetifyLogo from '~/components/VuetifyLogo.vue'

  export default {
    components: {
      Logo,
      VuetifyLogo
    },
    data() {
      return {
        title: 'Your Logo',
        posts: [
          {
            title: 'Fusce ullamcorper tellus',
            content: 'Fusce ullamcorper tellus sed maximus rutrum. Donec imperdiet ultrices maximus. Donec non tellus non neque pellentesque fermentum. Aenean in pellentesque urna.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/drop.jpg'
          },
          {
            title: 'Donec vitae suscipit lectus, a luctus diam.',
            content: 'Donec vitae suscipit lectus, a luctus diam. Proin vitae felis gravida, lobortis massa sit amet, efficitur erat. Morbi vel ultrices nisi.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/docks.jpg'
          },
          {
            title: 'Vestibulum condimentum quam',
            content: 'At sagittis sapien vulputate. Vivamus laoreet lacus id magna rutrum dapibus. Donec vel pellentesque arcu. Maecenas mollis odio tempus felis elementum commodo.',
            imgUrl: 'https://raw.githubusercontent.com/vuetifyjs/docs/dev/static/doc-images/cards/plane.jpg'
          }
        ]
      }
    }
  }
</script>
