import loopRequest from './loopRequest'

export default function untilHas (watch) {
  return new Promise(resolve => loopRequest(resolve, watch))
}
