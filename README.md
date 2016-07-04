# FunctionalExamples

Some examples of how to take a simple problem that is generally done imparatively and do it in a functional way.

### Factorial problem with a Monad

Generally the factorial problem is done recursively.

```
function factorial(i) {
  if (i === 0) {
    return i
  }
  return factorial(i - 1) * i
}
```

The problem with this approach at least is that it is not tail-call recursion and so will have call stack issues.
