// *****exercice 1*****
/*
Using a for loop THEN a while loop
 Write a JavaScript function that will iterate from 0 to n. For each iteration,
 it will check if the current number is odd or even, and display a message on the screen.
*/
function iterateAndLog(n) {

    for(var i = 0 ; i<n ; i++)
     if(i%2===0){

    console.log(i,"is even")
         
     }
            
    else{

    console.log(i,"is odd")
         
     }
}

// Now with while loop

function iterateAndLog(n) {

    var i = 0
    
  while(i<n){ 

        i++
        
  if(i%2===0){

    console.log(i,"is even")
         
     }
            
  else{

    console.log(i,"is odd")
         
     }
    
   
  }
}

//*****exercice 2*****
/*
 Using a for loop THEN a while loop THEN recursion
 Write a JavaScript function that will iterate from n to 0. For each iteration,
 it will check if the current number is odd or even, and display a message to the screen.
*/
function iterateAndLog(n) {

    var i = n
    
  while(i>0){ 

        i--
        
  if(i%2===0){

    console.log(i,"is even")
         
     }
            
  else{

    console.log(i,"is odd")
         
     }
    
   
  }
}

//for loop

function iterateAndLog(n) {

    for(var i = n ; i>0 ; i--)
        if(i%2===0){

            console.log(i,"is even")
 }
    else{

        console.log(i,"is odd")
    
}

  }

  // With Recursion

function reverseIterateAndLogWithFor(n){

    if(n<0){
 
        return
    }
     
     if(n%2===0){
     console.log(n," is even")
         
     }
         
     else {
         
      console.log(n," is odd")
  }
     reverseIterateAndLogWithFor(n-1)
     
 }


// *****exercice 3*****
/*
Using a for loop THEN a while loop
 Write a function that:
 Loop through the numbers 1 to n
 If the number is divisible by 3, print "Julia"
 If the number is divisible by 5, print "James"
 If the number is divisible by 3 and 5, print "JuliaJames"
 If the number is not divisible by 3 or 5, print the number
*/

function weirdDivisionWithFor(n) {

    for(var i = 1 ; i<=n ; i++){
      if (i%3 === 0 && i%5 === 0) {
      
        console.log("JuliaJames");
      }
          
      else if (i%3 === 0) {
          
        console.log("Julia")
      }
          
      else if (i%5 === 0) {
          
        console.log("James");
      } 
      
      else {
          
        console.log(i);
      }

    }

    }

// With Recursion

function weirdDivisionWithFor(n) {
  if (n === 1) {
      
    return
  }

  if (n%3 === 0 && n%5 === 0) {
      
    console.log("JuliaJames");
  }
      
  else if (n%3 === 0) {
      
    console.log("Julia")
  }
      
  else if (n%5 === 0) {
      
    console.log("James");
  } 
  
  else {
      
    console.log(n);
  }

  weirdDivisionWithFor(n - 1);
}


// *****exercice 4*****
/*
Using a for loop THEN a while loop THEN Recursively
 Write a function called laugh() that takes one parameter,
 num that represents the number of "ha"s to return.
 laugh(6); => "hahahahahaha" 
*/

function laugh(n) {

  var StoreHa = ""

  for(var i = 0 ; i<n ; i++){
      
      StoreHa = StoreHa + "ha"
      
  }
  
  return StoreHa
  
}

// With while loop

function laugh(n){

  var i = 0
  var StoreHa = ""
      
      while(i<n){
  
          StoreHa = StoreHa+"ha"
          
          i++
      }
      return StoreHa
  } 

//With Recursion

function laugh(n) {
  if(n===0){

      return ""
  }

  else{

      return "ha"+laugh(n-1)
      
      
  }
  
}

// *****exercice 5*****
/*
Using a for loop THEN a while loop
 Create a function that calculates the sum of a number as follows:
 factorial(3); => 3+2+1 = 6
 factorial(5); => 5+4+3+2+1 = 15
*/
function sumWithFor(n){

  var sumResult = 0
          
      for(var i = n ; i>0 ; i--){
  
          sumResult = sumResult + i
          console.log(sumResult,i)
  
          }
  return sumResult
  }

  // With while loop

  function sumWithWhile(n){

    var i = n
    var sumResult = 0

    while(i>0) {

        sumResult = sumResult + i
        i--
    }
    
    return sumResult
}

// *****exercice 6*****
/*
 Using recursion
 Create a function that calculates the factorial of a number
 factorial(3); => 3*2*1 = 6
 factorial(5); => 5*4*3*2*1 = 120
*/
function factorialRecursively(n){

  if(n===0){
     
 return 1
     
 }
     
   else{
 
     return  n *factorialRecursively(n-1)
 }
     
         }

 //*****exercice 7*****
 /*
 Using a for loop THEN a while loop
 Write a JavaScript program to get the integers in range (x, y)
 and store then in an array
 Example:
 range(3,9); => [3, 4, 5, 6, 7, 8]
 */
 function rangeFor(x,y){
  var array = []
      for(var i = x ; i<y ; i++){
  
  
          array.push(i)
      }
  return array
          
  }

  // While loop

function rangeFor(x,y){
    
    var array = []
    var i = x
        
    while(i<y){
    
        array.push(i)
        i++
    }
    
    return array
            
    }

    //*****exercice8*****
    /*
    Using a for loop THEN a while loop THEN recursion
    Write a function that takes a string and returns the same string reversed
    reverse('abc'); => 'cba'
    reverse('erf4') => '4fre'
    */
    function reveresStringWithFor(string){

      var StoreEachChar = ""
      
          for(var i = string.length-1 ; i>=0 ; i--){
      
      StoreEachChar = StoreEachChar + string[i]
      
              
          }
          return StoreEachChar
      
          
      }

      // With while loop

      function reveresStringWithWhile(string){

        var StoreEachChar = ""
        var i = string.length-1    
        
          while(i>=0){
        
          StoreEachChar = StoreEachChar + string[i]
           i--
        
        }
            return StoreEachChar
        
       }


        undefined
        re

// With Recursion 




//*****exercice 9*****
/*
Using a for loop OR a while loop
 You are given an integer. Return the sum of its digits.
 Example:
 addDigits(29); => 11
 addDigits(90); => 9
 addDigits(1231635132132); => 33
*/

function addDigits(num){

  var numToStr = ""
  var sum = 0
  numToStr = num.toString()

  for(var i = 0 ; i<numToStr.length ; i++){

      sum = sum + numToStr[i]

  }

  return sum
}

// Other Exercices********

/* exercice1

function sumOfN(n){

    var sum = 0
    
    for(var i = n ; i>=0 ; i--){

        sum = sum + i

        
    }
    return sum
}

*/

/* exercice 2
function factorialOfN(n) {

    var mult = 1

    for(var i = 1 ; i<=n ; i++){
       

        mult = mult * i
        console.log(mult)
         

    }
    return mult
    
}
*/

/* exercice3
function repeatString(string, num) {

    var str = ""

    for(var i = 1 ; i<=num ; i++){
       
    str = str + string
         console.log(str,i)
        
    }
    return str
}

*/


/* exercice 4
function countMinMax(min, max) {
   var res = 0

    for(var i = max ; i>=min ; i--){
        
     res = max-min
        
    }
    return res
}  

*/

/* exerice 5
function sumMinToMax(min, max) {
    var sum = 0
 
     for(var i = min ; i<max ; i++){
         
          sum = sum+i
         
         
         
     }
     return sum
 }  
 */


 
/*exercice 6 

var StoreCh = ""
var count = 0
function countCharAtIndex(string1, index, string2) {

    if(index>=0 && index < string1.length){

     StoreCh = string1.charAt(index)

        for(var i = 0 ; i < string2.length ; i++){

            if(StoreCh===string2.charAt(i)){

              count=count + 1
   }   
}
 return count
         }
        
    else{

console.log("wrong")
    }

}


/* exercice 7

var store = ""
function reverseString(string) {

    for(var i = string.length ; i >= 0 ; i--){


        store = store + string.charAt(i)
    }

    return store
}  

*/

/* exercice 8
var count = 0
function getIndexOf(string,char){

    for(var i = 0 ; i<string.length ; i++){

     if(char===string[i]){

        return i
     }
        
    }

    
}

*/

/* exercice9
var res = []
function arrayFor(array){

    for(var i = 0 ; i<array.length ; i++){

        console.log(array[i])

        
    }
    return
    
    
    
}

/*






















    

