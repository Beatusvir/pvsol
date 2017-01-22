<template lang="jade">
  div.products-grid__item.card
    div.products-grid__item-image(@mouseenter="showQuickViewButton = true" @mouseleave="showQuickViewButton = false")
      img(v-bind:src="item.image.src" v-bind:alt="item.image.alt")
      div.products-grid__item-quick-view(v-if="showQuickViewButton")
        button.text-capitalize(@click="handleClick") quick view
    div.products-grid__item-name.text-uppercase {{ item.name }}
    products-swatches(v-bind:swatches="item.swatches")
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
    handleQuickViewClick: {
      type: Function,
      required: true,
    },
  },
  data() {
    return {
      showQuickViewButton: false,
    };
  },
  methods: {
    handleClick() {
      this.handleQuickViewClick(this.item);
    },
  },
};
</script>

<style lang="stylus">
  @import '../../styles/_breakpoints.styl'
  .products-grid__item
    padding 0.5rem
    display flex
    flex-direction column
    align-items center
    +phone-only()
      flex-basis calc(100% - 1rem)
    +tablet-only()
      margin 0.5rem
      flex-basis calc(50% - 2rem)
    +desktop-up()
      margin 0.5rem
      flex-basis calc(33% - 2rem)
    &-image
      position relative
      overflow hidden
      cursor pointer
      img
        width 100%
    &-name
      font-size 1.5rem
    .products-grid__item-quick-view
      position absolute
      width 100%
      height 100%
      display flex
      justify-content center
      align-items center
      align-content center
      background-color rgba(0,0,0,0.6)
      z-index 100
      top 0
      left 0
      button
        color white
        border 2px solid white
        padding 1rem 2rem
        width 70%
        font-size 1.5rem
</style>
