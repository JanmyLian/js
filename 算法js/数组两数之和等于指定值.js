function getSum(arr, num){
    if(Array.isArray(arr)){
        return false;
    }
    const len = arr.length;
    let left = 0, right = len - 1;
    for(let i = 0; i <= len; i++){
        if((arr[left] + arr[right]) > num){
            right--;
        }else if((arr[left] + arr[right]) < num){
            left++;
        }else{
            left++;
            right--;
        }
    }
}