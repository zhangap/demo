self.onmessage = event => {
	const sleepTime =  event.data
	console.error('工作线程开始工作，工作时长', sleepTime)
	//这里弄个循环、模拟工作线程参与大量计算
	const currentTime = Date.now()
	while(Date.now() -  currentTime < sleepTime) {
	}
	console.error('工作线程工作完毕')
	self.postMessage('stop')
}
