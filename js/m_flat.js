// 手写array flat
// [1, 2, 3, 4, [5, 6,]]

function m_flat(list, depth = 1) {
  if (depth === 0) {
    return list;
  }
  return list.reduce((sum, cur) => {
    if (!Array.isArray(cur) && !cur.length) {
      sum = [...sum, cur];
    } else {
      sum = [...sum, ...m_flat(cur, depth-1)];
    }
    console.log(333333, sum)
    return sum;
  }, []);
}

console.log(m_flat([1, 2, 3, [4, [5, 6, [7, [8]]]]], 2))