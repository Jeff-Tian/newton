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
