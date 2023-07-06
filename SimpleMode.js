//numbers which appear with the max count if two then print the one which appears first
function SimpleMode(arr){
    const count = {};
    const firstOccurrence = {};
    let maxCount =0;
    let ans =-1;
   for(let i=0;i<arr.length;i++){
    const num = arr[i];
    if(num in count){
        count[num]++;
    }
    else{
        count[num]  = 1;
        firstOccurrence[num] =1;
    }
    if(count[num]>maxCount || count[num]==maxCount && firstOccurrence[num]<firstOccurrence[ans]){
        maxCount =  count[num];
        ans = num;
    }
   }
  return (maxCount > 1) ? ans : 1;
}