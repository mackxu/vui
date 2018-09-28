
export default {
  // 查找数组中满足某条件的项
  find(arr, callback) {
    let targetItem = null;
    for (let i = 0; i < arr.length; i += 1) {
      const curItem = arr[i];
      if (callback(curItem)) {
        targetItem = curItem;
        break;
      }
    }
    return targetItem;
  },
};
