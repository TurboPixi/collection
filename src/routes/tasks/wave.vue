<template>
  <section ref="view" class="d-flex align-items-center justify-content-center">
    <button class="btn btn-info" v-if="!clicked">Play</button>
  </section>
</template>

<script>

  let click, audioBuffer

  const
    promise = new Promise(resolve => click = resolve),
    loader = fetch('//static.lufei.so/1.m4a?tf', {mode: 'cors'}).then(info => info.arrayBuffer())

  document.body.addEventListener('click', click)
  document.body.addEventListener('touchstart', click)

  function start(app) {
    const
      ctx = new (window.webkitAudioContext || window.AudioContext)(),
      analyser = ctx.createAnalyser(),
      source = ctx.createBufferSource()

    analyser.fftSize = 256

    const
      total = analyser.frequencyBinCount,
      buffer = new Uint8Array(total),
      graphics = new PIXI.Graphics(),
      colors = gradient(0xffcc33, 0xff33cc, analyser.frequencyBinCount),
      {cos, sin, PI} = Math,
      PI_2 = PI / 2,
      {stage, ticker, screen} = app,
      w = screen.width / total / 2

    loader.then(info => {
      /* safari not support promise */
      ctx.decodeAudioData(info, data => {
        source.buffer = data
        source.connect(analyser)
        analyser.connect(ctx.destination)
        source.start()
      })
    })


    stage.addChild(graphics)

    ticker.add(() => {
      analyser.getByteFrequencyData(buffer)
      graphics.clear()
      buffer.forEach((item, i) => {
        graphics.beginFill(colors[i])
        graphics.drawRect(
          i * 2 * w,
          screen.height / 2 - item,
          w, item * 2
        )
      })
      graphics.endFill()
    })
  }

  function gradient(start, end, length=10) {
    start = {r: start >> 16, g: (start >> 8) & 0x00ff, b: start & 0xff}
    end = {r: end >> 16, g: (end >> 8) & 0x00ff, b: end & 0xff}

    return Array.from({length}, (_, i) => {
      const t = i / length
      return ((start.r + (end.r - start.r) * t) << 16) +
        ((start.g + (end.g - start.g) * t) << 8) +
        (start.b + (end.b - start.b) * t)
    })
  }

  export default {
    data() {
      return {
        clicked: false
      }
    },
    mounted() {
      const
        app = new PIXI.Application({
          antialias: true,
          transparent: true,
          width: this.$refs.view.offsetWidth,
          height: this.$refs.view.offsetHeight
        }),
        {view} = app

      view.style.display = 'block'
      view.style.position = 'absolute'

      if (matchMedia('(orientation: portrait)').matches) {
        let {innerWidth: height, innerHeight: width} = window

        view.style.width = `${width}px`
        view.style.height = `${height}px`
        view.style.transform = 'rotate(90deg)'
        view.style.top = `${(innerHeight - height) * .5}px`
        view.style.left = `${(innerWidth - width) * .5}px`
      }

      promise.then(() => {
        this.clicked = true
        start(app)
      })

      this.$refs.view.appendChild(view)
    }
  }

</script>

<style lang="less" scoped>
  section {
    width: 100%;
    height: 100%;
  }
</style>

