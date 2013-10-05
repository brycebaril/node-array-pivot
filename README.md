array-pivot
=====

[![NPM](https://nodei.co/npm/array-pivot.png)](https://nodei.co/npm/array-pivot/)

[![david-dm](https://david-dm.org/brycebaril/array-pivot.png)](https://david-dm.org/brycebaril/array-pivot/)
[![david-dm](https://david-dm.org/brycebaril/array-pivot/dev-status.png)](https://david-dm.org/brycebaril/array-pivot#info=devDependencies/)

Pivot arrays of objects by key into a single object with a superset of keys containing arrays of each record's values. Similar to a pivot table in a spreadsheet.

```javascript
var pivot = require("array-pivot")

var data = [
  {foo: 1311, bar: "cat", zzz: 124.31},
  {foo: 41,   bar: 11},
  {foo: 159,  bar: 41, aaa: 12, zzz: 55}
]

console.log(pivot(data))

/*
 {foo: [1311, 41, 159],
  bar: ["cat", 11, 41],
  zzz: [124.31, 55],
  aaa: [12]}
*/

```

API
===

`pivot(data)`

LICENSE
=======

MIT
