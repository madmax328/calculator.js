module.exports = function substract(a, b) {
  const res = a - b
  if(Number.isNaN(res)) {
      throw new error('invalisd Operation')
  }
  return res
}