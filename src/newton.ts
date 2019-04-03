export default class Newton {
  static solve(f, f_, x1 = -100, x2 = 100, delta = 0.00001, maxIter = 10000) {
    let counter = 0
    let x = (x1 + x2) / 2

    while (counter < maxIter) {
      counter++

      console.log(counter, ': try x = ', x, ' in [', x1, ', ', x2, ']', '...')

      const fAtY0 = f(x)

      if (fAtY0 === 0 || Math.abs(fAtY0) < delta) {
        console.log('exit with good root, x = ', x)
        return x
      }

      const f_AtY0 = f_(x)
      if (fAtY0 * f_AtY0 > 0) {
        x2 = x
      } else {
        x1 = x
      }

      const newX = (x1 + x2) / 2

      if (newX === x) {
        console.log('exit with no improve, x = ', x)
        return x
      }

      x = newX
    }

    console.log('exit with max Iter, x = ', x)
    return x
  }
}
