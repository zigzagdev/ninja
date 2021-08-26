let names = ['luigi','mario','peach'];
names.push('toad');

let numbers = [10,20,40];
numbers.push(66);

let mixed = ['ken',3,'test',6];
mixed.push('ronaldo');

mixed[0]= 4;


// union types

let ronaldo: (string|number|boolean)[] = [];
ronaldo.push ('fuck');
ronaldo.push (99);
ronaldo.push(false);

console.log(ronaldo);

let france: string|number;

france = '123'
france = 123;

let francais: object;
francais = {name: 'messi',age:35};

// Typescript のanyの危険性(型関係なくanyを入れるだけでなんでもはいってしまう)

let united: {name: any,age: any};      //refer images/any_any.png
united = {name:25, age:'city'};

console.log(united);