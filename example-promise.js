function addPromise(a,b) {
  return new Promise(function(resolve, reject) {

    if(typeof a === 'number' && typeof b === 'number') {
      resolve(a + b);
    }
    else {
      reject("Must have 2 numbers");
    }
  });
}

addPromise(1,2).then(function(sum){
  console.log("success", sum);
},
function(err){
  console.log("error", err);
});

addPromise("string",2).then(function(sum){
  console.log("success", sum);
},
function(err){
  console.log("error", err);
});
