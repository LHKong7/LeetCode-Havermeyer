const getSecret = (secret) => {
    return {
      get: () => secret
    };
};

// const obj = getSecret(1);
// console.log(obj.get());

// const secret = ({msg = 'ES6 rocks!'} = {}) => () => msg; 

// Application:
const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  }
}

const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
const val = add10(5);
console.log('val after add10: ', val);
