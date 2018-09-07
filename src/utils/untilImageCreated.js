import loopRequest from './loopRequest'

export default function untilImageCreated (image) {
  return new Promise(resolve => {
    loopRequest(resolve, function () {
      return image.naturalWidth > 0 && image.naturalHeight > 0 && image
    })
  })
}
