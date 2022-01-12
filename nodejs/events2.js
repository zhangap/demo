function test(callback) {
	console.log('test method is called')
	setTimeout(() => {
		if(Math.random() < 0.8) {
			callback('success')
		} else {
			throw new Error('fail')
		}
	}, 500)
	// if(Math.random() < 0.8) {
	// 	callback('success')
	// } else {
	// 	throw new Error('fail')
	// }
}

try{
	test(res => {
		console.log(res)
	})
}catch (e) {
	console.error(`捕获到错误信息${e}`)
}

























