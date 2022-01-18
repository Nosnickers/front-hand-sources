// 自定义iterator对象
const collection = {
  items: [],
  *[Symbol.iterator]() {
    for (let item of this.items) {
      yield item;
    }
  }
};

collection.items = [1,2,3,4,5]

for (const ite of collection) {
  console.log(ite)
}