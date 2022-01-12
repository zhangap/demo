const EventEmitter = require('events').EventEmitter;


class  CustomEvent extends  EventEmitter {
	constructor() {
		super();
	}
}

const ce = new CustomEvent()

ce.on('custom', params => {
	console.log(params)
})

ce.emit('custom', 'hello world')

































