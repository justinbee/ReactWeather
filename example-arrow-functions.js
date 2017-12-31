

function addFunct(a,b) {
  return a + b;
}

var addArrow = (a,b) => {
  return a + b;
};

var addArrowSimple = (a,b) => a + b;

console.log(addFunct(1,1));
console.log(addArrow(1,2));
console.log(addArrowSimple(2,2));
