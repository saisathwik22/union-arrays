// union of two arrays.
function isObject(obj) {
  return obj !== null && typeof obj === "object";
}
function deepEqual(a, b) {
  // checks if both inputs are of same type.
  if (a === b) {
    return true;
  }
  // checks if both inputs are arrays?
  if (Array.isArray(a) && Array.isArray(b)) {
    if (a.length !== b.length) {
      return false;
    }
    // checks if val of array a at index i, exists in array b at same index i.
    return a.every((val, i) => deepEqual(val, b[i]));
  }
  if (a && b && typeof a === "object" && typeof b === "object") {
    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;
    // checks if every key in object A exists in object B and their values are deeplyEqual.
    return keysA.every(
      (key) => keysB.includes(key) && deepEqual(a[key], b[key])
    );
  }
  return false;
}
// checks if value exists in the array or not.
function isUnique(array, value) {
  return array.some((item) => deepEqual(item, value));
}
function union(arr1, arr2) {
  const result = [];

  for (const item of [...arr1, ...arr2]) {
    if (!isUnique(result, item)) {
      result.push(item);
    }
  }
  return result;
}
module.exports = union;
