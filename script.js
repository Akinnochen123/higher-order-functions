
//number1
function countdown(num){
    var stopTimeinterval = setInterval(() => {
    num == 0 ? console.log("DONE!") : console.log(num);   
      --num;
      if(num < 0){
        clearInterval(stopTimeinterval);
    };    
    },1000);
}


//number2

function randomGame(){
    var count = 0;
    var stopTimeinterval = setInterval(()=>{
        count++;
        if(Math.random() > .75){
            clearInterval(stopTimeinterval);
            console.log(count);
        }
    },1000);
}

//number3
function isEven(num){
    if(num % 2 == 0 || num <= 1){
   return true;
    }else{
   return false;
    }
}



//number4
function isOdd(num){
    if(num % 2 !== 0){
   return true;
    }else{
   return false;
    }
}

//number5
function isPrime(num){
    for(var i=2; i<num; i++){
     if(num % i == 0){
       return false;
     } else{
        return true;
     }
    } 
 }

 //number6
 function numberFact(num, callback){
    return callback(num);
  }

  //number7

  function find(arr, callback){
      for(let i = 0; i < arr.length; i+=1){
        if(callback(arr[i])){
            return arr[i];
        }
      }
  }
  
  
  // number8
  
  function findIndex(arr, callback){
      for(var i = 0; i < arr.length; i+=1){
          if(callback(arr[i])){
              return arr.indexOf(arr[i]);
          }
      }
  }
  
  
  //number9
  
  function specialMultiply(num1, num2){
      if(arguments.length == 2){
          return num1 * num2;
      }
      return function multiply(b){
          return num1 * num2;
      }
  }

