const { uppercase} = require('./exercises');

test('uppercase function', (done) => {
 uppercase('vini', (result) => {
  expect(uppercase(result).toBe('VINI'));
  done();
 })
});