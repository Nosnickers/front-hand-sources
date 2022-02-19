/**
 * 二分法查找；延伸：java treeSet
 */

function isEven(val) {
  return val % 2 == 0;
}

function isOdd(val) {
  return !isEven(val);
}

var RangeModule = function () {
  this.ranges = [];
};

RangeModule.prototype.binarySearch = function (val) {
  let low = 0, high = this.ranges.length - 1;
  while (low <= high) {
      const mid = Math.trunc((high + low) / 2);
      const curValue = Math.abs(this.ranges[mid]);
      switch (true) {
          case val < curValue:
              high = mid - 1;
              break;
          case val > curValue:
              low = mid + 1;
              break;
          case val == curValue:
              return mid;
      }
  }
  return low;
}

RangeModule.prototype.addRange = function (left, right) {
  const startIndex = this.binarySearch(left);
  const endIndex = this.binarySearch(right);
  const insertNums = [];
  let spliceCount = endIndex - startIndex;
  if (isEven(startIndex)) {
      insertNums.push(left);
  }
  if (isEven(endIndex)) {
      if (endIndex < this.ranges.length && right == this.ranges[endIndex]) {
          spliceCount++;
      }
      else {
          insertNums.push(-right);
      }
  }
  this.ranges.splice(startIndex, spliceCount, ...insertNums);
};

RangeModule.prototype.queryRange = function (left, right) {
  const startIndex = this.binarySearch(left);
  const endIndex = this.binarySearch(right);
  if (startIndex < this.ranges.length) {
      if (isEven(startIndex)) {
          if (left == this.ranges[startIndex]) {
              return startIndex + 1 == endIndex;
          }
      }
      else {
          if (left < Math.abs(this.ranges[startIndex])) {
              return startIndex == endIndex;
          }
      }
  }
  return false;
};

RangeModule.prototype.removeRange = function (left, right) {
  const startIndex = this.binarySearch(left);
  const endIndex = this.binarySearch(right);
  const insertNums = [];
  let spliceCount = endIndex - startIndex;
  if (isOdd(startIndex)) {
      insertNums.push(-left);
  }
  if (isOdd(endIndex)) {
      if (right == Math.abs(this.ranges[endIndex])) {
          spliceCount++;
      }
      else {
          insertNums.push(right);
      }
  }
  this.ranges.splice(startIndex, spliceCount, ...insertNums);
};

const rangeModule = new RangeModule();
rangeModule.addRange(10, 20);
rangeModule.removeRange(14, 16);
console.log(rangeModule.queryRange(16, 17));
