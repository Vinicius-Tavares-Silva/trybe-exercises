const promise = new Promise((resolve, reject) => {
  let numbers = [];
  for (let index = 0; index < 10; index += 1){
   numbers[index] = Math.pow(Math.random() * 50,2);
  }
  const sum = numbers.reduce((acc,value) => acc + value);
  if (sum < 8000) {
   resolve();
  } else {
   reject();
  }
});

promise.then(() => console.log('Promise resolvida'))
.catch(() => console.log('Promise rejeitada'));