function addByX(x) {
	
    const add = (y) => {
      return x + y
    }
    return add
  }
  
const addByTwo = addByX(2);

function once(func) {
    
    let value = undefined

    let innerValue = (num) => {
        if (value === undefined) {
            value = func(num)
        }
        return value
    }

    return innerValue
  }
  
  var onceFunc = once(addByTwo);
  
  // UNCOMMENT THESE TO TEST YOUR WORK!
  console.log(onceFunc(4));  //should log 6
  console.log(onceFunc(10)); // should log 6
  console.log(onceFunc(9001)); // should log 6
