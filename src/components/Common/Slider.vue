<template lang="jade">
  div.slider-container
    button.slider-next(@click="nextSlide")
      i.fa.fa-chevron-right
    button.slider-previous(@click="previousSlide")
      i.fa.fa-chevron-left
    ul.slider.is-set(ref="carousel")
      li.slider__seat(v-for="(slide, index) in slides" v-bind:id="`slider__seat-${index}`" v-bind:class="{ 'is-ref': index === slides.length - 1 }" ref="seat")
        img(v-bind:src="slide.image.src" v-bind:alt="slide.image.alt")
</template>

<script>
export default {
  props: {
    auto: {
      type: Boolean,
      required: false,
    },
  },
  methods: {
    nextSlide() {
      const carousel = this.$refs.carousel;
      const seats = this.$refs.seat;
      const currentRef = document.querySelector('.slider__seat.is-ref');
      const currentRefIndex = Number(currentRef.id.substring(currentRef.id.indexOf('-') + 1));
      carousel.classList.remove('is-reversing');
      carousel.classList.remove('is-set');
      setTimeout(() => {
        carousel.classList.add('is-set');
      }, 10);
      seats.forEach(seat => (
        seat.style.order = 3
      ));

      // current image
      let currentImageIndex = -1;
      if (currentRefIndex === seats.length - 1) {
        currentImageIndex = 0;
      } else {
        currentImageIndex = currentRefIndex + 1;
      }

      const nextRefIndex = currentImageIndex;

      let nextImageIndex = -1;
      if (currentImageIndex === seats.length - 1) {
        nextImageIndex = 0;
      } else {
        nextImageIndex = currentImageIndex + 1;
      }
      currentRef.classList.remove('is-ref');
      seats[nextRefIndex].classList.add('is-ref');
      seats[nextRefIndex].style.order = 1;

      seats[nextImageIndex].style.order = 2;
    },
    previousSlide() {
      const carousel = this.$refs.carousel;
      const seats = this.$refs.seat;
      const currentRef = document.querySelector('.slider__seat.is-ref');
      const currentRefIndex = Number(currentRef.id.substring(currentRef.id.indexOf('-') + 1));
      carousel.classList.add('is-reversing');
      carousel.classList.remove('is-set');
      setTimeout(() => {
        carousel.classList.add('is-set');
      }, 10);
      seats.forEach(seat => (
        seat.style.order = 3
      ));

      const nextImageIndex = currentRefIndex;

      let nextRefIndex = -1;
      if (nextImageIndex === 0) {
        nextRefIndex = seats.length - 1;
      } else {
        nextRefIndex = nextImageIndex - 1;
      }

      currentRef.classList.remove('is-ref');
      seats[nextRefIndex].classList.add('is-ref');
      seats[nextRefIndex].style.order = 1;

      seats[nextImageIndex].style.order = 2;
    },
  },
  data() {
    return {
      slides: [
        { image: { src: require('../../assets/slide1.jpg'), alt: 'slide 1' }, info: 'Some image info' },
        { image: { src: require('../../assets/slide2.jpg'), alt: 'slide 2' }, info: 'Some image info' },
        { image: { src: require('../../assets/slide3.jpg'), alt: 'slide 2' }, info: 'Some image info' },
      ],
    };
  },
  mounted() {
    if (this.auto) {
      this.interval = setInterval(() => {
        this.nextSlide();
      }, 5000);
    }
  },
  onDestroy() {
    clearInterval(this.interval);
  },
};
</script>

<style lang="stylus">
  @import '../../styles/_breakpoints.styl'
  .slider-container
    overflow hidden
    position relative
    +phone-only()
      height 400px
    +tablet-up()
      height 500px
  .slider-next
  .slider-previous
    position absolute
    z-index 5
    color white
    font-size 3rem
    top 50%
    transform translateY(-50%)
    opacity 0.5
    text-shadow 0 1px 4px #000
  .slider-next
    right 1rem
  .slider-previous
    left 1rem
  .slider
    margin 0
    display flex
    width 100%
    position relative
    left -100%
    transform translateX(100%)
    &.is-reversing
      transform translateX(-100%)
    &.is-set
      transition transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)
      transform none
    &__seat
      flex 1 0 100%
      order 2
      img
        max-width 100%
    &__seat.is-ref
      order 1

</style>
