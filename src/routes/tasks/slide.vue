<template>
  <section class="view">
    <i v-for="(x, i) in children"
      :style="{transform: `translateY(${x.ty * 100}%)`}"
      v-text="i"
    ></i>
  </section>
</template>

<script>
  export default {
    data() {
      return {
        index: 0,
        children: []
      }
    },

    methods: {
      loop() {
        let i = 0
        const length = this.children.length

        for (const child of this.children) {
          if ((this.index + 1) % length === i ||
            this.index === i) {
            child.ty -= .01
          }
          if (child.ty <= -1) {
            this.index++
            child.ty = 1
          }
          i++
        }

        this.index === length ? this.index = 0 : 0

        requestAnimationFrame(this.loop)
      }
    },

    mounted() {
      this.children = Array.from({length: 6}, (_, i) => ({
        ty: !i ? 0 : 1
      }))

      this.loop()
    }
  }
</script>


<style lang="less" scoped>
  .view {
    width: 100px;
    height: 100px;
    // background-color: rgba(255, 51, 204, 0.363);
    position: relative;
    overflow: hidden;
  }
  i {
    display: block;
    width: 100px;
    height: 100px;
    background-color: rgba(75, 255, 51, 0.452);
    border: 1px solid #ccc;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>

