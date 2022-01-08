/**
 * 深拷贝
 */

const deepClone = (origin) => {
};

const oldV = {
  a: 1,
  b: "1",
  c: [123],
  d: { dd1: 1, dd2: { ddd1: 1 } },
  e: {},
  f: "",
};
const newV = deepClone(oldV);
newV.d.dd1 = 2;
console.log(oldV.d.dd1);
