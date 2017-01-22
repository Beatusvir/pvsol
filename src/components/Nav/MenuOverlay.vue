<template lang="jade">
  ul.nav-overlay(:style="setOverlayStyle" v-bind:class="{ 'nav-overlay--right': alternative }")
    li.nav-overlay__item(v-for="item in submenu.submenu")
      a.nav-overlay__link(:href="item.url") {{ item.title }}
</template>

<script>
export default {
  name: 'MenuOverlay',
  props: {
    show: {
      type: Boolean,
      required: true,
    },
    submenu: {
      type: Object,
      required: true,
    },
    alternative: {
      type: Boolean,
      required: false,
    },
  },
  computed: {
    setOverlayStyle() {
      if (this.show) {
        return {
          maxHeight: '400px',
        };
      }
      return {
        maxHeight: '0',
      };
    },
  },
};
</script>

<style lang="stylus">
  .nav-overlay
    margin 0
    padding 0
    position absolute
    top 80px
    transition max-height 0.25s ease
    background-color rgba(0,0,0,0.7)
    overflow-y hidden
    max-height 0
    z-index 100
    &__item
      color white
      padding 1rem
      white-space nowrap
    &__item:first-child
      padding 0 1rem 1rem 1rem
      margin-top 1rem
    &__link
      color white
    &__link:hover
      text-decoration underline
  .nav-overlay--right
    right -1rem
</style>
