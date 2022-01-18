Array.prototype.pushAll = function(items) {
	if(!Array.isArray(items)) {
		throw new Error('Arguments must be an array!')
	}
	return this.push(...items)
}
