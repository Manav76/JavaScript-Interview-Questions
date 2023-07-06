//Return true if you can get a sum equal to the max element of array 
//by any possible combination
function ArrayAdditon(arr){
//sort the array and pop the max element
var target = arr.sort(function(a,b){return a-b}).pop();
return isContains(arr,target);
function isContains(arr,target){
    //if array is empty check target is 0
    if(arr.length===0){
        return target ===0;
    }
    //take the first element as head
    var head = arr[0];
    var tail = arr.slice(1);
    //first option is saying to take the first element in the count of sum and the other is saying to skip
    return isContains(tail,target-head) || isContains(tail,target);
}
}
console.log(ArrayAdditon(readLine()));