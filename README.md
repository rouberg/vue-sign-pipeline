# vue-sign-pipeline
A vue component to pipeline signature.

Now just support `webpack@4` && `babel@7 (@babel namespaced)`

**`@props commit`**

type: `string`

content of signature.

**`@props theme`**

type: `object`

defaultValue:
```javascript
const theme = {
  pen: {
    // The color of pen
    color: '#333',
    // The width of pen
    width: 5,
    // The shadow of pen
    shadow: {
      // Whether enable of the shadow
      enable: true,
      // the color of shadow
      color: '#555',
      // the width of shadow
      width: 3
    }
  },
  // background color of signature
  backgroundColor: '#fff',
  // config target of signature
  target: {
    // How many words per line
    wordsPerLine: 20,
    // Quality of result image
    quality: 0.6,
    punctuation: {
      // List of punctuation
      list: '。？！，、；：“ ”‘ ’（ ）《 》〈 〉'.split(''),
      // Whether in row head
      nonHead: true
    },
    // config the style of single word
    word: {
      // min size (px)
      minSize: 160,
      // min width (percent)
      minWidth: '60%',
      // min height (percent)
      minHeight: '60%',
      // size of ceil
      mass: {
        // width of ceil
        width: 90,
        // height of ceil
        height: 90
      }
    }
  }
}
```

**`@event sign`**

when finisth signature, we can capture `sign` event in component.

result is a `dataURL`, MIME-TYPE is `image/jpeg`.

[中文文档](./README-zh.md)
