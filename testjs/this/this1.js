/**
 * 《你不知道的Js上卷》
 *  关于this
 */

function foo1(num){
    // console.log(num)
    this.count++
}
foo1.count = 0
for(var i=0; i<10; i++){
    if(i>5){
        foo1(i)
    }
}
// 6，7，8，9
// console.log(foo1.count)
// 0 这里为什么输出0，this指向究竟是什么

// 使用词法作用域规避this问题
function foo2(num){
    // console.log(num)
    data.count++
}
var data = {
    count: 0
}
for(var i=0; i<10; i++){
    if(i>5){
        foo2(i)
    }
}
// console.log(data.count)

// 使用foo标识符替代this引用函数对象，也躲避了this指向问题
function foo3(num){
    // console.log(num)
    foo3.count++
}
foo3.count = 0
for(var i=0; i<10; i++){
    if(i>5){
        foo3(i)
    }
}
// 6，7，8，9
// console.log(foo3.count)

// 使用call确保this指向函数对象
function foo4(num){
    console.log(num)
    foo4.count++
}
foo4.count = 0
for(var i=0; i<10; i++){
    if(i>5){
        foo4.call(foo4, i)
    }
}
// 6，7，8，9
console.log(foo4.count)

/**
 * this既不指向函数自身也不指向函数的词法作用域
 * this实际上是在函数被调用时发生的绑定，它的指向取决于函数在哪里被调用
 * 
 * 当一个函数被调用时，会创建一个活动记录（有时候也称为执行上下文）。这个记录会包
含函数在哪里被调用（调用栈）、函数的调用方法、传入的参数等信息。this 就是记录的
其中一个属性，会在函数执行的过程中用到。
 */