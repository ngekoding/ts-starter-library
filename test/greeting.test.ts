import { hello, hi } from '../src/greeting'

it('expected message returned', () => {
  expect(hello()).toBe('Hello')
  expect(hi()).toBe('Hi')
})
