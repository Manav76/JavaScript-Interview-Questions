
function RunLength(str){
let result = " ";
let counter = 1;
for(let i=0; i< str.length;i++){
    if(str[i]===str[i+1]){
        count++;
    }
    else{
        result = count + str[i];
        count = 1;
    }
}

}
console.log(RunLength(readLine()));