<template lang="jade">
  li.nav__menu-item(@mouseenter="showOverlay = true"  @mouseleave="showOverlay = false")
    a.nav__menu-link(:href="item.url") {{ item.title }}
    menu-overlay(:submenu="item" v-bind:show="showOverlay" v-bind:alternative="alternative")
</template>

<script>
import MenuOverlay from './MenuOverlay.vue';

export default {
  name: 'MainMenuItem',
  components: {
    MenuOverlay,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    alternative: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      showOverlay: false,
    };
  },
  methods: {
    handleMouseOver(index) {
      document.querySelector(`menu-overlay-${index}`);
    },
  },
};
</script>

<style lang="stylus">
  .nav__menu-item
    display flex
    flex-direction column
    justify-content center
    position relative
    margin-right 1rem
    cursor pointer
    .nav__menu-link
      letter-spacing 2px
      color #333
    .nav__menu-link:hover
      text-decoration underline
  .nav__menu-item:hover
    .nav__menu-link
      text-decoration underline
</style>
