const { isNumber } = require('./index')

describe('GIVEN we call isNumber', () => {
  let input

  describe('AND we pass 0', () => {
    beforeEach(() => {
      input = 0
    })

    it('SHOULD return true', async () => {
      const res = isNumber(input)

      expect(res).toBe(true)
    })
  })

  describe('AND we pass 1', () => {
    beforeEach(async () => {
      input = 1
    })

    it('SHOULD return true', async () => {
      const res = isNumber(input)

      expect(res).toBe(true)
    })
  })

  describe('AND we pass undefined', () => {
    beforeEach(async () => {
      input = undefined
    })

    it('SHOULD return false', async () => {
      const res = isNumber(input)

      expect(res).toBe(false)
    })
  })
})
