//search a string calculate the sum of all the numbers and divide it by the number of letters in the string 
function NumberSearch(str){
var total =0;
var letters =0;
for(let i=0;i<str.length;i++){
    var char = str[i];
    if(!isNaN(char) && char != " "){
        total += parseInt(char);
    }
    else if(char != " " && isNaN(char)){
      letters++;
    }
}
var avg = total / letters;
return Math.round(avg);
}
console.log(NumberSearch(readLine()));