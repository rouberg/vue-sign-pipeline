export default function isObject (source) {
  return ({}).toString.call(source) === '[object Object]'
}
