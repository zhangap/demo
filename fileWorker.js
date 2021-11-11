self.onmessage = function(event) {
	console.log('开始读取文件。。。')
	const syncReader = new FileReaderSync();
	const  result = syncReader.readAsText(event.data);
	console.log(result);
	self.postMessage(result)
}
