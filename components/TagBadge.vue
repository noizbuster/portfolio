<template>
  <span>
    <v-chip :label="label" :small="small" :color="badgeColor" :text-color="textColor"><slot></slot></v-chip>
  </span>
</template>

<script>
  export default {
    props: {
      level: {type: String, default: 'basic'},
      small: {type: Boolean, default: false},
      label: {type: Boolean, default: false}
    },
    data() {
      let badgeColor = 'info'
      let textColor = 'black'

      if (this.level === 'expert') {
        badgeColor = 'accent'
        textColor = 'white'
      } else if (this.level === 'skilled') {
        badgeColor = 'secondary'
        textColor = 'white'
      }

      return {badgeColor: badgeColor, textColor: textColor}
    }
  }
</script>
