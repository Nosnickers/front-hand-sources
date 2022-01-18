function delay_(timeout) {
  return new Promise((r) => {
    setTimeout(() => r(timeout), timeout);
  });
}

function asyncIncrement() {
  return delay_(1000)
}

function run(taskDef) {
  // 创建并保存 iterator，留到后面使用
  let task = taskDef();

  let result = task.next();

  // 递归地执行 `next`
  function step() {
    // 如果没完的话
    if (!result.done) {
      if (result.value && typeof result.value.then === "function") {
        result.value.then((d) => {
          result = task.next(d);
          step();
        });
      } else {
        result = task.next(result.value);
        step();
      }
    }
  }
  // 开始处理
  step();
}

run(function* () {
  let value = yield asyncIncrement();
  console.log(value)
  value = yield value + 3;
  console.log(value)
});
