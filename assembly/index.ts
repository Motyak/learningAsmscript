// The entry file of your WebAssembly module.

/** Calculates the n-th Fibonacci number. */
export function fib(n: u16): u32 {
  var a: u32 = 0
  var b: u32 = 1
  if (n > 0) {
    while (--n) {
      let t = a + b
      a = b
      b = t
    }
    return b
  }
  return a
}
