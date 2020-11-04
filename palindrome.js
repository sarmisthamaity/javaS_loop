var n=require("readline-sync");
var name=n.question("enter name: ")
var store=name;
var string=""
for (let i=name.length-1;i>=0;i--) {
    string=string+name[i]
}
if (store===string) {
    console.log("its palindrome string")
}
else {
    console.log("its not string")
}
