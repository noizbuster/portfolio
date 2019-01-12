<template>
  <span>
    <v-chip v-if="level==='expert'" :label="label" :small="small" color="accent" text-color="white">Expert</v-chip>
    <v-chip v-if="level==='skilled'" :label="label" :small="small" color="secondary" text-color="white">Skilled</v-chip>
    <v-chip v-if="level==='basic'" :label="label" :small="small" color="info" text-color="primary">Basic</v-chip>
  </span>
</template>

<script>
  export default {
    props: {
      level: {type: String, default: 'basic'},
      small: {type: Boolean, default: false},
      label: {type: Boolean, default: false}
    }
  }
</script>
