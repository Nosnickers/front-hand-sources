// 考察yield 异常捕获
function* increment() {
  const first = yield 'increment'
  let sec
  try {
    sec = yield 'increment' + first
  } catch (error) {
    sec = 3
  }
  yield sec
}

// 输出结果
const gitr = increment()
console.log(gitr.next())
console.log(gitr.next(1))
console.log(gitr.throw(new Error("Boom")))
console.log(gitr.next())