// 默认配置
const theme = {
  // 签字的实际宽度等于笔触的宽度+笔触阴影的宽度
  pen: {
    // 笔触的颜色
    color: '#333',
    // 笔触的宽度
    width: 5,
    // 笔触阴影
    shadow: {
      // 阴影是否可用
      enable: true,
      // 笔触阴影的颜色
      color: '#555',
      // 笔触阴影的宽度
      width: 3
    }
  },
  // 背景色
  backgroundColor: '#fff',
  // 配置最后的目标输出
  target: {
    // 每行多少字
    wordsPerLine: 20,
    // 图片质量，范围 (0 ～ 1)，同 canvas.toDataURL里的第二个参数
    // 1表示最好品质，0基本不被辨析但有比较小的文件大小。
    quality: 0.6,
    // 标点符号
    punctuation: {
      // 标点符号列表
      list: '。？！，、；：“ ”‘ ’（ ）《 》〈 〉'.split(''),
      // 标点符号是否不应用到行首
      nonHead: true
    },
    // 配置字的样式
    word: {
      // 字的最小尺寸(px)
      minSize: 160,
      // 字的最小宽度(百分比)
      minWidth: '60%',
      // 字的最小高度(百分比)
      minHeight: '60%',
      // 每个签字的格子的大小
      mass: {
        // 格子宽度
        width: 90,
        // 格子高度
        height: 90
      }
    }
  },
  // 主题色，主要影响按钮颜色
  primaryColor: '#00aeff'
}

Object.freeze(theme)

export default theme
