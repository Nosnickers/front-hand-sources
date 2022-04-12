// 20块，5块一瓶，4个瓶盖换一瓶，2个瓶身换一瓶;问，一共换多少瓶饮料
function consume({ restMoney, pg, pz }, res) {
  let newPgDr = Math.floor(pg / 4);
  let newPzDr = Math.floor(pz / 2);
  let newMnyDr = Math.floor(restMoney / 5);
  let newDr = newPgDr + newPzDr + newMnyDr;
  
  restMoney -= newMnyDr * 5;
  pg = pg + newDr - newPgDr * 4;
  pz = pz + newDr - newPzDr * 2;
  res.r = res.r + newDr;
  console.log(res, newPgDr, newPzDr, newMnyDr, 'newDr', newDr, 'pz', pz, 'pg', pg);
  if (restMoney > 4 || pg > 3 || pz > 1) {
    consume({ restMoney, pg, pz }, res);
  }
}
let res = { r: 0 };
consume({ restMoney: 20, pg: 0, pz: 0 }, res);
