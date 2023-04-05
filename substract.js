module.exports = function substract(a, b) {
  if (a > b) {
    throw new error('Negative result not allowed')
  }
  
    return a - b
  }