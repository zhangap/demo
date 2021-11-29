console.log('empty worker.js')

setTimeout(() => {
	self.postMessage('hello world')
}, 5000)

self.onmessage = event => {
	console.log('工作线程收到消息',event.data)
}
