

let comp = (d,s) => i => i % d === 0 ? s : i

//let f = i => i % 3 === 0 ? 'fizz' : i
let f = comp(3, 'fizz')
let b = comp(5, 'buzz')
let fb = comp(15, 'fizzbuzz')
let fbFunc = i => b(f(fb(i)))

let fizzbuzz = (list, i) => {
  if (i === 0) return list
  return fizzbuzz(list(fbFunc(i)), i-1)
}

let arr = v => {
	return (i) => {
      v = v || []
      if (!i) return v
      v.unshift(i)
      return arr(v)
	}
}
let a = arr()
// let a = i => {
//   console.log(i);
//   return a
// }

let res = fizzbuzz(a, 20)()

//console.log(res)
//console.log(arr()(1)(2)(3)())
