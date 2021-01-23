const { message } = require('./index')

test('two plus two is four', () => {
  expect(2 + 2).toBe(4)
})

test('Message is hello', () => {
  expect(message).toBe('Hello')
})
