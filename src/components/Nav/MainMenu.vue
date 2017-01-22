<template lang="jade">
  nav.nav
    div.nav__logo
      router-link(to="/")
        img(src="../../assets/pvsol.png")
    button.nav__toggle(@click="showMobileOverlay = !showMobileOverlay" v-show="!showMobileOverlay")
      i.fa.fa-bars
    ul.nav__menu
      main-menu-item(v-bind:item="item" v-for="(item, index) in items" v-bind:alternative="items.length - 1 === index")
    mobile-overlay(v-show="showMobileOverlay" v-bind:items="items" v-bind:handle-close-mobile-overlay="onCloseMovileOverlayClick")
</template>

<script>
import MainMenuItem from './MainMenuItem.vue';
import MobileOverlay from './MobileOverlay.vue';

export default {
  name: 'MainMenu',
  components: {
    MainMenuItem,
    MobileOverlay,
  },
  data() {
    return {
      items: [
        {
          title: 'Quienes Somos',
          url: '#',
          submenu: [
            { title: 'Sub menu 1', url: '#' },
            { title: 'Sub menu 2', url: '#' },
            { title: 'Sub menu 3', url: '#' },
          ],
        },
        {
          title: 'Productos',
          url: '#',
          submenu: [
            { title: 'Sub menu 1', url: '#' },
            { title: 'Sub menu 2', url: '#' },
            { title: 'Sub menu 3', url: '#' },
          ],
        },
        {
          title: 'Contacto',
          url: '#',
          submenu: [
            { title: 'Sub menu 1', url: '#' },
            { title: 'Sub menu 2', url: '#' },
            { title: 'Sub menu 3', url: '#' },
          ],
        },
      ],
      showMobileOverlay: false,
    };
  },
  methods: {
    onCloseMovileOverlayClick() {
      this.showMobileOverlay = false;
    },
  },
};
</script>

<style lang="stylus">
@import '../../styles/_breakpoints.styl'
.nav
  position relative
  top 0
  width 100%
  background-color #FAFAFA
  display flex
  justify-content space-between
  +phone-only()
    height 50px
  +tablet-up()
    height 80px
  &__logo
    color white
    width 150px
    cursor pointer
    img
      max-width 100%
    +phone-only()
      margin-left 0.25rem
      font-size 2rem
    +tablet-up()
      line-height 3rem
      padding 1rem
      font-size 3rem
  &__menu
    +phone-only()
      display none
    +tablet-up()
      display flex
      margin 0
      height 100%
  &__toggle
    +phone-only()
      color white
      font-size 2rem
      margin-right 0.25rem
    +tablet-up()
      display none
</style>
