var test = require("tape").test

var pivot = require("../pivot")

test("pivot", function (t) {
  var data = [
    {foo: 1311, bar: "cat", zzz: 124.31},
    {foo: 41,   bar: 11},
    {foo: 159,  bar: 41, aaa: 12, zzz: 55}
  ]

  var expected = {foo: [1311, 41, 159],
  bar: ["cat", 11, 41],
  zzz: [124.31, 55],
  aaa: [12]}

  t.deepEquals(pivot(data), expected, "Pivoted data matches")
  t.end()
})