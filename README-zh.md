# 关于多字流式签名

当前组件在和vue组合使用时可用。

## 添加到项目中
```bash
npm install vue-sign-pipeline
# 或者
yarn add vue-sign-pipeline
```

### 如何使用

和正常组件一样使用。

**`@props commit`**

要签字的内容

**`@props theme`**

主题，用以控制签名过程和签名生成内容。

默认值：
```javascript
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
  }
}
```

最后的主题配置是`@props theme`覆盖上面默认值的结果，
如上，仅需要修改`theme.target.wordsPerLine`为8，可传入`theme`值为：
```javascript
{
  target: {
    wordsPerLine: 8
  }
}
```

签名结束后会有一个sign事件，sign事件中会返回签名结果。
签名结果是一个base64串，MIME-TYPE 是`image/jpeg`。
