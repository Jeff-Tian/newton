import assert = require('assert')
import Newton from '../newton'

describe('smoke', () => {
  it('works', () => {
    assert(true)
  })
})

const delta = 0.0001

describe('f(x) = x', () => {
  const f = x => x
  const f_ = (x, y) => 1

  it('x = 0', () => {
    assert(Newton.solve(f, f_, -50, 100) < delta)
  })
})

describe('f(x) = -x', () => {
  const f = x => -x
  const f_ = () => -1

  it('x = 0', () => {
    assert(Newton.solve(f, f_, -50, 100) < delta)
  })
})

describe('f(x) = x**2-1', () => {
  const f = x => x ** 2 - 1
  const f_ = x => 2 * x

  it('x = 1', () => {
    assert(Newton.solve(f, f_, 0, 100) - 1 < delta)
  })

  it('x = -1', () => {
    assert(Newton.solve(f, f_, -100, 0) + 1 < delta)
  })
})
