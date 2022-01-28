/**
 * 算法：爬楼梯
 * 参考：https://juejin.cn/post/6861785535543771149
 */

const climbStairs = function(n){
    if(n === 1 || n ===2){
        return n;
    }
    return climbStairs(n-1) + climbStairs(n-2);
};

const climbStairsNew = function(n){
    if(n === 1 || n === 2){
        return n;
    }
    let pre = 2; // 前一个的值
    let beforePre = 1; // 前一个的前一个的值
    let temp = null; //中间变量
    for(let i = 3; i <= n; i ++){
        temp = pre;
        pre = pre + beforePre;
        beforePre = temp;
    }
    return pre;
};

/**

n = 1: case = 1
n = 2: case = 2
n = 3: case = (1+2) = 3
n = 4: case = (2+3) = 5
n = 5: case = (3+5) = 8
n = 6: case = (5+8) = 13

tmp8 = pre8 上一次的累加结果先存下来
pre13 = beforePre5 + pre8 本次累加结果
beforePre8 = tmp8 把上一次的累加结果重新赋值给beforePre

 */

