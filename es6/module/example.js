export  const Constant = {
	name: 'zap',
	age: 32
}

export function fn1() {
	console.log('fn1')
}

export function fn2() {
	console.log('fn2')
}


//export与import都有一个重要的限制，那就是它们必须被用在其他的语句或表达式的外部。所以以下代码会报错
// if(true){
// 	export const baseUrl = 'http://www.baidu.com'
// }
