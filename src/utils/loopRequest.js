const loopRequest = function (callback, watch) {
  requestAnimationFrame(function () {
    const stop = watch()
    if (!stop) {
      loopRequest(callback, watch)
    } else {
      callback(stop)
    }
  })
}

export default loopRequest
