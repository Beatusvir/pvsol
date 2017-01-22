<template lang="jade">
  div.products-grid
    quick-view-overlay(v-if="selectedProduct" v-bind:item="selectedProduct" v-bind:handle-close-overlay="handleCloseOverlay")
    products-grid-item(v-for="item in items" v-bind:item="item" v-bind:handle-quick-view-click="handleQuickViewClick")
</template>

<script>
import ProductsGridItem from './ProductsGridItem.vue';
import QuickViewOverlay from './QuickViewOverlay.vue';

export default {
  components: {
    ProductsGridItem,
    QuickViewOverlay,
  },
  data() {
    return {
      items: [
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
          ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
          ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
          ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
          ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
          ],
        },
        {
          name: 'product name',
          image: {
            src: 'http://placehold.it/500x500',
            alt: '',
          },
          swatches: [
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
            { src: 'http://placehold.it/50x50', alt: 'product swatch' },
          ],
        },
      ],
      selectedProduct: null,
    };
  },
  methods: {
    handleQuickViewClick(product) {
      this.selectedProduct = product;
    },
    handleCloseOverlay() {
      this.selectedProduct = null;
    },
  },
};
</script>

<style lang="stylus">
  @import '../../styles/_breakpoints.styl'
  .products-grid
    display flex
    flex-wrap wrap
</style>
