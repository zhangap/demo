console.log('moduleA is loaded...')
module.exports = {
	name: 'zap',
	age: 31,
	sayHello() {
		return `${this.name}-${this.age}`
	}
}
