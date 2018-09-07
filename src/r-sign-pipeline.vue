<template>
  <div class="component-commit">
    <button type="button" class="btn-sign" @click="showPanel">
      <slot name="btn">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          <path d="M919.7 87.5L847.5 10 73.9 779.5 35.1 889.2l115.1-32.3L919.7 87.5zM35.1 956.3h929.8V990H35.1v-33.7z"/>
        </svg>
      </slot>
    </button>
    <div v-transfer-dom class="panel-commit" v-show="open">
      <p v-if="finish" class="tips-content">签字内容预览：</p>
      <h3 :class="{['title-preview']: finish}">
        <span v-for="(word, index) in commit" :key="index" :class="{active: index===activeIndex, preview: finish}">
          <img v-if="activeIndex > index" :src="images[index].image"/>
          <template v-else>{{word}}</template>
        </span>
      </h3>
      <div class="box" @touchmove.passive="onTouch" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd" v-show="!finish">
        <span class="tips">{{commit[activeIndex]}}</span>
        <canvas ref="canvas"></canvas>
      </div>
      <div class="bar-switch" :class="{preview: finish}">
        <span class="tips">自动切换到下一字：</span>
        <r-switch v-model="autoSwitch"/>
      </div>
      <div class="bar">
        <button class="btn btn-primary btn-reverse" @click.native.passive="cancel">取消</button>
        <button class="btn btn-primary" @click.native.passive="backspace" :disabled="!deletable">删除</button>
        <button class="btn btn-primary btn-reverse" @click.native.passive="nextWord" v-if="!autoSwitch" :disabled="finish">下一字</button>
        <button class="btn btn-primary" @click.native.passive="confirm" :disabled="!finish">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
  import TransferDom from './directives/transfer-dom'
  import untilHas from './utils/untilHas'
  import untilImageCreated from './utils/untilImageCreated'
  import deepMerge from './utils/deepMerge'
  import defaultTheme from './defaultTheme'
  import RSwitch from './r-switch'
  export default {
    name: 'r-commit',
    components: {
      RSwitch
    },
    directives: {
      TransferDom
    },
    props: {
      commit: {
        type: String,
        default: '本人已阅读保险条款、产品说明书和投保提示书，了解本产品的特点和保单利益的不确定性。'
      },
      switchTick: {
        type: Number,
        default: 800
      },
      theme: {
        type: Object,
        default: {}
      }
    },
    data () {
      return {
        open: false,
        anchor: null,
        context: null,
        switchId: null,
        autoSwitch: true,
        images: [], // 笔迹集合
        points: [], // 当前画布有效点的集合
        activeIndex: 0,
        config: deepMerge(defaultTheme, this.theme)
      }
    },
    computed: {
      finish () {
        return this.activeIndex >= this.commit.length
      },
      deletable () {
        return this.images.length > 0
      }
    },
    watch: {
      open (to) {
        if (to) {
          untilHas(() => this.$refs.canvas).then(canvas => {
            canvas.width = canvas.parentNode.clientWidth
            canvas.height = canvas.parentNode.clientHeight
            this.context = canvas.getContext('2d')
            this.anchor = this.calcOffset(canvas)
          })
        }
      }
    },
    methods: {
      // 打开签字面板
      showPanel () {
        this.open = true
      },
      // 取消签字，重置并关闭面板
      cancel () {
        this.images = []
        this.activeIndex = 0
        this.resetCanvas()
        this.open = false
      },
      backspace () {
        this.resetCanvas()
        if (this.switchId) {
          clearTimeout(this.switchId)
          return
        }
        const { images } = this
        images.pop()
        this.images = images
        if (this.activeIndex > 0) {
          this.activeIndex -= 1
        }
      },
      // 提交签字内容
      confirm () {
        if (this.finish) {
          this.merge().then(dataURL => {
            this.images = []
            this.activeIndex = 0
            this.resetCanvas()
            this.open = false
            this.$emit('sign', dataURL)
          })
        }
      },
      // 计算目标结点相对于文档的坐标原点的偏移量
      calcOffset (target, offset = {}) {
        let { x = 0, y = 0 } = offset
        if (target === document || target.classList.contains('panel-commit')) {
          return offset
        } else {
          x += target.clientLeft + target.offsetLeft
          y += target.clientTop + target.offsetTop
          return this.calcOffset(target.parentNode, { x, y })
        }
      },
      /**
       * 触摸开始，开始新的绘画并设置参数。
       * @param event {object} DOM事件对象
       */
      onTouchStart (event) {
        const { context } = this
        const { pen } = this.config
        context.beginPath()
        context.lineWidth = pen.width
        context.strokeStyle = pen.color
        if (pen.shadow.enable) {
          context.shadowColor = pen.shadow.color
          context.shadowBlur = pen.shadow.width
        }
        context.lineCap = 'round'
        context.lineJoin = 'round'
      },
      /**
       * 绘制中。
       * 根据事件的触发点计算相对于canvas坐标系的偏移量，绘制落点。
       * @param event {object} DOM事件对象
       */
      onTouch (event) {
        const { context, anchor } = this
        const pos = event.changedTouches[0]
        const point = [pos.clientX - anchor.x, pos.clientY - anchor.y]
        this.points.push([Math.floor(point[0]), Math.floor(point[1])])
        context.lineTo(...point)
        context.stroke()
        if (this.switchId) {
          clearTimeout(this.switchId)
          this.switchId = null
        }
      },
      /**
       * 某一笔绘制结束
       * 如果开启了自动切换，过一定时间间隔后会自动切换到下一字的签写
       * @param event {object} DOM事件对象
       */
      onTouchEnd (event) {
        if (this.autoSwitch) {
          this.switchId = setTimeout(this.nextWord, this.switchTick)
        }
      },
      /**
       * 切换到下一字的签写
       */
      nextWord () {
        if (this.switchId) {
          clearTimeout(this.switchId)
          this.switchId = null
        }
        const { canvas } = this.$refs
        const { context, images } = this
        const { width, height } = canvas
        // 为图片新增白色背景
        context.globalCompositeOperation = 'destination-over'
        context.shadowColor = this.config.backgroundColor
        context.fillStyle = this.config.backgroundColor
        context.fillRect(0, 0, width, height)
        const matrix = this.calcSize(this.points)
        const data = this.clip(matrix)
        images.push(data)
        this.images = images
        this.activeIndex += 1
        this.resetCanvas()
        if (this.activeIndex >= this.commit.length && this.autoSwitch) {
          this.confirm()
        }
      },
      resetCanvas () {
        const { canvas } = this.$refs
        const { context } = this
        const { width, height } = canvas
        context.clearRect(0, 0, width, height)
        canvas.width = width
        canvas.height = height
        this.points = []
      },
      /**
       * 计算一组点的落点范围
       * @param points {array<number, number>}
       * @returns {array<array<number, number>, array<number, number>>} 返回一个矩阵 [[minX, minY], [maxX, maxY]]
       */
      calcSize (points) {
        return points.reduce((size, point) => {
          if (!size.length) {
            size = [point, point]
          } else {
            let [min, max] = size
            min = [Math.min(min[0], point[0]), Math.min(min[1], point[1])]
            max = [Math.max(max[0], point[0]), Math.max(max[1], point[1])]
            size = [min, max]
          }
          return size
        }, [])
      },
      // 计算一个签字的最小尺寸
      calcMinSize ({ width, height }) {
        let { minSize, minWidth, minHeight, mass } = this.config.target.word
        const regOfPercent = /^\d+%$/
        if (regOfPercent.test(minWidth)) {
          minWidth = width * 100 / parseInt(minWidth)
        } else {
          minWidth = width * mass.width / minWidth
        }

        if (regOfPercent.test(minHeight)) {
          minHeight = height * 100 / parseInt(minHeight)
        } else {
          minHeight = height * mass.height / minHeight
        }
        return Math.floor(
          Math.max(minSize, minWidth, minHeight)
        )
      },
      clip (matrix) {
        let [min, max] = matrix
        const clipCanvas = document.createElement('canvas')
        const clipContext = clipCanvas.getContext('2d')
        const { canvas } = this.$refs
        const { context } = this
        const { punctuation } = this.config.target
        const isPunctuation = punctuation.list.includes(this.commit[this.activeIndex])
        // 因为绘制的线条有宽度和阴影，min和max扩大10px
        min[0] = Math.max(0, min[0] - 10)
        min[1] = Math.max(0, min[1] - 10)
        max[0] = Math.min(canvas.width, max[0] + 10)
        max[1] = Math.min(canvas.height, max[1] + 10)
        if (isPunctuation) {
          min = [0, 0]
          max = [canvas.width, canvas.height]
        }
        const width = max[0] - min[0]
        const height = max[1] - min[1]
        const imageData = context.getImageData(...min, width, height)
        let size = this.calcMinSize({ width, height })
        size = Math.min(size, canvas.width, canvas.height)
        clipCanvas.width = size
        clipCanvas.height = size
        clipContext.fillStyle = this.config.backgroundColor
        clipContext.fillRect(0, 0, size, size)
        const start = [(size - width) / 2, (size - height) / 2]
        clipContext.putImageData(imageData, start[0], start[1], 0, 0, width, height)
        const image = clipCanvas.toDataURL('image/jpeg', 1)
        return { image, size, start, width, height, imageData }
      },
      getMergeMass () {
        const { mass } = this.config.target.word
        const { wordsPerLine, punctuation } = this.config.target
        const { commit } = this
        let fixLength = commit.length
        if (punctuation.nonHead) { // 标点符号不在行首
          for (let i = 0, pos = 0; i < fixLength; i++, pos++) {
            // 当前项是标点符号，且恰逢行首
            if (punctuation.list.includes(commit[i]) && pos % wordsPerLine === 0) {
              fixLength++ // 插入一个空格
              pos++ // 跳过空格
            }
          }
        }
        const width = mass.width * Math.min(wordsPerLine, fixLength)
        const height = mass.height * Math.ceil(fixLength / wordsPerLine)
        return { width, height }
      },
      // 构建完整的图片
      merge () {
        const { mass } = this.config.target.word
        const { wordsPerLine, punctuation } = this.config.target
        const { images, commit } = this
        const mergeCanvas = document.createElement('canvas')
        const mergeMass = this.getMergeMass()
        mergeCanvas.width = mergeMass.width
        mergeCanvas.height = mergeMass.height
        const mergeContext = mergeCanvas.getContext('2d')
        mergeContext.fillStyle = this.config.backgroundColor
        mergeContext.fillRect(0, 0, mergeMass.width, mergeMass.height)
        let posOffset = 0
        const promises = images.map((it, i) => {
          let image = new Image()
          image.src = it.image
          // 接下来的两个都是标点符号
          if (punctuation.list.includes(commit[i + 1]) && punctuation.list.includes(commit[i + 2])) {
            // 两个标点符号任意一个碰到行首
            if ((i + 1 + posOffset) % wordsPerLine === 0 || (i + 2 + posOffset) % wordsPerLine === 0) {
              posOffset += 2
            }
            // 接下来的这个是标点符号且碰到了行首
          } else if (punctuation.list.includes(commit[i + 1]) && (i + 1 + posOffset) % wordsPerLine === 0) {
            posOffset++
          }
          const pos = {
            x: (i + posOffset) % wordsPerLine * mass.width,
            y: Math.floor((i + posOffset) / wordsPerLine) * mass.height
          }
          return untilImageCreated(image).then(() => {
            mergeContext.drawImage(image, 0, 0, it.size, it.size, pos.x, pos.y, mass.width, mass.height)
          })
        })
        return Promise.all(promises).then(() => {
          return mergeCanvas.toDataURL('image/jpeg', this.config.target.quality)
        })
      }
    }
  }
</script>
<style lang="scss">
  .btn-sign {
    width: 40px;
    height: 40px;
    display: flex;

    svg {
      fill: currentColor;
      display: block;
      width: 18px;
      margin: auto;
    }
  }

  .panel-commit {
    position: fixed;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: flex-start;

    .tips-content {
      font-size: 14px;
      color: #999;
      margin: 10px;
    }

    h3 {
      font: normal 18px '宋体';
      overflow: hidden;
      padding: 10px 0;
      margin: 0 10px;
      box-sizing: border-box;
      max-height: calc(100vh - 90px);
      overflow-y: auto;

      &.title-preview {
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.15);
      }

      span {
        display: inline-block;
        width: 24px;
        height: 24px;
        line-height: 24px;
        text-align: center;
        float: left;
        margin: 0 -1px;
      }

      .preview {
        width: 60px;
        height: 60px;
      }

      .active {
        color: #fd4b4b;
        font-weight: bold;
      }

      img {
        display: block;
        width: 100%;
      }
    }

    .box {
      width: 360px;
      height: 360px;
      margin: auto;
      position: relative;
      overflow: hidden;
      z-index: 0;
      border: 1px solid #ddd;

      &::before,
      &::after {
        content: ' ';
        position: absolute;
        top: 50%;
        left: 180px;
        border-top: 1px dashed #eee;
        width: 510px;
        z-index: -2;
      }

      &::before {
        transform: translateX(-50%) rotate(45deg);
      }

      &::after {
        transform: translateX(-50%) rotate(-45deg);
      }

      .tips {
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        color: #ddd;
        font-size: 160px;
        line-height: 360px;
        text-align: center;
        font-family: '宋体';
        box-sizing: border-box;
        z-index: -1;

        &::before,
        &::after {
          content: ' ';
          position: absolute;
          top: 50%;
          left: 180px;
          border-top: 1px dashed #eee;
          width: 360px;
          z-index: -2;
        }

        &::before {
          transform: translateX(-50%);
        }

        &::after {
          transform: translateX(-50%) rotate(90deg);
        }
      }

      canvas {
        width: 100%;
        height: 100%;
      }
    }

    .bar-switch {
      display: flex;
      justify-content: center;
      align-items: center;
      color: #999;
      font-size: 12px;
      height: 30px;
      margin: 8px 10px;

      &.preview {
        margin-top: auto;
      }

      .tips {
        margin-right: 10px;
      }
    }

    .bar {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 0;

      .btn {
        margin: 0 8px;
        height: 30px;
        font-size: 14px;
      }

      .btn-back {
        border: 0 none;
        background-color: #999;
        color: white;
      }
    }
  }
</style>
