<template lang="jade">
  div.quick-view-overlay
    div.quick-view-overlay__product
      div.quick-view-overlay__product-close-overlay.center-all
        button(@click="handleCloseOverlay")
          i.fa.fa-times
      div.quick-view-overlay__product-images
        img.quick-view-overlay__product-main-image(:src="item.image.src")
        products-swatches(v-bind:swatches="item.swatches")
      div.quick-view-overlay__product-detail
        h1.quick-view-overlay__product-title.text-uppercase {{ item.name }}
</template>

<script>
import ProductsSwatches from './ProductsSwatches.vue';

export default {
  components: {
    ProductsSwatches,
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
    handleCloseOverlay: {
      type: Function,
      required: true,
    },
  },
};
</script>

<style lang="stylus">
  @import '../../styles/_variables.styl'
  @import '../../styles/_breakpoints.styl'
  .quick-view-overlay
    position fixed
    top 0
    left 0
    width 100%
    height 100%
    background-color overlay-background
    z-index 1000
    display flex
    align-items center
    justify-content center
    &__product
      display flex
      position relative
      padding 1rem
      background-color white
      +phone-only()
        width calc(100% - 2rem)
        height calc(100% - 2rem)
      +tablet-only()
        width calc(80% - 2rem)
        height calc(80% - 2rem)
      +desktop-up()
        width calc(50% - 2rem)
        height calc(80% - 2rem)
      &-close-overlay
        position absolute
        top -0.5rem
        right -0.5rem
        border 3px solid white
        background-color #CCC
        width 2rem
        height 2rem
        border-radius 50%
        button
          color white
          font-size 1rem
          i
            text-align center
      &-images
        width calc(50% - 0.5rem)
        display flex
        flex-direction column
        margin-right 0.5rem
        .quick-view-overlay__product-main-image
          max-height 70%
      &-detail
        width calc(50% - 0.5rem)
        display flex
        flex-direction column
        margin-left 0.5rem
        .quick-view-overlay__product-title
          margin-top 0
</style>
