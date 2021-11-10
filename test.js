
// let a = {x:1}
// function bar(obj) { 
//   return obj.x 
// }


// function foo () { 
//   let ret = 0
//   for(let i = 1; i < 100000; i++) {
//     ret += bar(a)
//   }
//   return ret
// }


// foo()


function strToArray(str) {
  let i = 0
  const len = str.length
  let arr = new Uint16Array(str.length)
  for (; i < len; ++i) {
    arr[i] = str.charCodeAt(i)
  }
  return arr;
}


function foo() {
  let i = 0
  let str = 'test V8 GC'
  while (i++ < 1e5) {
    strToArray(str);
  }
}


foo()