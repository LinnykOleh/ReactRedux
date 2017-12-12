
let staticLanguage = ['C', 'C++', 'Java'];

let dynamicLanguage = ['JavaScript', 'PHP', 'Ruby'];

let language = [...staticLanguage, 'C#', ...dynamicLanguage, 'Python'];

console.log(language); // ["C", "C++", "Java", "C#", "JavaScript", "PHP", "Ruby", "Python"]

console.log('******************************');

function add(x, y, z) {
  console.log(x + y + z);
}

let numbers = [1, 2, 3];

add(...numbers); //6


