---
title: async
tag: ES6标准入门阅读总结
---

##### **1. 含义**
`async` 使 异步操作变得更加方便。 本质上就是 `Generator` 函数的语法糖。

~~~js
	const fs = require('fs')
const readFile = function (fileName) {
	return new Promise(function (resolve, reject) {
		fs.readFile(fileName, function(error, data) {
			resolve(data)
		})
	})
	
	const gen = function* () {
		const f1 = yield readFile('/etc/hello')
		console.log(f1.toString())
	}
}
~~~
上面的 `gen` 写成 `async`函数：

~~~js
const asyncReadFile = async function() {
 const f1 = await readFile('/etc/hello')
	console.log(f1.toString())
}
~~~

比较后可知： `async` 函数就是将`Generator` 函数的（`*`） 替换成了 `async` ， 将`yield` 替换成了 `await`

##### **2. 基本用法**

`async `函数返回一个 `Promise `对象， 可以使用`then `方法添加回调函数。 当函数执行的时候， 一旦遇到`await `就会先返回， 等到异步操作完成， 再接着执行函数体后面的语句。 例：

~~~js
async function getStockPriceByName(name) {
 const symbol = await getStockSymbol(name)
 const stockPrice = await getStockPrice(symbol)
 return stockPrice
}

getStockPriceByName('goog').then(function (result) {
	console.log(result)
})
~~~

上面代码 函数前面的`async `关键字， 表明该函数内部有异步操作， 调用该函数时， 会立即返回一个`Promise `对象，

下面这个例子 指定多少毫秒后输出一个值
~~~js
function timeout(ms) {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}
async function asyncPrint(value, ms) {
	await timeout(ms)
	console.log(value)
}
asyncPrint('hello world', 50)
~~~
以上代码代表 50毫秒后， 输出`hello world`， 用 `async `函数后 如下
~~~js
async function timeout(ms) {
	await new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}
async function asyncPrint(value, ms) {
	await timeout(ms)
	console.log(value)
}
asyncPrint('hello world', 50)
~~~

##### **3. await 命令**

正常情况下， `await `命令后面是一个 `Promise `对象， 返回该对象的结果。 如果不是 `Promise `对象， 就直接返回对应的值。 
~~~js
async function f() {
	return await 123 // 等同于 return 123
}
f().then( v = > console.log(v)) //123
~~~
另一种情况是， `await`命令后面是一个`thenable `对象 （即定义了`then `方法的对象），那么`await `会将其等同于`Promise `对象。
~~~js
class Sleep {
	constructor(timeout) {
		this.timeout = timeout
	}
	then(resolve, reject) {
		const startTime = Date.now()
		setTiemout(() => {
			resolve(Date.now() - startTime),
			this.timeout
		})
	}
}
(async () => {
	const sleepTime = await new Sleep(1000)
	console.log(sleepTime)
})
// 1000
~~~

上面代码中， `await `命令后面是一个 `Sleep `对象的实例， 这个例子不是`Promise `对象， 但是因为定义了 `then `方法， `await `会将其视为 `Promise `处理。 还演示了如何实现休眠效果， JavaScript 一直没有休眠的方法， 但是借助了await 命令就可以让程序停顿指定的时间。简化后：
~~~js
function sleep(interval) {
	return new Promise(resolve => {
		setTimeout(resolve, interval)
	})
}

// 使用 
async function one2FiveInAsync() {
	for(let i=1; i<=5; i++) {
		console.log(i)
		await sleep(1000)
	}
}
one2FiveInAsync()
~~~

`await `命令后面的`Promise `对象 如果变为`reject `状态， 则 `reject `的参数会被`catch `方法的回调函数接收到。

~~~js
async function f() {
	await Promise.reject('出错了')
}
f().then(v => console.log(v)).catch(e => console.log(e))
~~~
任何一个`await `语句后面的`Promise `对象变为`reject `状态， 那么整个`async` 函数都会中断执行。 如果 希望即使第一个异步操作失败， 也不要中断后面的异步操作， 这时 可以将第一个`await` 放在`try ...catch` 结构里面， 这样不管这个异步操作是否成功， 第二个`await `都会执行
~~~js
async function f() {
	try {
		await Promise.reject('错误')
	} catch(e) {}
	return await Promise.resolve('hello world')
}
f().then(v => console.log(v))
~~~

##### **4. 顶层await**

根据语法规格， `await `命令只能出现在`async `函数内部， 否则都会报错。

借用`await `解决模块异步加载问题。
~~~js
//awaiting.js
let output
async function main() {
	const dynamic = await import(someMission)
	const data = await fetch(url)
	output = someProcess(dynameic.default, data)
}
main()
export { output }
~~~

上面代码中， 模块`awaiting.js `的输出值 `output `， 取决于异步操作， 把异步操作都执行， 变量 `output `才会有值， 否则就会返回 `undefined`， 将上面代码写成立即执行函数形式。
~~~js
// awaiting.js
let output
(async function main() {
	const dynamic = await import(someMission)
	const data = await fetch(url)
	output = someProcess(dynamic.default, data)
})()
export { output }
~~~
加载这个模块的写法
~~~js
// usage.js
import { output } from './awaiting.js'

function outputPlusValue(Value) {
	return output + value
}

console.log(outputPlusValue(100))
setTimeout(() => {
	console.log(outputPlusValue(100), 1000)
})
~~~

`outputPlusValue() `的执行结果， 完全取决于执行的时间。 如果` awaiting.js` 里面的异步操作没执行完， 加载进来的output 的值就是`undefined`

目前解决方法， 就是让原始模块输出一个`Promise `对象， 从这个`Promise `对象判断异步操作有没有结束
~~~js
//  awaiting.js
let output
export default (async function main() {
	const dynamic = await import(someMission)
	const data = await fetch(url)
	output = someProcess(dynamic.default, data)
})()
export { output }
~~~
`awaiting.js `除了输出`output `， 还默认输出一个`Promise `对象 （`async `函数立即执行后， 返回一个`Promise `对象）， 从这个对象判断异步操作是否结束。 由此新写法：

~~~js
// usage.js
import promise, { output } from './awaiting.js'

function outputPlusValue(value) {
	return output + value
}

promise.then(() => {
	console.log(outputPlusValue(100))
	setTimeout(() => console.log(outputPlusValue(100), 1000)
})
~~~

上面代码中， 将 `awaiting.js`  对象的输出， 放在`promise.then()` 里面， 这样就能保证异步操作完成后， 才去读取 `output`。 会发现这种写法比较麻烦， 等于要求模块的使用者蹲守一个额外的使用协议， 按照特殊的方法使用这个模块。 一旦你忘了要用`promise `加载， 只使用正常的加载方法， 依赖这个模块的代码就可能出错， 而且， 如果上面的 `useage.js` 又有对外的输出， 等于这个依赖链的所有模块都要使用 `Promise `加载.

顶层的 `await `命令， 就是为了解决这个问题，它保证只有异步操作完成， 模块才会输出值。

~~~js
// awaiting.js
const dynamic = import(someMission)
const data = fetch(url)
export const output = someProcess((await dynamic).default, await data)
~~~

上面代码中， 两个异步操作在输出的时候， 都加上`await `命令， 只有等到异步操作完成， 这个模块才会输出值。
加载这个模块的写法：

~~~js
// usage.js
import { output } from './awaiting.js'
function outputPlusValue(value) {
	return output * value
}

console.log(outputPlusValue(100))
setTimeout(() => console.log(outputPlusValue(100), 1000)
~~~
上面代码的写法， 与普通的模块加载完全一样。   也就是说， 模块的使用者完全不用关心， 依赖模块的内部有没有异步操作， 正常加载即可。

这时， 模块的加载会等待依赖模块（上例是 `awaiting.js`）的异步操作完成， 才执行后面的代码， 有点像暂停在那里。 所以， 它总是会得到正确的`output`, 不会因为加载时机不同，而得到不一样的值。

一些顶层`await `的使用场景
~~~js
// import() 方法加载
const strings = await  import('/i18n/${navigator.language/')

// 数据库操作
const connection = await dbConnector()

// 依赖回滚
let jQuery
try {
	jQuery = await import('========')
} catch {
	jQuery = await import('====')
}
~~~
注意， 如果加载多个宝海顶层`await `命令的模块， 加载命令是同步执行的。