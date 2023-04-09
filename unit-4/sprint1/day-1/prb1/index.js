// index.js

//  import the crypto module
const  cryptosh  = require('node:crypto');


//  get a commands using process.argv
let operation = process.argv[2];
let inp1 = process.argv[3];
let inp2 = process.argv[4];

// complete the  function



switch (operation) {
  case 'add':
    console.log(Number(inp1) + Number(inp2));
    break;
  case 'sub':
    console.log(Number(inp1) - Number(inp2));
    break;
  case 'mult':
    console.log(Number(inp1) * Number(inp2));
    break;
  case 'divide':
    console.log(Number(inp1) / Number(inp2));
    break;
  case 'sin':
    console.log(Math.sin(inp1));
    break;
  case 'cos':
    console.log(Math.cos(inp1));
    break;
  case 'tan':
    console.log(Math.tan(inp1));
    break;
  case 'random':
    if(inp1==undefined){
      console.log(`Provide length for random number generation.`);
    }
    else{
      console.log(cryptosh.randomBytes(Number(inp1)).toString("binary"));
    }
    break;  
  default:
    console.log("Invalid operation");
}
