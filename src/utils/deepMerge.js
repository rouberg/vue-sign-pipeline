import isObject from './isObject'

const deepMerge = function (defaultValue, value) {
  if (isObject(defaultValue)) {
    value = value || {}
    return Object.keys(defaultValue).reduce(function (obj, key) {
      obj[key] = deepMerge(defaultValue[key], value[key])
      return obj
    }, {})
  } else {
    return value === void 0 ? defaultValue : value
  }
}

export default deepMerge
