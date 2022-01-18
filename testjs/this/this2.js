/**
 * 《你不知道的Js上卷》
 *  this全面解析
 */

// 调用位置
// function baz(){
//     console.log("baz")
//     bar()
// }
// function bar(){
//     console.log("bar")
//     foo()
// }
// function foo(){
//     console.log("foo")
// }
// baz()

// 默认绑定(如果是use strict严格模式this会绑定到undefined)
function foo1(){
    console.log(this.a)
}
var obj = {
    a: 2
}
foo1.call(obj)

// ...验证过程极其复杂

/**
 * 小结
1. 由new 调用？绑定到新创建的对象。
2. 由call 或者apply（或者bind）调用？绑定到指定的对象。
3. 由上下文对象调用？绑定到那个上下文对象。
4. 默认：在严格模式下绑定到undefined，否则绑定到全局对象。
 */