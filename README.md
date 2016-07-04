# FunctionalExamples

Some examples of how to take a simple problem that is generally done imparatively and do it in a functional way.

### Factorial problem with a Monad

Generally the factorial problem is done recursively.

```
function factorial(i) {
  if (i === 1) {
    return 1
  }
  return factorial(i - 1) * i
}
```

The problem with this approach at least is that it is not tail-call optimized and so will have call stack issues.

This example is using tail-recursion, but since JS doesn't support tail-recursion the same issue will occur. 
(Note: It does have more variables at play, maybe there's a way to reduce them...)

```
function call(n) {
  return loop(1, 1, n)
}

function loop(i, current, end) {
  console.log(`${i}, ${current}, ${end}`)
  if (current === end) {
    return i * current;
  }
  return loop(i * current, current + 1, end);
}
```
