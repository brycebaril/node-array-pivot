module.exports = pivot

function pivot(recordSet) {
  /*
  recordSet is an array of records:
  [{foo: 1311, bar: "cat", zzz: 124.31},
   {foo: 41,   bar: 11},
   {foo: 159,  bar: 41, aaa: 12, zzz: 55}]

   The goal is to pivot this structure:
   {foo: [1311, 41, 159],
    bar: ["cat", 11, 41],
    zzz: [124.31, 55],
    aaa: [12]}
   */
  var pivoted = {}
  if (recordSet == null) return pivoted
  recordSet.forEach(function (record) {
    Object.keys(record).forEach(function (key) {
      if (!pivoted[key]) pivoted[key] = []
      pivoted[key].push(record[key])
    })
  })
  return pivoted
}