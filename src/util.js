
function squareNumber(number) {
  if (isNaN(number)) {
    throw new Error('Not a number.')
  }

  return number*number
}

export {
  squareNumber
}