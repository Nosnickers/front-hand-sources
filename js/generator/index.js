// 考察yield使用
function* increment() {
  const first = yield 'increment'
  const sec = yield 'increment' + first
  yield sec
}

// 输出结果
const gitr = increment()
console.log(gitr.next())
console.log(gitr.next(1))
console.log(gitr.next(2))
console.log(gitr.next())