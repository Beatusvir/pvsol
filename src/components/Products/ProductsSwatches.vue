<template lang="jade">
  ul.products-grid__item-swatches
    li(v-for="swatch in filtered")
      img(v-bind:src="swatch.src")
    li.swatches-overflow(v-if="swatches.length > 4")
      i.fa.fa-plus
</template>

<script>
export default {
  props: {
    swatches: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      filtered: this.swatches.slice(0, 4),
    };
  },
};
</script>

<style lang="stylus">
  .products-grid__item-swatches
    display flex
    flex-wrap wrap
    width 100%
    cursor pointer
    li
      margin 0.25rem
      flex-basis calc(20% - 0.5rem)
      img
        width 100%
        height 100%
    li:hover
        box-shadow 1px 1px 4px #666
    .swatches-overflow
      flex-basis calc(20% - 0.5rem - 2px)
      display flex
      justify-content center
      align-items center
      align-content center
      background-color #EFEFEF
      font-size 1.5rem
      color maroon
      border 1px solid #CCC
</style>
