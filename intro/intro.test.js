const { sum, Person, shoppingList } = require('./intro');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});

test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test('adding positive numbers is not zero', () => {
  for (let i = 1; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      expect(i + j).not.toBe(0);
    }
  }
});

test('Instance of Person should have greet method with its respective name and age', () => {
  const person = new Person('Dane', 24);
  expect(person.greet()).toBe('Hello, my name is Dane and I am 24 years old');
});

test('the shopping list has beer on it', () => {
  expect(shoppingList).toContain('beer');
});
