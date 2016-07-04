// This is an example of how to do a factorial with a monad

function createMonad(i) {
  let n = {
     a: 1,
     current: 1,
     end: i
  }
  let m = {
    //n: n,
    value: function () {
      return n.a
    },
    current: function () {
      return n.current
    },
    end: function () {
      return n.end
    },
    next: function () {
      n.a = n.a * n.current
      n.current = n.current + 1
      n.end = n.end
      return m
    }
  }
  return m
}

let m = createMonad(99)
while (m.current() <= m.end()) { 
  m = m.next();
  console.log(m)
}

console.log(m.value())
