<template lang="jade">
  div#app
    main-menu
    transition(name="fade" mode="out-in")
      router-view
</template>

<script>
  import MainMenu from './components/Nav/MainMenu.vue';

  export default {
    components: {
      MainMenu
    }
  }
</script>

<style lang="stylus">
  @import './styles/_base.styl'
  @import './styles/_breakpoints.styl'
  @import './styles/_forms.styl'
  @import './styles/_grid.styl'
  @import './styles/_variables.styl'
</style>
