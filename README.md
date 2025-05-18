# Union Function Implementation and Unit Testing (JEST) in JavaScript

## Overview

This assignment implements a custom `union` function in JavaScript that merges two arrays into one containing unique elements from both, **preserving the order** of first occurrence. Unlike built-in approaches, this function supports:

- Primitive values (`number`, `string`, `boolean`, `null`, `undefined`)
- Plain objects (`{}`) and arrays (`[]`), including deeply nested structures
- Deep equality checking without using `JSON.stringify()`

## Features

- Preserves order of elements from input arrays
- Supports complex nested objects and arrays
- Uses ES6+ features such as spread operator, recursion, and array methods (`some`, `every`)
- Avoids duplicates by performing a deep equality comparison
- Includes comprehensive Jest test suite covering various edge cases

## Motivation

JavaScript's native `Set` only removes duplicate **primitive** values and uses reference equality for objects, which means it cannot reliably detect deep duplicates in arrays of objects. This implementation overcomes that limitation by:

- Performing deep structural equality checks on objects and arrays
- Ensuring that duplicates are removed based on content, not reference
- Returning a merged array with unique elements in the order they first appear

## Usage

```js
const union = require('./union');

console.log(union([1, 2, 3], [2, 3, 4]));
// Output: [1, 2, 3, 4]

console.log(union([{ a: 1 }], [{ a: 1 }, { a: 2 }]));
// Output: [{ a: 1 }, { a: 2 }]
```
### Implementation Details
deepEqual(a, b): Recursively compares two values for deep equality.

isUnique(array, value): Checks if value exists deeply inside array.

union(arr1, arr2): Merges arr1 and arr2 into a unique array preserving order.

### Testing
- Tests are written using Jest and cover:
- Primitive values
- Mixed types (numbers and strings)
- Simple and deeply nested objects
- Arrays of arrays
- Edge cases like empty arrays

```
npm install
npm test
```


# Node.js template

This is a Node.js project.

Add your [configuration](https://codesandbox.io/docs/projects/learn/setting-up/tasks) to optimize it for [CodeSandbox](https://codesandbox.io/p/dashboard).

## Resources

- [CodeSandbox — Docs](https://codesandbox.io/docs/learn)
- [CodeSandbox — Discord](https://discord.gg/Ggarp3pX5H)
