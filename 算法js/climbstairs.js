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

