const promise = new Promise((resolve, reject) => {
  let numbers = [];
  for (let index = 0; index < 10; index += 1){
   numbers[index] = Math.pow(Math.random() * 50,2);
  }
  const sum = numbers.reduce((acc,value) => acc + value);
  if (sum < 8000) {
   resolve(sum);
  } else {
   reject();
  }
});

promise.then(sum => [2, 3, 5, 10].map(number => sum / number))
.then(array => array.reduce((number, acc) => number + acc, 0))
.catch(() => console.log('É mais de oito mil! Essa promise deve estar quebrada!'));