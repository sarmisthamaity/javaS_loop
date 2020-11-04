let n=require("readline-sync");
let num=n.question("enter number:");
let numb=num;
let palin="";
for (var i=num.length-1;i>=0;i--) {
    palin=palin+num[i];
}
if (numb===palin) {
    console.log("its a palindrome number")
}
else {
    console.log("its not a palindrome number")
}


