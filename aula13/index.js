let umaString = "Um texto";
console.log(`indexOf: ${umaString.indexOf("texto", 2)}`);

console.log(`indexOf: ${umaString.lastIndexOf("e", 3)}`);

console.log(`match: ${umaString.match(/[a-z]/g)}`);

console.log(`search: ${umaString.search(/x/)}`);

console.log(`replace: ${umaString.replace(/t/g, "#")}`);

umaString = "O rato roeu a roupa do rei de roma.";

console.log(`slice: ${umaString.slice(2, 6)} | ${umaString.slice(-5, -1)}` );

console.log(`split: ${umaString.split(" ")} | ${umaString.split("r", 3)}` );

umaString = "o rato roeu a roupa do rei de roma.";

console.log(`toUpperCase: ${umaString.toUpperCase()}`);

umaString = "O RATO ROEU A ROUPA DO REI DE ROMA.";

console.log(`toLowerCase: ${umaString.toLowerCase()}`);

console.log(`length: ${umaString.length}`);