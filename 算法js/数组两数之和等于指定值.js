function(arr, num){
    const len = arr.length;
    let left = 0, right = len;
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