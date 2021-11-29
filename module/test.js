let ma = require('./moduleA')

// 这里不管对模块加载多少次，事实上只会加载一次
require('./moduleA')
require('./moduleA')
require('./moduleA')
require('./moduleA')
console.log(ma.sayHello());
// 支持动态依赖
let flag = false;
if(flag){
	require('./ModuleB')();
}
