const list = [
  { id: 2, name: "part2", pid: 1 },
  { id: 1, name: "part1", pid: 0 },
  { id: 3, name: "part3", pid: 1 },
  { id: 4, name: "part4", pid: 3 },
  { id: 5, name: "part5", pid: 4 },
];

function arrayToTree(items) {
  const result = []; // 存放结果集
  const itemMap = {}; //

  // 先转成map存储
  for (const item of items) {
    itemMap[item.id] = { ...item, children: [] };
  }
  for (const item of items) {
    const id = item.id;
    const pid = item.pid;
    const treeItem = itemMap[id];
    if (pid === 0) {
      result.push(treeItem);
    } else {
      // if (!itemMap[pid]) {
      //   itemMap[pid] = {
      //     children: [],
      //   };
      // }
      itemMap[pid].children.push(treeItem);
    }
  }
  return result;
}
let tmp = arrayToTree(list);
// console.log(JSON.stringify(tmp, null, 4));

/**
 * 输出结果
 *[
  {
    id: 1,
    name: "part1",
    pid: 0,
    children: [
      {
        id: 2,
        name: "part2",
        pid: 1,
        children: [],
      },
      {
        id: 3,
        name: "part3",
        pid: 1,
        children: [
          {
            id: 4,
            name: "part4",
            pid: 3,
            children: [
              {
                id: 5,
                name: "part5",
                pid: 4,
                children: [],
              },
            ],
          },
        ],
      },
    ],
  },
];
 */
