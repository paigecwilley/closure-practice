//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.


//invoke the return value by writing outer();
//save that value to variable inner
 var inner = outer();

//Once you do that, invoke inner.

  inner();



//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

 var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};



//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
  var count = makeCounter();
  count() // 1
  count() // 2
  count() // 3
  count() // 4


function makeCounter(){
  var c = 0;  
    return function(){
        return ++c;
    }
    
}


//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

function first(func){
  var run = true;  
  return function second(){ 
    if (run === true) {
        func();
        run = false;
    }
  }
}

var runner = first(function(){
  console.log('blue');
});

function first(func, times){
  var counter = 0;  
  return function second(){ 
    if (counter < times) {
        func();
        counter++; 
    }
    else if (counter === times) {
        console.log('stahp');
        counter++;
    }
    else if (counter > times) {
        return;
    }
  }
}


var runner = first(function(){
  console.log('blue');
}, 4);

runner();
runner();
runner();
runner();
runner();
runner();
runner();
runner();
runner();
