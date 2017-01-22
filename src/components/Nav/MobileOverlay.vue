<template lang="jade">
  div.mobile-overlay
    button.mobile-overlay__close(@click="handleCloseMobileOverlay")
      i.fa.fa-times
    ul.mobile-overlay__menu
      li.text-center(v-for="item in items") {{ item.title }}
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props: {
    items: {
      type: Array,
      required: true,
    },
    handleCloseMobileOverlay: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
  .mobile-overlay
    position fixed
    right 0
    left 0
    top 0
    bottom 0
    width 100%
    height 100%
    z-index 100
    display flex
    justify-content center
    align-content center
    align-items center
    background-color rgba(0,0,0,0.7)
    &__close
      position absolute
      font-size 3rem
      right 0.25rem
      top 0.25rem
      color white
    &__menu
      font-size 2rem
      color white
</style>
