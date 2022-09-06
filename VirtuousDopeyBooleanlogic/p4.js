// Problem 4: Given stored username and password and input username and password, Print if the user can login or not.

let stored_username = "riyashrivastava";
let stored_password = "1234";

let username = "riyashrivastava";
let password = "1235";

if ( stored_username===username &&  stored_password===password){
console.log("login successful");
}else{
  console.log("wrong credential");
}