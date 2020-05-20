"use strict"

var keys = Object.keys
var isArray = Array.isArray
var hasProp = Object.hasOwnProperty

var deepEqual = function (a, b) {
  var i, k, ks, aType, bType

  if (
    typeof a == "object" &&
    typeof b == "object" &&
    a !== null &&
    b !== null
  ) {
    aType = isArray(a)
    bType = isArray(b)

    if (aType !== bType) return false
    if (aType && bType) {
      if ((i = a.length) !== b.length) return false

      while (i-- > 0) {
        if (!deepEqual(a[i], b[i])) return false
      }

      return true
    }

    ks = keys(a)
    if ((i = ks.length) !== keys(b).length) return false

    while (i-- > 0) {
      k = ks[i]
      if (!hasProp.call(b, k)) return false
      if (!deepEqual(a[k], b[k])) return false
    }

    return true
  }

  return a === b
}

module.exports = {
  equal: function (a, b) { return a === b },
  notEqual: function (a, b) { return a !== b },
  deepEqual: deepEqual,
  notDeepEqual: function (a, b) { return !deepEqual(a, b); }
}
