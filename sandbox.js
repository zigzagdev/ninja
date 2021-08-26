var names = ['luigi', 'mario', 'peach'];
names.push('toad');
var numbers = [10, 20, 40];
numbers.push(66);
var mixed = ['ken', 3, 'test', 6];
mixed.push('ronaldo');
mixed[0] = 4;
// union types
var ronaldo = [];
ronaldo.push('fuck');
ronaldo.push(99);
ronaldo.push(false);
console.log(ronaldo);
var france;
france = '123';
france = 123;
var francais;
francais = { name: 'messi', age: 35 };
// Typescript のanyの危険性(型関係なくanyを入れるだけでなんでもはいってしまう)
var united;
united = { name: 25, age: 'city' };
console.log(united);
