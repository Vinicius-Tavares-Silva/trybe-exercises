function randomFunction() {
 return Math.random();
}

const randomNumber = () => Math.ceil(randomFunction() * 100);


test('Teste da função randomNumber', () => {
  randomFunction = jest.fn().mockReturnValue(0.1);
  expect(randomNumber()).toBe(10);
});
