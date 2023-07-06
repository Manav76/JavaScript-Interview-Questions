//Return if a string can be scrambled to another string
function StringScramble(str1, str2){
for(let i=0;i<str2.length;i++){
    let char = str2[i];
    let index = str1.indexOf(char);
    if(index===-1){
        return false;
    }
    else{
        //removing that character from the string
        str1 = str1.substring(0,index)+str1.substring(index+1);
    }
}
return true;
}
console.log(StringScramble(readLine()));