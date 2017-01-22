<template lang="jade">
  div.sample-site
    div.content
      slider(v-bind:auto="true")
      div.info.container
        h1 Some page title and information
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      div.promo
        div.promo__item.element
          img(src="http://placehold.it/300x200")
          p.text-center.text-capitalize.text-bold image title
        div.promo__item.element
          img(src="http://placehold.it/300x200")
          p.text-center.text-capitalize.text-bold image title
        div.promo__item.element
          img(src="http://placehold.it/300x200")
          p.text-center.text-capitalize.text-bold image title
      div.info
        h1 More information on page
        p Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      div.card.container
        p.element Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        textarea.element(placeholder="textarea")
      div.section.container
        h3.element Small header for section
        p.element Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      div.container
        h2.element Small header for section
        p.element Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      div.section.container
        h1.element Product grid sample
        products-grid
    footer
      ul.footer__content
        li.text-capitalize
          h1 header
        li.text-capitalize item 1
        li.text-capitalize item 2
        li.text-capitalize item 3
      ul.footer__content
        li.text-capitalize
          h1 header
        li.text-capitalize item 1
        li.text-capitalize item 2
        li.text-capitalize item 3
      ul.footer__content
        li.text-capitalize
          h1 header
        li.text-capitalize item 1
        li.text-capitalize item 2
        li.text-capitalize item 3
</template>

<script>
import ProductsGrid from '../components/Products/ProductsGrid.vue';
import Slider from '../components/Common/Slider.vue';

export default {
  name: 'SampleSite',
  components: {
    ProductsGrid,
    Slider,
  },
};
</script>

<style lang="stylus">
  @import '../styles/_breakpoints.styl'
  .sample-site
    color #444
    header
      position absolute
      top 0
      left 0
      width 100%
      height 80px
      z-index 10
    .content
      width 85%
      max-width 1024px
      margin 0 auto
    .promo
      display flex
      justify-content space-between
      flex-wrap wrap
      &__item
        display flex
        flex-direction column
        align-content center
        overflow hidden
        +phone-only()
          flex-basis 100%
        +tablet-up()
          flex-basis 30%
        p
          margin-top 0
        img
          width 100%
    .section
      background-color white
  footer
    width 100%
    margin-top 6rem
    min-height 300px
    background-color #333
    color #AAA
    display flex
    flex-wrap wrap
    align-content center
    align-items center
    +phone-only()
      justify-content center
    +tablet-up()
      justify-content space-around
    .footer__content
      display flex
      flex-direction column
      align-content center
      align-items center
      +phone-only()
        justify-content center
        flex-basis 100%
      +tablet-up()
        justify-content space-around
        flex-basis 33%
    h1
      color white
</style>
