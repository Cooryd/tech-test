import { squareNumber } from './util'

describe('squareNumber', () => {
  it('returns the squared value of its input', () => {
      expect(squareNumber(2)).toEqual(4)
      expect(squareNumber(3)).toEqual(9)
  })

  it('throws an error when the input is not a number', () => {

  })
})