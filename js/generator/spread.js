// 提前终止generator ；  yield 与 done 的结果
function* createIterator() {
  yield 1;
  return 42;
}

let iterator = createIterator();

for(let item of iterator) {
  console.log(item);
}

let anotherIterator = createIterator();
console.log([...anotherIterator]) 

// 直接与 iterable对象结合
let g = function *() {
  yield *['a', 'b', 'c']
}

for(let item of g()) {
  console.log(item);
}