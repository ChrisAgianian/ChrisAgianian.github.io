import React from 'react';


const date = new Date();
const currYear = date.getFullYear();
console.log(currYear);

let birthYear = prompt('Enter your Birth Year: ');
let message;
let style;

if(Number(birthYear)<currYear-16){
  message = 'Congrats! You can now apply for a license'
  style={backgroundColor: "green", color:"white"};
  
}
else{
  message= 'Sorry, come back when you are 16 or older'
  style={backgroundColor: "red", color:"white"};
}

function Message(){
  return <p>{message}</p>
}

export { message, style };
export default Message;