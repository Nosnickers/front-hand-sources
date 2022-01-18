function* createNumberIterator() {
  yield 1;
  yield 2;
}
function* createColorIterator() {
  yield "red";
  yield "green";
}
function* createCombinedIterator() {
  yield* createNumberIterator();
  yield* createColorIterator();
  yield true;
}

var iterator = createCombinedIterator();

console.log(iterator.next()); // "{ value: 1, done: false }"
console.log(iterator.next()); // "{ value: 2, done: false }"
console.log(iterator.next()); // "{ value: "red", done: false }"
console.log(iterator.next()); // "{ value: "green", done: false }"
console.log(iterator.next()); // "{ value: true, done: false }"
console.log(iterator.next()); // "{ value: undefined, done: true }"
